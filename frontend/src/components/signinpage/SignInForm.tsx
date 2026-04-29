"use client";
import { signIn, signUp, useSession } from "@/lib/auth-client";
import { surveyCount } from "@/lib/server/server.action";
import { Eye, EyeClosed } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { data: session } = useSession();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFormLoading(true);

    const survey = await surveyCount(session?.user.id as string);
    const url = survey == 0 ? "/survey" : "/projects";

    if (password.length < 8) {
      toast.error("Password should be at least 8 characters");
      setIsFormLoading(false);
      return;
    }

    const { data, error } = await signIn.email(
      {
        email,
        password,
        callbackURL: url,
      },
      {
        onSuccess: () => {
          toast.success("Successfully signed in!");
          router.push(url);
          setIsFormLoading(false);
        },
        onError: (error) => {
          toast.error("Something went wrong!");
          console.log(error.response);
          setIsFormLoading(false);
        },
      },
    );
  };
  return (
    <form className="space-y-4" onSubmit={handleSignUp}>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          required
          id="email"
          name="email"
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="johndoe@gmail.com"
          className="w-full block bg-zinc-200 dark:bg-zinc-900 py-2 px-4 rounded-lg focus:outline-none focus:border-none"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium">
          Password
        </label>
        <div className="bg-zinc-200 dark:bg-zinc-900 py-2 px-4 rounded-lg focus:outline-none focus:border-none flex items-center">
          <input
            required
            name="password"
            min={8}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="password"
            placeholder="your_p@ssword..."
            type={showPassword ? "text" : "password"}
            className="flex-1 focus:outline-none focus:border-none"
          />
          {showPassword ? (
            <Eye
              className=""
              size={18}
              strokeWidth={1.3}
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <EyeClosed
              className=""
              size={18}
              strokeWidth={1.3}
              onClick={() => setShowPassword(true)}
            />
          )}
        </div>
      </div>
      <button
        disabled={isFormLoading}
        type="submit"
        className={`py-3 w-full text-center text-sm font-medium rounded-lg bg-linear-to-b from-black to-zinc-900 dark:from-white dark:to-zinc-500 text-white dark:text-black ${isFormLoading ? "opacity-70 cursor-not-allowed" : "cursor-pointer xopacity-100"} `}
      >
        {isFormLoading ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
};

export default SignInForm;
