import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" }
  ];

  const toggleLinks = () => {
    setShowLinks((prev) => !prev);
  };

  const navLinkClasses = ({ isActive }) =>
    `capitalize font-medium text-sm transition-colors duration-200 pt-3 ${
      isActive
        ? "text-violet-300 lg:text-violet-700"
        : "text-white lg:text-black hover:text-violet-400 lg:hover:text-violet-700"
    }`;

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-violet-700">
          <Link to="/">Triage Solutions</Link>
        </div>

        {/* Menu Button (Mobile) */}
        <div className="lg:hidden">
          <button onClick={toggleLinks} className="text-2xl text-violet-700 focus:outline-none">
            <RiMenu3Line />
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`
            ${showLinks ? "flex" : "hidden"} 
            lg:flex flex-col lg:flex-row gap-6 
            absolute lg:static right-0 top-16 lg:top-0 bg-violet-700 lg:bg-transparent 
            w-2/3 lg:w-auto px-4 py-6 lg:p-0 transition-all
          `}
        >
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={navLinkClasses}
              onClick={() => setShowLinks(false)}
            >
              {link.name}
            </NavLink>
          ))}

          {/* Get a Quote Button (Visible on all sizes now) */}
          <a
            href="mailto:info@triagesolutions.org"
            className="mt-4 lg:mt-0 bg-white lg:bg-violet-700 text-violet-700 lg:text-white border border-violet-700 lg:border-transparent px-5 py-2 rounded-full text-center hover:bg-violet-100 lg:hover:bg-violet-600 transition-all text-sm"
            onClick={() => setShowLinks(false)}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
