"use client";

import LeftSlides from "@/components/signuppage/LeftSlides";
import SignUpForm from "@/components/signuppage/SignUpForm";
import Link from "next/link";
import { toast } from "sonner";
import { useState } from "react";

const SignUpPage = () => {
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isGithubLoading, setIsGithubLoading] = useState(false);

  return (
    <div className="h-screen">
      <div className="h-full grid grid-cols-2">
        <LeftSlides />
        <div className="h-fit my-auto flex justify-center">
          <div className="w-100 space-y-4">
            <h4 className="text-center text-3xl">
              <p className="">Create an Account</p>
              <p className="text-sm">Already have an account, <Link className="underline" href={"/sign-in"}>sign in</Link></p>
              </h4>
            
            <div className="space-y-3">
              <button 
                disabled={isGoogleLoading || isGithubLoading}
                className="cursor-pointer bg-black dark:bg-white rounded-lg text-sm font-medium hover:opacity-80 transition-opacity py-3 w-full text-white dark:text-black disabled:opacity-50"
              >
                <p className="">{isGoogleLoading ? "Connecting..." : "Continue with Google"}</p>
              </button>
              <button 
                disabled={isGoogleLoading || isGithubLoading}
                className="cursor-pointer bg-zinc-200 dark:bg-zinc-900 rounded-lg text-sm font-medium hover:opacity-80 transition-opacity py-3 w-full text- disabled:opacity-50"
              >
                {isGithubLoading ? "Connecting..." : "Continue with Github"}
              </button>
            </div>
            <div className="h-0.5 w-full bg-zinc-200 dark:bg-zinc-900" />
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
