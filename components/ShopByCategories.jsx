import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { RiPlayListAddLine } from 'react-icons/ri';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

const ShopByCategories = ({ categoriesData }) => {
  const [catIndex, setCatIndex] = useState(0);

  const imgURL = "https://ashley-api.herokuapp.com/uploads/";

  const catClickHandler = (index) => {
    setCatIndex(index);
  };

  const selectedCategory = categoriesData
    .slice(catIndex, catIndex + 1)
    .map((item) => {
      return item;
    });
  const newselectedCategory = selectedCategory[0];
  const selectedSubCategories = newselectedCategory.children.map((item) => {
    return item;
  });


  // add responsive work
  const [showCategories, setshowCategories] = useState(true);

  const toggleClass = () => {
    setshowCategories(!showCategories);
  };

  const categoriestoggle = showCategories
    ? styles.shopby_categories_headings_hidden :
    styles.shopby_categories_headings
    ;

  // add responsive end

  return (
    <div className={styles.categories_wrapper}>
      <h3  onClick={toggleClass}>Shop By Categories
        {showCategories ? (
          <span><MdKeyboardArrowDown /></span>
        ) : (
          <span><MdKeyboardArrowUp /></span>
        )}
        {/* <span onClick={toggleClass}><MdKeyboardArrowUp /></span>
        <span onClick={toggleClass}><MdKeyboardArrowDown /></span> */}
        {/* <span onClick={toggleClass}><RiPlayListAddLine /></span> */}
      </h3>
      <div className={categoriestoggle}>
        {categoriesData?.slice(0, 6).map((item, i) => (
          <p
            key={i}
            onClick={() => catClickHandler(i)}
            style={
              catIndex === i
                ? { borderBottom: "2px solid grey", fontWeight: "bolder" }
                : { border: 0 }
            }
          >
            {item.title}
          </p>
        ))}
      </div>
      <div className={styles.shopby_categories_content}>
        <div className={styles.shopby_categories_bigcard}>
          <div className={styles.shopby_categories_card_image}>
            <Image
              src={`${imgURL}categories/${newselectedCategory.image}`}
              alt="sofa"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className={styles.shopby_categories_cart_link}>
            Shop All {newselectedCategory.title}
            <span>
              <IoIosArrowDroprightCircle />
            </span>
          </div>
        </div>
        <div className={styles.shopby_categories_small_cards}>
          {selectedSubCategories?.slice(0, 6).map((item) => (
            <Link href={`/products/${item.slug}`} key={item._id}>
              <div className={styles.shopby_categories_small_card}>
                <div className={styles.shopby_categories_card_image}>
                  <Image
                    src={`${imgURL}categories/${item.image}`}
                    alt="sofa"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <p>{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategories;
