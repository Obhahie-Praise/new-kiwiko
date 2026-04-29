"use client";
import { Spotlight } from "@/components/ui/spotlight";
import { useSession } from "@/lib/auth-client";
import { submitSurvey } from "@/lib/server/server.action";
import { Coins, User2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const SurveyPage = () => {
  const { data: session } = useSession();
  const userId = session?.user.id as string;
  const router = useRouter();
  const [role, setRole] = useState<"investor" | "founder" | "">("");
  const [consent, setConsent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!session?.user.id) {
      toast.error("You are not logged in");
      setIsLoading(false);
      setTimeout(() => {
        router.push("/sign-in");
      }, 1000);
      return;
    }
    if (role === "") {
      toast.error("Please select a role");
      setIsLoading(false);
      return;
    }
    if (consent === false) {
      toast.error("Please accept the terms of use");
      setIsLoading(false);
      return;
    }
    const result = await submitSurvey({ userId, role, consent });
    if (result?.success) {
      // Navigate to dashboard or home
      window.location.href = "/projects";
    }
    if (!result?.success) {
      setIsLoading(false);
      toast.message("Something went wrong!")
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <Spotlight />
      <form onSubmit={handleSubmit} className="max-w-lg ">
        <div className="">
          <h2 className="text-xl font-medium pb-4 flex items-center justify-between">
            <p className="">Get started.</p>
            <div className="flex items-center space-x-2">
              {" "}
              <div className="h-px w-15 bg-zinc-600 dark:bg-neutral-400" />
              <p className="serif text-sm font-medium text-zinc-600 dark:text-neutral-300">
                Are you a/an
              </p>{" "}
            </div>
          </h2>
        </div>
        <div className="">
          <div className="">
            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={() => {
                  setRole("investor");
                }}
                className={` flex flex-col items-start border w-[15rem] px-6 py-3 rounded-lg ${role === "investor" ? "border-black dark:border-white" : "hover:bg-zinc-100 dark:hover:bg-zinc-900/40 transition-colors hover:border-black dark:hover:border-white/40  border-zinc-300 dark:border-zinc-700"}`}
              >
                <div className="flex items-center space-x-2">
                  <Coins size={20} strokeWidth={1.3} />
                  <h4 className="text-lg font-medium">Investor</h4>
                </div>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">
                  I want to invest in startups
                </p>
              </button>
              <button
                type="button"
                onClick={() => {
                  setRole("founder");
                }}
                className={` flex flex-col items-start border w-[15rem] px-6 py-3 rounded-lg ${role === "founder" ? "border-black dark:border-white" : "hover:bg-zinc-100 dark:hover:bg-zinc-900/40 transition-colors hover:border-black dark:hover:border-white/40  border-zinc-300 dark:border-zinc-700"}`}
              >
                <div className="flex items-center space-x-2">
                  <User2 size={20} strokeWidth={1.3} />
                  <h4 className="text-lg font-medium">Founder</h4>
                </div>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">
                  I have a startup idea
                </p>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div
              className="flex items-center space-x-1"
              onClick={() => {
                setConsent(true);
              }}
            >
              <input type="checkbox" id="consent" />
              <label
                htmlFor="consent"
                className="text-xs text-zinc-700 dark:text-zinc-300"
              >
                Accept our
                <Link href={"/"} className=" hover:underline">
                  {" "}
                  term of use
                </Link>
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <button
                type="reset"
                disabled={isLoading}
                onClick={() => {
                  window.location.reload();
                }}
                className={`py-1.5 px-3 text-sm font-medium hover:opacity-80 transition-opacity bg-zinc-200 dark:bg-zinc-900 rounded-md ${isLoading ? "opacity-50 cursor-not-allowed" : ""} `}
              >
                Cancel
              </button>
              <button
                disabled={isLoading}
                type="submit"
                className={`py-1.5 px-3 text-sm font-medium hover:opacity-80 transition-opacity bg-black dark:bg-white rounded-md dark:text-black text-white ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Submitting" : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SurveyPage;
