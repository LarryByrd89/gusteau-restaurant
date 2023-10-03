import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PROFILE } from "../../utils/mutations";
import { useNavigate } from "react-router-dom";
import './register.css'

const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    memberType: "standard",
  });
  const navigate = useNavigate();
  const [addProfile] = useMutation(ADD_PROFILE);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addProfile({
        variables: {
          userName: formData.userName,
          password: formData.password,
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          memberType: formData.memberType,
        },
      });
      console.log(data);
      setFormData({
        userName: "",
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        memberType: "standard",
      });

      navigate("/login");

      // JWT token here if you want
      // route them back to home with success message?
    } catch (error) {
      console.error(error);
      // Handle registration error
      // display error message
    }
  };

  return (
    <section id="addProfileSection" className="container">
      <div>
        <h2>Register</h2>
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
          <label about="email">Email Address:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br />
          <label about="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <br />
          <label about="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <br />
          <label about="memberType">Select a membership level:</label>
          <select name="memberType" id="memberType" onChange={handleChange}>
            <option value="standard">Standard</option>
            <option value="silver">Silver</option>
            <option value="gold">Gold</option>
          </select>
          <br />
          <br />
          <button type="submit">Register</button>
          <br />
          <br />
        </form>
      </div>
    </section>
  );
};

export default Register;