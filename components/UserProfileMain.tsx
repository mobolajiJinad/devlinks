"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { userProfileSchema } from "@/lib/schema";

type UserData = {
  profilePicture?: File;
  firstName?: string;
  lastName?: string;
  email?: string;
};

type userProfileValues = z.infer<typeof userProfileSchema>;

const UserProfileMain = () => {
  const { data: session } = useSession();

  const [userData, setUserData] = useState<UserData | null>(null);
  const [profilePicturePreview, setProfilePicturePreview] =
    useState<string>("");

  const form = useForm<userProfileValues>({
    resolver: zodResolver(userProfileSchema),
    defaultValues: {
      profilePicture: null,
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  useEffect(() => {
    if (session) {
      const fetchUserData = async () => {
        try {
          const response = await fetch("/api/user", {
            method: "POST",
            body: JSON.stringify({ ID: session.user.id }),
          });

          if (!response.ok) {
            throw new Error("Failed to fetch user data");
          }
          const data: UserData = await response.json();

          setUserData(data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchUserData();
    }
  }, [session?.user.id]);

  useEffect(() => {
    if (userData) {
      form.reset(userData);
    }
  }, [userData, form]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setProfilePicturePreview(fileUrl);

      form.setValue("profilePicture", file);
    }
  };

  const onSubmit = async (data: userProfileValues) => {
    const formData = new FormData();

    if (data.profilePicture instanceof File) {
      formData.append("profilePicture", data.profilePicture);
    }

    if (data.firstName) {
      formData.append("firstName", data.firstName);
    }
    if (data.lastName) {
      formData.append("lastName", data.lastName);
    }
    if (data.email) {
      formData.append("email", data.email);
    }

    try {
      const response = await fetch("/api/user", {
        method: "PUT",
        body: formData,
      });

      if (!response.ok) {
        alert("Failed to save changes.");
        throw new Error("Failed to update user data");
      }

      alert("Profile updated successfully!");
      const updatedData = await response.json();

      setUserData(updatedData.user);
    } catch (error) {
      console.error(error);
      alert("Failed to save changes.");
    }
  };

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <section className="my-2 rounded-2xl bg-snow p-4">
            <FormField
              control={form.control}
              name="profilePicture"
              render={() => (
                <FormItem className="flex flex-col items-center gap-x-2 p-2 sm:flex-row">
                  <FormLabel className="my-1 w-full text-grey sm:w-1/3">
                    Profile Picture
                  </FormLabel>

                  <div>
                    {userData?.profilePicture ? (
                      <img
                        src={userData.profilePicture}
                        alt="Profile Preview"
                        className="h-48 w-48 rounded-full object-cover"
                      />
                    ) : profilePicturePreview ? (
                      <img
                        src={profilePicturePreview}
                        alt="Profile Preview"
                        className="h-48 w-48 rounded-full object-cover"
                      />
                    ) : (
                      <>
                        <FormControl>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="h-48 w-48 rounded-full bg-white text-grey"
                          />
                        </FormControl>
                        <FormDescription className="my-1 text-grey">
                          Image must be below 1024x1024px. Use PNG or JPG
                          format.
                        </FormDescription>
                      </>
                    )}
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
                  <FormLabel className="my-1 w-full text-grey sm:w-1/3">
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
                  <FormLabel className="my-1 w-full text-grey sm:w-1/3">
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
                  <FormLabel className="my-1 w-full text-grey sm:w-1/3">
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

          <Button
            type="submit"
            className="block w-full rounded-lg bg-violet font-semibold text-white hover:bg-mauve disabled:bg-violet/25 md:ml-auto md:w-1/2"
          >
            Save
          </Button>
        </form>
      </FormProvider>

      <section className="mt-4 flex flex-col gap-4 md:flex-row">
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
