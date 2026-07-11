import { ToastContainer } from "react-toastify";
import { useSearchParams } from "react-router-dom";
import vegData from "../interfaces/VegData";
import ProductCard from "../Components/ProductCard";
import { FaLeaf, FaCarrot } from "react-icons/fa";

function Veg() {
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search")?.toLowerCase() || "";

  const filteredVeg = vegData.filter(
    (veg) =>
      veg.name.toLowerCase().includes(search) ||
      veg.description.toLowerCase().includes(search)
  );

  return (
    <div className="bg-gradient-to-b from-green-50 via-white to-green-100 min-h-screen">
      <ToastContainer position="top-right" autoClose={2500} />

      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-800 via-green-600 to-emerald-500 text-white py-24">
       <div className="max-w-screen-2xl mx-auto px-8 text-center">
          <div className="flex justify-center mb-5">
            <div className="bg-white/20 backdrop-blur-lg p-6 rounded-full shadow-xl">
              <FaCarrot className="text-6xl text-yellow-300 animate-bounce" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Fresh Vegetables
          </h1>

          <p className="text-xl text-green-100 leading-9 max-w-3xl mx-auto">
            Hand-picked fresh vegetables delivered directly to your doorstep.
            Healthy food for a healthier lifestyle.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-screen-2xl mx-auto px-8 py-20">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-14 gap-6">
          <div className="flex items-center gap-3">
            <FaLeaf className="text-green-600 text-4xl" />

           <h2 className="text-4xl font-black text-gray-900">
              Vegetables
            </h2>
          </div>

          <div className="text-gray-500 text-lg">
          Freshly harvested vegetables at the best prices.
          </div>

          <div className="mt-4 lg:mt-0 bg-green-600 text-white px-6 py-3 rounded-full font-bold shadow-lg">
            {filteredVeg.length} Products Available
          </div>
        </div>

        {filteredVeg.length > 0 ? (
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              gap-10
            "
          >
            {filteredVeg.map((veg) => (
              <ProductCard
                key={veg.id}
                product={veg}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-xl text-center py-20">
            <h2 className="text-3xl font-bold text-gray-700">
              No products found 😔
            </h2>

            <p className="text-gray-500 mt-3">
              Try searching with another keyword.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

export default Veg;