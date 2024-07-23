import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";

import "@/app/globals.css";

const instrumentSans = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevLinks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.className} bg-snow`}>{children}</body>
    </html>
  );
}
