import { NextApiRequest } from "next";

import { NextApiResponseServerIo } from "@/app/(example)/chats/types";
import { currentProfilePage } from "@/lib/current-profile-pages";
import { db } from "@/lib/db";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponseServerIo,
) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method not allowed" });
  }

  try {
    const profile = await currentProfilePage(request);
    const { content } = request.body;
    if (!profile) {
      return response.status(401).json({ error: "Unauthorized" });
    }
    if (!content) {
      return response.status(400).json({ error: "Content missing" });
    }

    const member = await db.member.findFirst({
      where: {
        profileId: profile.id,
      },
    });

    if (!member) {
      return response.status(404).json({ message: "Member not found" });
    }

    const message = await db.message.create({
      data: {
        content,
        memberId: member.id,
      },
      include: {
        member: {
          include: {
            profile: true,
          },
        },
      },
    });

    return response.status(200).json(message);
  } catch (error) {
    console.log("[MESSAGE_POST]", error);
    return response.status(500).json({ message: "Internal Error" });
  }
}
