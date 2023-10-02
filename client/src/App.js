import HomePage from "./structure/Homepage";
import AboutPage from "./structure/Aboutpage";
import Membership from "./structure/Membership";
import Contact from "./components/Contact"
import Nav from "./structure/Nav";
import Menu from "./components/Menu";
import Footer from "./structure/Footer";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./utils/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router scrollRestoration="auto">
        <div>
          <Nav />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/guest-membership" element={<Membership/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
