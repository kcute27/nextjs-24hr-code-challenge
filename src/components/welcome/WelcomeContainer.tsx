import React from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

const WelcomeContainer = () => {
  return (
    <div className="px-2 h-screen place-items-center flex">
      <div className="w-[100%] lg:w-[60%] md:w-[70%] sm:w-[80%] flex h-[500px] mx-auto flex-col lg:flex-row md:flex-row sm:flex-row">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  );
};

export default WelcomeContainer;
