import { FC, ReactElement, useEffect, useState } from "react";
import AppHead from "./AppHead";

interface LayoutProps {
  children: ReactElement;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="mx-auto flex h-[100%] min-h-screen w-[100%] min-w-fit flex-col bg-gray-100">
      <AppHead />

      <div className="my-[70px]">{children}</div>
    </div>
  );
};

export default Layout;
