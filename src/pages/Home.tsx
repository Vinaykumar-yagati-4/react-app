import { Link } from "react-router-dom";
import Hero from "../Components/Hero";
import CategoryCard from "../Components/CategoryCard";
import Footer from "../Components/Footer";
import {
  FaTruck,
  FaLeaf,
  FaTags,
  FaStar,
} from "react-icons/fa";

function Home() {
  return (
    <>
      <Hero />

      {/* Categories */}
      <section className="max-w-screen-2xl mx-auto py-24 px-8">

       <div className="text-center mb-16">

          <p className="text-green-600 font-semibold uppercase tracking-widest">
            Shop Smart
          </p>

          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mt-3">
            Shop By Category
          </h2>

          <p className="text-lg text-gray-600 mt-5 max-w-3xl mx-auto leading-8">
            Browse fresh vegetables, premium non-veg, and quality dairy
            products delivered directly to your doorstep.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">

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

      {/* Why Choose FreshMart */}
      <section className="bg-gradient-to-b from-white via-green-50 to-white py-24">

        <div className="max-w-screen-2xl mx-auto px-8">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-black text-gray-900">
              Why Choose FreshMart?
            </h2>

            <p className="text-gray-500 mt-4">
              We deliver freshness, quality, and convenience every day.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">

            <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-3xl shadow-xl p-8 text-center hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

             <FaLeaf className="text-6xl text-green-600 mx-auto mb-6" />

              <h3 className="text-xl font-bold mb-3">
                Farm Fresh
              </h3>

              <p className="text-gray-500">
                Fresh fruits and vegetables sourced daily.
              </p>

            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-3xl shadow-xl p-8 text-center hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

              <FaTruck className="text-6xl text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-3">
                Fast Delivery
              </h3>

              <p className="text-gray-500">
                Quick doorstep delivery with real-time tracking.
              </p>

            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white border border-yellow-200 rounded-3xl shadow-xl p-8 text-center hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

              <FaTags className="text-6xl text-yellow-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-3">
                Best Prices
              </h3>

              <p className="text-gray-500">
                Affordable groceries with exciting daily offers.
              </p>

            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-3xl shadow-xl p-8 text-center hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

              <FaStar className="text-6xl text-purple-600 mx-auto mb-6" />

              <h3 className="text-xl font-bold mb-3">
                Trusted Quality
              </h3>

              <p className="text-gray-500">
                Thousands of happy customers trust FreshMart.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-screen-2xl mx-auto py-24 px-8">

        <div className="rounded-[40px] bg-gradient-to-r from-green-600 via-emerald-500 to-green-700 text-white p-12 md:p-16 text-center shadow-2xl">

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Join FreshMart Today!
          </h2>

          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            Create your account today to enjoy fresh groceries, exclusive
            discounts, secure payments, and lightning-fast delivery.
          </p>

          <Link
            to="/register"
            className="inline-block bg-white text-green-700 font-bold px-12 py-5 rounded-full shadow-xl hover:scale-110 hover:bg-gray-100 transition-all duration-300"
          >
            Create Account
          </Link>

        </div>

      </section>
      <Footer />
    </>
  );
}

export default Home;