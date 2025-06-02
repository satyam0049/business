import { useState } from "react";
import axios from "axios";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://business-backend-k93t.onrender.com/api/contact", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
     
      
    } catch (error) {
      alert("Failed to send message. Please try again later.");
      console.error("Error sending contact form:", error);
    }
  };
  

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 via-indigo-100 to-white dark:from-gray-900 dark:to-black">
      <main className="flex-grow w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-16 py-20">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 dark:text-white mb-4">
          Let’s <span className="text-indigo-600">Connect</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
          I’d love to hear about your ideas or just say hello.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/40 dark:bg-gray-800/30 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/10"
        >
          <div className="flex flex-col">
            <label className="text-gray-700 dark:text-gray-200 font-semibold mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 dark:text-gray-200 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-700 dark:text-gray-200 font-semibold mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Type your message..."
              value={formData.message}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-10 py-3 rounded-xl transition-transform hover:scale-105 shadow-lg"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-8 mt-10 text-3xl text-gray-600 dark:text-gray-300">
          <a href="https://linkedin.com" target="_blank" className="hover:text-blue-700 transition"><FaLinkedin /></a>
          <a href="https://github.com" target="_blank" className="hover:text-white transition"><FaGithub /></a>
          <a href="https://twitter.com" target="_blank" className="hover:text-sky-400 transition"><FaTwitter /></a>
        </div>
      </main>

      {/* Sticky & Narrow Footer */}
      <footer className="w-full bg-black text-gray-400 text-sm py-6 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} Satyam. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#home" className="hover:text-white transition">Home</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
