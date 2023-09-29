import HomePage from "./structure/Homepage";
import AboutPage from "./structure/Aboutpage";
import Nav from "./structure/Nav";
// import DinnerMenuPage from "./structure/DinnerMenuPage";
// import GuestMembershipPage from "./structure/GuestMembershipPage";
// import ContactPage from "./structure/ContactPage";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React from "react";

function App() {
  return (
    // <HomePage/>
    <Router>
      <div>
       <Nav/>
       </div>
     <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/dinner-menu" element={DinnerMenuPage} />
       <Route path="/guest-membership" element={GuestMembershipPage} />
       <Route path="/contact" element={ContactPage} /> */}
    </Routes>
    </Router>
  );
}

export default App;
