"use client";

import Image from "next/image";
import { z } from "zod";
import { GripHorizontal } from "lucide-react";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";

import { addLinkFormSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import FormSection from "@/components/FormSection";

import MainImage from "@/public/assets/MainImage.svg";

type addLinkFormValues = z.infer<typeof addLinkFormSchema>;

const HomeMain = () => {
  const { data: session } = useSession();

  const form = useForm<addLinkFormValues>({
    resolver: zodResolver(addLinkFormSchema),
    defaultValues: {
      links: [{ platform: null, link: "" }],
    },
    mode: "onChange",
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "links",
  });

  const onSubmit = async (data: addLinkFormValues) => {
    try {
      const response = await fetch("/api/links/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userID: session?.user.id,
          links: data.links,
        }),
      });

      if (response.ok) {
        const updatedLinks = await response.json();
        form.reset({ links: updatedLinks });
      } else {
        console.error("Failed to save links");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const addNewLink = () => {
    append({ platform: null, link: "" });
  };

  const removeLink = (index: number) => {
    remove(index);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <section>
          <Button
            variant={"outlineViolet"}
            onClick={addNewLink}
            className="mb-6 w-full font-semibold text-violet"
          >
            + Add new link
          </Button>

          {fields.length === 0 && (
            <section className="flex flex-col items-center justify-start rounded-xl bg-snow px-5 py-10">
              <Image src={MainImage} alt="main image" className="mb-5" />
              <h2 className="mb-5 text-xl font-bold">
                Let&apos;s get you started
              </h2>
              <p className="text-sm font-normal text-gray">
                Use the &quot;Add new link&quot; button to get started. Once you
                have more than one link, you can reorder and edit them.
                We&apos;re here to help you share your profiles with everyone!
              </p>
            </section>
          )}

          {fields.map((field, index) => (
            <section
              key={field.id || index}
              className="mt-3 flex flex-col items-center justify-start rounded-xl bg-snow px-5 py-10"
            >
              <div className="flex w-full items-center justify-between py-2">
                <div className="flex items-center gap-x-2">
                  <GripHorizontal className="text-gray" />
                  <h2 className="font-bold capitalize text-gray">
                    link #{index + 1}
                  </h2>
                </div>
                <Button
                  variant="link"
                  onClick={() => removeLink(index)}
                  className="font-normal text-gray"
                >
                  Remove
                </Button>
              </div>

              <FormSection form={form} index={index} />
            </section>
          ))}

          <Separator className="my-5" />

          <Button
            type="submit"
            className="block w-full rounded-lg bg-violet font-semibold text-white hover:bg-mauve disabled:bg-violet/25 md:ml-auto md:w-20"
          >
            Save
          </Button>
        </section>
      </form>
    </FormProvider>
  );
};

export default HomeMain;
