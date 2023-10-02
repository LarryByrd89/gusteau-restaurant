import HomePage from "./structure/Homepage";
import AboutPage from "./structure/Aboutpage";
import Nav from "./structure/Nav";
import Menu from "./components/Menu";
import Footer from "./structure/Footer";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<Menu />} />
          {/* <Route path="/guest-membership" element={GuestMembershipPage} /> */}
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

