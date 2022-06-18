import React from "react";
import HomeContainer from "../src/components/home/HomeContainer";
import Layout from "../src/components/Layout";
import ProtectedRoute from "../src/services/auth/ProtectedRoute";

const home = () => {
  return (
    <ProtectedRoute>
      <Layout>
        <HomeContainer />
      </Layout>
    </ProtectedRoute>
  );
};

export default home;
