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

      alert("Login Successful");

      // Store logged-in user
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(user)
      );

      reset();
        window.location.href = "/";
    } else {

      alert("Invalid Email or Password");

    }
  };

  return (
    <>
      <h2>Login</h2>

      <form onSubmit={handleSubmit(onSubmitLogics)}>

        <input
          type="email"
          placeholder="Enter Email"
          {...register("email", {
            required: "Email is required",
          })}
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Enter Password"
          {...register("password", {
            required: "Password is required",
          })}
        />

        <br />
        <br />

        <button type="submit">
          Login
        </button>

      </form>
    </>
  );
}

export default Login;
