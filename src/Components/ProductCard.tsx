import { toast } from "react-toastify";
import { useContext } from "react";
import { CartContext } from "../contextapi/CartContext";

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


  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <img
         src={product.imageurl}
         alt={product.name}
         className="w-40 h-40 object-contain mx-auto mt-4"
      />

      <div className="p-5">

        <h2 className="text-2xl font-bold text-gray-800">
          {product.name}
        </h2>

        <p className="text-green-600 text-xl font-semibold mt-2">
          ₹{product.price}
        </p>

        <p className="text-gray-500 mt-3">
          {product.description}
        </p>

        <button
          onClick={() => {

            addToCart(product);

            toast.success(`${product.name} added to cart 🛒`);

          }}
          className="mt-5 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold transition"
        >
          Add to Cart
        </button>

      </div>

    </div>
  );
}


export default ProductCard;

