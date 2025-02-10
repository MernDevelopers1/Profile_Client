// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ServicesPage from './Pages/ServicesPage';
import MyOwrk from './Pages/MyOwrk';
import ContactPage from './Pages/ContactPage';
// import CodePage from './Pages/CodePage';
import ImagePage from './Pages/ImagePage';
// import Navbar from './Components/Navbar/Navbar';
// import Topbar from './Components/Topbar';
import Footer from './Components/Footer/Footer';
// import AnotherPage from './Pages/AnotherPage'; // Example of another page

const App = () => {
  return (
    <Router>
      {/* <Topbar/> */}
      {/* <Navbar/> */}
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage/>} />
          <Route exact path="/services" element={<ServicesPage/>} />
          <Route exact path="/work" element={<MyOwrk/>} />
          <Route exact path="/contact" element={<ContactPage/>} />
          {/* <Route exact path="/code/:id" element={<CodePage/>} /> */}
          <Route exact path="/preview/:id" element={<ImagePage/>} />
        </Routes>
        <Footer/>
    </Router>
  );
};

export default App;
