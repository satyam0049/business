import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiEye, FiEyeOff } from "react-icons/fi";

// Hardcoded admin credentials
const adminUser = {
  email: "admin@example.com",
  password: "admin123",
  role: "admin",
};

const Login = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Clear any non-admin user data on mount
  useEffect(() => {
    localStorage.removeItem("user");
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === adminUser.email && password === adminUser.password) {
      localStorage.setItem("user", JSON.stringify(adminUser));
      navigate("/home");
    } else {
      setError("Only admin is allowed to log in.");  
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-500 flex justify-center items-center px-4">
      <motion.form
        onSubmit={handleLogin}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="backdrop-blur-md bg-white/20 rounded-3xl shadow-2xl px-10 py-12 w-full max-w-md border border-white/30"
      >
        <h1 className="text-4xl font-extrabold text-white text-center mb-6 tracking-wide drop-shadow">
           Admin Login
        </h1>

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-200 bg-red-500/20 p-2 text-center rounded mb-4"
          >
            {error}
          </motion.p>
        )}

        <div className="mb-6">
          <label className="block text-white mb-1 font-medium">Email</label>
          <input
            type="email"
            placeholder="admin@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-pink-300 text-gray-800 font-medium"
          />
        </div>

        <div className="mb-8 relative">
          <label className="block text-white mb-1 font-medium">Password</label>
          <input
            type={showPass ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-pink-300 text-gray-800 font-medium"
            minLength={4}
          />
          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="absolute top-9 right-3 text-gray-600"
          >
            {showPass ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </button>
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 rounded-lg bg-white text-pink-600 font-bold text-lg shadow-lg hover:bg-gray-100 transition"
        >
          Login
        </motion.button>

        <p className="text-center text-white text-sm mt-6 opacity-80">
          Admin Only Access: <code>admin@example.com</code> | <code>admin123</code>
        </p>
      </motion.form>
    </div>
  );
};

export default Login;
