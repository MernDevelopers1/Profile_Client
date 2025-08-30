import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { commonRoutes } from "../assets/Routes/CommenRoutes";
import { authRoutes } from "../assets/Routes/AuthRouts";
import { protectedRoutes } from "../assets/Routes/ProtectedRoute";

import Loader from "./Loader";
import Footer from "../Components/Footer/Footer";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
} from "../utils/LocalStorageCURD";
import { VerifyTokenThunk } from "../ReduxConfig/Slices/AuthSlice";

const AppRoutes = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, verificationInProgress: loading } = useSelector(
    (state) => state.auth
  );
  const location = useLocation();
  const token = getFromLocalStorage("jwtToken");

  // verify token on mount
  useEffect(() => {
    if (token && !isAuthenticated) {
      dispatch(VerifyTokenThunk())
        .unwrap()
        .catch((error) => {
          if (error === "Invalid token" || error.message === "Invalid token") {
            removeFromLocalStorage("jwtToken");
          }
        });
    }
  }, [token, isAuthenticated, dispatch]);

  if (loading && token) return <Loader />;
  const showFooter =
    !["/login", "/register", "/oauth-callback"].includes(location.pathname) &&
    !location.pathname.startsWith("/dashboard");

  return (
    <>
      <Routes>
        {/* Always accessible */}
        {commonRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}

        {/* Only show login/register when NOT logged in */}
        {!isAuthenticated &&
          authRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}

        {/* Protected dashboard */}
        {isAuthenticated &&
          protectedRoutes.map(({ path, element, sublinks }) => (
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
          ))}

        {/* Redirect cases */}
        {!isAuthenticated && (
          <Route path="/dashboard/*" element={<Navigate to="/login" />} />
        )}
        {isAuthenticated && (
          <Route path="/login" element={<Navigate to="/dashboard" />} />
        )}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>

      {showFooter && <Footer />}
    </>
  );
};

export default AppRoutes;
