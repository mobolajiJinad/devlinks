import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Eye, CircleUserRound, Link as LinkIcon } from "lucide-react";

import DevlinksIcon from "@/public/assets/DevlinksIcon.svg";
import DevlinksLogo from "@/public/assets/DevlinksLogo.svg";

const Header = () => {
  return (
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
        <div className="group flex items-center justify-center gap-2 rounded-lg px-2.5 py-1.5">
          <CircleUserRound className="cursor-pointer text-gray group-hover:text-violet" />
          <Link
            href="/user-profile"
            className="hidden font-semibold text-gray active:text-violet group-hover:text-violet md:inline-block"
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
  );
};

export default Header;
