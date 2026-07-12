import { NavLink } from "react-router-dom";
import {
  FaLeaf,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-800 via-green-700 to-emerald-600 text-white mt-20">

      {/* Top Section */}

      <div className="max-w-screen-2xl mx-auto px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* FreshMart */}

        <div>

          <div className="flex items-center gap-3 mb-5">

            <div className="bg-white p-3 rounded-full">

              <FaLeaf className="text-green-700 text-2xl" />

            </div>

            <h2 className="text-3xl font-black">
              FreshMart
            </h2>

          </div>

          <p className="text-green-100 leading-8">

            Fresh vegetables, dairy products and premium quality
            groceries delivered to your doorstep with love and care.

          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-2xl font-bold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3">

            <li>
              <NavLink
                to="/"
                className="hover:text-yellow-300 transition"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/veg"
                className="hover:text-yellow-300 transition"
              >
                Vegetables
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/nonveg"
                className="hover:text-yellow-300 transition"
              >
                Non Veg
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dairy"
                className="hover:text-yellow-300 transition"
              >
                Dairy
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/cart"
                className="hover:text-yellow-300 transition"
              >
                Cart
              </NavLink>
            </li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-2xl font-bold mb-5">
            Contact Us
          </h3>

          <div className="space-y-4">

            <div className="flex items-center gap-3">

              <FaMapMarkerAlt />

              <span>Hyderabad, Telangana</span>

            </div>

            <div className="flex items-center gap-3">

              <FaPhoneAlt />

              <span>+91 7989321675</span>

            </div>

            <div className="flex items-center gap-3">

              <FaEnvelope />

              <span>support@freshmart.com</span>

            </div>

          </div>

        </div>

        {/* Social */}

        <div>

          <h3 className="text-2xl font-bold mb-5">
            Follow Us
          </h3>

          <p className="text-green-100 mb-5">

            Stay connected for latest offers,
            discounts and fresh arrivals.

          </p>

          <div className="flex gap-4">

            <a
              href="#"
              className="bg-white text-green-700 p-3 rounded-full hover:bg-yellow-300 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="bg-white text-green-700 p-3 rounded-full hover:bg-yellow-300 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="bg-white text-green-700 p-3 rounded-full hover:bg-yellow-300 transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="bg-white text-green-700 p-3 rounded-full hover:bg-yellow-300 transition"
            >
              <FaTwitter />
            </a>

          </div>

        </div>

      </div>

      {/* Bottom Section */}

      <div className="border-t border-green-500">

        <div className="max-w-screen-2xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-green-100 text-center">

            © 2026 FreshMart. All Rights Reserved.

          </p>

          <p className="text-green-100 text-center">

            Designed with ❤️ using React + TypeScript + Tailwind CSS

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;