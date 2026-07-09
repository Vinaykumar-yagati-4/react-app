// import { useForm } from "react-hook-form";
// import type { RegisterRequest } from "../interfaces/RegitserRequest";
// import { serviceRegister } from "../services/AuthService";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaUserPlus,
} from "react-icons/fa";

function Register() {
  // const { register, handleSubmit, reset } =
  //   useForm<RegisterRequest>();

  // const onSubmit = (data: RegisterRequest) => {
  //   serviceRegister(data)
  //     .then((response) => {
  //       console.log(response);
  //       alert("Registration Successful");
  //       reset();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       alert("Registration Failed");
  //     });
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-200 p-6">

      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-md p-8">

        <div className="text-center mb-8">

          <div className="flex justify-center mb-4">
            <div className="bg-green-600 p-5 rounded-full">
              <FaUserPlus className="text-4xl text-white" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-green-700">
            Create Account
          </h1>

          <p className="text-gray-500 mt-2">
            Join FreshMart and start shopping fresh!
          </p>

        </div>

        <form
          // onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >

          {/* Name */}

          <div className="relative">

            <FaUser className="absolute left-4 top-4 text-gray-400" />

            <input
              type="text"
              placeholder="Full Name"
              // {...register("name")}
              className="w-full pl-12 p-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
            />

          </div>

          {/* Email */}

          <div className="relative">

            <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

            <input
              type="email"
              placeholder="Email Address"
              // {...register("email")}
              className="w-full pl-12 p-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
            />

          </div>

          {/* Phone */}

          <div className="relative">

            <FaPhone className="absolute left-4 top-4 text-gray-400" />

            <input
              type="number"
              placeholder="Phone Number"
              // {...register("phone")}
              className="w-full pl-12 p-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
            />

          </div>

          {/* Password */}

          <div className="relative">

            <FaLock className="absolute left-4 top-4 text-gray-400" />

            <input
              type="password"
              placeholder="Password"
              // {...register("password")}
              className="w-full pl-12 p-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
            />

          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition duration-300"
          >
            Create Account
          </button>

        </form>

        <p className="text-center text-gray-500 mt-6">
          Already have an account?
          <span className="text-green-600 font-semibold cursor-pointer hover:underline ml-1">
            Login
          </span>
        </p>

      </div>

    </div>
  );
}

export default Register;