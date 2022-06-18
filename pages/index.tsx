import type { NextPage } from "next";
import Layout from "../src/components/Layout";
import WelcomeContainer from "../src/components/welcome/WelcomeContainer";

const Index: NextPage = () => {
  return (
    <Layout>
      <WelcomeContainer />
    </Layout>
  );
};

export default Index;
