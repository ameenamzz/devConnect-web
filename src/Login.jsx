import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("amina88@gmail.com");
  const [password, setPassword] = useState("amina27May@1234");

  const handleLogin = async () => {
    try {
      console.log("clicked");
      const res = await axios.post(
        "http://localhost:7777/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      console.log("Response:", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center mt-32">
      <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-sm border p-10">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="label">Password</label>
        <input
          type="password"
          className="input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary mt-4 w-xs" onClick={handleLogin}>
          Login
        </button>
      </fieldset>
    </div>
  );
};

export default Login;
