"use client";

import Image from "next/image";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { GripHorizontal } from "lucide-react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { addLinkFormSchema } from "@/lib/schema";

import MainImage from "@/app/_assets/MainImage.svg";
import PreviewSection from "@/components/PreviewSection";
import Link from "next/link";

type addLinkFormValues = z.infer<typeof addLinkFormSchema>;

export default async function Home() {
  const form = useForm<addLinkFormValues>({
    resolver: zodResolver(addLinkFormSchema),
    defaultValues: {
      link: "",
      platforms: "",
    },
    mode: "onChange",
  });

  const [showNewLink, setShowNewLink] = useState(false);

  function onSubmit(data: addLinkFormValues) {
    console.log(data);
  }

  return (
    <div className="flex justify-between">
      <PreviewSection />

      <main className="m-4 rounded-xl bg-white p-4 md:m-6 md:p-6 lg:w-8/12">
        <section className="mb-10">
          <h1 className="mb-1.5 text-xl font-bold text-charcoal md:text-3xl">
            Customize your links
          </h1>
          <p className="text-sm text-gray md:text-base">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
        </section>

        <section>
          <Button
            variant={"outlineViolet"}
            onClick={() => setShowNewLink(true)}
            className="mb-6 w-full font-semibold text-violet"
          >
            + Add new link
          </Button>

          {!showNewLink && (
            <section className="flex flex-col items-center justify-start rounded-xl bg-snow px-5 py-10">
              <Image src={MainImage} alt="main image" className="mb-5" />

              <h2 className="mb-5 text-xl font-bold">Let's get you started</h2>
              <p className="text-sm font-normal text-gray">
                Use the “Add new link” button to get started. Once you have more
                than one link, you can reorder and edit them. We're here to help
                you share your profiles with everyone!
              </p>
            </section>
          )}

          {showNewLink && (
            <section className="mt-3 flex flex-col items-center justify-start rounded-xl bg-snow px-5 py-10">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-x-2">
                  <GripHorizontal className="text-gray" />
                  <h2 className="font-bold capitalize text-gray">link #1</h2>
                </div>
                <Link href="/" className="font-normal text-gray">
                  Remove
                </Link>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
                    control={form.control}
                    name="platforms"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="text-charcoal">
                          Platform
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a verified email to display" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Github">Github</SelectItem>
                            <SelectItem value="Twitter">Twitter</SelectItem>
                            <SelectItem value="Linkedin">Linkedin</SelectItem>
                            <SelectItem value="Dev.to">Dev.to</SelectItem>
                            <SelectItem value="Codeware">Codeware</SelectItem>
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="link"
                    render={({ field }) => (
                      <FormItem className="w-ful mt-2">
                        <FormLabel className="text-charcoal">Link</FormLabel>
                        <FormControl>
                          <Input type="text" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is your public display name. It can be your real
                          name or a pseudonym. You can only change this once
                          every 30 days.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Separator className="my-5" />

                  <Button
                    type="submit"
                    className="block w-full rounded-lg bg-violet font-semibold text-white hover:bg-mauve disabled:bg-violet/25 md:ml-auto md:w-20"
                  >
                    Save
                  </Button>
                </form>
              </Form>
            </section>
          )}
        </section>
      </main>
    </div>
  );
}
