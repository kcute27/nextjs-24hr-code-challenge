import React, { FC } from "react";
import Image from "next/image";

interface BrandProps {
  name: string;
  logoPath: string;
}

const Brand: FC<BrandProps> = ({ name, logoPath }) => {
  return (
    <div className="flex w-fit max-w-[300px] flex-row place-items-center cursor-pointer">
      <Image
        src={logoPath}
        width={50}
        height={50}
        objectFit="contain"
        layout="fixed"
        alt="logo"
      />
      <h3 className="text-dark text-xl m-3 truncate font-semibold hover:text-info">
        {name}
      </h3>
    </div>
  );
};

export default Brand;
