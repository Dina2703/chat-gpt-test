"use client";

import { collection } from "firebase/firestore";
import NewChat from "./NewChat";
import { useSession, signOut } from "next-auth/react";
import { db } from "@/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import ChatRow from "./ChatRow";

function SideBar() {
  //get session(logged in user) data
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session && collection(db, "users", session.user?.email!, "chats")
  );
  console.log(chats);

  return (
    <div className="flex  flex-col p-2 h-screen">
      <div className="flex-1">
        <div className="">
          {/* New Chat */}
          <NewChat />
          <div>{/* ModelSelection */}</div>
          {/* Chat through the ChatRow */}
          {chats?.docs.map((doc) => (
            <ChatRow key={doc.id} id={doc.id} />
          ))}
        </div>
      </div>

      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          alt="Profile pic"
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
        />
      )}
    </div>
  );
}

export default SideBar;
