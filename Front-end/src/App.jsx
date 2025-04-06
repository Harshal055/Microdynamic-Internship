import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Signup from "./Pages/signup";

import LanguageSelectionPage from "./Pages/LanguageSelectionPage";
import Quiz from "./Components/Quiz";
import ResultPage from "./Pages/ResultPage";
import Overview from "./Components/Overview";
import Profile from "./Components/Profile";
import Challange from "./Pages/Challange";
import Explore from "./Pages/Explore";
import Contact from "./Pages/contact";
import Contest from "./Pages/contest";

function ConditionalNavbar() {
  const location = useLocation();
  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname.includes("/quiz") ||
    location.pathname.includes("/profile") ||
    location.pathname.includes("results");
    location.pathname.includes("/contact");
  return !hideNavbar && <Navbar />;
}

function App() {
  return (
    <Router>
      <ConditionalNavbar />
      <Routes>
        <Route path="/profile" element={<Profile />} />

        <Route path="/login" element={<Signup />} />
        <Route path="/LanguagePage" element={<LanguageSelectionPage />} />
        <Route path="/quiz/:language" element={<Quiz />} />

        <Route path="/results" element={<ResultPage />} />
        <Route path="/Challange" element={<Challange />} />
      
        <Route path="/Explore" element={<Explore />}/>
        <Route path="/" element={<Explore />}/>

        <Route path="/contact" element={<Contact />}/>
        <Route path="/contest" element={<Contest />}/>

        
        
      </Routes>
    </Router>
  );
}

export default App;
