import { Navigate, Outlet } from "react-router-dom";

// Helper to check JWT in localStorage
const token = localStorage.getItem("jwtToken");
const isAuthenticated = () => {
  return !!token;
};

const ProtectedRoutes = () => {
  // Optionally, you can also use Redux state for auth
  // const { isAuthenticated } = useSelector((state) => state.auth);

  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};
export const PublicRoute = ({ children }) => {
  return isAuthenticated() ? <Navigate to="/" replace /> : children;
};
export default ProtectedRoutes;
