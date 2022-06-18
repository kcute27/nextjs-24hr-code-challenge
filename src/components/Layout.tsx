import { useRouter } from "next/router";
import { FC, ReactElement, useEffect, useState } from "react";
import AppHead from "./AppHead";
import Navbar from "./navbar/NavbarContainer";

interface LayoutProps {
  children: ReactElement;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    setPageTitle(router.pathname.replace("/", "").toUpperCase());
  }, [router.pathname]);

  return (
    <div className="mx-auto bg-gray-50 flex h-screen w-[100%] min-w-fit flex-col">
      <AppHead title={pageTitle} />
      <Navbar />
      <div className="">{children}</div>
    </div>
  );
};

export default Layout;
