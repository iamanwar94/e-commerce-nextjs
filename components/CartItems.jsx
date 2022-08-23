import React, { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCart,
  removeFromCart,
  incQuantity,
  decQuantity,
} from "../app/features/cartSlice";
// import cartimage from "../pages/assets/fur18.jpg";

import cart from "../styles/Cart.module.scss";

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
    <div className={cart.main}>
      {selectCartDetail.length < 1 ? (
        <h3>Cart is Empty</h3>
      ) : (
        selectCartDetail?.map((cartDetail) => (
          <div className={cart.card} key={cartDetail._id}>
            <div className={cart.card_img_info}>
              <div className={cart.img}>
                <Image
                  src={`${imageURL}${cartDetail.image}`}
                  alt={cartDetail.title}
                  className={cart.img}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className={cart.info}>
                <div className={cart.name_color_size}>
                  <h3>Product Name: {cartDetail.title}</h3>
                  <p>Product Item Code: {cartDetail.sku}</p>
                  <p>Color: {cartDetail.color}</p>
                  <p>Size: {cartDetail.size}</p>
                </div>
                <div className={cart.qty_price}>
                  <div className={cart.qty}>
                    <p>Qty</p>
                    <span>
                      <p onClick={() => decQty(cartDetail.sku)}>-</p>
                      <p>{cartDetail.quantity}</p>
                      <p onClick={() => incQty(cartDetail.sku)}>+</p>
                    </span>
                  </div>
                  <div className={cart.price}>
                    <p>Item Price</p>
                    <h4>{cartDetail.price}</h4>
                  </div>
                  <div className={cart.total}>
                    <p>Item Total</p>
                    <h3>$ {cartDetail.price * cartDetail.quantity}</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className={cart.remove_btn}>
              {/* <button>Save for Later</button> */}
              <button onClick={() => handleRemove(cartDetail.sku)}>
                Remove Item
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartItems;
