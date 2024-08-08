import type { Metadata } from "next";

import { Instrument_Sans } from "next/font/google";

import "../globals.css";

import Header from "@/components/Header";
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
        <Header />

        <div className="flex justify-between">
          <PreviewSection links={[]} />

          {children}
        </div>
      </body>
    </html>
  );
}
