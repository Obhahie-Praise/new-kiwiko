"use client";
import { signOut, useSession } from "@/lib/auth-client";
import { ChevronsUpDown, CreditCard, Loader2, LogOut, Settings, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const UserProfileButton = () => {
  const { data: session, isPending } = useSession();
  const userName = session?.user.name;
  const userEmail = session?.user.email;
  const userImage = session?.user.image;
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (isPending) {
    return (
      <div className="flex items-center justify-center">
        <Loader2 className="animate-spin h-5 w-5" />
      </div>
    );
  }

  if (!session?.user) {
    return (
      <Link
        className="text-sm py-1.5 px-3 font-medium bg-black text-white dark:bg-white rounded-md dark:text-black hover:opacity-80 transition"
        href={"/sign-in"}
      >
        Login
      </Link>
    );
  }

  return (
    <div ref={dropdownRef} className={`flex space-x-1.5 w-fit items-center cursor-pointer py-1 px-2 ${open ? "bg-zinc-100 dark:bg-zinc-800" : "hover:bg-zinc-100 dark:hover:bg-zinc-800"}  rounded-md transition relative`} onClick={() => setOpen(!open)}>
      <div className="h-9 w-9 bg-black dark:bg-white dark:text-black rounded-full flex items-center justify-center text-white">
        {userImage ? (
          <Image
            src={userImage}
            alt={userName as string}
            className="h-full w-full rounded-full object-cover "
          />
        ) : (
          <User2 size={18} />
        )}
      </div>
      <div className="">
        <p className="leading-none text-sm font-semibold tracking-wide">{userName}</p>
        <p className="text-xs text-zinc-400 dark:text-zinc-300 leading-none tracking-tighter">{userEmail}</p>
      </div>
      <div className="">
        <ChevronsUpDown size={16} />
      </div>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-md shadow-lg">
          <div className="px-1.5 py-2 space-y-0.5">
            <Link href={"/subscriptions"} className="flex items-center gap-1.5 px-2 py-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md relative">
              <CreditCard size={14} strokeWidth={1.4} className="text-zinc-700 dark:text-zinc-200" />
              <span className="text-xs font-medium">Subscriptions</span>
              <p className="absolute top-1/2 -translate-y-1/2 right-3 text-[10px] font-medium bg-lime-200 dark:bg-lime-500/20 text-lime-900 dark:text-lime-400 px-1 rounded-sm">FREE</p>
            </Link>
            <Link href={"/settings"} className="flex items-center gap-1.5 px-2 py-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md">
              <Settings size={14} strokeWidth={1.4} className="text-zinc-700 dark:text-zinc-200" />
              <span className="text-xs font-medium">Settings</span>
            </Link>
            <button onClick={() => signOut()} className="flex items-center w-full cursor-pointer gap-1.5 px-2 py-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md">
              <LogOut size={14} strokeWidth={1.4} className="text-red-500" />
              <span className="text-xs font-medium text-red-500">Sign out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfileButton;
