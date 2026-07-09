import { FaShoppingCart } from "react-icons/fa";

function EmptyCart() {

    return (

        <div className="min-h-[75vh] flex flex-col justify-center items-center">

            <FaShoppingCart
                className="text-8xl text-gray-300 mb-6"
            />

            <h1 className="text-4xl font-bold text-gray-700">
                Your Cart is Empty
            </h1>

            <p className="text-gray-500 mt-3 text-lg">
                Start shopping to add products.
            </p>

        </div>

    );

}

export default EmptyCart;