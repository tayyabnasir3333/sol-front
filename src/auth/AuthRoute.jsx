import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const AuthRoute = (props) => {
  const user = useSelector((state) => state?.auth);
  if (user?.token) {
    return <Navigate to={props.redirectLink} replace />;
  }
  return props.children;
};
