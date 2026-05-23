
import React from "react";
import { useForm } from "react-hook-form";

function Register() {
  const { register, handleSubmit, reset } = useForm();

  let registerLogics = (userdata) => {
    
    let users = JSON.parse(localStorage.getItem("users")) || [];

    
    users.push(userdata);

    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful!");
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(registerLogics)}>
        <input
          type="text"
          placeholder="Enter Full Name"
          {...register("name", { required: true })}
        />
        <br></br>

        <input
          type="password"
          placeholder="Enter Password"
          {...register("password", { required: true })}
        />
        <br></br>

        <input
          type="email"
          placeholder="Enter Email Address"
          {...register("email", { required: true })}
        />
        <br></br>

        <input
          type="number"
          placeholder="Phone Number"
          {...register("phone", { required: true })}
        />
        <br></br>

        <button type="submit"> Register </button>
      </form>
    </>
  );
}

export default Register;
