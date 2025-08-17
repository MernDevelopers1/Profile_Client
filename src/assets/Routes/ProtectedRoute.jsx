// protectedRoutes.js
import { Navigate } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import Settings from "../../Components/Dashboard/Settings";
import About from "../../Components/Dashboard/About";
import Education from "../../Components/Dashboard/Education";
import Home from "../../Components/Dashboard/Home";
import Skills from "../../Components/Dashboard/Skills";
import Projects from "../../Components/Dashboard/Projects";
import Achivements from "../../Components/Dashboard/Achivements";

export const protectedRoutes = [
  {
    path: "/dashboard",
    element: <Dashboard />,
    sublinks: [
      { path: "home", element: <Home /> },
      { path: "settings", element: <Settings /> },
      { path: "about", element: <About /> },
      { path: "education_experience", element: <Education /> },
      { path: "skills_technologies", element: <Skills /> },
      { path: "projects", element: <Projects /> },
      { path: "certifications_achievements", element: <Achivements /> },
      { path: "*", element: <Navigate to={"/dashboard"} /> },
    ],
  },
];
