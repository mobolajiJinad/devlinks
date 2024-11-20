"use client";

import { useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { FormProvider, useForm } from "react-hook-form";
import { signOut } from "next-auth/react";

import { userProfileSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import UploadImage from "@/public/assets/UploadImage.svg";

type userProfileValues = z.infer<typeof userProfileSchema>;

const UserProfileMain = () => {
  const { data: session } = useSession();

  const form = useForm<userProfileValues>({
    resolver: zodResolver(userProfileSchema),
    defaultValues: {
      profilePicture: "",
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  useEffect(() => {
    // fetch existing user data
  }, [session?.user.id, form]);

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit((data) => console.log(data))}>
          <section className="my-2 rounded-2xl bg-snow p-4">
            <FormField
              control={form.control}
              name="profilePicture"
              render={({ field }) => (
                <FormItem className="flex flex-col items-center gap-x-2 p-2 sm:flex-row">
                  <FormLabel className="text-grey my-1 w-full sm:w-1/3">
                    Profile Picture
                  </FormLabel>
                  <div>
                    <FormControl>
                      <Input
                        type="file"
                        placeholder="John"
                        className="text-grey h-full min-h-48 w-full min-w-48"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-grey my-1">
                      Image must be below 1024x1024px. Use PNG or JPG format.
                    </FormDescription>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </section>

          <section className="my-6 rounded-2xl bg-snow p-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="flex flex-col items-center gap-x-2 p-2 sm:flex-row">
                  <FormLabel className="text-grey my-1 w-full sm:w-1/3">
                    First name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John"
                      className="text-grey"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="flex flex-col items-center gap-x-2 p-2 sm:flex-row">
                  <FormLabel className="text-grey my-1 w-full sm:w-1/3">
                    Last name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" className="text-grey" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col items-center gap-x-2 p-2 sm:flex-row">
                  <FormLabel className="text-grey my-1 w-full sm:w-1/3">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="johndoe@example.com"
                      className="text-grey"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </section>
        </form>
      </FormProvider>

      <section className="flex flex-col gap-4 md:flex-row">
        <Button
          type="submit"
          className="block w-full rounded-lg bg-violet font-semibold text-white hover:bg-mauve disabled:bg-violet/25 md:ml-auto md:w-1/2"
        >
          Save
        </Button>

        <Button
          variant="outlineViolet"
          className="block w-full rounded-lg font-semibold text-violet hover:bg-mauve md:ml-auto md:w-1/2"
          onClick={() => signOut()}
        >
          Log out
        </Button>
      </section>
    </div>
  );
};

export default UserProfileMain;
