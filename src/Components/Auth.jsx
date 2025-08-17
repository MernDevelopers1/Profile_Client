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
  const { isAuthenticated, verificationInProgress: loading } = useSelector(
    (state) => state.auth
  );
  const location = useLocation();
  const showFooter =
    location.pathname !== "/login" &&
    location.pathname !== "/register" &&
    location.pathname !== "/dashboard" &&
    location.pathname !== "/oauth-callback";
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
        {routesToRender.map(({ path, element, sublinks }) => {
          if (sublinks) {
            return (
              <Route key={path} path={path} element={element}>
                {sublinks.map((sublink) =>
                  sublink.path === "home" ? (
                    <Route key={sublink.path} index element={sublink.element} />
                  ) : (
                    <Route
                      key={sublink.path}
                      path={sublink.path}
                      element={sublink.element}
                    />
                  )
                )}
              </Route>
            );
          }
          return <Route key={path} path={path} element={element} />;
        })}
      </Routes>
      {showFooter && <Footer />}
    </>
  );
};

export default AppRoutes;
