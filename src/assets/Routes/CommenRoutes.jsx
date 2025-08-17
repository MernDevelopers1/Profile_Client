// commonRoutes.js
import HomePage from "../../Pages/HomePage";
import AboutPage from "../../Pages/AboutPage";
import ServicesPage from "../../Pages/ServicesPage";
import MyOwrk from "../../Pages/MyOwrk";
import ContactPage from "../../Pages/ContactPage";
import ImagePage from "../../Pages/ImagePage";

export const commonRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/services", element: <ServicesPage /> },
  { path: "/work", element: <MyOwrk /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/preview/:id", element: <ImagePage /> },
];
