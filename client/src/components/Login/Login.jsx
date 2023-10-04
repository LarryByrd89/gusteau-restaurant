import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './login.css';

const Login = (props) => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const [login] = useMutation(LOGIN_USER);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({
        variables: {
          userName: formData.userName,
          password: formData.password,
        },
      });
      setFormData({
        userName: "",
        email: "",
      });
      localStorage.setItem("id_token", data.login.token);
      navigate("/");

    
    } catch (error) {
      console.error(error);
      // Handle login error
      // display error message
    }
  };

  return (
    <section id="addProfileSection" className="container">
      <div>
        <h2>Log In</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <label about="userName">Username:</label>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Username"
            value={formData.userName}
            onChange={handleChange}
            required
          />
          <br />
          <label about="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <br />
          <button type="submit" className="logpage-btn">Login</button>
          <br />
          <br />
          <Link to="/register"> Click here to register </Link>
        </form>
      </div>
    </section>
  );
};

export default Login;