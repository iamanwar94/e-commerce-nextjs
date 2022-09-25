import React, { useState } from "react";
import Image from "next/image";

import cart from "../styles/CartNew.module.scss";
import fur16 from "../pages/assets/fur16.jpg";
import { ImTruck } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCart,
  removeFromCart,
  incQuantity,
  decQuantity,
} from "../app/features/cartSlice";

// import Capture from "../pages/assets/Capture.PNG"
import { TiTickOutline } from "react-icons/ti";
import { FiSettings } from "react-icons/fi";

const CartItems = () => {
  const selectCartDetail = useSelector(selectCart);
  const dispatch = useDispatch();

  const decQty = (id) => {
    dispatch(decQuantity(id));
  };
  const incQty = (id) => {
    dispatch(incQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const imageURL = "https://ashley-api.herokuapp.com/uploads/products/";

  return (
    <div className={cart.cratitems_wrapper}>
      {selectCartDetail.length < 1 ? (
        <h3>Cart is Empty</h3>
      ) : (
        selectCartDetail?.map((cartDetail) => (
          <div className={cart.threediv} key={cartDetail._id}>
            {/* one div  mycartimgdiv_wrapper */}
            <div className={cart.mycartimgdiv_wrapper}>
              <div className={cart.mycartimgdiv}>
                <Image
                  src={`${imageURL}${cartDetail.image}`}
                  alt="Loading..."
                  layout="fill"
                  className={cart.mycartimgdiv_img}
                />
              </div>

              <p className={cart.mycartimgdiv_wrapper_p}>
                <span>Save for Later </span>
                <span
                  className={cart.mycartimgdiv_wrapperspan}
                  onClick={() => handleRemove(cartDetail.sku)}
                >
                  Remove Item
                </span>
              </p>
            </div>

            {/* second div   cart detail wrapper*/}
            <div className={cart.cart_detail_wrapper}>
              <p className={cart.cart_detail_wrapper_p}>
                Online <span>Only!</span>
              </p>
              <h6>
                {cartDetail.title}
              </h6>
              <p>
                Item: {cartDetail.sku}
                <br />
                Color: {cartDetail.color}
                <br />
                Bed Size: {cartDetail.size} <br />
              </p>
              <div className={cart.price_wrapper}>
                <div className={cart.price_leftdiv}>
                  <p>Qty</p>
                  <div className={cart.qty}>
                    <p>
                      <span onClick={() => decQty(cartDetail.sku)}>-</span>
                      <span>{cartDetail.quantity}</span>
                      <span onClick={() => incQty(cartDetail.sku)}>+</span>
                    </p>
                  </div>
                  <p className={cart.item_total}>Item Total</p>
                </div>

                <div className={cart.price_rightdiv}>
                  <p>Item Price</p>
                  <p className={cart.price_bold}>${cartDetail.price}</p>
                  <p className={cart.price_bold}>
                    ${cartDetail.price * cartDetail.quantity}
                  </p>
                </div>
              </div>
            </div>

            {/* third div small_card */}
            <div className={cart.thirdiv}>
              {/* small_card */}
              <div className={cart.small_card}>
                <ImTruck className={cart.small_card_icon} />
                <h6>
                  <span className={cart.ups}>UPS</span>
                  <br />
                  <span className={cart.Assembly}> Assembly Not Included</span>
                  <br />
                  <span className={cart.Usually}> Usually ships in</span>
                  <br />
                  <span className={cart.ups}> 5 to 7 days</span>
                  <br />
                  <span className={cart.free}> FREE</span>
                  <br />
                </h6>
                <span className={cart.include}>What's Included?</span>
              </div>

              {/* protect */}

              <div className={cart.protect}>
                <span className={cart.protect_heading}>
                  Protect Your items for Unexpectetd
                </span>
                <br />
                <TiTickOutline className={cart.protect_icon} />
                <span className={cart.protect_para}>
                  5 Years Furniture Protection Plan
                </span>
                <br />
                <span className={cart.protect_link}>Plan Details</span>

                {/* <div>
                  <Image
                    src={Capture}
                    alt="Picture of the author"
                    width={50}
                    height={50}
                  />
                </div> */}
              </div>
              
              {/* expert_services */}
              <div className={cart.expert_services}>
                <p className={cart.expert_heading}> Add Expert Services</p>
                <div className={cart.expert_details}>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                    className={cart.expert_services_input}
                  />
                  <FiSettings className={cart.expert_services_icon} />
                  <span className={cart.expert_services_span}>
                    Expert Assembly & installation by Handy
                  </span>
                </div>
                <span className={cart.expert_services_works}>$102.50 (applies per items) | How it Works</span>
              </div>

            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartItems;
