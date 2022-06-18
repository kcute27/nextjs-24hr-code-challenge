import React, { FC } from "react";
import useAuth from "./useAuth";
import Error from "next/error";
interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        children
      ) : (
        <Error statusCode={401} title="Unauthorized" />
      )}
    </div>
  );
};

export default ProtectedRoute;
