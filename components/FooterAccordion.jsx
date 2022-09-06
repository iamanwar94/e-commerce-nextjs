import React, { useState } from "react";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import styles from "../styles/FooterAccordion.module.scss";
import Link from "next/link";

const NavbarAccordion = () => {
  const [hide, sethide] = useState();

  const toggle = (index) => {
    if (hide === index) {
      sethide();
    } else {
      sethide(index);
    }
  };

  return (
    <div className={styles.accordion_wrapper}>
      {/* one */}
      <div className={styles.accordion_item}>
        <div className={styles.accordion_heading} onClick={() => toggle(1)}>
          <h2>Get To Know Us</h2>
          <div>
            {hide === 1 ? (
              <FiChevronUp className={styles.accordion_icon} />
            ) : (
              <FiChevronDown className={styles.accordion_icon} />
            )}
          </div>
        </div>
        <div
          className={
            hide === 1
              ? styles.accordion_content + " " + styles.show
              : styles.accordion_content
          }
        >
          <Link href="/">
            <h3>Offers & Details</h3>
          </Link>
          <Link href="/">
            <h3>Terms and Condition</h3>
          </Link>
          <Link href="/">
            <h3>Terms of Use</h3>
          </Link>
          <Link href="/">
            <h3>Privacy Policy</h3>
          </Link>
          <Link href="/">
            <h3>Interest-Based Adds</h3>
          </Link>
          <Link href="/">
            <h3>Don not sell my Personal Information</h3>
          </Link>
        </div>
      </div>

      {/* two */}
      <div className={styles.accordion_item}>
        <div className={styles.accordion_heading} onClick={() => toggle(2)}>
          <h2>Customer Care</h2>
          <div>
            {hide === 2 ? (
              <FiChevronUp className={styles.accordion_icon} />
            ) : (
              <FiChevronDown className={styles.accordion_icon} />
            )}
          </div>
        </div>
        <div
          className={
            hide === 2
              ? styles.accordion_content + " " + styles.show
              : styles.accordion_content
          }
        >
          <Link href="/">
            <h3>Contact Us</h3>
          </Link>
          <Link href="/">
            <h3>Shipping & Delivery</h3>
          </Link>
          <Link href="/">
            <h3>Financing</h3>
          </Link>
          <Link href="/">
            <h3>Terms & Conditions</h3>
          </Link>
        </div>
      </div>

      {/* three */}
      <div className={styles.accordion_item}>
        <div className={styles.accordion_heading} onClick={() => toggle(3)}>
          <h2>About Furniture Mecca</h2>
          <div>
            {hide === 3 ? (
              <FiChevronUp className={styles.accordion_icon} />
            ) : (
              <FiChevronDown className={styles.accordion_icon} />
            )}
          </div>
        </div>
        <div
          className={
            hide === 3
              ? styles.accordion_content + " " + styles.show
              : styles.accordion_content
          }
        >
          <Link href="/">
            <h3>About Us</h3>
          </Link>
          <Link href="/">
            <h3>Career</h3>
          </Link>
          <Link href="/">
            <h3>Store Locations</h3>
          </Link>
          <Link href="/">
            <h3>Reviews</h3>
          </Link>
          <Link href="/">
            <h3>My Account</h3>
          </Link>
          <Link href="/">
            <h3>Community Giving</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarAccordion;
