import React, { FC } from "react";
import Image from "next/image";

interface BrandProps {
  name: string;
  logoPath: string;
}

const Brand: FC<BrandProps> = ({ name, logoPath }) => {
  return (
    <div className="flex w-fit flex-row place-items-center cursor-pointer">
      <Image
        src={logoPath}
        width={50}
        height={50}
        objectFit="contain"
        alt="logo"
        className="shadow"
      />
      <h3 className="text-slate-600 text-lg m-3 font-semibold hover:text-blue-600">
        {name}
      </h3>
    </div>
  );
};

export default Brand;
