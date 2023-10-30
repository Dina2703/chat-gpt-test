"use client";
import { db } from "@/firebase";
import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { GoPaperAirplane } from "react-icons/go";

type Props = {
  chatId: string;
};
function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState("");

  const { data: session } = useSession();

  //TODO: useSWR to get model
  const model = "gpt-3.5-turbo";

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //check if there is any input
    if (!prompt) return;

    const input = prompt.trim();
    setPrompt("");

    //create an object 'message'
    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image ||
          `https://ui-avatars.com/api/name=${session?.user?.name}`,
      },
    };
    //save the 'message' object to the firestore
    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),

      message
    );

    //fetch data from firebase and display it
    //Toast loading notification
    const notification = toast.loading("ChatGPT is thinking");
    await fetch("api/askQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      }),
    }).then(() => {
      //Toast notification
      toast.success("ChatGPT has responded", {
        id: notification,
      });
    });
  };
  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm ">
      <form onSubmit={sendMessage} className="p-5 space-x-5 flex">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your message here ...."
          className="outline-none bg-transparent flex-1"
        />
        <button
          type="submit"
          disabled={!prompt}
          className="bg-[#11A37F] hover:opacity-50  px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <GoPaperAirplane className="h-4 w-4 -rotate-45 to-white font-bold" />
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
