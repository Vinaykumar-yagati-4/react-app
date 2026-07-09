import { NavLink } from "react-router-dom";
import {
  FaLeaf,
  FaDrumstickBite,
  FaCheese,
  FaShoppingCart,
  FaKey,
} from "react-icons/fa";

import { useContext } from "react";
import { CartContext } from "../contextapi/CartContext";


function Navbar() {

  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce(

    (sum, item) =>

      sum + item.quantity,

    0

  );
  return (
    <nav className="bg-emerald-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <h1 className="text-3xl font-bold">
          🛒 FreshMart
        </h1>

        <div className="flex gap-8 text-lg font-medium">

          <NavLink to="/">
            Home
          </NavLink>

          <NavLink
            to="/veg"
            className="flex items-center gap-2 hover:text-yellow-300"
          >
            <FaLeaf />
            Veg
          </NavLink>

          <NavLink
            to="/nonveg"
            className="flex items-center gap-2 hover:text-yellow-300"
          >
            <FaDrumstickBite />
            Non Veg
          </NavLink>

          <NavLink
            to="/dairy"
            className="flex items-center gap-2 hover:text-yellow-300"
          >
            <FaCheese />
            Dairy
          </NavLink>

          <NavLink
            to="/register"
            className="flex items-center gap-2 hover:text-yellow-300"
          >
            <FaKey />
            Register
          </NavLink>

          <NavLink to="/login">

            Login

          </NavLink>

          <NavLink

            to="/cart"

            className="relative"

          >

            <FaShoppingCart

              className="text-2xl"

            />

            {

              totalItems > 0 &&

              <span

                className="

            absolute

            -top-3

            -right-3

            bg-red-500

            w-6

            h-6

            rounded-full

            flex

            items-center

            justify-center

            text-xs

            font-bold

            "

              >

                {totalItems}

              </span>

            }

          </NavLink>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;