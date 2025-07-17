import { Navigate } from "react-router-dom";
import Login from "../../Pages/login";
import OAuth from "../../Pages/OAuth";

export const publicRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/oauth-callback",
    element: <OAuth />,
  },
  //   {
  //     path: "/register",
  //     element: <LoginComponent />, // Assuming the same component is used for registration
  //   },
  //   {
  //     path: "/forgot-password",
  //     element: <LoginComponent />, // Assuming the same component is used for forgot password
  //   },
  //   {
  //     path: "/reset-password/:token",
  //     element: <ResetPasswordComponent />,
  //   },
  //   {
  //     path: "/logout",
  //     element: <LogoutComponent />,
  //   },
  {
    path: "/*",
    element: <Navigate to={"/login"} />, // Redirect to login for any unmatched routes
  },
];
