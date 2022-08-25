import { Routes, Route, Link } from "react-router-dom";
import "./styles.css";
import Signin from "./components/Signin";

import Account from "./components/Account";

import { AuthContextProvider } from "./context/AuthContext";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Resources from "./Pages/Resources";
import Support from "./Pages/Support";
import Business from "./Pages/Business";

import BusinessHome from "./Business/BusinessApp";

import BusinessProfile from "./Business/Businesspages/BusinessProfile";
import BusinessRequests from "./Business/Businesspages/BusinessRequests";
import BusinessMessages from "./Business/Businesspages/BusinessMessages";
import BusinessSettings from "./Business/Businesspages/BusinessSettings";


import Volunteer from "./Pages/Volunteer";
import ProtectedRoute from "./components/ProtectedRoute";
import Logo from "./Images/logo(1).png";

function Navbar() {
  return (
    <div className="App">
    
      <nav class="nav">
      <Link to="/">
          <img src={Logo} class="logo" alt="logo" />
        </Link>
        <Link to="/about">About</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/support">Support</Link>
        <Link to="/signin">Sign In</Link>
       
      </nav>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/support" element={<Support />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/business" element={<Business />} />
          
          <Route path="/businesshome" element={<BusinessHome />} />
          <Route path="/businessprofile" element={<BusinessProfile />} />
          <Route path="/businessrequests" element={<BusinessRequests />} />
          <Route path="/businessmessages" element={<BusinessMessages />} />
          <Route path="/businesssettings" element={<BusinessSettings />} />
       

          <Route path="/volunteer" element={<Volunteer />} />
          
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default Navbar;
