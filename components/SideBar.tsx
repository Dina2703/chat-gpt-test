"use client";

import NewChat from "./NewChat";
import { useSession, signOut } from "next-auth/react";

function SideBar() {
  const { data: session } = useSession();
  return (
    <div className="flex  flex-col p-2 h-screen">
      <div className="flex-1">
        <div className="">
          {/* New Chat */}
          <NewChat />
          <div>{/* ModelSelection */}</div>
          {/* Chat through the ChatRow */}
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
