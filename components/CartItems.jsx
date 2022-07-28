import React, { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { selectCart, removeFromCart } from "../App/Features/cartSlice";
import cartimage from "../pages/assets/fur18.jpg";

import cart from "../styles/Cart.module.scss";

const CartItems = () => {
  const selectCartDetail = useSelector(selectCart);
  const dispatch = useDispatch();

  const [productQuantity, setProductQuantity] = useState(1);
  const [productPrice, setProductPrice] = useState(499);

  const decQuantity = () => {
    productQuantity > 1
      ? setProductQuantity(productQuantity - 1)
      : productQuantity;
  };
  const incQuantity = () => {
    setProductQuantity(productQuantity + 1);
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const imageURL = "https://ashley-api.herokuapp.com/uploads/";

  return (
    <div>
      {selectCartDetail?.map((cartDetail) => (
        <div className={cart.card} key={cartDetail._id}>
          <div className={cart.card_img_info}>
            <div className={cart.img}>
              <img
                src={`${imageURL}${cartDetail.image}`}
                alt={cartDetail.title}
                className={cart.img}
                height={100}
                width={200}
              />
            </div>
            <div className={cart.info}>
              <div className={cart.name_color_size}>
                <h3>{cartDetail.image}</h3>
                <p>Product Item Code</p>
                <p>{cartDetail.color}</p>
                <p>{cartDetail.size}</p>
              </div>
              <div className={cart.qty_price}>
                <div className={cart.qty}>
                  <p>Qty</p>
                  <span>
                    <p onClick={decQuantity}>-</p>
                    <p>{cartDetail.quantity}</p>
                    <p onClick={incQuantity}>+</p>
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
            <button>Save for Later</button>
            <button onClick={() => handleRemove(cartDetail._id)}>
              Remove Item
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
