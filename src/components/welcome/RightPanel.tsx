import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IAuthStore } from "../../services/auth/types";
import useAuth from "../../services/auth/useAuth";
import useStore from "../../store/useStore";

const RightPanel = () => {
  const { isLoading } = useUser();
  const { isAuthenticated, currentUser } = useStore(
    (state: IAuthStore) => state
  );
  return (
    <div className="px-6 py-6 text-center shadow flex w-[100%] lg:w-[40%] md:w-[40%] sm:w-[40%] flex-col lg:rounded-tr-[30px] lg:rounded-br-[30px] md:rounded-tr-[30px] md:rounded-br-[30px] bg-success place-content-center place-items-center">
      {isLoading ? (
        <div className=" h-[50px] w-[200px] bg-black opacity-10 rounded-sm animate-pulse"></div>
      ) : isAuthenticated ? (
        <p className="text-white text-[30px] font-semibold h-auto">
          Welcome, {currentUser?.nickname}!
        </p>
      ) : (
        <p className="text-white text-[30px] font-semibold h-auto">
          Hello, World!
        </p>
      )}
      {!isAuthenticated ? (
        <p className="text-white text-sm mt-4">
          Click the button to login with your <br /> GihHub Account
        </p>
      ) : (
        <p className="text-white text-lg mt-4">
          You are currently logged in; to use the app, simply click the check
          weather button below.
        </p>
      )}

      {!isAuthenticated ? (
        <Link href={"/api/auth/login"}>
          <div className="hover:bg-dark cursor-pointer shadow hover:border-dark mt-10 w-[100px] h-[auto] bg-success border p-2 rounded-full">
            <p className="text-white font-semibold">Login</p>
          </div>
        </Link>
      ) : (
        <Link href={"/weather"}>
          <div className="hover:bg-dark cursor-pointer shadow hover:border-dark mt-10 w-auto h-[auto] bg-success border p-3 rounded-full">
            <p className="text-white font-semibold">Check Weather</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default RightPanel;
