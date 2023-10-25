"use client";
import { db } from "@/firebase";
import { serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { GoPaperAirplane } from "react-icons/go";

type Props = {
  chatId: string;
};
function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState("");

  const { data: session } = useSession();
  console.log(prompt);

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
      db,
      "users",
      session?.user?.email!,
      "chats",
      chatId,
      "messages"
    ),
      message;
  };

  //Toast notification

  //fetch data from firebase and display it

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
