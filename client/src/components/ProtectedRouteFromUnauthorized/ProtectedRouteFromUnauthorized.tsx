import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useStoreContext } from "store/storeContext";

interface ProtectedRouteFromUnauthorizedI {
  path: string;
}

interface AuthenticationState {
  isLoading: boolean;
  isAuthenticated: boolean;
}

const ProtectedRouteFromUnauthorized: React.FC<ProtectedRouteFromUnauthorizedI> = ({
  children,
  path,
}) => {
  const [authState, setAuthState] = useState<AuthenticationState>({
    isLoading: true,
    isAuthenticated: false,
  });

  const { authStore } = useStoreContext();

  useEffect(() => {
    if (authStore.isAuth) {
      setAuthState({
        isLoading: false,
        isAuthenticated: true,
      });
      return;
    }

    authStore.checkAuthentication().then((resData) => {
      setAuthState({
        isLoading: false,
        isAuthenticated: resData.isAuthenticated,
      });
    });
  }, [authStore]);

  if (authState.isLoading) return null;

  return (
    <Route path={path}>
      {authState.isAuthenticated ? children : <Redirect to="/login" />}
    </Route>
  );
};

export default ProtectedRouteFromUnauthorized;
