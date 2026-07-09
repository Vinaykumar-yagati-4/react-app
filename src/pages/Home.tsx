
import { Link } from "react-router-dom";
import Hero from "../Components/Hero";
import CategoryCard from "../Components/CategoryCard";

function Home() {
  return (
    <>
      <Hero />

      <section className="max-w-7xl mx-auto py-16 px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Shop By Category
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <CategoryCard
            title="Vegetables"
            icon="🥕"
            color="bg-green-600"
            link="/veg"
          />

          <CategoryCard
            title="Non Veg"
            icon="🍗"
            color="bg-red-500"
            link="/nonveg"
          />

          <CategoryCard
            title="Dairy"
            icon="🥛"
            color="bg-blue-500"
            link="/dairy"
          />

        </div>

      </section>

      <section className="max-w-7xl mx-auto my-20">

        <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-3xl p-12 text-white text-center shadow-2xl">

          <h2 className="text-4xl font-bold mb-4">
            Join FreshMart Today!
          </h2>

          <p className="text-lg mb-8">
            Create an account to order fresh groceries, track your orders,
            and enjoy exclusive member discounts.
          </p>

          <Link
            to="/register"
            className="inline-block bg-white text-green-700 px-8 py-3 rounded-full font-bold hover:scale-105 transition"
          >
            Create Account
          </Link>

        </div>

      </section>l
    </>
  );
}

export default Home;