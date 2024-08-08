"use client";

import { useState } from "react";
import Image from "next/image";
import { z } from "zod";
import { GripHorizontal } from "lucide-react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { addLinkFormSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import FormSection from "@/components/FormSection";

import MainImage from "@/public/assets/MainImage.svg";

type addLinkFormValues = z.infer<typeof addLinkFormSchema>;

const HomeMain = () => {
  const form = useForm<addLinkFormValues>({
    resolver: zodResolver(addLinkFormSchema),
    defaultValues: {
      links: [{ platforms: "", link: "" }],
    },
    mode: "onChange",
  });

  const [links, setLinks] = useState([{ platforms: "", link: "" }]);
  const onSubmit = (data: addLinkFormValues) => {
    const filteredLinks = data.links.map((link) => ({
      platforms: link.platforms ?? "",
      link: link.link,
    }));
    setLinks(filteredLinks);
  };

  const addNewLink = () => {
    const newLinks = [...links, { platforms: "", link: "" }];
    setLinks(newLinks);
    form.setValue("links", newLinks);
  };

  const removeLink = (index: number) => {
    const newLinks = links.filter((_, i) => i !== index);
    setLinks(newLinks);
    form.setValue("links", newLinks);
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

          {links.length === 0 && (
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

          {links.map((link, index) => (
            <section
              key={index}
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
                  variant="outline"
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
