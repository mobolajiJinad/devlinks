import Image from "next/image";
import Link from "next/link";

import OuterPhoneRectangle from "@/app/_assets/OuterPhoneRectangle.svg";
import InnerPhoneRectangle from "@/app/_assets/InnerPhoneRectangle.svg";
import ProfilePicPlaceholder from "@/app/_assets/ProfilePicPlaceholder.svg";
import NamePlaceholder from "@/app/_assets/NamePlaceholder.svg";
import EmailPlaceholder from "@/app/_assets/EmailPlaceholder.svg";
import LinkPlaceholder from "@/app/_assets/LinkPlaceholder.svg";

interface PreviewSectionProps {
  links: { platforms: string; link: string }[];
}

const PreviewSection = ({ links }: PreviewSectionProps) => {
  return (
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
          {links.length === 0 ? (
            <>
              <Image src={LinkPlaceholder} alt="link" />
              <Image src={LinkPlaceholder} alt="link" />
              <Image src={LinkPlaceholder} alt="link" />
              <Image src={LinkPlaceholder} alt="link" />
            </>
          ) : (
            links.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.platforms}
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;
