import React, { useState } from "react";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import styles from "../styles/NavbarbabyAccordion.module.scss";

const NavbarbabyAccordion = ({menulisthide , setMenulisthide}) => {

  const showhidemenubar = () => {
    setMenulisthide(!menulisthide);
  };

  const filters = [
    {
      id: 1,
      title: "Furniture",
      type: "radio",
      filters: [
        { type: "radio", input: "Kids Furniture" },
        { type: "radio", input: "Nursery Furniture" },
        { type: "radio", input: "Shop By Gender" },
      ],
    },
    {
      id: 2,
      title: "Bedding",
      // type: "Bedding",
      filters: [
        { type: "checkbox", input: "Shop All Mattresses" },
        { type: "checkbox", input: "Kids Bedding" },
        { type: "checkbox", input: "Crib & Toddler Mattresses" },
        { type: "checkbox", input: "Baby & Toddler Bedding" },
      ],
    },
    {
      id: 3,
      title: "Rugs",
      // type: "Rugs",
      filters: [
        { type: "checkbox", input: "Rugs" },
        { type: "checkbox", input: "Rugs By Size" },
      ],
    },
    {
      id: 4,
      title: "Decor",
      type: "checkbox",
      filters: [
        { type: "checkbox", input: "Decor" },
        { type: "checkbox", input: "Kids Lighting" },
        { type: "checkbox", input: "Baby & toddler Lighting" },
      ],
    },
    {
      id: 5,
      title: "Playroom",
      type: "checkbox",
      filters: [
        { type: "checkbox", input: "Playroom" },
      ],
    },
    {
      id: 6,
      title: "Baby & Toddler Gear",
      type: "checkbox",
      filters: [
        { type: "checkbox", input: "Baby & Toddler Gear" },
      ],
    },
    {
      id: 7,
      title: "New",
      type: "checkbox",
      filters: [
        { type: "checkbox", input: "Kids New Arrivals" },
        { type: "checkbox", input: "Baby & Toddler New Arrivals" },
      ],
    },
    {
      id: 8,
      title: "Sale",
      type: "checkbox",
      filters: [
        { type: "checkbox", input: "Kids Deal" },
        { type: "checkbox", input: "Baby & Toddler Deals" },
      ],
    },
  ];

  const data = {
    name: "Nokia",
    checked: false,
    name: "LG",
    checked: false,
    name: "Qmobile",
    checked: false,
    name: "Moto",
    checked: false,
    name: "Tecno",
    checked: false,
    name: "Infinix",
    checked: false,
    name: "Oneplus",
    checked: false,
    name: "Xiaomi",
    checked: false,
    name: "Samsung",
    checked: false,
    name: "Apple",
    checked: false,
    name: "Green",
    checked: false,
    name: "Cream",
    checked: false,
    name: "Purple",
    checked: false,
    name: "Silver",
    checked: false,
    name: "Bronze",
    checked: false,
    name: "Gold",
    checked: false,
    name: "Black",
    checked: false,
    name: "White",
    checked: false,
    name: "Blue",
    checked: false,
    name: "Red",
    checked: false,
    name: "Others",
    checked: false,
    name: "Kings",
    checked: false,
    name: "Queen",
    checked: false,
    name: "Full",
    checked: false,
    name: "Twin",
    checked: false,
  };

  const [filterState, setFilterState] = useState(filters);
  const [activeCurrentIndex, setActiveCurrentIndex] = useState();
  // const [radio, setRadio] = useState("");
  // const [checkbox, setCheckbox] = useState(data.checked);

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
            <h4>{filter.title} </h4>
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
                {/* <input
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
                      : e.target.name===checkbox.name&& setCheckbox(e.target.checked)
                      // setCheckbox({
                      //     ...checkbox,
                      //     [e.target.name]: e.target.checked,
                      //   })
                  }
                /> */}
                <h3 htmlFor={box.input} className={styles.a} onClick={showhidemenubar}>
                  {box.input} 
                </h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavbarbabyAccordion;
