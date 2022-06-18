import Head from "next/head";
import React, { FC } from "react";

interface AppHeadProps {
  title?: string;
}

const AppHead: FC<AppHeadProps> = ({ title }) => {
  return (
    <div>
      <Head>
        <title>
          {title !== "" ? `Weather Forecast - ${title}` : "Weather Forecast"}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default AppHead;
