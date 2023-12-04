// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    localStorage.setItem("user", JSON.stringify({ email, password }));
    navigate('/posts');
    location.reload();
  };

  return (
    <div className="container">
      <h1 className="text-center">User Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">
            Email address
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;

