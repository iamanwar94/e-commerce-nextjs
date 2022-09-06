import React, { useState } from "react";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import styles from "../styles/Faqs.module.scss";

const faqs = () => {
  const [hide, sethide] = useState();
  // const [secondhide, setsecondhide] = useState();

  const toggle = (index) => {
    if (hide === index) {
      sethide();
    } else {
      sethide(index);
    }
  };

  // const secondtoggle = (indextwo) => {
  //   if (secondhide === indextwo) {
  //     setsecondhide();
  //   } else {
  //     setsecondhide(indextwo);
  //   }
  // };

  return (
    <div className={styles.accordion_container}>
      <div className={styles.accordion_wrapper}>
        <div className={styles.accordion_item}>
          <div className={styles.accordion_heading} onClick={() => toggle(1)}>
            <h4>Q: Can I track my in-home delivery order?</h4>
            <span>
              {hide === 1 ? (
                <FiChevronUp className={styles.accordion_icon} />
              ) : (
                <FiChevronDown className={styles.accordion_icon} />
              )}
            </span>
          </div>

          <div
            className={
              hide === 1
                ? styles.accordion_content + " " + styles.accordion_content_show
                : styles.accordion_content
            }
          >
            <div className={styles.content_filter_wrapper}>
              <label>
                A: Order Tracking is now available online for some of our store
                locations including some of our online orders. Tracking is only
                available on the day of delivery. The estimated times are our
                best estimates and you should still be available during your
                scheduled delivery windows. If you get a message that tracking
                is not available in your area, please contact your fulfiller
                (listed on your confirmation email) to get more information on
                your delivery. Track your delivery using our order tracking
                page.
              </label>
            </div>
          </div>
        </div>

        {/* two */}
        <div className={styles.accordion_item}>
          <div className={styles.accordion_heading} onClick={() => toggle(2)}>
            <h4>Q: Why isn’t my promo code working online?</h4>
            <span>
              {hide === 2 ? (
                <FiChevronUp className={styles.accordion_icon} />
              ) : (
                <FiChevronDown className={styles.accordion_icon} />
              )}
            </span>
          </div>

          <div
            className={
              hide === 2
                ? styles.accordion_content + " " + styles.accordion_content_show
                : styles.accordion_content
            }
          >
            <div className={styles.content_filter_wrapper}>
              <label>
                A: Each promo code has its own set of exclusions. First, check
                the accompanying exclusions on your promo code to see if there
                are any prohibiting the discount. As a general rule, Smart Buys,
                barstools, select dining chairs and sale/clearance items are
                excluded in promotions. Also confirm the expiration date on the
                promo code has not expired. View the latest Ashley Coupons,
                Sales & Offers
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* parents two */}
      <div className={styles.accordion_wrapper}>
        <div className={styles.accordion_item}>
          <div className={styles.accordion_heading} onClick={() => toggle(3)}>
            <h4>Q: Can I track my in-home delivery order?</h4>
            <span>
              {hide === 3 ? (
                <FiChevronUp className={styles.accordion_icon} />
              ) : (
                <FiChevronDown className={styles.accordion_icon} />
              )}
            </span>
          </div>

          <div
            className={
              hide === 3
                ? styles.accordion_content + " " + styles.accordion_content_show
                : styles.accordion_content
            }
          >
            <div className={styles.content_filter_wrapper}>
              <label>
                A: Order Tracking is now available online for some of our store
                locations including some of our online orders. Tracking is only
                available on the day of delivery. The estimated times are our
                best estimates and you should still be available during your
                scheduled delivery windows. If you get a message that tracking
                is not available in your area, please contact your fulfiller
                (listed on your confirmation email) to get more information on
                your delivery. Track your delivery using our order tracking
                page.
              </label>
            </div>
          </div>
        </div>

        {/* two */}
        <div className={styles.accordion_item}>
          <div className={styles.accordion_heading} onClick={() => toggle(4)}>
            <h4>Q: Why isn’t my promo code working online?</h4>
            <span>
              {hide === 4 ? (
                <FiChevronUp className={styles.accordion_icon} />
              ) : (
                <FiChevronDown className={styles.accordion_icon} />
              )}
            </span>
          </div>

          <div
            className={
              hide === 4
                ? styles.accordion_content + " " + styles.accordion_content_show
                : styles.accordion_content
            }
          >
            <div className={styles.content_filter_wrapper}>
              <label>
                A: Each promo code has its own set of exclusions. First, check
                the accompanying exclusions on your promo code to see if there
                are any prohibiting the discount. As a general rule, Smart Buys,
                barstools, select dining chairs and sale/clearance items are
                excluded in promotions. Also confirm the expiration date on the
                promo code has not expired. View the latest Ashley Coupons,
                Sales & Offers
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default faqs;
