import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { IComponentStore } from "../../src/components/types";
import useStore from "../../src/store/useStore";

const Weather = () => {
  const router = useRouter();
  const { searchKey } = useStore((state: IComponentStore) => state);
  useEffect(() => {
    router.push(`/weather/${searchKey !== "" ? searchKey : "Philippines"}`);
  }, [router, searchKey]);
};

export default Weather;
