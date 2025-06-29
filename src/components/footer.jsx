import { Component } from "react";
import { CgInstagram } from "react-icons/cg";
import { AiFillTwitterSquare, AiFillFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../assets/logowithoutbg.png"

class Footer extends Component {
  render() {
    return (
      <footer className="bg-gray-100 py-12 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3 text-gray-700">
          {/* About */}
          <div>
                    <div className="text-xl font-bold text-violet-700 flex flex-row">
                      <img src={logo} alt="logo" className="h-10 w-10"/>
                      <Link to="/" className="py-2">Triage Solutions</Link>
                    </div>
            <p className="mb-4">
              We are committed to delivering innovative solutions in outsourcing
              and HR management, helping your business grow through smart and
              reliable services.
            </p>
            <ul className="flex space-x-4 text-2xl text-violet-700">
              <li>
                <a href="#">
                  <AiFillFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <CgInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                  <AiFillTwitterSquare />
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-violet-700 mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/outsourcing" className="hover:text-violet-600">
                  Outsourcing
                </Link>
              </li>
              <li>
                <Link to="/services/hr-management" className="hover:text-violet-600">
                  HR Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-violet-700 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <p>Capital plaza G11 markaz islamabad</p>
                </li>
                <li>
                  <a href="tel:+923445927011" className="hover:text-violet-600 block">
                    Office: +92 344 5927011
                  </a>
                  <a href="tel:+923135009276" className="hover:text-violet-600 block">
                    Mobile: +92 313 5009276
                  </a>
                </li>
                <li>
                <a href="mailto:info@triagesolutions.org" className="hover:text-violet-600">
                  Email: info@triagesolutions.org
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
