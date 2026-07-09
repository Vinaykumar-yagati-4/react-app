import { ToastContainer } from "react-toastify";
import vegData from "../interfaces/VegData";
import ProductCard from "../Components/ProductCard";

function Veg() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-6">

      <ToastContainer
        position="top-right"
        autoClose={2500}
      />

      <h1 className="text-5xl font-bold text-center mb-12 text-green-700">
        🥕 Fresh Vegetables
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">

        {vegData.map((veg) => (
          <ProductCard
            key={veg.id}
            product={veg}
          />
        ))}

      </div>

    </div>
  );
}

export default Veg;