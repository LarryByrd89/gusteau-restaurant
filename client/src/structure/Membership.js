import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PROFILE, LOGIN_USER } from "../utils/mutations";

function Membership() {
  // const [registerData, setRegisterData] = useState({
  //   userName: "",
  //   email: "",
  //   password: "",
  //   firstName: "",
  //   lastName: "",
  //   memberType: "standard",
  // });
  // const [loginData, setLoginData] = useState({
  //   userName: "",
  //   password: "",
  // });
  // const [loginTab, setLoginTab] = useState(false);
  // const [addProfile] = useMutation(ADD_PROFILE);
  // const [login] = useMutation(LOGIN_USER);

  // const handleRegisterChange = (e) => {
  //   setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  // };

  // const handleLoginChange = (e) => {
  //   setLoginData({ ...loginData, [e.target.name]: e.target.value });
  // };

  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await addProfile({
  //       variables: {
  //         userName: registerData.userName,
  //         password: registerData.password,
  //         email: registerData.email,
  //         firstName: registerData.firstName,
  //         lastName: registerData.lastName,
  //         memberType: registerData.memberType,
  //       },
  //     });
  //     setRegisterData({
  //       userName: "",
  //       email: "",
  //       password: "",
  //       firstName: "",
  //       lastName: "",
  //       memberType: "standard",
  //     });

  //     // JWT token here if you want
  //     // route them back to home with success message?
  //   } catch (error) {
  //     console.error(error);
  //     // Handle registration error
  //     // display error message
  //   }
  // };

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await login({
  //       variables: {
  //         userName: loginData.userName,
  //         password: loginData.password,
  //       },
  //     });
  //   } catch (error) {
  //     console.error(error);
  //     // Handle registration error
  //     // display error message
  //   }
  // };

  return (
    <>
      <section className="member-header">
        <div className="container">
          <h1>Participate In Our Patron Perk </h1>
          <h2>See What We Have To Offer </h2>
          <p>
            Joing Our member Perk Allows You Enhance Dining Experience With Le
            Bon Mange{" "}
          </p>
        </div>

        {/* <div className="memberpage container">
          <div className="wrapper">
            <div className="tabs">
              <div className="tab">
                <input
                  type="radio"
                  name="css-tabs"
                  id="tab-1"
                  checked
                  className="tab-switch"
                />
                <label
                  for="tab-1"
                  className="tab-label"
                  onClick={() => setLoginTab(false)}
                >
                  Register
                </label>
                {loginTab === false && (
                  <div className="tab-content">
                    <form onSubmit={handleRegister}>
                      <input
                        name="userName"
                        type="text"
                        id="userName-register"
                        placeholder="Register Username"
                        onChange={handleRegisterChange}
                        required
                      />
                      <br />
                      <input
                        name="password"
                        type="password"
                        id="password-register"
                        placeholder="Register Password"
                        onChange={handleRegisterChange}
                        required
                      />
                      <br />
                      <input
                        name="email"
                        type="email"
                        id="email-register"
                        placeholder="Register Email"
                        onChange={handleRegisterChange}
                        required
                      />
                      <br />
                      <input
                        type="text"
                        name="firstName"
                        id="firstName-register"
                        placeholder="Enter First Name"
                        onChange={handleRegisterChange}
                        required
                      />
                      <br />
                      <input
                        type="text"
                        name="lastName"
                        id="lastName-register"
                        placeholder="Enter Last Name"
                        onChange={handleRegisterChange}
                        required
                      />
                      <br />
                      <input
                        type="hidden"
                        name="memberType"
                        id="memberType-register"
                        required
                      />
                      <input
                        type="submit"
                        id="register-submit"
                        placeholder="Register"
                      />
                    </form>
                  </div>
                )}
              </div>
              <div className="tab">
                <input
                  type="radio"
                  name="css-tabs"
                  id="tab-2"
                  className="tab-switch"
                />
                <label
                  for="tab-2"
                  className="tab-label"
                  onClick={() => setLoginTab(true)}
                >
                  Log In
                </label>
                {loginTab === true && (
                  <div className="tab-content">
                    <form onSubmit={handleLogin}>
                      <input
                        name="userName"
                        type="text"
                        id="userName-login"
                        placeholder="Enter Username"
                        onChange={handleLoginChange}
                        required
                      />
                      <br />
                      <input
                        type="password"
                        id="password-login"
                        placeholder="Enter Password"
                        onChange={handleLoginChange}
                        required
                      />
                      <br />
                      <input type="submit" id="login" />
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div> */}
          <div className="member-type">
            <div id="wine-perk" className="wine-card">
              <div className="rounded-border">
              <h3>Wine Perk</h3>
              <p>What This Plan Offers</p>
              <ul>
                <li>Specialty Wine Menu, Per Visit</li>
                <li>One Small Bottle Of Wine Per Month, Per Visit</li>
                <li>Specialty Holiday Mixes</li>
                <li>Exclusive Cheese Access </li>
               </ul>
              </div>
            </div>
            <div id="desert-club" className="desert-card">
            <div className="rounded-border">

              <ul>
                <li>Specialty Wine Menu, Per Visit</li>
                <li>One Small Bottle Of Wine Per Month, Per Visit</li>
                <li>Specialty Holiday Mixes</li>
                <li>Exclusive Cheese Access </li>
               </ul>
            </div>
          </div>
          </div>
</section>
    </>
  );
}

export default Membership;
