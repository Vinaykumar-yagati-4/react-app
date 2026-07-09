import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductCard from "../Components/ProductCard";

function Dairy() {

  interface DairyItem {
    id: number;
    name: string;
    imageurl: string;
    price: number;
    description: string;
  }

  const dairyItems: DairyItem[] = [
    {
      id: 1,
      name: "Milk",
      imageurl: "/images/milk.jpeg",
      price: 50,
      description: "Farm fresh milk",
    },
    {
      id: 2,
      name: "Cheese",
      imageurl: "/images/cheese.jpeg",
      price: 200,
      description: "Premium cheese",
    },
    {
      id: 3,
      name: "ButterMilk",
      imageurl: "/images/buttermilk.jpeg",
      price: 100,
      description: "Fresh Tasty & Cool Buttermilk",
    },
    {
      id: 4,
      name: "Paneer",
      imageurl: "/images/paneer.jpeg",
      price: 80,
      description: "Fresh & Natural Paneer",
    },
    {
      id: 5,
      name: "Curd",
      imageurl: "/images/curd.jpeg",
      price: 150,
      description: "Homemade Curd",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">

      <ToastContainer
        position="top-right"
        autoClose={2500}
      />

      <h1 className="text-5xl font-bold text-center mb-3 text-blue-700">
        🥛 Dairy Products
      </h1>

      <p className="text-center text-gray-600 mb-10">
        Fresh dairy products delivered every day.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">

        {dairyItems.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
          />
        ))}

      </div>

    </div>
  );
}

export default Dairy;