import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";

import "../globals.css";

import { AuthProvider } from "@/components/Providers";

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
      <body
        className={`${instrumentSans.className} bg-snow p-4 md:p-6 lg:px-8`}
      >
        <AuthProvider>
          <Header />

          <div className="md:flex md:justify-between md:gap-x-3">
            <PreviewSection links={[]} />

            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
