import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import Veg from "./Veg";
import Nonveg from "./Nonveg";
import Dairy from "./Dairy";
import Register from "./Components/Register";
import { FcAdvertising } from "react-icons/fc";
import Cart from "./Components/Cart";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1>FreshMart</h1>

        <Link to="/">Home</Link>{" "}
        <Link to="/veg">Vegetables</Link>{" "}
        <Link to="/nonveg">Non-Veg</Link>{" "}
        <Link to="/dairy">Dairy</Link>{" "}
        <Link to="/register" className="register-btn">
          Register
        </Link>
        
   <Link to="/cart" className="menu-link">
              <FcAdvertising size={26} />
              Cart {Cart.length}
            </Link>

      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<Nonveg />} />
        <Route path="/dairy" element={<Dairy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;