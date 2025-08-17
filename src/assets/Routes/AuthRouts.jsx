// authRoutes.js
import Login from "../../Pages/login";
import OAuth from "../../Pages/OAuth";

export const authRoutes = [
  { path: "/login", element: <Login /> },
  { path: "/oauth-callback", element: <OAuth /> },
];
