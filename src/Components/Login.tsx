 /*import { useForm } from "react-hook-form";
 import type { LoginRequest } from "../interfaces/LoginRequest";

 import { useNavigate } from "react-router-dom";

import {
    FaEnvelope,
    FaLock,
    FaSignInAlt
} from "react-icons/fa";
//import { serviceLogin } from "../apis/AuthApis";

function Login() {

    const navigate = useNavigate();

     const { register, handleSubmit } = useForm<LoginRequest>();

    const onSubmit = (data: LoginRequest) => {

         serviceLogin(data)

           .then(() => {

               alert("Login Successful");

                navigate("/");

              })

            .catch(() => {

                const registerNow = window.confirm(
                    "Account not found.\n\nWould you like to Register?"
                );

                 if (registerNow) {

                  navigate("/register");

                }

             });

     };

    return (

        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 to-cyan-100">

            <div className="bg-white shadow-xl rounded-3xl p-10 w-[430px]">

                <div className="flex justify-center">

                    <FaSignInAlt className="text-5xl text-blue-600"/>

                </div>

                <h1 className="text-4xl font-bold text-center mt-4">

                    Login

                </h1>

                <p className="text-center text-gray-500 mt-2 mb-8">

                    Enter your credentials

                </p>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                >

                    <div className="relative">

                        <FaEnvelope className="absolute left-4 top-4 text-gray-400"/>

                        <input

                                    {...register("email")}

                            type="email"

                            placeholder="Email"

                            className="w-full border rounded-xl pl-12 py-3"

                        />

                    </div>

                    <div className="relative">

                        <FaLock className="absolute left-4 top-4 text-gray-400"/>

                        <input

                             {...register("password")}

                            type="password"

                            placeholder="Password"

                            className="w-full border rounded-xl pl-12 py-3"

                        />

                    </div>

                    <button

                        type="submit"

                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"

                    >

                        Login

                    </button>

                </form>

            </div>

        </div>

    );

}

export default Login;*/

import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import type { LoginRequest } from "../interfaces/LoginRequest";
import type { RegisterRequest } from "../interfaces/RegisterRequest";


function Login() {
  const {register,handleSubmit,
    reset,
  } = useForm<LoginRequest>();

  const onSubmitLogics = (data: LoginRequest) => {

    console.log(data);

    // Read all registered users from localStorage
    const users: RegisterRequest[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    // Check whether user exists
    const user = users.find(
      (u) =>
        u.email === data.email &&
        u.password === data.password
    );

    if (user) {

      toast.success("Login Successful 🎉");

      // Store logged-in user
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(user)
      );

      reset();
        window.location.href = "/";
    } else {

      toast.error("Invalid Email or Password");

    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">

      <div className="text-center mb-8">

      <div className="text-6xl mb-4">
           🛒
      </div>

       <h2 className="text-4xl font-black text-green-700">
              Welcome Back
       </h2>

       <p className="text-gray-500 mt-2">
           Login to continue shopping with FreshMart
      </p>

      </div>

      <form
        onSubmit={handleSubmit(onSubmitLogics)}
        className="space-y-6"
      >

        <input
        type="email"
        placeholder="Enter Email Address"
        {...register("email", {
        required: "Email is required",
        })}
        className="
        w-full
        border
        border-gray-300
        rounded-2xl
        px-5
        py-4
        outline-none
        focus:border-green-600
        focus:ring-2
        focus:ring-green-200
        transition-all
        "
       />

        <input
        type="password"
        placeholder="Enter Password"
        {...register("password", {
         required: "Password is required",
        })}
         className="
         w-full
         border
         border-gray-300
         rounded-2xl
         px-5
         py-4
         outline-none
         focus:border-green-600
         focus:ring-2
         focus:ring-green-200
         transition-all
         "
         />
        <button
         type="submit"
  className="
    w-full
    bg-green-600
    hover:bg-green-700
    text-white
    py-4
    rounded-2xl
    text-lg
    font-bold
    transition-all
    duration-300
    hover:scale-105
    shadow-lg
  "
>
            Login
         </button><p className="text-center text-gray-500">

           Don't have an account?

            <a
            href="/register"
            className="text-green-600 font-bold ml-2 hover:underline"
          >
            Register
          </a>

          </p>



      </form>
    </div>
    <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
}

export default Login;
