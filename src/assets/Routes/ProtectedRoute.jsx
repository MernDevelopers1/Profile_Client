import HomePage from "../../Pages/HomePage";
import AboutPage from "../../Pages/AboutPage";
import ServicesPage from "../../Pages/ServicesPage";
import MyOwrk from "../../Pages/MyOwrk";
import ContactPage from "../../Pages/ContactPage";
import ImagePage from "../../Pages/ImagePage";
import { Navigate } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import Settings from "../../Components/Dashboard/Settings";
import About from "../../Components/Dashboard/About";
import Education from "../../Components/Dashboard/Education";
import Home from "../../Components/Dashboard/Home";
import Skills from "../../Components/Dashboard/Skills";
import Projects from "../../Components/Dashboard/Projects";
import Achivements from "../../Components/Dashboard/Achivements";
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
    path: "/dashboard",
    element: <Dashboard />, // Ensure Dashboard component is imported
    sublinks: [
      {
        path: "home",
        element: <Home />, // Placeholder for home page within dashboard
      },
      {
        path: "settings",
        element: <Settings />, // Placeholder for settings page
      },
      {
        path: "About",
        element: <About />, // Placeholder for analysis page
      },
      {
        path: "education_experience",
        element: <Education />, // Placeholder for education and experience page
      },
      {
        path: "skills_technologies",
        element: <Skills />, // Placeholder for skills and technologies page
      },
      {
        path: "projects",
        element: <Projects />, // Placeholder for projects page
      },
      {
        path: "certifications_achievements",
        element: <Achivements />, // Placeholder for certifications and achievements page
      },
      {
        path: "*",
        element: <Navigate to={"/dashboard"} />, // Redirect to home if no sublink matches
      },
    ],
  },
  {
    path: "/*",
    element: <Navigate to={"/"} />, // Redirect to login for any unmatched routes
  },
];
