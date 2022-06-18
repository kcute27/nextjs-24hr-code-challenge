import React from "react";
import LogoutButton from "./LogoutButton";
import MenusButton from "./MenusButton";

const RightContainer = () => {
  return (
    <div className="flex w-[300px] max-w-[300px] place-content-end place-items-center">
      <LogoutButton />
      <MenusButton />
    </div>
  );
};

export default RightContainer;
