import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductCard from "../Components/ProductCard";
import { FaDrumstickBite } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

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

  const [searchParams] = useSearchParams();
  const search = searchParams.get("search")?.toLowerCase() || "";

  const filteredItems = nonVegItems.filter(
    (item) =>
      item.name.toLowerCase().includes(search) ||
      item.description.toLowerCase().includes(search)
  );

  return (
    <div className="bg-gray-50 min-h-screen">

      <ToastContainer position="top-right" autoClose={2500} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-700 via-red-600 to-orange-500 text-white py-16">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <div className="flex justify-center mb-5">

            <div className="bg-white/20 p-5 rounded-full">

              <FaDrumstickBite className="text-5xl" />

            </div>

          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Fresh Non-Veg Collection
          </h1>

          <p className="text-lg text-red-100 max-w-2xl mx-auto">
            Premium quality meat and seafood delivered fresh to your doorstep.
          </p>

        </div>

      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex flex-col md:flex-row justify-between items-center mb-10">

          <div className="flex items-center gap-3">

            <FaDrumstickBite className="text-red-600 text-3xl" />

            <h2 className="text-3xl font-bold text-gray-800">
              Non-Veg Products
            </h2>

          </div>

          <div className="mt-4 md:mt-0 bg-red-100 text-red-700 px-5 py-2 rounded-full font-semibold">

            {filteredItems.length} Products Available

          </div>

        </div>

        {filteredItems.length > 0 ? (

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {filteredItems.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
              />
            ))}

          </div>

        ) : (

          <div className="text-center py-20">

            <h2 className="text-3xl font-bold text-gray-700">
              No products found 😔
            </h2>

            <p className="text-gray-500 mt-3">
              Try another search.
            </p>

          </div>

        )}

      </section>

    </div>
  );
}

export default NonVeg;