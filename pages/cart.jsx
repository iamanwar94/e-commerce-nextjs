import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addToCheckout } from "../app/features/checkoutSlice";
import { selectCart } from "../app/features/cartSlice";

// from redux slices

import { fetchProducts } from "../app/features/productSlice";
import { fetchCategory } from "../app/features/categorySlice";

import CartItems from "../components/CartItems";

import cart from "../styles/Cart.module.scss";
import cartimage from "./assets/fur18.jpg";

const Cart = () => {
  const dispatch = useDispatch();
  const selectCartDetail = useSelector(selectCart);
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchProducts());
  }, [dispatch]);

  const total =
    selectCartDetail.length >= 1 &&
    selectCartDetail
      .map((detail) => {
        return detail.price * detail.quantity;
      })
      .reduce((a, b) => {
        return a + b;
      });

  const taxes = total * 0.17;
  const grandTotal = total + taxes;
  const productName = selectCartDetail.map((detail) => {
    return detail.title;
  });
  const productQty = selectCartDetail.map((detail) => {
    return detail.quantity;
  });
  const productPrice = selectCartDetail.map((detail) => {
    return detail.price;
  });

  const checkout = { total, taxes, grandTotal };

  const checkoutHandler = () => {
    if (selectCartDetail.length >= 1) {
      dispatch(addToCheckout(checkout));
      router.push("/checkout");
    } else {
      alert("please add items to cart");
    }
  };

  return (
    <div className={cart.cart_wrapper}>
      <div className={cart.cart_content}>
        <div className={cart.cart_heading}>
          <h2>
            My Cart <span>{selectCartDetail.length} item(s) in cart</span>
          </h2>
        </div>
        <div className={cart.delivery_instructions}>
          <p>Please review your cart for any changes...</p>
        </div>
        <div className={cart.cart}>
          <div className={cart.cart_items}>
            <div className={cart.cart_item_heading}></div>
            <div className={cart.cart_item}>
              <CartItems />
            </div>
          </div>
          <div className={cart.cart_summary_wrapper}>
            <div className={cart.cart_summary}>
              <h3>Order Summary</h3>
              <div className={cart.subtotal}>
                <h4>Subtotal ({selectCartDetail.length} items)</h4>
                <p>$ {total} </p>
              </div>
              <div className={cart.taxes}>
                <h4>Taxes (if any)</h4>
                <p>$ {taxes.toFixed(2)}</p>
              </div>
              <div className={cart.total}>
                <h4>Total</h4>
                <p>$ {grandTotal.toFixed(2)}</p>
              </div>
              <div className={cart.accordion}>
                <p>Apply Promo Code</p>
                <p className={cart.icon}>+</p>
              </div>
              <div className={cart.checkout_btn}>
                <button onClick={checkoutHandler}>Checkout</button>
              </div>
            </div>
            <div className={cart.payment_terms}>
              <h6>
                Your actual amount invoiced may be different from your order
                summary above.
              </h6>
              <p>
                The taxes stated in this order summary are only an estimate.
                Your final invoice before delivery may include a different tax
                amount. Ashley will authorize your card every 6 days until your
                items are shipped or delivered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
