"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { Eye, CircleUserRound, Link as LinkIcon } from "lucide-react";

import DevlinksIcon from "@/public/assets/DevlinksIcon.svg";
import DevlinksLogo from "@/public/assets/DevlinksLogo.svg";

const Header = () => {
  const router = useRouter();

  return (
    <header className="flex items-center justify-between gap-2 self-stretch rounded-xl bg-white p-4 pl-6 md:p-6">
      <div className="flex items-center gap-2">
        <Image src={DevlinksIcon} alt="links icon" className="shrink-0" />
        <Image
          src={DevlinksLogo}
          alt="logo"
          className="hidden shrink-0 md:inline-block"
        />
      </div>

      <div className="flex md:px-4">
        <div
          onClick={() => {
            router.push("/");
          }}
          className="flex w-20 cursor-pointer items-center justify-center gap-2 rounded-lg bg-lavender px-2.5 py-1.5"
        >
          <LinkIcon className="text-violet" />
          <p className="hidden font-medium text-gray hover:text-violet sm:inline-block">
            Link
          </p>
        </div>
        <div
          onClick={() => {
            router.push("/user-profile");
          }}
          className="group flex cursor-pointer items-center justify-center gap-2 rounded-lg px-2.5 py-1.5"
        >
          <CircleUserRound className="text-gray group-hover:text-violet" />
          <p className="hidden font-medium text-gray active:text-violet group-hover:text-violet sm:inline-block">
            User profile
          </p>
        </div>
      </div>

      <Button
        variant={"outlineViolet"}
        onClick={() => router.push("/preview")}
        className="h-10 w-14 rounded-lg sm:w-28"
      >
        <Eye className="block text-violet sm:hidden" />
        <span className="hidden sm:inline-block">Preview</span>
      </Button>
    </header>
  );
};

export default Header;
