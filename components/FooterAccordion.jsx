import React, { useState } from "react";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import styles from "../styles/FooterAccordion.module.scss";
import Link from "next/link";

import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { display } from "@mui/system";

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
          <div
            className={styles.aaa}
            style={{
              display: "flex",
              alignItems: "center",
              margin: "10px 0px",
              fontSize: "14px",
            }}
          >
            <GoLocation />
            <span
              style={{
                marginLeft: "5px",
              }}
            >
              Philadelphia
            </span>
          </div>

          <div
            className={styles.aaa}
            style={{
              display: "flex",
              alignItems: "center",
              margin: "10px 0px",
              fontSize: "14px",
            }}
          >
            <BsTelephone />
            <span
              style={{
                marginLeft: "5px",
              }}
            >
              215-352-1600
            </span>
          </div>

          <div
            className={styles.aaa}
            style={{
              display: "flex",
              alignItems: "center",
              margin: "10px 0px",
              fontSize: "14px",
            }}
          >
            <GoMail />
            <span
              style={{
                marginLeft: "5px",
              }}
            >
              meccacustomercare@gmail.com
            </span>
          </div>
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
          <Link href="/contact">
            <h3>Contact Us</h3>
          </Link>
          <Link href="/shipping">
            <h3>Shipping & Delivery</h3>
          </Link>
          <Link href="/financing">
            <h3>Financing</h3>
          </Link>
          <Link href="/termsCondition">
            <h3>Terms & Conditions</h3>
          </Link>
          <Link href="/faqs">
            <h3>FAQ</h3>
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
          <Link href="/about">
            <h3>About Us</h3>
          </Link>
          <Link href="/career">
            <h3>Career</h3>
          </Link>
          <Link href="/location">
            <h3>Store Locations</h3>
          </Link>
          <Link href="/login">
            <h3>My Account</h3>
          </Link>
          <Link href="/comunitygiving">
            <h3>Community Giving</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarAccordion;
