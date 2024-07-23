import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import "@/app/globals.css";

import DevlinksIcon from "@/app/_assets/DevlinksIcon.svg";
import DevlinksLogo from "@/app/_assets/DevlinksLogo.svg";

const instrumentSans = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevLinks",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.className} flex flex-col items-center gap-5 bg-snow p-8 md:justify-center md:gap-10 md:px-60 md:py-32`}
      >
        <header className="flex items-center">
          <Image src={DevlinksIcon} alt="icon" />
          <Link href="/">
            <Image src={DevlinksLogo} alt="logo" />
          </Link>
        </header>

        {children}
      </body>
    </html>
  );
}
