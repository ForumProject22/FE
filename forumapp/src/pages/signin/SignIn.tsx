import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const intState = {
  email: "",
  password: "",
};

const backendUrl = `${process.env.REACT_APP_BACKEND_URL}/users/login`;

export const LogIn = () => {
  const nav = useNavigate();
  const [data, setData] = useState(intState);
  const [, setUserData] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // Request API.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post(backendUrl, data)
      .then((res) => {
        // Handle success.
        window.localStorage.setItem("email", res.data.email);
        window.localStorage.setItem("token", res.data.token);
        setData(intState);
        setUserData(res.data);
        nav("/auth/profile");
        window.location.reload();
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.message);
      });
  };

  return (
    <div id="signin-container">
      <form id="signin-form" onSubmit={onSubmit}>
        Please Log In!!!
        <input
          type="text"
          name="email"
          placeholder="Email..."
          onChange={handleChange}
          value={data.email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password..."
          onChange={handleChange}
          value={data.password}
          required
        />
        <label>
          Remember me
          <input type="checkbox" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default LogIn;
