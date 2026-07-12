import { useContext, useRef, useState } from "react";
import { coupons } from "../data/Coupons";
import {
  FaMoneyBillWave,
  FaShoppingCart,
  FaTicketAlt,
  FaCheckCircle,
  FaTrash,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { CartContext } from "../contextapi/CartContext";

import { useNavigate } from "react-router-dom";


function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);


  const couponRef = useRef<HTMLInputElement>(null);

  
  const grandTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );


  
    const [couponPercent, setCouponPercent] = useState(0);
    const [message, setMessage] = useState("");

    const applyCoupon = () => {
    const couponCode = couponRef.current?.value.trim() || "";

    const coupon = coupons.find(
      (c) => c.code.toUpperCase() === couponCode.toUpperCase()
    );

    if (coupon) {
      setCouponPercent(coupon.discount);
      setMessage(`🎉 Coupon Applied (${coupon.discount}% OFF)`);
    } else {
      setCouponPercent(0);
      setMessage("❌ Invalid Coupon Code by FreshMart");
    }
  };
  
  const discount = (grandTotal * couponPercent) / 100;
  const finalAmount = grandTotal - discount;

 let navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-100 py-10 px-6">

     <h1 className="text-5xl font-black text-center text-green-700 mb-4">
        🛒 FreshMart Shopping Cart
      </h1>

      <p className="text-center text-gray-500 text-lg mb-12">
         Review your selected products before checkout.
      </p>

      {cart.length === 0 ? (
        <div className="bg-white p-10 rounded-xl shadow text-center">
          <h2 className="text-3xl text-red-500 font-bold">
            Your Cart is Empty 😔
          </h2>
        </div>
      ) : (

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT SIDE */}

          <div className="lg:col-span-2 space-y-6">

            {cart.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-3xl shadow-md hover:shadow-2xl border border-gray-100 hover:border-green-300 transition-all duration-500 p-6 flex flex-col md:flex-row items-center gap-8"
              >

                <img
                  src={item.imageurl}
                  alt={item.description}
                  className="w-40 h-40 object-contain drop-shadow-xl group-hover:scale-105 transition duration-300"
                />

                <div className="flex-1">

                  <h2 className="text-2xl font-bold text-gray-800">
                    {item.name}
                  </h2>

                  <p className="text-gray-500 mt-2">
                     {item.description}
                  </p>

                  <p className="text-green-600 text-xl font-bold mt-2">
                    ₹{item.price}
                  </p>

                  <p className="text-gray-500 mt-2">
                    Quantity : {item.quantity}
                  </p>

                  <p className="text-blue-600 font-bold text-lg mt-2">
                    Total : ₹{item.price * item.quantity}
                  </p>

                </div>

                <div className="flex flex-col items-center gap-4">

                  <div className="flex items-center gap-3">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full"
                    >
                      <FaMinus />
                    </button>

                    <span className="text-2xl font-bold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full"
                    >
                      <FaPlus />
                    </button>

                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg flex items-center gap-2"
                  >
                    <FaTrash />
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}

          <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl p-8 h-fit sticky top-24">

            <div className="flex items-center gap-3 mb-6">

              <FaShoppingCart className="text-3xl text-green-600" />

              <h2 className="text-3xl font-black text-gray-800">
                 Order Summary
              </h2>

            </div>

            <div className="flex gap-3 mb-5">

              <input
                ref={couponRef}
                type="text"
                placeholder="Enter FreshMart Coupon"
                className="border-2 border-green-200 focus:border-green-600 outline-none p-3 rounded-xl flex-1"
              />

              <button
                onClick={applyCoupon}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 rounded-xl font-semibold transition-all duration-300"
              >
                Apply
              </button>

            </div>

            <p
              className={`font-semibold mb-6 ${
                discount > 0
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {message}
            </p>
             <div className="space-y-6 mt-8">

              <div className="flex justify-between items-center">

                <div className="flex items-center gap-2">
                  <FaMoneyBillWave className="text-green-600" />
                  <span className="font-medium">
                        Grand Total
                        </span>
                </div>

                <span className="font-bold text-lg">
                  ₹{grandTotal.toFixed(2)}
                </span>

              </div>

              <div className="flex justify-between items-center">

                <div className="flex items-center gap-2">
                  <FaTicketAlt className="text-orange-500" />
                  <span className="font-medium">
                     Discount
                  </span>
                </div>

                <span className="font-bold text-red-600">
                  - ₹{discount.toFixed(2)}
                </span>

              </div>

              <hr className="border-dashed border-gray-300" />

              <div className="flex justify-between items-center">
              <span className="font-medium text-gray-600">
              Delivery Charges
              </span>

             <span className="font-bold text-green-600">
               FREE
             </span>
             </div>

              <div className="flex justify-between items-center">

                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-blue-600" />
                  <span className="font-bold">
                    Payable Amount
                  </span>
                </div>

                <span className="text-3xl font-bold text-green-700">
                  ₹{finalAmount.toFixed(2)}
                </span>
              </div>
            </div>

    <button
    onClick={() =>
    navigate("/checkout", {
      state: {
        grandTotal,
        discount,
        finalAmount,
        couponPercent,
      },
    })
  }

  className="w-full mt-8 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white py-4 rounded-2xl text-lg font-bold shadow-lg transition-all duration-300 hover:scale-[1.02]"
  
>
  Proceed to Checkout
</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Cart;

