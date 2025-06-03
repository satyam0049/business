import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const Navbar = ({ scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    scrollToSection(id);
    setMenuOpen(false); // close mobile menu on click
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="./images.jpg"
            alt="BusinessPro Logo"
            className="w-12 h-12 rounded-full object-cover border-2 border-indigo-600 shadow"
          />
          <h1 className="text-xl sm:text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 tracking-wide">
            Business<span className="text-gray-800 dark:text-white">Pro*</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <span
              key={item.name}
              onClick={() => handleScroll(item.id)}
              className="cursor-pointer px-4 py-2 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-gray-800 hover:text-indigo-700 dark:hover:text-white transition-all duration-300"
            >
              {item.name}
            </span>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-dark dark:text-dark focus:outline-none"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          {navItems.map((item) => (
            <span
              key={item.name}
              onClick={() => handleScroll(item.id)}
              className="block cursor-pointer w-full px-4 py-2 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-blend-darken dark:hover:bg-gray-800 hover:text-indigo-700 dark:hover:text-white transition-all duration-300"
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
