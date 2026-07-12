import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../contextapi/CartContext";
import {
  FaMapMarkerAlt,
  FaUser,
  FaPhone,
  FaMoneyBillWave,
  FaQrcode,
  FaTruck,
  FaCheckCircle,
} from "react-icons/fa";
import QRCode from "react-qr-code";
import { FcAlarmClock,  } from "react-icons/fc";
import { sendOrderEmail } from "../services/emailService";
import { getAddressFromLocation } from "../apis/locationapi";
import { OrderContext } from "../contextapi/OrderContext";
import Swal from "sweetalert2";



function Checkout() {
  // Read the data from contnect Api
  const { cart, clearCart } = useContext(CartContext);



  const { addOrder } = useContext(OrderContext);

  const navigate = useNavigate();

  const location = useLocation();

//   const {
//     grandTotal = 0,
//     discount = 0,
//     finalAmount = 0,
//     couponPercent = 0,
//   } = location.state;
const orderData = location.state;

if (!orderData) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-bold text-red-600">
          No Order Found
        </h2>

        <p className="mt-3 text-gray-600">
          Please add items to your cart before proceeding to checkout.
        </p>

        <button
          onClick={() => navigate("/cart")}
          className="mt-5 bg-green-600 text-white px-6 py-2 rounded-lg"
        >
          Go to Cart
        </button>
      </div>
    </div>
  );
}

