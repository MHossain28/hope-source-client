import React, { useContext } from "react";
import { Form, Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import "./Login.css";

const Login = () => {
  // get firebase info
  const { loginUser } = useContext(AuthContext);

  // Login Handle
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));

    form.reset();
  };

  return (
    <div className="hero min-h-screen login-container">
      <div className="hero-content flex-col ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="m-auto mt-6 text-2xl font-bold">LOG IN</div>
          {/* form  */}
          <Form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                minlength="6"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn login-btn" type="submit" value="LOG IN" />
            </div>
            <label className="label">
              New this website Please ,
              <Link to="/signup" className="text-grey text-sm bottom-link">
                SIGN UP
              </Link>
            </label>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
