import React, { useState } from "react";

import signup from "../styles/Signup.module.scss";

const Signup = () => {
  const data = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
    age_confirm: false,
    offers: false,
  };
  const [signupData, setSignupData] = useState(data);

  const checkChangeHandler = (e) => {
    const { name, checked } = e.target;
    setSignupData({ ...signupData, [name]: checked });
  };

  const signupChangeHandler = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };
  const signupClickHandler = () => {
    if (
      !signupData.fname ||
      !signupData.lname ||
      !signupData.email ||
      !signupData.phone ||
      !signupData.password
    ) {
      alert("please fill all mandatory fields first");
    } else {
      console.log(signupData);
      setSignupData(data);
    }
  };

  return (
    <div className={signup.signup_wrapper}>
      <div className={signup.signup_form_wrapper}>
        <div className={signup.heading_para}>
          <h2>Create an Account</h2>
          <p>
            Creating an account is easy. Just fill out the form below and enjoy
            the benefits of being a registered customer.
          </p>
        </div>
        <div className={signup.signup_form}>
          <div className={signup.fname + " " + signup.input_wrapper}>
            <label htmlFor="fname">First Name*</label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={signupData.fname}
              onChange={signupChangeHandler}
            />
          </div>
          <div className={signup.lname + " " + signup.input_wrapper}>
            <label htmlFor="lname">Last Name*</label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={signupData.lname}
              onChange={signupChangeHandler}
            />
          </div>
          <div className={signup.email + " " + signup.input_wrapper}>
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={signupData.email}
              onChange={signupChangeHandler}
            />
          </div>
          <div className={signup.phone + " " + signup.input_wrapper}>
            <label htmlFor="phone">Phone*</label>
            <input
              type="phone"
              id="phone"
              name="phone"
              value={signupData.phone}
              onChange={signupChangeHandler}
            />
          </div>
          <div className={signup.password + " " + signup.input_wrapper}>
            <label htmlFor="password">Password*</label>
            <input
              type="password"
              id="password"
              name="password"
              value={signupData.password}
              onChange={signupChangeHandler}
            />
          </div>
          <div className={signup.age_confirm + " " + signup.chex}>
            <input
              type="checkbox"
              id="age_confirm"
              name="age_confirm"
              checked={signupData.age_confirm}
              onChange={checkChangeHandler}
            />
            <label htmlFor="age_confirm">
              I affirm I am 13 years of age or older. CA Residents: I affirm I
              am 18 years of age or older.*
            </label>
          </div>
          <div className={signup.offers + " " + signup.chex}>
            <input
              type="checkbox"
              id="offers"
              name="offers"
              checked={signupData.offers}
              onChange={checkChangeHandler}
            />
            <label htmlFor="offers">
              Yes! I'd like to receive emails with special offers and sales
            </label>
          </div>
          <div className={signup.button}>
            <button onClick={signupClickHandler}>submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
