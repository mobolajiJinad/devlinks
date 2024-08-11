"use client";

import { useSession } from "next-auth/react";

import PreviewSection from "@/components/PreviewSection";
import HomeMain from "@/components/HomeMain";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className="md:flex md:justify-between md:gap-x-3">
      <PreviewSection />

      <main className="my-4 rounded-xl bg-white p-4 md:w-3/5 md:p-6 lg:w-8/12">
        <section className="mb-10">
          <h1 className="mb-1.5 text-xl font-bold text-charcoal md:text-2xl">
            Customize your links
          </h1>
          <p className="text-sm text-gray md:text-base">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
        </section>

        <HomeMain />
      </main>
    </div>
  );
}
