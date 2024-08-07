import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Instrument_Sans } from "next/font/google";
import { Eye, CircleUserRound, Link as LinkIcon } from "lucide-react";

import "@/styles/globals.css";

import DevlinksIcon from "@/public/assets/DevlinksIcon.svg";
import DevlinksLogo from "@/public/assets/DevlinksLogo.svg";

import { Button } from "@/components/ui/button";
import PreviewSection from "@/components/PreviewSection";

const instrumentSans = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevLinks",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.className} bg-snow`}>
        <header className="mb-4 flex items-center justify-between gap-2 self-stretch rounded-xl bg-white p-4 pl-6 md:m-6 md:mb-6 md:p-6">
          <div className="flex items-center gap-2">
            <Image src={DevlinksIcon} alt="links icon" className="shrink-0" />
            <Image
              src={DevlinksLogo}
              alt="logo"
              className="hidden shrink-0 md:inline-block"
            />
          </div>

          <div className="flex md:px-4">
            <div className="flex w-20 items-center justify-center gap-2 rounded-lg bg-lavender px-2.5 py-1.5">
              <LinkIcon className="text-violet" />
              <Link
                href="/"
                className="hidden font-semibold text-gray hover:text-violet md:inline-block"
              >
                Link
              </Link>
            </div>
            <div className="flex items-center justify-center gap-2 rounded-lg px-2.5 py-1.5">
              <CircleUserRound className="text-gray hover:text-violet" />
              <Link
                href="/user-profile"
                className="hidden font-semibold text-gray hover:text-violet active:text-violet md:inline-block"
              >
                User profile
              </Link>
            </div>
          </div>

          <Button
            variant={"outlineViolet"}
            className="h-10 w-14 rounded-lg md:w-28"
          >
            <Eye className="block text-violet md:hidden" />
            <span className="hidden md:inline-block">Preview</span>
          </Button>
        </header>

        <div className="flex justify-between">
          <PreviewSection links={[]} />

          {children}
        </div>
      </body>
    </html>
  );
}
