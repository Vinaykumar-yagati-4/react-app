import { useContext, useState } from "react";
import { OrderContext } from "../contextapi/OrderContext";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaShoppingBag,
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaCreditCard,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

function Orders() {
  const { orders } = useContext(OrderContext);

  const [expandedOrder, setExpandedOrder] = useState<number | null>(null);

  const toggleOrder = (orderNumber: number) => {
    setExpandedOrder((prev) =>
      prev === orderNumber ? null : orderNumber
    );
  };

  if (orders.length === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-500">
          No Orders Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-10 px-6">

      <div className="text-center mb-10">

      <h1 className="text-5xl font-extrabold text-green-700">
        My Orders
      </h1>

      <p className="text-gray-500 mt-3 text-lg">
         Track all your FreshMart purchases in one place.
      </p>

      </div>

      <div className="max-w-7xl mx-auto space-y-5">

        {orders.map((order) => (

          <div
            key={order.orderNumber}
            className="
            bg-white
            rounded-3xl
            overflow-hidden
            shadow-xl
            border
            border-gray-100
            hover:shadow-2xl
            transition-all 
            duration-300
            "
           >

            {/* Header */}

            <div
              onClick={() => toggleOrder(order.orderNumber)}
              className="
              bg-gradient-to-r
              from-green-600
              to-emerald-500
              text-white
              px-8
              py-5
              flex
              justify-between
              items-center
              cursor-pointer
              transition
              hover:from-green-700
              hover:to-green-600
              "
            >

              <div>

                <h2 className="text-2xl font-bold">
                  Order #{order.orderNumber}
                </h2>

                <p className="flex items-center gap-2 text-sm mt-1">
                  <FaCalendarAlt />
                  {order.orderDate}
                </p>

              </div>

              <div className="flex items-center gap-4">

                <span
                className="
                bg-white
                text-green-700
                px-5
                py-2
                rounded-full
                font-bold
                shadow-md
                flex
                items-center
                gap-2
                "
                >
                  <FaCheckCircle />
                  {order.status}
                </span>

                {expandedOrder === order.orderNumber ? (
                  <FaChevronUp size={20} />
                ) : (
                  <FaChevronDown size={20} />
                )}

              </div>

            </div>

            {/* Expandable Content */}

            {expandedOrder === order.orderNumber && (

              <div className="grid lg:grid-cols-2 gap-8 p-8">

                {/* LEFT SIDE */}

                <div>

                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <FaShoppingBag className="text-green-600" />
                    Ordered Products
                  </h3>

                  <div className="space-y-4">

                    {order.items.map((item) => (

                      <div
                        key={item.id}
                        className="
flex
items-center
gap-5
border
border-gray-200
rounded-2xl
p-5
hover:shadow-lg
transition
"
                      >

                        <img
                          src={item.imageurl}
                          alt={item.description}
                          className="w-24 h-24 object-contain"
                        />

                        <div className="flex-1">

                          <h4 className="font-semibold">
                            {item.description}
                          </h4>

                          <p className="text-gray-500">
                            Qty : {item.quantity}
                          </p>

                        </div>

                        <div className="text-lg font-bold text-green-700">
                          ₹{item.price}
                        </div>

                      </div>

                    ))}

                  </div>

                </div>

                {/* RIGHT SIDE */}

                <div className="bg-green-50 rounded-3xl p-7 shadow-inner">

                  <h3 className="text-xl font-bold mb-5">
                    Order Details
                  </h3>

                  <div className="space-y-4">

                    <div className="flex items-center gap-3">
                      <FaUser className="text-blue-600" />
                      <span>{order.customerName}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaPhone className="text-green-600" />
                      <span>{order.mobile}</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <FaMapMarkerAlt className="text-red-600 mt-1" />
                      <span>{order.address}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaCreditCard className="text-purple-600" />
                      <span>{order.paymentMode}</span>
                    </div>

                    <hr />

                    <div className="flex justify-between">
                      <span>Grand Total</span>
                      <span>₹{order.grandTotal}</span>
                    </div>

                    <div className="flex justify-between text-red-600">
                      <span>Discount</span>
                      <span>- ₹{order.discount}</span>
                    </div>

                    <div className="flex justify-between text-3xl font-extrabold text-green-700 pt-4">
                      <span className="flex items-center gap-2">
                        <FaMoneyBillWave />
                        Payable
                      </span>

                      <span>
                        ₹{order.finalAmount}
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            )}

          </div>

        ))}

      </div>

    </div>
  );
}

export default Orders;