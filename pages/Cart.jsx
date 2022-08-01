import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

// from redux slices

import { fetchProducts } from "../App/Features/productSlice";
import { fetchCategory, selectCategory } from "../App/Features/categorySlice";

import CartItems from "../components/CartItems";

import cart from "../styles/Cart.module.scss";
import cartimage from "./assets/fur18.jpg";

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={cart.cart_wrapper}>
      <div className={cart.cart_content}>
        <div className={cart.cart_heading}>
          <h2>
            My Cart <span>(n items)</span>
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
                <h4>Subtotal (2 items)</h4>
                <p>$539.99</p>
              </div>
              <div className={cart.taxes}>
                <h4>Taxes</h4>
                <p>$39.15</p>
              </div>
              <div className={cart.total}>
                <h4>Total</h4>
                <p>$579.13</p>
              </div>
              <div className={cart.accordion}>
                <p>Apply Promo Code</p>
                <p className={cart.icon}>+</p>
              </div>
              <div className={cart.checkout_btn}>
                <Link href="/checkout">
                  <a>
                    <button>Checkout</button>
                  </a>
                </Link>
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
