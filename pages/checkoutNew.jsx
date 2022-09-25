import React, { useState } from "react";
import styles from "../styles/CheckoutNew.module.scss";

const checkouttwo = () => {
  // const [hide, sethide] = useState();

  // const toggle = (index) => {
  //   if (hide === index) {
  //     sethide();
  //   } else {
  //     sethide(index);
  //   }
  // };

  const [order, setOrder] = useState({
    firstname: "",
    lastname: "",
    address: "",
    unit: "",
    city: "",
    state: "",
    zipcode: "",
    phonenumber: "",
    email: "",
  });

  const orderonChange = (event) => {
    const value = event.target.value;
    setOrder({
      ...order,
      [event.target.name]: value,
    });

    console.log(order);

  };

  const [payment, setPayment] = useState({
    cardname: "",
    cardnumber: "",
    date: "",
    cvv: "",
  });

  const paymentonChange = (event) => {
    const value = event.target.value;
    setPayment({
      ...payment,
      [event.target.name]: value,
    });
    console.log(payment);
  };

  const [showpayment, setShowpayment] = useState(false);
  const [showorder, setShoworder] = useState(false);

  return (
    <div className={styles.accordion_container}>
      <div className={styles.accordion_wrapper}>
        <div className={styles.accordion_item}>
          <div
            className={styles.accordion_heading}
            //  onClick={() => toggle(1)}
          >
            <h4>Deliver my order to</h4>
          </div>

          <div
            className={
              // hide === 1
              //   ?
              // ? styles.accordion_content + " " + styles.accordion_content_show
              // : styles.accordion_content
              // styles.accordion_content
              // :
              styles.accordion_content + " " + styles.accordion_content_show
            }
          >
            <div className={styles.content_filter_wrapper}>
              <h2>
                If you already have an account <span>Sign in</span>
              </h2>
              <h3>Required*</h3>

              <div className={styles.names}>
                <span>First Name*</span>
                <span>Last Name*</span>
              </div>

              <div className={styles.inputs}>
                <input
                  type="text"
                  placeholder="Enter First name"
                  name="firstname"
                  value={order.firstname}
                  onChange={orderonChange}
                />
                <input
                  type="text"
                  placeholder="Enter Last name"
                  name="lastname"
                  value={order.lastname}
                  onChange={orderonChange}
                />
              </div>
              <div className={styles.address_div}>
                <span className={styles.address}>Address*</span>
                <span className={styles.optional}>
                  Apt, Unit, Floor (Optional)
                </span>
              </div>

              <div className={styles.address_inputs_div}>
                <input
                  type="text"
                  placeholder="Enter adress"
                  className={styles.address_inputs}
                  name="address"
                  value={order.address}
                  onChange={orderonChange}
                />
                <input
                  type="text"
                  placeholder="Enter Apt, Unit, Floor"
                  className={styles.optional_input}
                  name="unit"
                  value={order.unit}
                  onChange={orderonChange}
                />
              </div>
              <div className={styles.city_div}>
                <h5>City*</h5>
                <input
                  type="text"
                  placeholder="Enter city"
                  className={styles.city_inputs}
                  name="city"
                  value={order.city}
                  onChange={orderonChange}
                />
              </div>

              {/* state and zip */}
              <div className={styles.names}>
                <span>state*</span>
                <span>Zip*</span>
              </div>
              {/* state and zip input */}
              <div className={styles.inputs}>
                <input
                  type="State"
                  placeholder="Enter State"
                  name="state"
                  value={order.state}
                  onChange={orderonChange}
                />
                <input
                  type="Zip Code"
                  placeholder="Enter Zip Code"
                  name="zipcode"
                  value={order.zipcode}
                  onChange={orderonChange}
                />
              </div>

              {/* contact  */}
              <div className={styles.city_div}>
                <h5>Contact Phone for Delivery*</h5>
                <input
                  type="text"
                  placeholder="Enter Contact"
                  className={styles.city_inputs}
                  name="phonenumber"
                  value={order.phonenumber}
                  onChange={orderonChange}
                />
              </div>

              {/* email */}
              <div className={styles.city_div}>
                <h5>Email*</h5>
                <input
                  type="text"
                  placeholder="Enter Email"
                  className={styles.city_inputs}
                  name="email"
                  value={order.email}
                  onChange={orderonChange}
                />
              </div>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  // toggle(2);
                  setShowpayment(true);
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>

        {/* two */}
        <div className={styles.accordion_item}>
          <div
            className={styles.accordion_heading}
            //  onClick={() => toggle(2)}
          >
            <h4>Payment Info</h4>
          </div>

          <div
            className={
              // hide === 2
              //   ? styles.accordion_content + " " + styles.accordion_content_show
              //   : styles.accordion_content &&
              showpayment
                ? styles.accordion_content + " " + styles.accordion_content_show
                : styles.accordion_content
            }
          >
            <div className={styles.content_filter_wrapper}>
              <p>Payment Method</p>
              {/* card Name */}
              <div className={styles.names}>
                <span>Name on Card*</span>
                <span>Card Number*</span>
              </div>

              <div className={styles.inputs}>
                <input
                  type="text"
                  placeholder="Name on Card"
                  name="cardname"
                  value={payment.cardname}
                  onChange={paymentonChange}
                  required
                />
                <input
                  type="text"
                  placeholder="Card Number"
                  name="cardnumber"
                  value={payment.cardnumber}
                  onChange={paymentonChange}
                  required
                />
              </div>

              {/* card Dtae */}
              <div className={styles.names}>
                <span>Date*</span>
                <span>CVV*</span>
              </div>

              <div className={styles.inputs}>
                <input
                  type="date"
                  name="date"
                  value={payment.date}
                  onChange={paymentonChange}
                  required
                />
                <input
                  type="text"
                  placeholder="Last three digits on signature strip"
                  name="cvv"
                  value={payment.cvv}
                  onChange={paymentonChange}
                  required
                />
              </div>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  // toggle(3);
                  setShoworder(true);
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* three */}
        <div className={styles.accordion_item}>
          <div
            className={styles.accordion_heading}
            // onClick={() => toggle(3)}
          >
            <h4>Order Review</h4>
          </div>

          <div
            className={
              // hide === 3
              //   ? styles.accordion_content + " " + styles.accordion_content_show
              //   : styles.accordion_content &&
              showorder
                ? styles.accordion_content + " " + styles.accordion_content_show
                : styles.accordion_content
            }
          >
            <div className={styles.content_filter_wrapper}>
              <div className={styles.total}>
                <span>Totaal</span>
                <span>499$</span>
              </div>
              <div className={styles.total}>
                <span>Taxes</span>
                <span>299$</span>
              </div>
              <div className={styles.total}>
                <span>Grand Total</span>
                <span>899$</span>
              </div>

              <div className={styles.payment_info}>
                <div className={styles.shipping}>
                  <p>Shipping</p>
                </div>
                <div className={styles.payment}>
                  <p className={styles.payment_bold}>Payment details</p>
                  <p>
                    Card type <span> Visa</span>
                  </p>
                  <p>Card holder</p>
                  <p>Card number</p>
                  <p>Expiry Date</p>
                </div>
              </div>

              <button
                // onClick={(e) => {
                //   e.preventDefault();
                //   // toggle(3);
                //   setShoworder(true);
                // }}
              >
                Order
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={styles.checkout_summary_wrapper}>
        <div className={styles.checkout_summary}>
          <p className={styles.items}>
            <span className={styles.Subtotal}>Subtotal (15 items)</span>
            <span>$599.85</span>
          </p>

          <p className={styles.shipping}>
            <span>Shipping</span>
            <span>FREE</span>
          </p>

          <p className={styles.taxes}>
            <span className={styles.bold}>Taxes</span>
            <span>$43.49</span>
          </p>

          <p className={styles.order}>
            <span>Order Total</span>
            <span>$643.34</span>
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default checkouttwo;
