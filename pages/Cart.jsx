import React from "react";
import Image from "next/image";

import CartItems from "../components/CartItems";

import cart from "../styles/Cart.module.scss";
import cartimage from "./assets/fur18.jpg";

const Cart = () => {
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
            <div className={cart.cart_item_heading}>
              {/* <p>Item</p> */}
              {/* <p>Availability and Delivery Options based on zip code</p> */}
            </div>
            <div className={cart.cart_item}>
              <CartItems />
              {/* <div className={cart.card}>
                <div className={cart.card_img_info}>
                  <div className={cart.img}>
                    <Image
                      src={cartimage}
                      alt="cart-img"
                      className={cart.img}
                    />
                  </div>
                  <div className={cart.info}>
                    <div className={cart.name_color_size}>
                      <h3>Product Name</h3>
                      <p>Product Item Code</p>
                      <p>Product Color</p>
                      <p>Product Size</p>
                    </div>
                    <div className={cart.qty_price}>
                      <div className={cart.qty}>
                        <p>Qty</p>
                        <span>
                          <p>-</p>
                          <p>1</p>
                          <p>+</p>
                        </span>
                      </div>
                      <div className={cart.price}>
                        <p>Item Price</p>
                        <h4>Rs. 499.99</h4>
                      </div>
                      <div className={cart.total}>
                        <p>Item Total</p>
                        <h3>Rs. 499.99</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cart.remove_btn}>
                  <button>Save for Later</button>
                  <button>Remove Item</button>
                </div>
              </div> */}
              {/* <div className={cart.services}>
                <div className={cart.img}>
                  <Image src={cartimage} alt="cartimage" className={cart.img} />
                </div>
                <div className={cart.expert_service}>
                  <h4>Add Expert Service</h4>
                  <div className={cart.checkbox}>
                    <input type="checkbox" name="services" id="services" />
                    <label htmlFor="services" className={cart.checkbox}>
                      Expert Assembly Installation by Handy
                    </label>
                  </div>
                </div>
              </div> */}
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
                <button>Checkout</button>
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
