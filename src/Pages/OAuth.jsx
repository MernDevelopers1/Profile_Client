import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import savetolocalstorage from "../utils/LocalStorageCURD";

const OAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const token = params.get("token");
  useEffect(() => {
    if (token) {
      savetolocalstorage("jwtToken", token);
      navigate("/");
    }
  }, [token]);

  return (
    <div className="flex justify-center items-center h-screen p-4 word-break-all">
      <div className="bg-white p-10 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-4">Login with OAuth</h2>
        <p className="mb-4">
          You have successfully logged in with OAuth. You can now close this
          window.
        </p>
      </div>
    </div>
  );
};

export default OAuth;
