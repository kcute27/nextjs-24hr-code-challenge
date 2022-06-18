import { UserProfile } from "@auth0/nextjs-auth0";
import React, { FC, useEffect, useState } from "react";
import useUtils from "../../utils/useUtils";
import Image from "next/image";

interface UserProfileProps {
  user: UserProfile | null;
}
const UserProfile: FC<UserProfileProps> = ({ user }) => {
  const { parseUserProfile } = useUtils();

  return (
    <div className="px-6 py-6 text-center shadow flex w-[100%] lg:w-[40%] md:w-[40%] sm:w-[40%] flex-col lg:rounded-tr-[30px] lg:rounded-br-[30px] md:rounded-tr-[30px] md:rounded-br-[30px] bg-success place-content-center place-items-center">
      <Image
        src={user?.picture as string}
        width={100}
        height={100}
        objectFit="contain"
        layout="fixed"
        alt="logo"
        className="rounded-full shadow"
      />
      <p className="mt-[30px] text-[30px] text-white font-bold">{user?.name}</p>
      <p className="p-5 flex place-content-center place-items-center lg:text-[20px] text-white ">
        {parseUserProfile(user)}
      </p>
    </div>
  );
};

export default UserProfile;
