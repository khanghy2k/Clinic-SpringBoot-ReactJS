import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const apiLogin = "http://localhost:8080/api/login";
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setError("Vui lòng nhập đầy đủ thông tin");
      return;
    }
    axios
      .post(apiLogin, {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("username", username);

        navigate("/home", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setError("Sai tên đăng nhập hoặc mật khẩu");
      });
  };

  return (
    <div>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=0"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="assets/img/favicon.ico"
        />
        <title>
          Preclinic - Medical & Hospital - Bootstrap 4 Admin Template
        </title>
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/css/font-awesome.min.css"
        />
        <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
      </head>
      <body>
        <div className="main-wrapper account-wrapper">
          <div className="account-page">
            <div className="account-center">
              <div className="account-box">
                <form onSubmit={handleLogin} className="form-signin">
                  <div className="account-logo">
                    <a href="index-2.html">
                      <img src="assets/img/logo-dark.png" alt="" />
                    </a>
                  </div>
                  <div className="form-group">
                    <label>Username or Email</label>
                    <input
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      error={error}
                      type="text"
                      autoFocus
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      error={error}
                      type="password"
                      className="form-control"
                    />
                  </div>
                  {error && <p className="text-danger">{error}</p>}
                  <div className="form-group text-right">
                    <a href="forgot-password.html">Forgot your password?</a>
                  </div>
                  <div className="form-group text-center">
                    <button
                      type="submit"
                      className="btn btn-primary account-btn"
                    >
                      Login
                    </button>
                  </div>
                  <div className="text-center register-link">
                    Don’t have an account?{" "}
                    <a href="register.html">Register Now</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
