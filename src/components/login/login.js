import "./login.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [text, setText] = useState("");
  // For navigate after login
  const navigate = useNavigate();
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // https://server-side-task.vercel.app/check-user
    fetch(`https://server-side-task.vercel.app/check-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.name === false) {
          setText("User not found!");
        } else {
          console.log(data);
          setText("Logged in. User Found!");
          localStorage.setItem("user", data.name);
          localStorage.setItem("token", data.token);
          form.reset();
          navigate("/user-page");
        }
      });
  };
  return (
    <div>
      <div className="text-center mt-5">
        <Link to="/user-page">
          <p className="btn btn-dark">User Page</p>
        </Link>
      </div>
      <section className="login-margin">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5 mb-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleSubmit}>
                <h5 className="text-danger" id="sign-in-error"></h5>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    name="email"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                </div>
                {/* Password input */}
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    name="password"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                </div>
                <div>
                  <h4 className="text-center text-danger mt-3">{text}</h4>
                </div>
                <div className="text-center text-lg-start mt-1 pt-1">
                  <input
                    type="submit"
                    className="btn btn-dark w-100"
                    value="Login"
                  />
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account? <Link to="/register">Register</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
