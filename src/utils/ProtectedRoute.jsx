import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const ProtectedRoute = ({ redirectPaht = "/Login" }) => {
  const { user } = useAuth();
  console.log("Estado de autenticación:", user);
  if (user === null) {
    return <Navigate to={redirectPaht} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
