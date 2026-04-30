"use client";

import React, { useState, useCallback } from "react";
import { motion } from "motion/react";
import { FileUp, Loader2, X } from "lucide-react";
import { generateReactHelpers } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";
import { cn } from "@/lib/utils";

const { useUploadThing } = generateReactHelpers<OurFileRouter>();

interface FileDropZoneProps {
  className?: string;
  setImageUrl: (url: string) => void;
  fileType: string; // e.g., "png, jpg, svg"
  endpoint: keyof OurFileRouter;
}

const FileDropZone = ({ className, setImageUrl, fileType, endpoint }: FileDropZoneProps) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const { startUpload, isUploading } = useUploadThing(endpoint, {
    onClientUploadComplete: (res) => {
      if (res && res[0]) {
        // Handle both .url (standard) and .ufsUrl (legacy/internal)
        const url = res[0].url;
        setImageUrl(url);
        setPreview(url);
      }
    },
    onUploadError: (error) => {
      console.error("Upload failed:", error);
    },
  });

  const onDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const file = e.dataTransfer.files?.[0];
      if (file) {
        startUpload([file]);
      }
    },
    [startUpload]
  );

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      startUpload([file]);
    }
  };

  const allowedExtensions = fileType
    ? fileType
        .split(",")
        .map((t) => t.trim().replace(/^\./, "").toLowerCase())
        .filter(Boolean)
    : [];
  const acceptString = allowedExtensions.map((ext) => `.${ext}`).join(",");

  const getMaxSize = (endpoint: keyof OurFileRouter) => {
    switch (endpoint) {
      case "projectLogo":
        return "4 MB";
      case "projectBanner":
        return "8 MB";
      case "projectPitchdeck":
        return "16 MB";
      default:
        return "5 MB";
    }
  };

  const getEndpointLabel = (endpoint: keyof OurFileRouter) => {
    switch (endpoint) {
      case "projectLogo":
        return "Project Logo";
      case "projectBanner":
        return "Project Banner";
      case "projectPitchdeck":
        return "Project Pitchdeck";
      default:
        return "File";
    }
  };

  return (
    <div
      className={cn(
        "relative group flex flex-col items-center justify-center border border-zinc-800 rounded-lg bg-black overflow-hidden transition-all duration-300 min-h-[150px] p-6",
        className
      )}
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Preview */}
      {preview && (
        <div className="absolute inset-0 z-0">
          <img
            src={preview}
            alt="Uploaded Preview"
            className="w-full h-full object-cover opacity-40 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60" />
        </div>
      )}

      {/* Foreground Content */}
      <motion.div
        initial={false}
        animate={{
          opacity: preview && !isHovered ? 0 : 1,
          scale: preview && !isHovered ? 0.95 : 1,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="relative z-10 flex flex-col items-center gap-4 text-center w-full"
      >
        <div className="space-y-2">
          <h3 className="text-white font-medium leading-none">
            Drag and drop {getEndpointLabel(endpoint)} or
          </h3>
          <p className="text-zinc-500 text-[10px] font-medium tracking-wider">
            <span className="uppercase tracking-wide font-semibold">
              {allowedExtensions.join(", ")}{" "}
            </span>
            up to {getMaxSize(endpoint)}
          </p>
        </div>

        <button
          type="button"
          onClick={() => document.getElementById("file-input")?.click()}
          className="flex items-center gap-2 px-4 py-2 bg-zinc-900/80 border border-zinc-800 text-white rounded-lg hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-200 font-medium text-xs active:scale-95 disabled:opacity-50"
          disabled={isUploading}
        >
          {isUploading ? (
            <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
          ) : (
            <FileUp strokeWidth={1.3} className="w-4 h-4 text-blue-400" />
          )}
          {isUploading ? "Uploading..." : "Upload File"}
        </button>

        <input
          id="file-input"
          type="file"
          className="hidden"
          accept={acceptString}
          onChange={handleFileSelect}
        />
      </motion.div>

      {/* Remove Button */}
      {preview && isHovered && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setPreview(null);
            setImageUrl("");
          }}
          className="absolute top-6 right-6 z-20 p-2 bg-black/60 border border-zinc-800 rounded-xl text-zinc-400 hover:text-red-400 hover:bg-black hover:border-red-900/50 transition-all duration-200 backdrop-blur-sm"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default FileDropZone;