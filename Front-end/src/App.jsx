import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Signup from "./Pages/signup";
import HeroSection from "./Components/HeroSection";
import ChallengesSection from "./Components/ChallengesSection";
import CommunitySection from "./Components/CommunitySection";
import Footer from "./Components/Footer";
import LanguageSelectionPage from "./Pages/LanguageSelectionPage";

function App() {
  return (
    <Router>
      <ConditionalNavbar />
      <Routes>
        <Route path="/login" element={<Signup />} />
        <Route path="/LanguagePage" element={<LanguageSelectionPage />} />
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <ChallengesSection />
              <CommunitySection />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

function ConditionalNavbar() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login" || location.pathname === "/signup";
  return !hideNavbar && <Navbar />;
}

export default App;