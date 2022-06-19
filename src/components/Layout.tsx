import { useRouter } from "next/router";
import { FC, ReactElement, useEffect, useState } from "react";
import useUtils from "../utils/useUtils";
import AppHead from "./AppHead";
import Navbar from "./navbar/NavbarContainer";

interface LayoutProps {
  children: ReactElement;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const [pageTitle, setPageTitle] = useState("");
  const { getPageTitle } = useUtils();

  useEffect(() => {
    router.pathname === "/"
      ? setPageTitle("WELCOME")
      : setPageTitle(getPageTitle(router.pathname).toUpperCase());
  }, [router, getPageTitle]);

  return (
    <div className="mx-auto bg-gray-50 flex h-auto w-[100%] min-w-fit flex-col">
      <AppHead title={pageTitle} />
      <Navbar />
      <div className="">{children}</div>
    </div>
  );
};

export default Layout;
