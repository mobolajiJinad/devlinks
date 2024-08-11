import Image from "next/image";
import Link from "next/link";

import OuterPhoneRectangle from "@/public/assets/OuterPhoneRectangle.svg";
import InnerPhoneRectangle from "@/public/assets/InnerPhoneRectangle.svg";
import ProfilePicPlaceholder from "@/public/assets/ProfilePicPlaceholder.svg";
import NamePlaceholder from "@/public/assets/NamePlaceholder.svg";
import EmailPlaceholder from "@/public/assets/EmailPlaceholder.svg";
import LinkPlaceholder from "@/public/assets/LinkPlaceholder.svg";

interface PreviewSectionProps {
  links: { platforms: string; link: string }[];
}

const PreviewSection = ({ links }: PreviewSectionProps) => {
  return (
    <section className="my-4 hidden rounded-xl bg-white p-4 sm:p-2 md:flex md:w-2/5 md:items-center md:justify-center md:p-6 lg:w-4/12">
      <div className="relative max-w-sm">
        <Image src={OuterPhoneRectangle} alt="phone case" className="w-full" />
        <Image
          src={InnerPhoneRectangle}
          alt="phone case"
          className="absolute left-[3%] top-[3%] h-[94%] w-[94%]"
        />
        <Image
          src={ProfilePicPlaceholder}
          alt="profile pic"
          className="absolute left-1/4 top-[15%] h-auto w-1/2"
        />
        <Image
          src={NamePlaceholder}
          alt="name"
          className="absolute left-[20%] top-[40%] h-auto w-2/3"
        />
        <Image
          src={EmailPlaceholder}
          alt="email"
          className="absolute left-1/3 top-[45%] h-auto w-1/3"
        />

        <div className="absolute left-2 top-1/2 flex w-full flex-col items-center gap-y-5">
          {Array.from({ length: 4 }).map((_, index) => {
            if (index < links.length) {
              return (
                <Link
                  key={index}
                  href={links[index].link}
                  className="w-3/4 text-center text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {links[index].platforms}
                </Link>
              );
            } else {
              return (
                <Image
                  key={index}
                  src={LinkPlaceholder}
                  alt="link placeholder"
                  className="h-auto w-3/4"
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;
