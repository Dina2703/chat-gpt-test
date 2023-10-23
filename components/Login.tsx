"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="bg-[#11A37F] h-screen flex space-y-4 flex-col items-center justify-center text-center">
      <Image
        src="https://www.edigitalagency.com.au/wp-content/uploads/chatgpt-logo-white-green-background-png.png"
        width={250}
        height={250}
        alt="logo"
      />
      <button
        onClick={() => signIn("google")}
        className="text-white font-bold text-3xl animate-pulse  px-4 py-2 border-[.5px] rounded-sm"
      >
        Sign In to use ChatGPT
      </button>
    </div>
  );
}

export default Login;
