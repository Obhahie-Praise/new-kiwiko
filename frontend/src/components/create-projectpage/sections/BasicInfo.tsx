"use client";
import FileDropZone from "@/components/ui/FileDropZone";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";

const BasicInfo = () => {
  const [imageUrl, setImageUrl] = useState("");
  const catergory = ["AI", "Web3", "Blockchain", "Gaming", "Fintech", "Healthtech", "Edtech", "SaaS", "E-commerce", "Other"];
  return (
    <section>
      <h2 className="text-lg flex items-center gap-4 pb-2">
        <div className="w-10 h-px bg-zinc-600 dark:bg-zinc-400" />
        <p className="">Basic Info</p>
      </h2>
      <div className="">
        <div className="">
          <div className="">
            <label htmlFor="">Project name</label>
            <input type="text" placeholder="Open AI" />
          </div>
          <div className="">
            <label htmlFor="">Project description</label>
            <textarea placeholder="Insert description here..." />
          </div>
          <div className="">
            <label htmlFor="">Project tagline</label>
            <input type="text" placeholder="Insert description here..." />
          </div>
          <div className="">
            <label htmlFor="">Project stage</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a stage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="idea">Idea</SelectItem>
                <SelectItem value="mvp">MVP</SelectItem>
                <SelectItem value="growth">Growth</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="">
            <label htmlFor="">Project catergory</label>
             <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {catergory.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicInfo;
