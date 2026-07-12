// 

import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import type { RegisterRequest } from '../interfaces/RegisterRequest';

function Register() {

  let {register,handleSubmit,reset}  = useForm<RegisterRequest>();

let navigate = useNavigate();

    let onSubmitLogics = (data: RegisterRequest) => {

        console.log(data);

        // registerSevice(data);

      // Read existing users
      const users: RegisterRequest[] = JSON.parse(
        localStorage.getItem("users") || "[]"
      );

    // Check duplicate email
  const userExists = users.some(
    (user) => user.email === data.email
  );

    if (userExists) {
    alert("Email already registered");
    return;
  }
    // Add id
  const newUser = { id: users.length + 1, ...data};

   // Add new user to array
  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));
        alert("Registration successfulll");
        navigate("/login");
        reset();
    }
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center px-6 py-10">
    <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">

    <div className="text-center mb-8">

    <div className="text-6xl mb-4">
      🛒
    </div>

    <h2 className="text-4xl font-black text-green-700">
      Create Account
    </h2>

    <p className="text-gray-500 mt-2">
      Join FreshMart and start shopping fresh groceries.
    </p>

    </div>

    <form
    onSubmit={handleSubmit(onSubmitLogics)}
    className="space-y-5"
>

      <input
      type="text"
  {...register("name")}
  placeholder="Full Name"
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
  "
      />

     <input
     type="password"
  {...register("password")}
  placeholder="Create Password"
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
  "
     />

      <input
      type="email"
  {...register("email")}
  placeholder="Email Address"
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
  "
      />

      <input
      type="number"
  {...register("phone")}
  placeholder="Mobile Number"
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
    font-bold
    text-lg
    transition-all
    duration-300
    hover:scale-105
    shadow-lg
  "
      >
     Create Account
   </button>
   <p className="text-center text-gray-500">

  Already have an account?

  <a
    href="/login"
    className="text-green-600 font-bold ml-2 hover:underline"
  >
    Login
  </a>

   </p>


    </form>
    </div>
    </div>
  )
}

export default Register
