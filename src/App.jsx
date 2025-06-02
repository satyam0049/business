import React, { useEffect, useState, useRef } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import ChatBot from "./Components/ChatBot";
import LiveUsers from "./Components/LiveUsers";
import Login from "./Components/Login";

function App() {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);

    if (!storedUser && location.pathname === "/") return;
    if (!storedUser && location.pathname !== "/") {
      setUser({ role: "user" });
    }
    if (location.pathname !== "/" && storedUser?.role === "admin") return;
    if (storedUser?.role !== "admin" && location.pathname === "/") {
      navigate("/home");
    }
  }, [location.pathname, navigate]);

  const scrollToSection = (section) => {
    const sectionMap = {
      hero: heroRef,
      about: aboutRef,
      projects: projectsRef,
      contact: contactRef,
    };

    sectionMap[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (location.pathname === "/" && user?.role !== "admin") {
    return <Login />;
  }

  return (
    <div className="font-sans scroll-smooth">
      <Navbar scrollToSection={scrollToSection} />
      <LiveUsers />
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <div ref={heroRef}>
                <Hero />
              </div>
              <div ref={aboutRef}>
                <About />
              </div>
              <div ref={projectsRef}>
                <Projects />
              </div>
              <div ref={contactRef}>
                <Contact />
              </div>
            </>
          }
        />
      </Routes>
      <ChatBot />
    </div>
  );
}

export default App;
