import HomePage from "./structure/Homepage";
// import AboutPage from "./structure/Aboutpage";
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
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
           {/* <li>
              <Link to="/dinner-menu">Dinner Menu</Link>
            </li>
        <li>
             <Link to="/guest-membership">Guest Membership</Link>
             </li>
            <li>
             <Link to="/contact">Contact</Link>
            </li> */}
          </ul>
        </nav>
       </div>
     <Routes>
     <Route exact path="/" element={<HomePage/>}/>
         {/* <Route path="/about" component={AboutPage} /> */}
        {/* <Route path="/dinner-menu" component={DinnerMenuPage} />
       <Route path="/guest-membership" component={GuestMembershipPage} />
       <Route path="/contact" component={ContactPage} /> */}
    </Routes>
    </Router>
  );
}

export default App;
