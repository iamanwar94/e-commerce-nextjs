import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addToCheckout } from "../app/features/checkoutSlice";
import { selectCart } from "../app/features/cartSlice";

import { fetchProducts } from "../app/features/productSlice";
import { fetchCategory } from "../app/features/categorySlice";

import CartitemsNew from "../components/CartitemsNew";

import cart from "../styles/CartNew.module.scss";
import cartimage from "./assets/fur18.jpg";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { MdLockOutline } from "react-icons/md";
import paypal_logo from "../pages/assets/paypal_logo.png";
import { RiBankCard2Fill } from "react-icons/ri";
import { MdArrowBackIosNew } from "react-icons/md";

const Cart = () => {
  const [togglepromocode, settogglepromocode] = useState(false);

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
      router.push("/checkoutnew");
    } else {
      alert("please add items to cart");
    }
  };

  return (
    <div className={cart.cart_wrapper}>
      <div className={cart.cart_content}>
        <div className={cart.cart_header}>
            <MdArrowBackIosNew className={cart.arrow_icon} />
            <Link href="/">
            <p className={cart.back}>Back to Shopping</p>
            </Link>  
            <Link href="/">
            <p className={cart.home}> Home /</p> 
            </Link>  
            <p className={cart.Shopping}> Shopping cart</p>
        </div>
        <div className={cart.cart_heading}>
          <h2>
            My Cart
            <span>
              ({selectCartDetail.length} items
              {/* item(s) in cart */} )
            </span>
          </h2>
        </div>
        <div className={cart.delivery_instructions}>
          <p>
            <BsFillExclamationTriangleFill className={cart.notallow_icon} />
            OUR APOLOGIES:
            <span> Protection plans are currently unavailable</span>
          </p>
        </div>
        <div className={cart.yellow_instructions}>
          <p>
            Free Doorstep Delivery Offer — Please add your delivery zip code
            below to check availability and terms in your area, or contact your
            local Ashley store for more details. Not available in all areas.
            Minimum/maximum purchase restrictions may apply.
          </p>
        </div>
        <div className={cart.cart}>
          <div className={cart.cart_items}>
            <div className={cart.cart_item_heading}>
              <span>items</span>
              <p>
                Availability and Delivery Options based on zip code{" "}
                <span>75500</span>
              </p>
            </div>
            <div className={cart.cart_item}>
              <CartitemsNew />
            </div>
          </div>
          <div className={cart.cart_summary_wrapper}>
            <div className={cart.cart_summary}>
              <h3>Order Summary</h3>
              <div className={cart.subtotal}>
                <h4>Subtotal ({selectCartDetail.length} items)</h4>
                <p>${total} </p>
              </div>
              <div className={cart.taxes}>
                <h4>Taxes</h4>
                <p>$ {taxes.toFixed(2)}</p>
              </div>
              <div className={cart.total}>
                <h4>Total</h4>
                <p>${grandTotal.toFixed(2)}</p>
              </div>
              <div className={cart.accordion}>
                <div className={cart.subaccordion}>
                  <p onClick={() => settogglepromocode(!togglepromocode)}>
                    Apply Promo Code
                  </p>
                  <p
                    className={cart.icon}
                    onClick={() => settogglepromocode(!togglepromocode)}
                  >
                    +
                  </p>
                </div>
                {togglepromocode ? (
                  <div className={cart.promocode}>
                    <input type="text" placeholder="Enter Promo Code" />
                    <button>Apply</button>
                  </div>
                ) : null}
              </div>
              {/* <div className={cart.promocode}>
                <input type="text" placeholder="Enter Promo Code" />
                <button>Apply</button>
              </div> */}
              {/* adbvantage_card */}
              <div className={cart.adbvantage_card}>
                <div className={cart.adbvantage_card_icondiv}>
                  <RiBankCard2Fill className={cart.adbvantage_card_icon} />
                  <span> Furniture Mecca Advantage™ Card</span>
                </div>
                <p>Special Financing Options Available Prequalify Now</p>
              </div>
              {/* Secure Checkout */}
              <div className={cart.checkout_btn}>
                <button onClick={checkoutHandler}>
                  Secure Checkout
                  <MdLockOutline className={cart.checkout_btn_icon} />
                </button>
              </div>
              {/* paypal button */}
              <div className={cart.paypal_btn}>
                <div className={cart.paypal_btn_imgdiv}>
                  <Image
                    src={paypal_logo}
                    alt="Loading..."
                    layout="fill"
                    className={cart.paypal_btn_img}
                  />
                </div>
                <span>Checkout</span>
                {/* <button onClick={checkoutHandler}>
                  <MdLockOutline className={cart.paypal_btn_icon} />
                  Checkout
                </button> */}
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

              <p>
                By continuing to checkout, you are agreeing to our
                <span> Terms of Use</span>+ <span>Privacy Policy</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
