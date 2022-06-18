import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

const WelcomeContainer = () => {
  return (
    <div className="px-2 h-screen mt-[80px] lg:mt-0 md:mt-0 sm:mt-0 lg:place-items-center md:place-items-center sm:place-items-center flex">
      <div className="w-[100%] lg:w-[60%] md:w-[70%] sm:w-[80%] mx-auto flex h-[500px] flex-col lg:flex-row md:flex-row sm:flex-row">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  );
};

export default WelcomeContainer;
