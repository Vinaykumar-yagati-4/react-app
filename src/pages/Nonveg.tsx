import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductCard from "../Components/ProductCard";

function NonVeg() {

  interface NonVegItem {
    id: number;
    name: string;
    imageurl: string;
    price: number;
    description: string;
  }

  const nonVegItems: NonVegItem[] = [
    {
      id: 1,
      name: "Chicken",
      imageurl: "/images/chicken.jpeg",
      price: 200,
      description: "Fresh chicken",
    },
    {
      id: 2,
      name: "Mutton",
      imageurl: "/images/mutton.jpeg",
      price: 900,
      description: "Premium mutton",
    },
    {
      id: 3,
      name: "Fish",
      imageurl: "/images/fish.jpeg",
      price: 500,
      description: "Fresh fish",
    },
    {
      id: 4,
      name: "Prawns",
      imageurl: "/images/prawns.jpeg",
      price: 800,
      description: "Sea fresh prawns",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">

      <ToastContainer
        position="top-right"
        autoClose={2500}
      />

      <h1 className="text-5xl font-bold text-center mb-3 text-red-700">
        🍗 Fresh Non-Veg Collection
      </h1>

      <p className="text-center text-gray-600 mb-10">
        Premium meat and seafood delivered fresh.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">

        {nonVegItems.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
          />
        ))}

      </div>

    </div>
  );
}

export default NonVeg;