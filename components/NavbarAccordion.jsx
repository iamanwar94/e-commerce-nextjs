import React, { useState } from "react";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import styles from "../styles/Nabaraccording.module.scss";

// new work
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { selectCategory } from "../app/features/categorySlice";
// import Link from "next/link";
// import navbar from "../styles/NavbarLinks.module.scss";
// new work

const NavbarAccordion = ({menulisthide , setMenulisthide}) => {
  
  const filters = [
    {
      id: 1,
      title: "Furniture",
      type: "radio",
      filters: [
        { type: "radio", input: "Living Room" },
        { type: "radio", input: "Home Theater" },
        { type: "radio", input: "Bedroom" },
        { type: "radio", input: "Kitchen & Dining Room" },
        { type: "radio", input: "Home Office" },

        { type: "radio", input: "Accent Furniture" },
        { type: "radio", input: "Entryway" },
        { type: "radio", input: "Sets" },
        { type: "radio", input: "Small Spaces" },
      ],
    },
    {
      id: 2,
      title: "Mattresses",
      type: "checkbox",
      filters: [
        { type: "checkbox", input: "Mattresses  by Size" },
        { type: "checkbox", input: "Mattresses by Type " },
        { type: "checkbox", input: "Bedding Accessories" },
        { type: "checkbox", input: "Coimfort" },
        { type: "checkbox", input: "Ahly Sleep" },
        { type: "checkbox", input: "Brands" },
        { type: "checkbox", input: "Shop All Mattresses" },
      ],
    },
    {
      id: 3,
      title: "Outdoor",
      type: "checkbox",
      filters: [
        { type: "checkbox", input: "Outdoor Seating" },
        { type: "checkbox", input: "Outdoor Sets" },
        { type: "checkbox", input: "Outdoor Dining" },
        { type: "checkbox", input: "Outdoor Bar" },
        { type: "checkbox", input: "Outdoor Tables" },
        { type: "checkbox", input: "Outdoor Accessories" },
      ],
    },
    {
      id: 4,
      title: "Kids",
      type: "checkbox",
      filters: [
        { type: "checkbox", input: "kids furniture" },
        { type: "checkbox", input: "Playroom" },
        { type: "checkbox", input: "kids Bedding" },
        { type: "checkbox", input: "kids Wall Decor" },
        { type: "checkbox", input: "kids Lighting" },
        { type: "checkbox", input: "kids Rugs" },
        { type: "checkbox", input: "kids Deals" },
        { type: "checkbox", input: "shop By Gender" },
      ],
    },
    {
      id: 5,
      title: "Baby & Toddler",
      type: "checkbox",
      filters: [
        { type: "checkbox", input: "Nursery furniture" },
        { type: "checkbox", input: "Baby & Toddler Gear" },
        { type: "checkbox", input: "Baby & Toddler Bedding" },
        { type: "checkbox", input: "Baby & Toddler Decor" },
        { type: "checkbox", input: "Baby & Toddler Lighting" },
        { type: "checkbox", input: "Baby & Toddler Rugs" },
      ],
    },
    {
      id: 6,
      title: "Organization",
      type: "checkbox",
      filters: [
        { type: "checkbox", input: "Shop By category" },
        { type: "checkbox", input: "shop By Room" },
        { type: "checkbox", input: "Closet Storage" },
        { type: "checkbox", input: "Garage" },
        { type: "checkbox", input: "Featured" }
      ],
    },
    {
      id: 7,
      title: "Bath",
      type: "checkbox",
      filters: [
        { type: "checkbox", input: "Bathroom Fixtures & Hardware" },
        { type: "checkbox", input: "Bathroom Storage" },
        { type: "checkbox", input: "Bathroom Linens" },
        { type: "checkbox", input: "Bathroom Accessories" },
      ],
    },
    {
      id: 8,
      title: "Bedding",
      type: "checkbox",
      filters: [
        { type: "checkbox", input: "Shop By Category" },
        { type: "checkbox", input: "Bedding Basics" },
        { type: "checkbox", input: "Sleep Technology" },
      ],
    },
    {
      id: 9,
      title: "Decor",
      type: "checkbox",
      filters: [
        { type: "checkbox", input: "Home Accents" },
        { type: "checkbox", input: "Accents Furniture" },
        { type: "checkbox", input: "Mirrors" },
        { type: "checkbox", input: "Wall Art" },
        { type: "checkbox", input: "Well Decor" },
        { type: "checkbox", input: "Win" },
        { type: "checkbox", input: "Moto" },
        { type: "checkbox", input: "Qmobile" },
        { type: "checkbox", input: "LG" },
        { type: "checkbox", input: "Nokia" },
      ],
    },
    {
      id: 10,
      title: "Brand",
      type: "checkbox",
      filters: [
        { type: "checkbox", input: "Apple" },
        { type: "checkbox", input: "Samsung" },
        { type: "checkbox", input: "Xiaomi" },
        { type: "checkbox", input: "Oneplus" },
        { type: "checkbox", input: "Infinix" },
        { type: "checkbox", input: "Tecno" },
        { type: "checkbox", input: "Moto" },
        { type: "checkbox", input: "Qmobile" },
        { type: "checkbox", input: "LG" },
        { type: "checkbox", input: "Nokia" },
      ],
    },
    {
      id: 11,
      title: "Brand",
      type: "checkbox",
      filters: [
        { type: "checkbox", input: "Apple" },
        { type: "checkbox", input: "Samsung" },
        { type: "checkbox", input: "Xiaomi" },
        { type: "checkbox", input: "Oneplus" },
        { type: "checkbox", input: "Infinix" },
        { type: "checkbox", input: "Tecno" },
        { type: "checkbox", input: "Moto" },
        { type: "checkbox", input: "Qmobile" },
        { type: "checkbox", input: "LG" },
        { type: "checkbox", input: "Nokia" },
      ],
    },
    {
      id: 12,
      title: "Brand",
      type: "checkbox",
      filters: [
        { type: "checkbox", input: "Apple" },
        { type: "checkbox", input: "Samsung" },
        { type: "checkbox", input: "Xiaomi" },
        { type: "checkbox", input: "Oneplus" },
        { type: "checkbox", input: "Infinix" },
        { type: "checkbox", input: "Tecno" },
        { type: "checkbox", input: "Moto" },
        { type: "checkbox", input: "Qmobile" },
        { type: "checkbox", input: "LG" },
        { type: "checkbox", input: "Nokia" },
      ],
    },
    {
      id: 13,
      title: "Brand",
      type: "checkbox",
      filters: [
        { type: "checkbox", input: "Apple" },
        { type: "checkbox", input: "Samsung" },
        { type: "checkbox", input: "Xiaomi" },
        { type: "checkbox", input: "Oneplus" },
        { type: "checkbox", input: "Infinix" },
        { type: "checkbox", input: "Tecno" },
        { type: "checkbox", input: "Moto" },
        { type: "checkbox", input: "Qmobile" },
        { type: "checkbox", input: "LG" },
        { type: "checkbox", input: "Nokia" },
      ],
    },
  ];
  
  // const mappedData = filters
  //   .filter((filterdData) => {
  //     filterdData.type === "checkbox";
  //   })
  //   .map((mappedData) => {
  //     mappedData.filters;
  //   })
  //   .map((data) => {
  //     return data[input];
  //   });
  // const data = {
  //   name: "Nokia",
  //   checked: false,
  //   name: "LG",
  //   checked: false,
  //   name: "Qmobile",
  //   checked: false,
  //   name: "Moto",
  //   checked: false,
  //   name: "Tecno",
  //   checked: false,
  //   name: "Infinix",
  //   checked: false,
  //   name: "Oneplus",
  //   checked: false,
  //   name: "Xiaomi",
  //   checked: false,
  //   name: "Samsung",
  //   checked: false,
  //   name: "Apple",
  //   checked: false,
  //   name: "Green",
  //   checked: false,
  //   name: "Cream",
  //   checked: false,
  //   name: "Purple",
  //   checked: false,
  //   name: "Silver",
  //   checked: false,
  //   name: "Bronze",
  //   checked: false,
  //   name: "Gold",
  //   checked: false,
  //   name: "Black",
  //   checked: false,
  //   name: "White",
  //   checked: false,
  //   name: "Blue",
  //   checked: false,
  //   name: "Red",
  //   checked: false,
  //   name: "Others",
  //   checked: false,
  //   name: "Kings",
  //   checked: false,
  //   name: "Queen",
  //   checked: false,
  //   name: "Full",
  //   checked: false,
  //   name: "Twin",
  //   checked: false,
  // };

  const [filterState, setFilterState] = useState(filters);
  const [activeCurrentIndex, setActiveCurrentIndex] = useState();


  const toggleShowAccordion = (id) => {
    if (activeCurrentIndex === id) {
      setActiveCurrentIndex();
    } else {
      setActiveCurrentIndex(id);
    }
  };

// new work
  // const categories = useSelector(selectCategory);

  // const mainCategories = categories?.categories.filter((cat) => {
  //   return cat.parent_id === "";
  // });
  // new work

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
