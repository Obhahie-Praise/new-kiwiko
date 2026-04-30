'use client'
import FileDropZone from "@/components/ui/FileDropZone";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";

const Metadata = () => {
    const [imageUrl, setImageUrl] = useState("");
  const revenue = [
    "No revenue yet",
    "$1-10k",
    "$10k-50k",
    "$50k-100k",
    "$100k+",
  ];
  const users = ["No users yet", "1-10", "10-100", "100-1000", "1000+"];
  return (
    <section>
      <h2 className="text-lg flex items-center gap-4 pb-2 px-12">
        <div className="w-10 h-px bg-zinc-600 dark:bg-zinc-400" />
        <p className="text-zinc-800 dark:text-zinc-100">Metadata</p>
      </h2>
      <div className="px-16">
        <div className="space-y-4">
          <div className="">
            <label
              htmlFor=""
              className="block pb-1 text-sm text-zinc-300 font-medium"
            >
              The problem
            </label>
            <textarea
              rows={4}
              placeholder="Explain what problem your project solves..."
              className="text-sm bg-zinc-200 dark:bg-neutral-900 py-2 focus:border-zinc-300 dark:focus:border-zinc-800 px-4 w-full rounded-lg"
            />
          </div>
          <div className="">
            <label
              htmlFor=""
              className="block pb-1 text-sm text-zinc-300 font-medium"
            >
              The solution
            </label>
            <textarea
              rows={4}
              placeholder="Explain how your project solves the problem..."
              className="text-sm bg-zinc-200 dark:bg-neutral-900 py-2 focus:border-zinc-300 dark:focus:border-zinc-800 px-4 w-full rounded-lg"
            />
          </div>
          <div className="">
            <label
              htmlFor=""
              className="block pb-1 text-sm text-zinc-300 font-medium"
            >
              Current revenue
            </label>

            <Select>
              <SelectTrigger className="rounded-lg w-full">
                <SelectValue placeholder="No revenue" />
              </SelectTrigger>
              <SelectContent>
                {revenue.map((item) => (
                  <SelectItem className="rounded-lg" key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="">
            <label
              htmlFor=""
              className="block pb-1 text-sm text-zinc-300 font-medium"
            >
              Current users/clients
            </label>

            <Select>
              <SelectTrigger className="rounded-lg w-full">
                <SelectValue placeholder="No users yet" />
              </SelectTrigger>
              <SelectContent>
                {users.map((item) => (
                  <SelectItem className="rounded-lg" key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="">
            <label
              htmlFor=""
              className="block pb-1 text-sm text-zinc-300 font-medium"
            >
              Pitchdeck
            </label>
            <FileDropZone endpoint="projectPitchdeck" setImageUrl={setImageUrl} className="w-full" fileType="pdf, doc, docx" />
          </div>
          <div className="">
            <label
              htmlFor=""
              className="block pb-1 text-sm text-zinc-300 font-medium"
            >
              Portfolio URL
            </label>
            <div className="relative text-sm bg-zinc-200 dark:bg-neutral-900 py-2 focus:border-zinc-300 dark:focus:border-zinc-800 px-4 w-full rounded-lg flex items-center space-x-1">
                <p className="dark:text-zinc-300 text-sm font-medium text-nowrap">new-kiwiko.vercel.app/</p>
                <input type="text" className="w-full bg-transparent outline-none text-zinc-300" placeholder="desired-project-slug" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metadata;
