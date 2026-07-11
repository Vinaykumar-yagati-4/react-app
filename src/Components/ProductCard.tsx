import { toast } from "react-toastify";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contextapi/CartContext";
import {
  FaShoppingCart,
  FaLeaf,
  FaCheckCircle,
} from "react-icons/fa";

type Product = {
  id: number;
  name: string;
  price: number;
  imageurl: string;
  description: string;
};

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
      <div
       className="
       group
       bg-white
       rounded-3xl
       overflow-hidden
       shadow-md
       hover:shadow-xl
       transition-all
       duration-500
       hover:-translate-y-3
       hover:border-green-300
       w-full
       max-w-[300px]
       mx-auto
       border
       border-gray-100
       hover:border-green-400
       "
       >
      {/* Image Section */}

      <div
        className="
        relative
        h-56
        bg-gradient-to-b
        from-green-50
        to-white
        flex
        items-center
        justify-center
        overflow-hidden
        "
      >
        {/* Fresh Badge */}

        <span
          className="
          absolute
          top-4
          left-4
          bg-green-600
          text-white
          text-xs
          px-3
          py-1
          rounded-full
          flex
          items-center
          gap-1
          font-semibold
          shadow-md
          z-10
          "
        >
          <FaLeaf />
          Fresh
        </span>

        <img
          src={product.imageurl}
          alt={product.name}
          className="
          max-w-[75%]
          max-h-[75%]
          drop-shadow-xl
          object-contain
          transition-transform
          duration-500
          group-hover:scale-115
          group-hover:-rotate-3
          "
        />
      </div>

      {/* Product Details */}

      <div className="p-5">

        <h2
          className="
          text-xl
          font-bold
          text-gray-800
          capitalize
          line-clamp-1
          "
        >
          {product.name}
        </h2>

        <div className="flex justify-between items-center mt-3">

          <p className="text-2xl font-extrabold text-green-600">
            ₹{product.price}
          </p>

          <span
            className="
            bg-green-100
            text-green-700
            px-3
            py-1
            rounded-full
            text-xs
            font-semibold
            flex
            items-center
            gap-1
            "
          >
            <FaCheckCircle />
           In Stock
          </span>

        </div>

        <p
          className="
          text-gray-500
          mt-4
          text-[13px]
          leading-6
          h-10
          overflow-hidden
          "
        >
          {product.description}
        </p>

        <button
          onClick={() => {

         const loggedInUser = JSON.parse(
         localStorage.getItem("loggedInUser") || "null"
         );

         if (!loggedInUser) {

         toast.warning("Please login first!");

          setTimeout(() => {
          navigate("/login");
         }, 1500);

           return;
         }

           addToCart(product);

           toast.success(`${product.name} added to cart 🛒`);
        }}
          className="
          mt-5
          w-full
          bg-gradient-to-r
          from-green-600
          to-emerald-500
          hover:from-green-700
          hover:to-emerald-600
          text-white
          py-3.5
          rounded-2xl
          font-bold
          flex
          justify-center
          items-center
          gap-2
          transition-all
          duration-300
          hover:scale-[1.03]
          shadow-lg
          "
        >
          <FaShoppingCart />

          Add to Cart
        </button>

      </div>
    </div>
  );
}

export default ProductCard;