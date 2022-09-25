import React from "react";
import Checkout from "../styles/Checkout.module.scss";

const CheckOut = () => {
  return (
    <div className={Checkout.checkout_wrapper}>
      <div className={Checkout.detail_wrapper}>
        <h1>Deliver my order to</h1>
        <h2>
          If you already have an account <span>Sign in</span>
        </h2>
        <h3>Required*</h3>
        <div className={Checkout.names}>
          <span>First Name*</span>
          <span>Last Name*</span>
        </div>
        <div className={Checkout.inputs}>
          <input type="text" placeholder="Enter First name" />
          <input type="text" placeholder="Enter Last name" />
        </div>
        <div className={Checkout.address_div}>
          <span className={Checkout.address}>Address*</span>
          <span className={Checkout.optional}>Apt, Unit, Floor (Optional)</span>
        </div>
        <div className={Checkout.address_inputs_div}>
          <input
            type="text"
            placeholder="Enter adress"
            className={Checkout.address_inputs}
          />
          <input
            type="text"
            placeholder="Enter Apt, Unit, Floor"
            className={Checkout.optional_input}
          />
        </div>
        <div className={Checkout.city_div}>
          <h5>City*</h5>
          <input
            type="text"
            placeholder="Enter city"
            className={Checkout.city_inputs}
          />
        </div>

        {/* state and zip */}
        <div className={Checkout.names}>
          <span>state*</span>
          <span>Zip*</span>
        </div>
        {/* state and zip input */}
        <div className={Checkout.inputs}>
          <input type="State" placeholder="Enter State" />
          <input type="Zip Code" placeholder="Enter Zip Code" />
        </div>

        {/* contact  */}
        <div className={Checkout.city_div}>
          <h5>Contact Phone for Delivery*</h5>
          <input
            type="text"
            placeholder="Enter Contact"
            className={Checkout.city_inputs}
          />
        </div>

        {/* email */}
        <div className={Checkout.city_div}>
          <h5>Email*</h5>
          <input
            type="text"
            placeholder="Enter Email"
            className={Checkout.city_inputs}
          />
        </div>

        <button>Continue</button>

        {/* payment info */}
        <div className={Checkout.paymen_info}>
          <p>Payment Method</p>
          {/* card Name */}
          <div className={Checkout.names}>
            <span>Name on Card*</span>
            <span>Card Number*</span>
          </div>
          <div className={Checkout.inputs}>
            <input type="text" placeholder="Name on Card" />
            <input type="text" placeholder="Card Number" />
          </div>
          {/* card Dtae */}
          <div className={Checkout.names}>
            <span>Date*</span>
            <span>CVV*</span>
          </div>
          <div className={Checkout.inputs}>
            <input type="date" />
            <input
              type="text"
              placeholder="Last three digits on signature strip"
            />
          </div>
          {/* <p>Order Review</p> */}
        </div>

        <button>Submit</button>

        {/* Review*/}
        <div className={Checkout.order_summary}>
          <h5>Order summary</h5>
          <div className={Checkout.total}>
            <span>Totaal</span>
            <span>499$</span>
          </div>
          <div className={Checkout.total}>
            <span>Taxes</span>
            <span>299$</span>
          </div>
          <div className={Checkout.total}>
            <span>Grand Total</span>
            <span>899$</span>
          </div>
          {/* <div className={Checkout.shipping}>
            <span>Shipping</span>
            <span>Payment details</span>
          </div>
          
          <div className={Checkout.shipping_info}>
            <span>Card type</span>
            <span>Card holder</span>
            <span>Card number</span>
            <span>Expiry Date</span>
          </div> */}

          <div className={Checkout.payment_info}>
            <div className={Checkout.shipping}>
              <p>Shipping</p>
            </div>
            <div className={Checkout.payment}>
              <p className={Checkout.payment_bold}>Payment details</p>
              <p>
                Card type <span> Visa</span>
              </p>
              <p>Card holder</p>
              <p>Card number</p>
              <p>Expiry Date</p>
            </div>
          </div>
        </div>
      </div>

      <div className={Checkout.checkout_summary_wrapper}>
        <div className={Checkout.checkout_summary}>
          <p className={Checkout.items}>
            <span className={Checkout.Subtotal}>Subtotal (15 items)</span>
            <span>$599.85</span>
          </p>

          <p className={Checkout.shipping}>
            <span>Shipping</span>
            <span>FREE</span>
          </p>

          <p className={Checkout.taxes}>
            <span className={Checkout.bold}>Taxes</span>
            <span>$43.49</span>
          </p>

          <p className={Checkout.order}>
            <span>Order Total</span>
            <span>$643.34</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;