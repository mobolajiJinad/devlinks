import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import MainImage from "@/app/_assets/MainImage.svg";
import OuterPhoneRectangle from "@/app/_assets/OuterPhoneRectangle.svg";
import InnerPhoneRectangle from "@/app/_assets/InnerPhoneRectangle.svg";
import ProfilePicPlaceholder from "@/app/_assets/ProfilePicPlaceholder.svg";
import NamePlaceholder from "@/app/_assets/NamePlaceholder.svg";
import EmailPlaceholder from "@/app/_assets/EmailPlaceholder.svg";
import LinkPlaceholder from "@/app/_assets/LinkPlaceholder.svg";

export default function Home() {
  return (
    <div className="flex justify-between">
      <section className="m-4 hidden w-2/5 rounded-xl bg-white p-4 md:m-6 md:p-6 lg:flex lg:w-4/12 lg:items-center lg:justify-center">
        <div className="relative">
          <Image src={OuterPhoneRectangle} alt="phone case" />
          <Image
            src={InnerPhoneRectangle}
            alt="phone case"
            className="absolute left-[11px] top-[10px]"
          />
          <Image
            src={ProfilePicPlaceholder}
            alt="profile pic"
            className="absolute left-28 top-20"
          />
          <Image
            src={NamePlaceholder}
            alt="name"
            className="absolute left-[78px] top-52"
          />
          <Image
            src={EmailPlaceholder}
            alt="email"
            className="absolute left-[115px] top-60"
          />

          <div className="absolute left-2 top-72 flex w-72 flex-col items-center gap-y-5">
            <Image src={LinkPlaceholder} alt="link" />
            <Image src={LinkPlaceholder} alt="link" />
            <Image src={LinkPlaceholder} alt="link" />
            <Image src={LinkPlaceholder} alt="link" />
          </div>
        </div>
      </section>

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
            className="mb-6 w-full font-semibold text-violet"
          >
            + Add new link
          </Button>

          <section className="flex flex-col items-center justify-start rounded-xl bg-snow px-5 py-10">
            <Image src={MainImage} alt="main image" className="mb-5" />

            <h2 className="mb-5 text-xl font-bold">Let's get you started</h2>
            <p className="text-sm font-normal text-gray">
              Use the “Add new link” button to get started. Once you have more
              than one link, you can reorder and edit them. We're here to help
              you share your profiles with everyone!
            </p>
          </section>
        </section>

        <Separator className="my-5" />

        <Button className="block w-full rounded-lg bg-violet font-semibold text-white hover:bg-mauve disabled:bg-violet/25 md:ml-auto md:w-20">
          Save
        </Button>
      </main>
    </div>
  );
}
