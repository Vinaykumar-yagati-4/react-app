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
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
        Checkout
      </h1>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
              <FaMapMarkerAlt className="text-red-600" /> Delivery Address
            </h2>

            <div className="space-y-5">
              <div>
                <label className="font-semibold">Customer Name</label>
                <div className="flex items-center border rounded-lg mt-2">
                  <FaUser className="mx-3 text-gray-500" />
                  <input
                    className="w-full p-3 outline-none"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Name"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold">Mobile Number</label>
                <div className="flex items-center border rounded-lg mt-2">
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
                <div className="flex items-center border rounded-lg mt-2">
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
    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg flex items-center gap-2"
  >
    <FaMapMarkerAlt />
    Use Current Location
  </button>


              <div>
                <label className="font-semibold">Address</label>
                <textarea
                  rows={4}
                  className="border rounded-lg w-full mt-2 p-3 outline-none"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Payment Method</h2>

            <label className="flex items-center gap-3 mb-4">
              <input
                type="radio"
                value="UPI"
                checked={paymentMode === "UPI"}
                onChange={(e) => setPaymentMode(e.target.value)}
              />
              <FaQrcode className="text-blue-600" /> UPI Payment
            </label>

            <label className="flex items-center gap-3">
              <input
                type="radio"
                value="COD"
                checked={paymentMode === "COD"}
                onChange={(e) => setPaymentMode(e.target.value)}
              />
              <FaTruck className="text-green-600" /> Cash On Delivery
            </label>

            {paymentMode === "UPI" && (
              <div className="qr-section">
                <h4>Scan UPI QR to Pay ₹{finalAmount.toFixed(2)}</h4>
                <QRCode
                  value={`upi://pay?pa=7989321675@ybl&pn=FreshMart&am=${finalAmount.toFixed(2)}&cu=INR`}
                />
                <p>UPI ID: 7989321675@ybl</p>
              </div>
            )}

            {paymentMode === "COD" && (
              <div className="mt-6 bg-green-100 p-5 rounded-xl">
                Cash will be collected during delivery.
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 h-fit sticky top-5">
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