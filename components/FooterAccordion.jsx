import React, { useState } from "react";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import styles from "../styles/FooterAccordion.module.scss";
import Link from 'next/link'

const NavbarAccordion = () => {
  const filters = [
    {
      id: 1,
      title: "Get To Know Us",
      filters: [
        { input: "About Ashley" },
        { input: "Our history" },
        { input: "About Ashley Furniture History" },
        { input: "Careers" },
        { input: "News" },
        { input: "Social Responsiblity" },
        { input: "Store Locations" },
        { input: "Trade Program" },
      ],
    },
    {
      id: 2,
      title: "Customer Care",
      filters: [
        { input: "Help Center" },
        { input: "Apply For Financing" },
        { input: "Prequality For Financing" },
        { input: "Lease to Own Option" },
        { input: "Buy Now Pay Later" },
        { input: "Returns" },
        { input: "Accessibility" },
        { input: "Consumer Notification" },
        { input: "FAQ" },
        { input: "Price Match" },
        { input: "Child Safety" },
        { input: "Warranty Information" },
        { input: "Product care & Cleaning" },
        { input: "Furniture Protection Plan" },
      ],
    },
    {
      id: 3,
      title: "Get Inspired",
      filters: [
        { input: "Blogs " },
        { input: "Home Ideas" },
        { input: "Digital Catalog" },
        { input: "Hope to Dream" },
        { input: "Refer a Friend" },
        { input: "Design services" },
      ],
    },
    {
      id: 4,
      title: "Terms & Policies",
      filters: [
        { input: "Others & Details" },
        { input: "Terms & Conditions" },
        { input: "Term of Use" },
        { input: "Privacy Policy" },
        { input: "Interest-Base-Adds" },
        { input: "Do not Sell my Personal Information" },
      ],
    },
  ];

  const [activeCurrentIndex, setActiveCurrentIndex] = useState(true);
  const [activeCurrentIndextwo, setActiveCurrentIndextwo] = useState(true);
  const [activeCurrentIndexthree, setActiveCurrentIndexthree] = useState(true);

  // const [toggleclass, settoggleclass] = useState(1)

  const toggleShowAccordion = () => {
    setActiveCurrentIndex(!activeCurrentIndex)
    // if (activeCurrentIndex === true) {
    //   activeCurrentIndextwo == false
    //   activeCurrentIndexthree == false
    // }
  };

  const toggleShowAccordiontwo = () => {
    setActiveCurrentIndextwo(!activeCurrentIndextwo);
    // if (activeCurrentIndex === true) {
    //   activeCurrentIndex == false
    //   activeCurrentIndexthree == false
    // }
  };

  const toggleShowAccordionthree = () => {
    setActiveCurrentIndexthree(!activeCurrentIndexthree)
    // if (activeCurrentIndex === true) {
    //   activeCurrentIndextwo == false
    //   activeCurrentIndexthree == false
    // }
  };

  // const toggle = (index) => {
  //   settoggleAccordion(index)
  //   console.log(index);
  // };



  return (
    <div className={styles.accordion_wrapper}>
      {/* one */}
      <div className={styles.accordion_item}>
        <div
          className={ styles.accordion_heading}
          onClick={() => toggleShowAccordion(!activeCurrentIndex)}
        >
          <h2>Get To Know Us</h2>
          <div>
            {activeCurrentIndex ? (
              <FiChevronDown className={styles.accordion_icon} />
            ) : (
              <FiChevronUp className={styles.accordion_icon} />
            )}
          </div>
        </div>
        <div
          className={
            activeCurrentIndex ? styles.accordion_content
              : styles.accordion_content + " " + styles.show
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
        <div
          className={styles.accordion_heading}
          onClick={() => toggleShowAccordiontwo(!activeCurrentIndextwo)}
        >
          <h2>Customer Care</h2>
          <div>
            {activeCurrentIndextwo ? (
              <FiChevronDown className={styles.accordion_icon} />
            ) : (
              <FiChevronUp className={styles.accordion_icon} />
            )}
          </div>
        </div>
        <div
          className={
            activeCurrentIndextwo ? styles.accordion_content
              : styles.accordion_content + " " + styles.show
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
        <div
          className={styles.accordion_heading}
          onClick={() => toggleShowAccordionthree(!activeCurrentIndexthree)}
        >
          <h2>About Furniture Mecca</h2>
          <div>
            {activeCurrentIndexthree ? (
              <FiChevronDown className={styles.accordion_icon} />
            ) : (
              <FiChevronUp className={styles.accordion_icon} />
            )}
          </div>
        </div>
        <div
          className={
            activeCurrentIndexthree ? styles.accordion_content
              : styles.accordion_content + " " + styles.show
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
