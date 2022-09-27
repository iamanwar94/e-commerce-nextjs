import React from "react";
import Shipping from "../styles/Shipping.module.scss";
import Image from "next/image";
import shippingpic from "./assets/shippingpic.PNG";

const shipping = () => {
  return (
    <div className={Shipping.shipping_wrapper}>
      <h6>shipping</h6>
      <h5>
        * BUNK BEDS, TV STANDS & FIRE PLACES WILL NOT BE SET-UP WITH DELIVERY*
      </h5>

      <p>
        Furniture Mecca offers a delivery service within a 50 mile radius of our
        Warehouse
      </p>
      <p>
        you also have the option to pick-up your purchase from our Philadelphia
        Warehouse. Please see the Warehouse's address and hours of operations
        below.
      </p>

      <div className={Shipping.details_wrapper}>
        <div className={Shipping.detail}>
          <h4>Furniture Mecca Warehouse</h4>
          <p>101 E. Venango Street Philadelphia, PA 19134</p>

          <h4 className={Shipping.time_heading}>Pick-Up Hours</h4>

          <p>
            Monday : 2:00 - 5:00 PM <br />
            Tuesday : 2:00 - 5:00 PM <br />
            Wednesday : <span className={Shipping.closed}>*Closed*</span> <br />
            Thursday : 2:00 - 5:00 PM <br />
            Friday : 2:00 - 5:00 PM <br />
            Saturday : 2:00 - 5:00 PM <br />
            Sunday : <span className={Shipping.closed}>*Closed*</span>
          </p>
        </div>
        <div className={Shipping.shipping_image}>
          <Image src={shippingpic} layout="fill" className={Shipping.image} />
        </div>
      </div>
    </div>
  );
};

export default shipping;
