"use client";
import LeftSlides from "@/components/ui/LeftSlides";
import SignInForm from "@/components/signinpage/SignInForm";
import { signIn, useSession } from "@/lib/auth-client";
import { surveyCount } from "@/lib/server/server.action";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

const SignInPage = () => {
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isGithubLoading, setIsGithubLoading] = useState(false);
  const { data: session } = useSession();

  const socialSignIn = async (provider: "google" | "github") => {
    const survey = await surveyCount(session?.user.id as string);
    const url = survey == 0 ? "/survey" : "/projects";
    try {
      if (provider === "google") {
        setIsGoogleLoading(true);
      } else {
        setIsGithubLoading(true);
      }
      await signIn.social({
        provider,
        callbackURL: url,
      });
    } catch {
      toast.error("Something went wrong!");
    } finally {
      setIsGoogleLoading(false);
      setIsGithubLoading(false);
    }
  };
  return (
    <div className="h-screen">
      <div className="h-full grid grid-cols-2">
        <LeftSlides />
        <div className="h-fit my-auto flex justify-center">
          <div className="w-100 space-y-4">
            <h4 className="text-center text-3xl">
              <p className="">Sign In</p>
              <p className="text-sm">
                Don&apos;t have an account?{" "}
                <Link className="underline" href={"/sign-up"}>
                  Sign up
                </Link>
              </p>
            </h4>

            <div className="space-y-3">
              <button
                onClick={() => socialSignIn("google")}
                disabled={isGoogleLoading || isGithubLoading}
                className="cursor-pointer bg-black dark:bg-white rounded-lg text-sm font-medium hover:opacity-80 transition-opacity py-3 w-full text-white dark:text-black disabled:opacity-50"
              >
                <p className="">
                  {isGoogleLoading ? "Connecting..." : "Continue with Google"}
                </p>
              </button>
              <button
                onClick={() => socialSignIn("github")}
                disabled={isGoogleLoading || isGithubLoading}
                className="cursor-pointer bg-zinc-200 dark:bg-zinc-900 rounded-lg text-sm font-medium hover:opacity-80 transition-opacity py-3 w-full text- disabled:opacity-50"
              >
                {isGithubLoading ? "Connecting..." : "Continue with Github"}
              </button>
            </div>
            <div className="h-0.5 w-full bg-zinc-200 dark:bg-zinc-900" />
            <SignInForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
