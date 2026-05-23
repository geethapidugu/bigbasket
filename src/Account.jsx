import React, { useState } from "react";
import "./Account.css";

function Account() {

  const [isLogin, setIsLogin] = useState(true);

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("loggedUser")) || null
  );

  // REGISTER

  const handleRegister = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push(registerData);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful!");

    setRegisterData({
      name: "",
      email: "",
      password: "",
    });

    setIsLogin(true);
  };

  // LOGIN

  const handleLogin = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let matchedUser = users.find(
      (user) =>
        user.email === loginData.email &&
        user.password === loginData.password
    );

    if (matchedUser) {
      localStorage.setItem(
        "loggedUser",
        JSON.stringify(matchedUser)
      );

      setCurrentUser(matchedUser);

      alert("Login Successful!");
    } else {
      alert("Invalid Email or Password");
    }

    setLoginData({
      email: "",
      password: "",
    });
  };

  // LOGOUT

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");

    setCurrentUser(null);

    alert("Logout Successful!");
  };

  return (
    <div className="account-container">

      <div className="account-card">

        {currentUser ? (

          <div className="welcome-box">

            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt=""
            />

            <h1>Welcome</h1>

            <h2>{currentUser.name}</h2>

            <p>{currentUser.email}</p>

            <button onClick={handleLogout}>
              Logout
            </button>

          </div>

        ) : (

          <>

            <div className="toggle-buttons">

              <button
                className={isLogin ? "active-btn" : ""}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>

              <button
                className={!isLogin ? "active-btn" : ""}
                onClick={() => setIsLogin(false)}
              >
                Register
              </button>

            </div>

            {isLogin ? (

              <form onSubmit={handleLogin}>

                <h1>Login Account</h1>

                <input
                  type="email"
                  placeholder="Enter Email"
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({
                      ...loginData,
                      email: e.target.value,
                    })
                  }
                />

                <input
                  type="password"
                  placeholder="Enter Password"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({
                      ...loginData,
                      password: e.target.value,
                    })
                  }
                />

                <button type="submit">
                  Login
                </button>

              </form>

            ) : (

              <form onSubmit={handleRegister}>

                <h1>Create Account</h1>

                <input
                  type="text"
                  placeholder="Enter Name"
                  value={registerData.name}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      name: e.target.value,
                    })
                  }
                />

                <input
                  type="email"
                  placeholder="Enter Email"
                  value={registerData.email}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      email: e.target.value,
                    })
                  }
                />

                <input
                  type="password"
                  placeholder="Enter Password"
                  value={registerData.password}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      password: e.target.value,
                    })
                  }
                />

                <button type="submit">
                  Register
                </button>

              </form>

            )}

          </>

        )}

      </div>

    </div>
  );
}

export default Account;