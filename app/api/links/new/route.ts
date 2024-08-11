import { NextRequest, NextResponse } from "next/server";

import { connectToDB } from "@/lib/database";
import User from "@/models/user";
import Link from "@/models/link";

export async function POST(request: NextRequest) {
  await connectToDB();

  try {
    const {
      userID,
      links,
    }: { userID: string; links: { platform: string; link: string }[] } =
      await request.json();

    const updatedLinks = await Promise.all(
      links.map(async (link) => {
        const updatedLink = await Link.findOneAndUpdate(
          { creator: userID, platform: link.platform },
          { $set: { link: link.link } },
          { new: true, upsert: true },
        );

        await User.findByIdAndUpdate(userID, {
          $addToSet: { links: updatedLink._id },
        });

        return updatedLink;
      }),
    );

    return NextResponse.json(updatedLinks);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
