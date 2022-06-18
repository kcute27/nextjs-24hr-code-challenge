import React from "react";
import Layout from "../src/components/Layout";
import ProtectedRoute from "../src/services/auth/ProtectedRoute";

const home = () => {
  return (
    <ProtectedRoute>
      <Layout>
        <div></div>
      </Layout>
    </ProtectedRoute>
  );
};

export default home;
