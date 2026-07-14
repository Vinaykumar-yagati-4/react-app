import { Link } from "react-router-dom";
import {
  FaTruck,
  FaLeaf,
  FaShieldAlt,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-green-800 via-green-600 to-emerald-500 text-white">

      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-44 h-44 bg-yellow-300/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-green-200/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-10 py-20 md:py-28">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Content */}
          <div>
            <div className="inline-flex items-center bg-yellow-400 text-green-900 px-5 py-2 rounded-full font-bold mb-6 shadow-2xl animate-pulse">
            🚚 Free Delivery on Orders Above ₹499
            </div>

            <p className="uppercase tracking-[6px] text-green-100 font-bold mb-5">
              Welcome to FreshMart
            </p>


            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-8">

              Fresh Groceries
              <br />

              Delivered To
              <span className="text-yellow-300">
                {" "}Your Door
              </span>

            </h1>


            <p className="text-lg md:text-2xl text-green-100 leading-9 mb-10">

              Healthy • Organic • Quality Products

              <br />

              Fresh groceries delivered every day with care.

            </p>



            <div className="flex flex-wrap gap-5">


              <Link
                to="/veg"
                className="bg-yellow-400 text-green-900 px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:bg-yellow-300 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              >
                Shop Now
              </Link>


              <Link
                to="/register"
                className="border-2 border-white px-10 py-4 rounded-2xl font-bold text-lg bg-white/10 backdrop-blur-sm hover:bg-white hover:text-green-700 hover:-translate-y-1 transition-all duration-300"
              >
                Join FreshMart
              </Link>


            </div>


          </div>



          {/* Right Content */}
          <div className="hidden md:flex justify-center">


            <div className="bg-white/20 backdrop-blur-2xl rounded-[35px] p-12 shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-white/30 hover:scale-105 transition-all duration-500">


              <div className="text-center text-9xl mb-10 animate-bounce">
                🛒
              </div>


              <div className="space-y-5">


                <div className="flex items-center gap-5 bg-white/20 rounded-2xl p-5 hover:bg-white/30 transition-all duration-300">

                  <FaLeaf className="text-4xl text-yellow-300" />

                  <div>

                    <h3 className="font-bold">
                      Fresh Products
                    </h3>

                    <p className="text-sm text-green-100">
                      Direct from trusted suppliers
                    </p>

                  </div>

                </div>



                <div className="flex items-center gap-4 bg-white/20 rounded-xl p-4">

                  <FaTruck className="text-3xl text-yellow-300" />

                  <div>

                    <h3 className="font-bold">
                      Fast Delivery
                    </h3>

                    <p className="text-sm text-green-100">
                      Delivered quickly to your home
                    </p>

                  </div>

                </div>



                <div className="flex items-center gap-4 bg-white/20 rounded-xl p-4">

                  <FaShieldAlt className="text-3xl text-yellow-300" />

                  <div>

                    <h3 className="font-bold">
                      Quality Assured
                    </h3>

                    <p className="text-sm text-green-100">
                      Safe and premium groceries
                    </p>

                  </div>

                </div>


              </div>


            </div>


          </div>


        </div>


      </div>


    </section>
  );
}

export default Hero;