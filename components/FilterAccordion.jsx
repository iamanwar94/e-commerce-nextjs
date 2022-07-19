import React, { useState } from "react";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import styles from "../styles/FilterAccordion.module.scss";

const FilterAccordion = () => {
  const filters = [
    {
      id: 1,
      title: "price",
      filters: [
        { type: "radio", input: "Under $25" },
        { type: "radio", input: "$26 to $50" },
        { type: "radio", input: "$50 to $100" },
        { type: "radio", input: "$100 to $500" },
        { type: "radio", input: "Over $500" },
      ],
    },
    {
      id: 2,
      title: "Size",
      filters: [
        { type: "checkbox", input: "Twin" },
        { type: "checkbox", input: "Full" },
        { type: "checkbox", input: "Queen" },
        { type: "checkbox", input: "Kings" },
        { type: "checkbox", input: "Others" },
      ],
    },
    {
      id: 3,
      title: "Color",
      filters: [
        { type: "checkbox", input: "Red" },
        { type: "checkbox", input: "Blue" },
        { type: "checkbox", input: "White" },
        { type: "checkbox", input: "Black" },
        { type: "checkbox", input: "Gold" },
        { type: "checkbox", input: "Bronze" },
        { type: "checkbox", input: "Silver" },
        { type: "checkbox", input: "Purple" },
        { type: "checkbox", input: "Cream" },
        { type: "checkbox", input: "Green" },
      ],
    },
    {
      id: 4,
      title: "Brand",
      filters: [
        { type: "checkbox", input: "Red" },
        { type: "checkbox", input: "Blue" },
        { type: "checkbox", input: "White" },
        { type: "checkbox", input: "Black" },
        { type: "checkbox", input: "Gold" },
        { type: "checkbox", input: "Bronze" },
        { type: "checkbox", input: "Silver" },
        { type: "checkbox", input: "Purple" },
        { type: "checkbox", input: "Cream" },
        { type: "checkbox", input: "Green" },
      ],
    },
  ];

  const [filterState, setFilterState] = useState(filters);
  const [show, setShow] = useState(false);
  const [radio, setRadio] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  return (
    <div className={styles.accordion_wrapper}>
      {filterState?.map((filter) => (
        <div className={styles.accordion_item} key={filter.id}>
          <div
            className={styles.accordion_heading}
            onClick={() => setShow(!show)}
          >
            <h4>{filter.title} </h4>
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
            {filter.filters.map((box, i) => (
              <div className={styles.content_filter_wrapper} key={i}>
                <input
                  type={box.type}
                  name={box.input}
                  id={box.input}
                  value={box.type === "radio" && box.input}
                  checked={
                    box.type === "radio" ? radio === box.input : checkbox
                  }
                  onChange={(e) =>
                    box.type === "radio"
                      ? setRadio(e.target.value)
                      : setCheckbox({...checkbox, [e.target.name]: e.target.checked })
                  }
                />
                <label htmlFor={box.input}>{box.input}</label>
              </div>
            ))}

            {/* <div className={styles.content_filter_wrapper}>
              <input
                type="radio"
                name="26to50"
                id="26to50"
                value="26to50"
                checked={radio === "26to50"}
                onChange={(e) => setRadio(e.target.value)}
              />
              <label htmlFor="26to50">$ 26 to $ 50</label>
            </div>
            <div className={styles.content_filter_wrapper}>
              <input
                type="radio"
                name="50to100"
                id="50to100"
                value="50to100"
                checked={radio === "50to100"}
                onChange={(e) => setRadio(e.target.value)}
              />
              <label htmlFor="50to100">$ 50 to $ 100</label>
            </div>
            <div className={styles.content_filter_wrapper}>
              <input
                type="radio"
                name="100to500"
                id="100to500"
                value="100to500"
                checked={radio === "100to500"}
                onChange={(e) => setRadio(e.target.value)}
              />
              <label htmlFor="100to500">$ 100 to $ 500</label>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterAccordion;
