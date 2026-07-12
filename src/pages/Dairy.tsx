import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductCard from "../Components/ProductCard";
import { FaCheese } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

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

  const [searchParams] = useSearchParams();

  const search = searchParams.get("search")?.toLowerCase() || "";

  const filteredItems = dairyItems.filter(
    (item) =>
      item.name.toLowerCase().includes(search) ||
      item.description.toLowerCase().includes(search)
  );

  return (
    <div className="bg-gray-50 min-h-screen">

      <ToastContainer
      position="top-right"
      autoClose={2500}
      newestOnTop
      closeOnClick
      pauseOnHover
      theme="light"
      toastStyle={{
        background: "#1E293B",
        color: "#ffffff",
        borderRadius: "14px",
        fontWeight: "600",
        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
       }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white py-16">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <div className="flex justify-center mb-5">

            <div className="bg-white/20 p-5 rounded-full">

              <FaCheese className="text-5xl" />

            </div>

          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Fresh Dairy Products
          </h1>

          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Farm fresh dairy products delivered every day.
            Healthy, tasty and naturally fresh.
          </p>

        </div>

      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex flex-col md:flex-row justify-between items-center mb-10">

          <div className="flex items-center gap-3">

            <FaCheese className="text-blue-600 text-3xl" />

            <h2 className="text-3xl font-bold text-gray-800">
              Dairy Products
            </h2>

          </div>

          <div className="mt-4 md:mt-0 bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">

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

export default Dairy;