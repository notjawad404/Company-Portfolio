import { Component } from "react";
import { CgInstagram } from "react-icons/cg";
import { AiFillTwitterSquare, AiFillFacebook } from "react-icons/ai";

class Footer extends Component {
  render() {
    return (
      <footer className="bg-gray-100 py-12 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3 text-gray-700">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-violet-700 mb-4">LOGO</h3>
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
                <a href="/services/outsourcing" className="hover:text-violet-600">
                  Outsourcing
                </a>
              </li>
              <li>
                <a href="/services/hr-management" className="hover:text-violet-600">
                  HR Management
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-violet-700 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <p>Lahore, Pakistan</p>
              </li>
              <li>
                <a href="tel:+923001234567" className="hover:text-violet-600">
                  Phone: +92 300 1234567
                </a>
              </li>
              <li>
                <a href="mailto:info@yourcompany.com" className="hover:text-violet-600">
                  Email: info@yourcompany.com
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
