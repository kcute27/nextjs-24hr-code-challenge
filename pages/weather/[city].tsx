import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import Layout from "../../src/components/Layout";
import { IWeather } from "../../src/components/weather/types";
import WeatherContainer from "../../src/components/weather/WeatherContainer";
import { WEATHER_API_APPID } from "../../src/constants/auth";
import { WEATHER_API } from "../../src/constants/urls";
import ProtectedRoute from "../../src/services/auth/ProtectedRoute";

const City: NextPage = () => {
  const router = useRouter();
  const [weatherData, setWeatherData] = useState<IWeather | null>(null);
  const url = `${WEATHER_API}?q=${router.query.city}&appid=${WEATHER_API_APPID}&cnt=5&units=metric`;
  const { data, isValidating, error } = useSWR(url);

  useEffect(() => {
    setWeatherData(data);
  }, [data]);

  return (
    <ProtectedRoute>
      <Layout>
        <WeatherContainer
          weatherData={weatherData}
          isLoading={isValidating}
          error={error}
        />
      </Layout>
    </ProtectedRoute>
  );
};

// export const getServerSideProps = async ({ query }: any) => {
//   const url = `${WEATHER_API}?q=${query.city}&appid=${WEATHER_API_APPID}&cnt=40`;
//   const { data } = await axios.get(url);
//   return { props: { data } };
// };

export default City;
