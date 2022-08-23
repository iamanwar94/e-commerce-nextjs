import React, { useState } from "react";

import tracking from "../styles/Tracking.module.scss";

const Tracking = () => {
  const orderData = { orderNumber: "", orderEmail: "", zip: "" };

  const [radio, setRadio] = useState("");
  const [order, setOrder] = useState(orderData);

  const orderChangeHandler = (e) => {
    const { name, value } = e.target;

    setOrder({ ...order, [name]: value });
  };

  const radioChangeHandler = (e) => {
    setRadio(e.target.value);
  };

  const submitHandler = () => {
    if (!order.orderNumber || !order.orderEmail || !order.zip) {
      alert("please fill required fields");
    } else {
      setOrder(orderData);
      setRadio("");
      console.log(order);
      console.log(radio);
    }
  };

  return (
    <div className={tracking.tracking_wrapper}>
      <div className={tracking.tracking_form}>
        <div className={tracking.or}>
          <h4>or</h4>
        </div>
        <div className={tracking.check_order}>
          <h4>Check Order</h4>
          <div className={tracking.radio}>
            <input
              type="radio"
              name="store"
              id="store"
              value="store"
              checked={radio === "store"}
              onChange={radioChangeHandler}
            />
            <label htmlFor="store">In-Store</label>
            <input
              type="radio"
              name="store"
              id="online"
              value="online"
              checked={radio === "online"}
              onChange={radioChangeHandler}
            />
            <label htmlFor="online">Online</label>
          </div>
        </div>
        <p>
          See your order even if you are not a registered user. Enter the order
          number and the billing address ZIP code.
        </p>
        <p className={tracking.req}>Required Information*</p>
        <div className={tracking.inputs_wrapper}>
          <div className={tracking.order_num + " " + tracking.inputs}>
            <label htmlFor="order_num.">Order Number*</label>
            <input
              type="phone"
              id="order_num"
              name="orderNumber"
              placeholder="Order Number"
              value={order.orderNumber}
              onChange={orderChangeHandler}
            />
          </div>
          <div className={tracking.order_email + " " + tracking.inputs}>
            <label htmlFor="order_email.">Order Email*</label>
            <input
              type="email"
              id="order_email"
              name="orderEmail"
              placeholder="Order Email"
              value={order.orderEmail}
              onChange={orderChangeHandler}
            />
          </div>
          <div className={tracking.zip + " " + tracking.inputs}>
            <label htmlFor="zip">Billing Zip Code*</label>
            <input
              type="number"
              id="zip"
              name="zip"
              placeholder="Order Zip Code"
              value={order.zip}
              onChange={orderChangeHandler}
            />
          </div>
          <button onClick={submitHandler}>Check Status</button>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
