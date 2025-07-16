// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import MyOwrk from "./Pages/MyOwrk";
import ContactPage from "./Pages/ContactPage";
// import CodePage from './Pages/CodePage';
import ImagePage from "./Pages/ImagePage";
// import Navbar from './Components/Navbar/Navbar';
// import Topbar from './Components/Topbar';
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/login";
import ProtectedRoutes, { PublicRoute } from "./Components/ProtectedRoutes";
// import AnotherPage from './Pages/AnotherPage'; // Example of another page

const App = () => {
  return (
    <Router>
      {/* <Topbar/> */}
      {/* <Navbar/> */}
      <Routes>
        {/* Public routes */}
        <Route
          exact
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        {/* Protected routes */}
        <Route element={<ProtectedRoutes />}>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/services" element={<ServicesPage />} />
          <Route exact path="/work" element={<MyOwrk />} />
          <Route exact path="/contact" element={<ContactPage />} />
          {/* <Route exact path="/code/:id" element={<CodePage/>} /> */}
          <Route exact path="/preview/:id" element={<ImagePage />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
