import { BrowserRouter, Routes, Route } from "react-router-dom";



import Home from "./pages/Home";
import Veg from "./pages/Veg";
import Dairy from "./pages/Dairy";



import NonVeg from "./pages/Nonveg";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import Checkout from "./Components/Checkout";
import { SearchProvider } from "./contextapi/SearchContext";
import Orders from "./Components/Order";




function App() {

  return (
  <BrowserRouter>
    <SearchProvider>
      <Navbar />

      <div className="pt-6">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/veg" element={<Veg />} />

          <Route path="/nonveg" element={<NonVeg />} />

          <Route path="/dairy" element={<Dairy />} />

          <Route path="/register" element={<Register />} />

          <Route path="/login" element={<Login />} />

          {/* <Route
            path="/login"
             element={<Login />}
          /> */}

          <Route path="/cart" element={<Cart />} />

           <Route path="/orders" element={<Orders />} />

          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </SearchProvider>
  </BrowserRouter>
);
}
export default App;