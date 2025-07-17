import HomePage from "../../Pages/HomePage";
import AboutPage from "../../Pages/AboutPage";
import ServicesPage from "../../Pages/ServicesPage";
import MyOwrk from "../../Pages/MyOwrk";
import ContactPage from "../../Pages/ContactPage";
import ImagePage from "../../Pages/ImagePage";
import { Navigate } from "react-router-dom";
// import CodePage from "../../Pages/CodePage"; // Uncomment if needed

export const ProtectedRoutes = [
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
  {
    path: "/*",
    element: <Navigate to={"/"} />, // Redirect to login for any unmatched routes
  },
];
