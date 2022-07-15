import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tracking from "../../Components/Tracking/Tracking";

import "./Login.scss";

const Login = () => {
  const data = { email: "", password: "", remember: false };
  const [loginData, setLoginData] = useState(data);

  const loginChangeHandler = (e) => {
    const { name, value, checked } = e.target;
    if (name === "email") {
      setLoginData({ ...loginData, email: value });
    } else if (name === "password") {
      setLoginData({ ...loginData, password: value });
    } else if (name === "remember") {
      setLoginData({ ...loginData, remember: checked });
    }
  };
  const loginClickHandler = () => {
    if (!loginData.email || !loginData.password) {
      alert("please type email and password correctly");
    } else {
      console.log(loginData);
      setLoginData(data);
    }
  };
  return (
    <div className="login_wrapper">
      <div className="login_form_wrapper">
        <div className="heading_para">
          <h2>Account Login</h2>
        </div>
        <div className="login_signup">
          <div className="login_track">
            <div className="login_form">
              <p>Returning Customer</p>
              <p>
                If you are a registered user, please enter your email and
                password.
              </p>
              <p>Required*</p>
              <div className="email input_wrapper">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={loginData.email}
                  onChange={loginChangeHandler}
                />
              </div>
              <div className="password input_wrapper">
                <label htmlFor="password">Password*</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={loginData.password}
                  onChange={loginChangeHandler}
                />
              </div>
              <div className="button">
                <button onClick={loginClickHandler}>login</button>
              </div>
              <div className="forgot">
                <div className="forgot_password">
                  <p>Forgot Password</p>
                </div>
                <div className="rememberme chex">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    onChange={loginChangeHandler}
                    checked={loginData.remember}
                  />
                  <label htmlFor="offers">Remember me</label>
                </div>
              </div>
            </div>
            <Tracking />
            {/* <div className="tracking_wrapper">
              <div className="tracking_form">
                <div className="or">
                  <h4>or</h4>
                </div>
                <div className="check_order">
                  <h4>Check Order</h4>
                  <div className="radio">
                    <input type="radio" name="store" id="store" value="store" />
                    <label htmlFor="store">In-Store</label>
                    <input
                      type="radio"
                      name="store"
                      id="online"
                      value="online"
                    />
                    <label htmlFor="online">Online</label>
                  </div>
                </div>
                <p>
                  See your order even if you are not a registered user. Enter
                  the order number and the billing address ZIP code.
                </p>
                <p className="req">Required Information*</p>
                <div className="inputs_wrapper">
                  <div className="order_num inputs">
                    <label htmlFor="order_num.">Order Number*</label>
                    <input
                      type="phone"
                      id="order_num"
                      name="orderNumber"
                      placeholder="Order Number"
                    />
                  </div>
                  <div className="order_email inputs">
                    <label htmlFor="order_email.">Order Email*</label>
                    <input
                      type="email"
                      id="order_email"
                      name="orderEmail"
                      placeholder="Order Email"
                    />
                  </div>
                  <div className="zip inputs">
                    <label htmlFor="zip">Billing Zip Code*</label>
                    <input
                      type="number"
                      id="zip"
                      name="zip"
                      placeholder="Order Zip Code"
                    />
                  </div>
                  <button>Check Status</button>
                </div>
              </div>
            </div> */}
          </div>
          <div className="signup">
            <p>New Customers</p>
            <p>
              Create an Ashley online account today! You'll be able to access
              express checkout, create and save shopping lists, view order
              history and much more...
            </p>
            <div className="button">
              <Link to="/signup">
                <button>create account now</button>
              </Link>
            </div>
            <p>Benefits of Creating an Account</p>
            <h5>News and exclusive offers!</h5>
            <p>
              Sign up to receive email updates on special promotions, new
              product announcements, gift ideas and more.
            </p>
            <h5>Order History</h5>
            <p>
              Receive important information about your order. You can even track
              it up to the minute it arrives.
            </p>
            <h5>Faster Checkout</h5>
            <p>
              Save your billing and shipping information to make it easier to
              buy your favorite gear.
            </p>
            <p className="readmore">(read more about security)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
