import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const links = ["home", "about", "services", "contact"];

  const toggleLinks = () => {
    setShowLinks((prev) => !prev);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-violet-700">LOGO</div>

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
            w-2/3 lg:w-auto px-4 py-6 lg:p-0 text-white lg:text-black transition-all
          `}
        >
          {links.map((link, index) => (
            <a
              key={link}
              href={`#${link}`}
              className={`capitalize font-medium text-sm hover:text-violet-400 lg:hover:text-violet-700 ${
                index === 0 ? "text-violet-300 lg:text-violet-700" : ""
              }`}
              onClick={() => setShowLinks(false)}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Quote Button */}
        <div className="hidden lg:flex">
          <button className="ml-4 bg-violet-700 text-white px-5 py-2 rounded-full hover:bg-violet-600 transition-all text-sm">
            Get a Quote
          </button>
        </div>
      </div>

      {/* Quote Button (Mobile below menu) */}
      {showLinks && (
        <div className="block lg:hidden px-4 pb-4">
          <button className="w-full bg-white text-violet-700 border border-violet-700 px-5 py-2 rounded-full hover:bg-violet-100 transition-all text-sm">
            Get a Quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
