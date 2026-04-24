"use client";
import { signUp } from "@/lib/auth-client";
import { Eye, EyeClosed } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFormLoading(true);

    const {data, error} = await signUp.email({
      name, email, password, callbackURL: "/dashboard",
    }, {
      onSuccess: () => {
        toast.success("Account created successfully!")
        setIsFormLoading(false);
      },
      onError: (error) => {
        console.log(error)
        toast.error("Something went wrong!")
        setIsFormLoading(false);
      }
    })
  };
  return (
    <form className="space-y-4" onSubmit={handleSignUp}>
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          Full Name
        </label>
        <input
          required
          id="name"
          name="name"
          onChange={(e) => {setName(e.target.value)}}
          type="text"
          placeholder="John Doe"
          className="w-full block bg-zinc-200 dark:bg-zinc-900 py-2 px-4 rounded-lg focus:outline-none focus:border-none"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          required
          id="email"
          name="email"
          type="text"
          onChange={(e) => {setEmail(e.target.value)}}
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
            onChange={(e) => {setPassword(e.target.value)}}
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
        type="submit"
        className={`cursor-pointer py-3 w-full text-center text-sm font-medium rounded-lg bg-linear-to-b from-black to-zinc-900 dark:from-white dark:to-zinc-500 text-white dark:text-black`}
      >
        {isFormLoading ? "Creating..." : "Create Account"}
      </button>
    </form>
  );
};

export default SignUpForm;
