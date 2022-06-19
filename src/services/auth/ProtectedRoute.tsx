import React, { FC } from "react";
import useAuth from "./useAuth";
import Error from "next/error";
interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : isAuthenticated ? (
        children
      ) : (
        !isLoading && !isAuthenticated && <Error statusCode={401} />
      )}
    </div>
  );
};

export default ProtectedRoute;
