import React, { useState } from "react";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import styles from "../styles/FooterAccordion.module.scss";

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

  const [filterState, setFilterState] = useState(filters);
  const [activeCurrentIndex, setActiveCurrentIndex] = useState();

  const toggleShowAccordion = (id) => {
    if (activeCurrentIndex === id) {
      setActiveCurrentIndex();
    } else {
      setActiveCurrentIndex(id);
    }
  };

  return (
    <div className={styles.accordion_wrapper}>
      {filterState?.map((filter) => (
        <div className={styles.accordion_item} key={filter.id}>
          <div
            className={styles.accordion_heading}
            onClick={() => toggleShowAccordion(filter.id)}
          >
            <h4>{filter.title}</h4>
            <div>
              {activeCurrentIndex === filter.id ? (
                <FiChevronUp className={styles.accordion_icon} />
              ) : (
                <FiChevronDown className={styles.accordion_icon} />
              )}
            </div>
          </div>

          <div
            className={
              activeCurrentIndex !== filter.id
                ? styles.accordion_content
                : styles.accordion_content + " " + styles.show
            }
          >
            {filter.filters.map((box, i) => (
              <div className={styles.content_filter_wrapper} key={i}>
                <h3 htmlFor={box.input}>{box.input}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavbarAccordion;
