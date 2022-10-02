import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styles from "../styles/Nabaraccording.module.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCategory } from "../app/features/categorySlice";
import Link from "next/link";

import axios from "axios";
const NavbarAccordion = ({
  menulisthide,
  setMenulisthide,
  showhide,
  setshowhide,
}) => {
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
        { type: "checkbox", input: "Featured" },
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

  const [showDiscount, setshowDiscount] = useState(true);

  // new work
  const categories = useSelector(selectCategory);

  const mainCategories = categories?.categories.filter((cat) => {
    return cat.parent_id === "";
  });
  // new work

  const [discountCategories, setDiscountCategories] = useState([]);

  useEffect(() => {
    async function getDisCats() {
      try {
        const response = await axios.get(
          "https://ashley-api.herokuapp.com/products/discount/categories"
        );
        setDiscountCategories(response.data.categories);
      } catch (error) {
        console.error(error);
      }
    }
    getDisCats();
  }, []);

  return (
    <div className={styles.accordion_wrapper}>
      {mainCategories?.map((mainCategory) => (
        <div className={styles.accordion_item} key={mainCategory._id}>
          <div
            className={styles.accordion_heading}
            onClick={() => toggleShowAccordion(mainCategory._id)}
          >
            {/* <Link href={`/${mainCategory._id}`}>
              <h4>{mainCategory.title}</h4>
            </Link> */}
            <h4>{mainCategory.title}</h4>
            <div>
              {activeCurrentIndex === mainCategory._id ? (
                <FiChevronUp className={styles.accordion_icon} />
              ) : (
                <FiChevronDown className={styles.accordion_icon} />
              )}
            </div>
          </div>

          <div
            className={
              activeCurrentIndex !== mainCategory._id
                ? styles.accordion_content
                : styles.accordion_content + " " + styles.show
            }
          >
            {categories?.categories
              .filter(
                (filteredCats) => filteredCats.parent_id === mainCategory._id
              )
              .map((subCats) => (
                <div
                  className={styles.content_filter_wrapper}
                  key={subCats._id}
                >
                  <Link href={`/products/${subCats.slug}`}>
                    <h3 onClick={() => setshowhide(!showhide)}>
                      {subCats.title}
                    </h3>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      ))}

      {/* new work */}

      <div
        className={styles.discount_heading}
        onClick={() => {
          setshowDiscount(!showDiscount);
        }}
      >
        <h3>Discount</h3>
        <div>
          {showDiscount ? (
            <FiChevronDown className={styles.accordion_icon} />
          ) : (
            <FiChevronUp className={styles.accordion_icon} />
          )}
        </div>
      </div>
      <div
        className={
          showDiscount
            ? styles.discount_categories
            : styles.discount_categories_show
        }
      >
        {discountCategories?.map((item) => (
          <Link href={`/discountedproducts/${item.slug}`} key={item._id}>
            <h5 onClick={() => setshowhide(!showhide)}>{item.title}</h5>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavbarAccordion;
