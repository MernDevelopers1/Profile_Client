import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import { ProtectedRoutes } from "../assets/Routes/ProtectedRoute";
import { publicRoutes } from "../assets/Routes/PublicRoutes";
import Footer from "../Components/Footer/Footer";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
} from "../utils/LocalStorageCURD";
import Loader from "./Loader";
import { VerifyTokenThunk } from "../ReduxConfig/Slices/AuthSlice";

const AppRoutes = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  const location = useLocation();
  const showFooter =
    publicRoutes.filter((route) => route.path === location.pathname).length ===
    0;
  const token = getFromLocalStorage("jwtToken");
  useEffect(() => {
    // Only verify if token exists and not already authenticated
    if (token && !isAuthenticated) {
      dispatch(VerifyTokenThunk())
        .unwrap()
        .catch((error) => {
          // Remove token if verification fails
          if (error === "Invalid token" || error.message === "Invalid token")
            removeFromLocalStorage("jwtToken");
        });
    }
  }, [token, isAuthenticated, dispatch]);

  // Optionally show loading spinner while verifying
  if (loading && token) return <Loader />;

  const routesToRender = isAuthenticated ? ProtectedRoutes : publicRoutes;

  return (
    <>
      <Routes>
        {routesToRender.map(({ path, element }) => {
          return <Route key={path} path={path} element={element} />;
        })}
      </Routes>
      {showFooter && <Footer />}
    </>
  );
};

export default AppRoutes;
