import { NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

import {
  FaLeaf,
  FaDrumstickBite,
  FaCheese,
  FaShoppingCart,
  FaKey,
  FaSearch,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
  FaBoxOpen,
} from "react-icons/fa";

import { useContext, useState } from "react";
import { CartContext } from "../contextapi/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const loggedInUser = JSON.parse(
    localStorage.getItem("loggedInUser") || "null"
  );

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-200">

      <div className="max-w-screen-2xl mx-auto px-8">

        <div className="flex items-center justify-between h-20 gap-6">

          {/* LEFT SECTION */}

          <div className="flex items-center gap-8">

            {/* Logo */}

            <NavLink
              to="/"
              className="flex items-center gap-6"
            >

              <div className="bg-white rounded-2xl shadow-md p-2 w-20 h-20 flex items-center justify-center flex-shrink-0">

                <img
                  src={logo}
                  alt="FreshMart"
                  className="w-14 h-14 object-contain"
                />

              </div>

              <div>

                <h1 className="text-2xl font-extrabold text-green-700 tracking-wide">
                  FreshMart
                </h1>

                <p className="text-sm text-gray-500">
                  Fresh Grocery Store
                </p>

              </div>

            </NavLink>

            {/* Delivery */}

            <div className="hidden xl:flex items-center gap-3 bg-green-50 px-4 py-2 rounded-2xl border border-green-200 shadow-sm">

              <div className="bg-green-600 text-white p-3 rounded-xl">

                <FaMapMarkerAlt />

              </div>

              <div>

                <p className="text-xs text-gray-500">
                  Deliver To
                </p>

                <h3 className="font-bold text-gray-800">
                  Hyderabad
                </h3>

              </div>

            </div>

          </div>

          {/* SEARCH */}

          <div className="hidden lg:flex flex-1 min-w-[320px] max-w-xl mx-6">

            <div className="flex items-center w-full bg-gray-100 rounded-2xl px-5 py-4 border border-gray-200 focus-within:border-green-600 transition">

              <FaSearch className="text-gray-400 text-lg" />

              <input
                type="text"
                value={search}
                onChange={(e) => {
                  const value = e.target.value;

                  setSearch(value);

                  if (
                    location.pathname === "/veg" ||
                    location.pathname === "/nonveg" ||
                    location.pathname === "/dairy"
                  ) {
                    navigate(
                      `${location.pathname}?search=${encodeURIComponent(value)}`
                    );
                  }
                }}
                placeholder="Search vegetables, fruits, milk..."
                className="bg-transparent outline-none ml-4 w-full text-gray-700"
              />

            </div>

          </div>
                    {/* ================= Desktop Menu ================= */}

          <div className="hidden xl:flex items-center gap-1 flex-shrink-0">

            {/* Home */}

            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-green-600 text-white"
                    : "text-gray-700 hover:bg-green-100 hover:text-green-700"
                }`
              }
            >
              Home
            </NavLink>

            {/* Veg */}

            <NavLink
              to="/veg"
              className={({ isActive }) =>
                `flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-green-600 text-white"
                    : "text-gray-700 hover:bg-green-100 hover:text-green-700"
                }`
              }
            >
              <FaLeaf />
              Veg
            </NavLink>

            {/* Non Veg */}

            <NavLink
              to="/nonveg"
              className={({ isActive }) =>
                `flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-green-600 text-white"
                    : "text-gray-700 hover:bg-green-100 hover:text-green-700"
                }`
              }
            >
              <FaDrumstickBite />
              Non Veg
            </NavLink>

            {/* Dairy */}

            <NavLink
              to="/dairy"
              className={({ isActive }) =>
                `flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-green-600 text-white"
                    : "text-gray-700 hover:bg-green-100 hover:text-green-700"
                }`
              }
            >
              <FaCheese />
              Dairy
            </NavLink>

            {/* Orders */}

            <NavLink
              to="/orders"
              className={({ isActive }) =>
                `flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-green-600 text-white"
                    : "text-gray-700 hover:bg-green-100 hover:text-green-700"
                }`
              }
            >
              <FaBoxOpen />
              Orders
            </NavLink>

             {/* Cart */}

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `relative flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-green-600 text-white"
                    : "bg-yellow-400 hover:bg-yellow-500 text-gray-800"
                }`
              }
            >
              <FaShoppingCart />

              Cart

              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold animate-pulse">
                  {totalItems}
                </span>
              )}
            </NavLink>

            {/* Login / Register */}

            {!loggedInUser ? (
              <>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-green-600 text-white"
                        : "text-gray-700 hover:bg-green-100 hover:text-green-700"
                    }`
                  }
                >
                  <FaKey />
                  Login
                </NavLink>

                <NavLink
                  to="/register"
                  className="min-w-[110px] text-center bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl font-semibold transition-all duration-300"
                >
                  Register
                </NavLink>
              </>
            ) : (
              <>
                {/* Welcome */}

                <div className="hidden 2xl:block text-sm text-gray-600 px-2 whitespace-nowrap">
                  Welcome,
                  <span className="font-bold text-green-700 ml-1">
                    {loggedInUser.name}
                  </span>
                </div>

                {/* Logout */}

                <button
                  onClick={() => {
                    localStorage.removeItem("loggedInUser");
                    navigate("/login");
                  }}
                  className="min-w-[110px] bg-red-500 hover:bg-red-600 text-white text-center px-5 py-2 rounded-xl font-semibold transition-all duration-300"
                >
                  Logout
                </button>
              </>
            )}

            {/* Cart */}

            {/* <NavLink
              to="/cart"
              className={({ isActive }) =>
                `relative flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-green-600 text-white"
                    : "bg-yellow-400 hover:bg-yellow-500 text-gray-800"
                }`
              }
            >
              <FaShoppingCart />

              Cart

              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold animate-pulse">
                  {totalItems}
                </span>
              )}
            </NavLink> */}

          </div>

          {/* Mobile Menu Button */}

          <button
            className="xl:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

              {/* ================= Mobile Menu ================= */}

      {menuOpen && (
        <div className="xl:hidden border-t border-gray-200 py-5 space-y-4 bg-white">

          {/* Mobile Search */}

          <div className="flex items-center bg-gray-100 rounded-2xl px-4 py-3">

            <FaSearch className="text-gray-400" />

            <input
              type="text"
              value={search}
              onChange={(e) => {
                const value = e.target.value;

                setSearch(value);

                if (
                  location.pathname === "/veg" ||
                  location.pathname === "/nonveg" ||
                  location.pathname === "/dairy"
                ) {
                  navigate(
                    `${location.pathname}?search=${encodeURIComponent(value)}`
                  );
                }
              }}
              placeholder="Search products..."
              className="bg-transparent outline-none ml-3 w-full"
            />

          </div>

          {/* Home */}

          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block px-4 py-3 rounded-xl hover:bg-green-100"
          >
            🏠 Home
          </NavLink>

          {/* Veg */}

          <NavLink
            to="/veg"
            onClick={() => setMenuOpen(false)}
            className="block px-4 py-3 rounded-xl hover:bg-green-100"
          >
            🥬 Veg
          </NavLink>

          {/* NonVeg */}

          <NavLink
            to="/nonveg"
            onClick={() => setMenuOpen(false)}
            className="block px-4 py-3 rounded-xl hover:bg-green-100"
          >
            🍗 Non Veg
          </NavLink>

          {/* Dairy */}

          <NavLink
            to="/dairy"
            onClick={() => setMenuOpen(false)}
            className="block px-4 py-3 rounded-xl hover:bg-green-100"
          >
            🥛 Dairy
          </NavLink>

          {/* Orders */}

          <NavLink
            to="/orders"
            onClick={() => setMenuOpen(false)}
            className="block px-4 py-3 rounded-xl hover:bg-green-100"
          >
            📦 Orders
          </NavLink>

          {!loggedInUser ? (
            <>
              <NavLink
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 rounded-xl hover:bg-green-100"
              >
                🔐 Login
              </NavLink>

              <NavLink
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="block bg-green-600 text-white text-center px-4 py-3 rounded-xl"
              >
                Register
              </NavLink>
            </>
          ) : (
            <>
              <div className="px-4 font-semibold text-green-700">
                Welcome, {loggedInUser.name}
              </div>

              <button
                onClick={() => {
                  localStorage.removeItem("loggedInUser");
                  navigate("/login");
                  setMenuOpen(false);
                }}
                className="w-full bg-red-500 text-white py-3 rounded-xl"
              >
                Logout
              </button>
            </>
          )}

          {/* Cart */}

          <NavLink
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className="flex justify-between items-center bg-yellow-400 px-4 py-3 rounded-xl"
          >
            <span className="flex items-center gap-2">
              <FaShoppingCart />
              Cart
            </span>

            {totalItems > 0 && (
              <span className="bg-red-500 text-white w-6 h-6 rounded-full flex justify-center items-center text-xs font-bold">
                {totalItems}
              </span>
            )}
          </NavLink>

        </div>
      )}

    </div>

  </nav>
  );
}

export default Navbar;