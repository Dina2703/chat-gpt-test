import React from "react";
import { BiPlus } from "react-icons/bi";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";

function NewChat() {
  const { data: session } = useSession();

  const router = useRouter();

  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        userId: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
    );

    router.push(`/chat/${doc.id}`);
  };

  return (
    <div onClick={createNewChat} className="chatRow border border-gray-700">
      <BiPlus />
      <p>New Chat</p>
    </div>
  );
}

export default NewChat;
