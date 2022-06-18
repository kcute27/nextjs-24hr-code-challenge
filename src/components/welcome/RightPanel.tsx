import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const RightPanel = () => {
  return (
    <div className="px-2 py-6 text-center shadow flex w-[100%] lg:w-[40%] md:w-[40%] sm:w-[40%] flex-col lg:rounded-tr-[30px] lg:rounded-br-[30px] md:rounded-tr-[30px] md:rounded-br-[30px] bg-success place-content-center place-items-center">
      <p className="text-white text-[30px] font-semibold h-auto">
        Hello, World!
      </p>
      <p className="text-white text-sm mt-4">
        Click the button to login with your <br /> GihHub Account
      </p>
      <Link href={"/api/auth/login"}>
        <div className="hover:bg-dark cursor-pointer shadow hover:border-dark mt-10 w-[100px] h-[auto] bg-success border p-1 rounded-full">
          <p className="text-white font-semibold">Login</p>
        </div>
      </Link>
    </div>
  );
};

export default RightPanel;
