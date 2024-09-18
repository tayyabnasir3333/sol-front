import { Navigate } from "react-router-dom";
import { browserRoutes } from "../constants/browserRoutes";
import { useSelector } from "react-redux";

export const PrivateRoute = (props) => {
  const user = useSelector((state) => state?.auth);
  if (user?.token) return props.children;

  return <Navigate to={props?.redirectLink || browserRoutes.LOGIN} replace />;
};
