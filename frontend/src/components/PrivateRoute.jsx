import { Outlet, Navigate } from "react-router-dom";
import useAuthStatus from "../hooks/authStatus";
import SpinnerElm from "./Spinner";

function PrivateRoute() {
  const { checking, loggedIn } = useAuthStatus();

  if (checking) {
    return <SpinnerElm />;
  }

  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
