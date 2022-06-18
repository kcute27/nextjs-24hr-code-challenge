import { FC, ReactElement } from "react";
import AppHead from "./AppHead";
import Navbar from "./navbar/NavbarContainer";

interface LayoutProps {
  children: ReactElement;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="mx-auto bg-gray-50 flex h-screen w-[100%] min-w-fit flex-col">
      <AppHead />
      <Navbar />
      <div className="">{children}</div>
    </div>
  );
};

export default Layout;
