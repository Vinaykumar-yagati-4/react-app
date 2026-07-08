
import React from "react";
import type { RegisterRequest } from "../interfaces/RegisterRequest";
import { useForm } from "react-hook-form";
import { registerUser } from "../apis/AuthApis";
import { servieRegister } from "../services/AuthService";

function Register() {

  const { register, handleSubmit, reset } = useForm<RegisterRequest>();

  const onSubmit = (data: RegisterRequest) => {
    console.log(data);

    servieRegister(data);
    alert("Register Successful")
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input
        type="text"
        {...register("name")}
        placeholder="Username"
      />

      <br /><br />

      <input
        type="password"
        {...register("password")}
        placeholder="Password"
      />

      <br /><br />

      <input
        type="email"
        {...register("email")}
        placeholder="Email"
      />

      <br /><br />

      <input
        type="number"
        {...register("phone")}
        placeholder="Enter Phone Number"
      />

      <br /><br />

      <button type="submit">Register</button>

    </form>
  );
}

export default Register;
