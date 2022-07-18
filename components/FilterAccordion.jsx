import React, { useState } from "react";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import styles from "../styles/FilterAccordion.module.scss";

const FilterAccordion = () => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.accordion_wrapper}>
      <div className={styles.accordion_item}>
        <div
          className={styles.accordion_heading}
          onClick={() => setShow(!show)}
        >
          <h4>Accordion Title</h4>
          <span>
            {show ? (
              <FiChevronUp className={styles.accordion_icon} />
            ) : (
              <FiChevronDown className={styles.accordion_icon} />
            )}
          </span>
        </div>

        <div
          className={styles.accordion_content}
          style={show ? { height: "auto" } : { height: "0" }}
        >
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat,
            dignissimos!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FilterAccordion;
