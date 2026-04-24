import type { Metadata } from "next";
import { Commissioner, Geist, Geist_Mono, Instrument_Sans, Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-providers/theme-provider";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const commissioner = Commissioner({
  variable: "--font-commissioner",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kiwiko",
  description: "Startup ideas, backed by proof.",
  icons: {
    icon: "/logo-dark-mode.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, instrumentSans.variable, instrumentSerif.variable, commissioner.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
