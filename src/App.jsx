import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);

    // If no user stored and on root (login) page, do nothing
    if (!storedUser && location.pathname === "/") return;

    // If admin is required but not logged in
    if (!storedUser && location.pathname !== "/") {
      setUser({ role: "user" }); // default guest user
    }

    // If admin required but not logged in
    if (location.pathname !== "/" && storedUser?.role === "admin") {
      return;
    }

    if (storedUser?.role !== "admin" && location.pathname === "/") {
      navigate("/home");
    }
  }, [location.pathname, navigate]);

  if (location.pathname === "/" && user?.role !== "admin") {
    return <Login />;
  }

  return (
    <div className="font-sans">
      <Navbar />
      <LiveUsers />
      <Routes>
        <Route path="/home" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={user?.role === "admin" ? <LiveUsers /> : <Hero />} />
      </Routes>
      <ChatBot />
    </div>
  );
}

export default App;
