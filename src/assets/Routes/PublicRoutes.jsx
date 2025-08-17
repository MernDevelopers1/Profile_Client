import { Navigate } from "react-router-dom";
import Login from "../../Pages/login";
import OAuth from "../../Pages/OAuth";
import HomePage from "../../Pages/HomePage";
import AboutPage from "../../Pages/AboutPage";
import ServicesPage from "../../Pages/ServicesPage";
import MyOwrk from "../../Pages/MyOwrk";
import ContactPage from "../../Pages/ContactPage";
import ImagePage from "../../Pages/ImagePage";
export const publicRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/oauth-callback",
    element: <OAuth />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/work",
    element: <MyOwrk />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  // {
  //   path: "/code/:id",
  //   element: <CodePage />,
  // },
  {
    path: "/preview/:id",
    element: <ImagePage />,
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
    element: <Navigate to={"/"} />, // Redirect to login for any unmatched routes
  },
];
