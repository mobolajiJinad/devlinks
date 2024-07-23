"use client";

import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Lock, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import Link from "next/link";

const formSchema = z.object({
  email: z.string(),
  password: z.string(),
});

const Page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <main className="flex flex-col items-start gap-10 md:w-[29rem] md:items-center md:rounded-xl md:bg-white">
      <div className="flex w-full flex-col gap-10 self-stretch md:p-10">
        <div className="flex flex-col items-start gap-2 self-stretch">
          <h1 className="self-stretch text-2xl font-bold text-charcoal">
            Login
          </h1>
          <p className="self-stretch text-base text-gray">
            Add your details below to get back into the app
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex w-full flex-col items-start gap-6 self-stretch"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full md:w-96">
                  <FormLabel className="text-xs font-normal text-charcoal md:text-sm">
                    Email address
                  </FormLabel>

                  <FormControl>
                    <div className="relative">
                      <Mail
                        width="20px"
                        height="20px"
                        className="absolute left-3 top-2 text-gray"
                      />
                      <Input
                        type="email"
                        placeholder="E.g. alex@gmail.com"
                        className="pl-9 text-base text-charcoal active:outline-violet md:text-lg"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full md:w-96">
                  <FormLabel className="text-xs font-normal text-charcoal md:text-sm">
                    Password
                  </FormLabel>

                  <FormControl>
                    <div className="relative">
                      <Lock
                        width="20px"
                        height="20px"
                        className="absolute left-3 top-2 text-gray"
                      />
                      <Input
                        type="password"
                        placeholder="Enter Your Password"
                        className="pl-9 text-base text-charcoal active:outline-violet md:text-lg"
                        {...field}
                      />{" "}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="h-11 w-full rounded-lg bg-violet font-semibold text-white hover:bg-mauve"
            >
              Login
            </Button>

            <div className="mx-auto flex flex-col items-center self-stretch md:flex-row">
              <p className="text-base font-normal text-gray">
                Don't have an account?
              </p>
              <Link
                href="/auth/signup"
                className="text-base font-normal text-violet md:ml-0.5"
              >
                Create account
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </main>
  );
};

export default Page;
