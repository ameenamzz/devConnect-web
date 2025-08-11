import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { redirect, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [isLogIn, setIsLogIn] = useState(true);
  const [error, setError] = useState();
  const [toast, setToast] = useState(false);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/"); // prevents back button from going to login
    }
  }, [user, navigate]);

  const handleLogin = async () => {
    try {
      const res = await axios.post(BASE_URL + "/login", {
        email,
        password,
      });
      dispatch(addUser(res.data));
      navigate("/");
    } catch (error) {
      setError(error?.response?.data);
      console.log(error);
    }
  };

  const handleSignIn = async () => {
    try {
      const res = await axios.post(BASE_URL + "/signup", {
        firstName,
        lastName,
        age,
        email,
        password,
      });
      if (res.status === 200) {
        setError(null);
        setToast(true);
        setTimeout(() => {
          setIsLogIn(!isLogIn);
        }, 3000);
      }
    } catch (error) {
      setError(error?.response?.data);
      console.log(error);
    }
  };

  return (
    <>
      {!isLogIn && toast && (
        <div className="toast toast-top toast-center mt-15">
          <div className="alert alert-success">
            <span>Message sent successfully.</span>
          </div>
        </div>
      )}
      <div className="flex justify-center mt-15">
        <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-sm border p-10">
          <legend className="fieldset-legend">
            {isLogIn ? "Login" : "Signup"}
          </legend>
          {!isLogIn && (
            <>
              <label className="label">First Name</label>
              <input
                type="text"
                className="input"
                value={firstName}
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />

              <label className="label">Last Name</label>
              <input
                type="text"
                className="input"
                value={lastName}
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />

              <label className="label">Age</label>
              <input
                type="text"
                className="input"
                value={age}
                placeholder="Age"
                onChange={(e) => setAge(e.target.value)}
              />
            </>
          )}

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
          {isLogIn ? (
            <p className="text-lg font-medium text-red-500">{error}</p>
          ) : (
            <p className="text-lg font-medium text-red-500">{error}</p>
          )}
          <button
            className="btn btn-primary mt-4 w-xs"
            onClick={isLogIn ? handleLogin : handleSignIn}
          >
            {isLogIn ? "Login" : "Signup"}
          </button>
          <span
            className="mt-3 cursor-pointer"
            onClick={() => setIsLogIn((value) => !value)}
          >
            {isLogIn ? "New User? Sign Up" : "Already a User ? Login In"}
          </span>
        </fieldset>
      </div>
    </>
  );
};

export default Login;
