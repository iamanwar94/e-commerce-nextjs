import React from "react";
import styles from "../styles/Orders.module.scss";

const orders = () => {
  return (
    <div className={styles.order_wrapper}>
      <div className={styles.sidebar}>
        <div className={styles.sidebar_heading}>
          <h4>My Account</h4>
        </div>
        <div className={styles.sidebar_links}>
          <p>View Orders</p>
          <p>Logout</p>
        </div>
      </div>
      <div className={styles.order}>
        <div className={styles.order_list_main_heading}>
          <h4>Order History</h4>
        </div>
        <div className={styles.order_list_headings}>
          <h4>Order Number</h4>
          <h4>Order Date</h4>
          <h4>Amount</h4>
          <h4>Status</h4>
        </div>
        <div className={styles.order_list_content}>
          <p>ON:123456</p>
          <p>25-12-21</p>
          <p>$199.99</p>
          <p>Delivered</p>
        </div>
      </div>
    </div>
  );
};

export default orders;
