import { AiFillMail, AiFillPhone, AiFillTwitterSquare, AiFillFacebook } from "react-icons/ai";
import { CgInstagram } from "react-icons/cg";

const Header = () => {
  return (
    <header className="bg-gray-100 text-gray-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Contact Info */}
        <div className="grid grid-cols-2 gap-4">
          <a href="mailto:lormail@gmail.com" className="flex items-center gap-2 hover:text-violet-600 transition-colors">
            <AiFillMail className="text-lg" />
            <span className="hidden sm:inline">lormail@gmail.com</span>
          </a>
          <a href="tel:+212698584458" className="flex items-center gap-2 hover:text-violet-600 transition-colors">
            <AiFillPhone className="text-lg" />
            <span className="hidden sm:inline">+212698584458</span>
          </a>
        </div>

        {/* Socials */}
        <div className="grid grid-cols-3 gap-4 items-center">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-xl hover:text-pink-500 transition-colors">
            <CgInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-xl hover:text-blue-500 transition-colors">
            <AiFillTwitterSquare />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-xl hover:text-blue-700 transition-colors">
            <AiFillFacebook />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
