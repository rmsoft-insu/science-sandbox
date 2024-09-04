import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

const AddMemberPage = async () => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect("/sign-in");
  }

  const existingMember = await db.profile.findFirst({
    where: {
      memebers: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (existingMember) {
    return redirect("/chats");
  }

  const newMember = await db.profile.update({
    where: {
      userId: profile.id,
    },
    data: {
      memebers: {
        create: [{ profileId: profile.id }],
      },
    },
  });

  return null;
};

export default AddMemberPage;
