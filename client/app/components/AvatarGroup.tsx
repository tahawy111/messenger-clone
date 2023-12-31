import { cn } from "@/lib/utils";
import { User } from "@prisma/client";
import Image from "next/image";
import {} from "react";

interface AvatarGroupProps {
  users: User[];
}

export default function AvatarGroup({ users = [] }: AvatarGroupProps) {
  const slicedUsers = users.slice(0, 3);
  const positionMap = {
    0: "top-0 left-[12px]",
    1: "bottom-0",
    2: "bottom-0 right-0",
  };
  return (
    <div className="relative h-11 w-11">
      {slicedUsers.map((user, index) => (
        <div
          className={cn(
            `absolute inline-block rounded-full overflow-hidden h-[21px] w-[21px]`,
            positionMap[index as keyof typeof positionMap]
          )}
          key={user.id}
        ><Image src={user?.image || "/images/placeholder-image.jpg"} alt="Avatar" fill /></div>
      ))}
    </div>
  );
}