const {
  grandTotal,
  discount,
  finalAmount,
  couponPercent,
} = orderData;

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMode, setPaymentMode] = useState("");

  const placeOrder = async () => {
    if (!name || !mobile || !address) {
      alert("Please fill all address details.");
      return;
    }
    if (!paymentMode) {
      alert("Please select a payment method.");
      return;
    }
    // alert("Order Placed Successfully!");
    
    Swal.fire({
  icon: "success",
  title: "✅ Order Placed!",
  text: `Your order has been placed successfully.\nOrder ID: ${12345}`,

  showConfirmButton: true,
  confirmButtonText: "Track Order",
  confirmButtonColor: "#2563eb",

  showCancelButton: true,
  cancelButtonText: "Close/Cancel",
  cancelButtonColor: "#ef4444",

  timer: 10000,
  timerProgressBar: true,
}).then((result) => {
  // If user clicks "Track Order"
  if (result.isConfirmed) {
    navigate("/orders");
  }

  // If timer completes automatically
  if (result.dismiss === Swal.DismissReason.timer) {
    navigate("/orders");
  }
});

    //prepare the email information 
    // Map the template params & our Data.
   
  const order = {
      order_id: Math.floor(Math.random() * 100000),
      name: name,
      email: email, // Recipient email
	  
      orders: cart.map((item) => ({
        name: item.name,
        units: item.quantity,
        price: item.price,
        image_url: item.imageurl,
      })),

      cost: {
        shipping: 100,
        tax: 100,
        coupon: discount,
        total: finalAmount,
      },
    };
    
    await sendOrderEmail(order);

     const orderData = {
      orderNumber: Math.floor(Math.random() * 100000),

      customerName: name,

      mobile: mobile,

      email: email,

      address: address,

      paymentMode: paymentMode,

      grandTotal: grandTotal,

      discount: discount,

      finalAmount: finalAmount,

      orderDate: new Date().toLocaleString(),

      status: "PLACED",

      items: [...cart],
    };

    addOrder(orderData);
    clearCart();
    //navigate("/orders");
  };

    const getCurrentLocation = () => {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      try {
        const data = await getAddressFromLocation(lat, lng);

        setAddress(data.display_name);
      } catch (error) {
        alert("Unable to fetch address.");
      }
    },
    (error) => {
      alert(error.message);
    }
  );
};


  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-100 py-10 px-4 md:px-8">
      <div className="text-center mb-10">

       <h1 className="text-5xl md:text-6xl font-black text-green-700">
        Checkout
       </h1>

       <p className="text-lg text-gray-500 mt-3">
         Complete your order and enjoy fresh groceries delivered to your doorstep.
       </p>

       </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-3xl shadow-xl border border-green-100 p-8">
            <h2 className="text-3xl font-black flex items-center gap-3 mb-8 text-gray-800">
              <FaMapMarkerAlt className="text-red-600" /> Delivery Address
            </h2>

            <div className="space-y-5">
              <div>
                <label className="font-semibold">Customer Name</label>
                <div className="flex items-center border-2 border-gray-200 rounded-xl mt-2 focus-within:border-green-600 transition-all">
                  <FaUser className="mx-3 text-gray-500" />
                  <input
                    className="w-full p-4 outline-none rounded-r-xl"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Name"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold">Mobile Number</label>
                <div className="flex items-center border-2 border-gray-200 rounded-xl mt-2 focus-within:border-green-600 transition-all">
                  <FaPhone className="mx-3 text-gray-500" />
                  <input
                    className="w-full p-3 outline-none"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Enter Mobile Number"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold">Email Id</label>
                <div className="flex items-center border-2 border-gray-200 rounded-xl mt-2 focus-within:border-green-600 transition-all">
                  <FcAlarmClock className="mx-3 text-gray-500" />
                  <input
                    className="w-full p-3 outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email id"
                  />
                </div>
              </div>

                <button
                 type="button"
                 onClick={getCurrentLocation}
                 className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
               <FaMapMarkerAlt />
                   Use Current Location
                </button>


              <div>
                <label className="font-semibold">Address</label>
                <textarea
                  rows={4}
                  className="border-2 border-gray-200 rounded-xl w-full mt-2 p-4 outline-none focus:border-green-600 transition-all"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-green-100 p-8">
            <h2 className="text-3xl font-black text-gray-800 mb-8">
              Payment Method
              </h2>

            <label
                className={`flex items-center justify-between border-2 rounded-2xl p-5 cursor-pointer transition-all duration-300 ${
                paymentMode === "UPI"
                ? "border-blue-600 bg-blue-50"
                : "border-gray-200 hover:border-blue-300"
                }`}
               >
              <input
                type="radio"
                value="UPI"
                checked={paymentMode === "UPI"}
                onChange={(e) => setPaymentMode(e.target.value)}
              />
             <div className="flex items-center gap-4">

             <FaQrcode className="text-3xl text-blue-600" />

             <div>

             <h3 className="font-bold">
               UPI Payment
             </h3>

             <p className="text-sm text-gray-500">
                 Pay instantly using any UPI App
             </p>

            </div>

            </div> 
            </label>

            <label
              className={`flex items-center justify-between border-2 rounded-2xl p-5 mt-5 cursor-pointer transition-all duration-300 ${
              paymentMode === "COD"
              ? "border-green-600 bg-green-50"
              : "border-gray-200 hover:border-green-300"
             }`}
             >
              <input
                type="radio"
                value="COD"
                checked={paymentMode === "COD"}
                onChange={(e) => setPaymentMode(e.target.value)}
              />
              <div className="flex items-center gap-4">

             <FaTruck className="text-3xl text-green-600" />

             <div>

            <h3 className="font-bold">
              Cash On Delivery
            </h3>

            <p className="text-sm text-gray-500">
                Pay when your order arrives
            </p>

           </div>

           </div>
            </label>

            {paymentMode === "UPI" && (
              <div className="mt-8 bg-blue-50 rounded-3xl p-8 text-center border border-blue-200">
                <h4 className="text-2xl font-bold text-blue-700 mb-5">Scan UPI QR to Pay ₹{finalAmount.toFixed(2)}</h4>
                <div className="flex justify-center my-5">

            <QRCode
                value={`upi://pay?pa=7989321675@ybl&pn=FreshMart&am=${finalAmount.toFixed(2)}&cu=INR`}
             />

            </div>
                <p className="mt-4 text-gray-600 font-semibold tracking-wide">
                    UPI ID : 7989321675@ybl
                </p>
              </div>
            )}

            {paymentMode === "COD" && (
              <div className="mt-6 bg-green-50 border border-green-200 rounded-2xl p-6 shadow-sm">
                Cash will be collected during delivery.
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 h-fit sticky top-28">
          <h2 className="text-3xl font-bold mb-6">Order Summary</h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Total Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between">
              <span className="flex items-center gap-2">
                <FaMoneyBillWave className="text-green-600" />
                Grand Total
              </span>
              <span>₹{grandTotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Coupon ({couponPercent}%)</span>
              <span className="text-red-600">-₹{discount.toFixed(2)}</span>
            </div>

            <hr />

            <div className="flex justify-between text-2xl font-bold text-green-700">
              <span>Payable</span>
              <span>₹{finalAmount.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={placeOrder}
            className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl flex justify-center items-center gap-2"
          >
            <FaCheckCircle />
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;