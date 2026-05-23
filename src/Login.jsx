// import React from 'react'
// import { useForm } from 'react-hook-form'
// import { useNavigate } from 'react-router-dom';

// function Login() {
//     let {register,handleSubmit,reset}=useForm();
//     let navigate=useNavigate();
//     let loginLogics = (loginData) => {
//     const registeredUsers = JSON.parse(localStorage.getItem("users")) || [];

    
//     const validUser = registeredUsers.find(user =>
//         user.email === loginData.email &&
//         user.password === loginData.password
//     );

//     if(validUser)
//     {
//         // alert('Login Sucessfull')
//         navigate("/Home");
		
// 		// Refresh page
// 	   window.location.reload();
//     }
//     else{
//         alert("login fail check once")
//     }



//   };
//   return (
//     <>
//     <form onSubmit={handleSubmit(loginLogics)}>
//    <input
//           type="email"
//           placeholder="Enter Email Address"
//           {...register("email", { required: true })}
//         />
//         <br></br>
//  <input
//           type="password"
//           placeholder="Enter Password"
//           {...register("password", { required: true })}
//         />
//         <br></br>
//   <button type="submit"> Login </button>
//     </form>
    
    
    
    
    
//     </>
//   )
// }

// export default Login;




// LoginSignup.jsx
import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  // LOGIN STATES
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // SIGNUP STATES
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const navigate = useNavigate();

  // SIGN UP FUNCTION
  const handleSignup = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // check existing user
    let userExists = users.find((user) => user.email === signupEmail);

    if (userExists) {
      alert("User already exists!");
      return;
    }

    const newUser = {
      name: signupName,
      email: signupEmail,
      password: signupPassword,
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup Successful ✅");

    // clear fields
    setSignupName("");
    setSignupEmail("");
    setSignupPassword("");

    // switch to login
    setIsLogin(true);
  };

  // LOGIN FUNCTION
  const handleLogin = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
      (user) =>
        user.email === loginEmail &&
        user.password === loginPassword
    );

    if (validUser) {
      alert("Login Successful 🎉");

      // store current user
      localStorage.setItem(
        "currentUser",
        JSON.stringify(validUser)
      );

      // redirect to home page
      navigate("/");
    } else {
      alert("Invalid User ❌");
    }
  };

  return (
    <div className="auth-container">
      <div className={`auth-box ${isLogin ? "" : "active"}`}>
        
        {/* SIGN IN */}
        <div className="form-box signin">
          <form onSubmit={handleLogin}>
            <h1>Welcome Back 👋</h1>

            <div className="input-box">
              <input
                type="email"
                placeholder="Email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>

            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn">
              Sign In
            </button>

            <p className="text">or continue with</p>

            <div className="social-icons">
              <a href="#">G</a>
              <a href="#">F</a>
              <a href="#">X</a>
            </div>
          </form>
        </div>

        {/* SIGN UP */}
        <div className="form-box signup">
          <form onSubmit={handleSignup}>
            <h1>Create Account ✨</h1>

            <div className="input-box">
              <input
                type="text"
                placeholder="Full Name"
                required
                value={signupName}
                onChange={(e) => setSignupName(e.target.value)}
              />
            </div>

            <div className="input-box">
              <input
                type="email"
                placeholder="Email"
                required
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
              />
            </div>

            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                required
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn">
              Sign Up
            </button>

            <p className="text">or continue with</p>

            <div className="social-icons">
              <a href="#">G</a>
              <a href="#">F</a>
              <a href="#">X</a>
            </div>
          </form>
        </div>

        {/* TOGGLE PANEL */}
        <div className="toggle-box">
          <div className="toggle-panel left">
            <h1>Hello, Friend!</h1>
            <p>Don't have an account?</p>

            <button
              type="button"
              className="toggle-btn"
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>

          <div className="toggle-panel right">
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>

            <button
              type="button"
              className="toggle-btn"
              onClick={() => setIsLogin(true)}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;