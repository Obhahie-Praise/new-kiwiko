"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800 animate-pulse" />
    )
  }

  return (
    <div className="flex h-fit w-fit items-center gap-1.5 p-2 rounded-full bg-zinc-100/50 dark:bg-neutral-500/10 backdrop-blur-md border border-zinc-200 dark:border-zinc-800">
      <button
        onClick={() => setTheme("light")}
        className={`transition-all duration-200 ${
          theme === "light"
            ? "text-black"
            : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
        }`}
        title="Light Mode"
      >
        <Sun className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`transition-all duration-200 ${
          theme === "system"
            ? "text-white dark:ring-zinc-600"
            : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-900"
        }`}
        title="System Theme"
      >
        <Monitor className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`transition-all duration-200 ${
          theme === "dark"
            ? "text-white"
            : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
        }`}
        title="Dark Mode"
      >
        <Moon className="w-4 h-4" />
      </button>
    </div>
  )
}
