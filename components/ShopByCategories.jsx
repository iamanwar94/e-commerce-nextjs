import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import sofa from "../pages/assets/fur12.jpg";

import { IoIosArrowDroprightCircle } from "react-icons/io";

const ShopByCategories = () => {
  const [catIndex, setCatIndex] = useState(1);
  const catClickHandler = (index) => {
    setCatIndex(index);
    console.log(index);
  };

  return (
    <div className={styles.categories_wrapper}>
      <h3>Shop By Categories</h3>
      <div className={styles.shopby_categories_headings}>
        <p
          onClick={() => catClickHandler(1)}
          style={
            catIndex === 1
              ? { borderBottom: "2px solid grey", fontWeight: "bolder" }
              : { border: 0 }
          }
        >
          Bedroom
        </p>
        <p
          onClick={() => catClickHandler(2)}
          style={
            catIndex === 2
              ? { borderBottom: "2px solid grey", fontWeight: "bolder" }
              : { border: 0 }
          }
        >
          living room
        </p>
        <p
          onClick={() => catClickHandler(3)}
          style={
            catIndex === 3
              ? { borderBottom: "2px solid grey", fontWeight: "bolder" }
              : { border: 0 }
          }
        >
          dining
        </p>
        <p
          onClick={() => catClickHandler(4)}
          style={
            catIndex === 4
              ? { borderBottom: "2px solid grey", fontWeight: "bolder" }
              : { border: 0 }
          }
        >
          outdoor
        </p>
        <p
          onClick={() => catClickHandler(5)}
          style={
            catIndex === 5
              ? { borderBottom: "2px solid grey", fontWeight: "bolder" }
              : { border: 0 }
          }
        >
          mattress
        </p>
        <p
          onClick={() => catClickHandler(6)}
          style={
            catIndex === 6
              ? { borderBottom: "2px solid grey", fontWeight: "bolder" }
              : { border: 0 }
          }
        >
          home office
        </p>
      </div>
      <div className={styles.shopby_categories_content}>
        <div className={styles.shopby_categories_bigcard}>
          <div className={styles.shopby_categories_card_image}>
            <Image src={sofa} alt="sofa" layout="fill" objectFit="cover" />
          </div>
          <div className={styles.shopby_categories_cart_link}>
            Shop All Bedroom{" "}
            <span>
              <IoIosArrowDroprightCircle />
            </span>
          </div>
        </div>
        <div className={styles.shopby_categories_small_cards}>
          <div className={styles.shopby_categories_small_card}>
            <div className={styles.shopby_categories_card_image}>
              <Image src={sofa} alt="sofa" layout="fill" objectFit="contain" />
            </div>
            <p>Product Name</p>
          </div>
          <div className={styles.shopby_categories_small_card}>
            <div className={styles.shopby_categories_card_image}>
              <Image src={sofa} alt="sofa" layout="fill" objectFit="contain" />
            </div>
            <p>Product Name</p>
          </div>
          <div className={styles.shopby_categories_small_card}>
            <div className={styles.shopby_categories_card_image}>
              <Image src={sofa} alt="sofa" layout="fill" objectFit="contain" />
            </div>
            <p>Product Name</p>
          </div>
          <div className={styles.shopby_categories_small_card}>
            <div className={styles.shopby_categories_card_image}>
              <Image src={sofa} alt="sofa" layout="fill" objectFit="contain" />
            </div>
            <p>Product Name</p>
          </div>
          <div className={styles.shopby_categories_small_card}>
            <div className={styles.shopby_categories_card_image}>
              <Image src={sofa} alt="sofa" layout="fill" objectFit="contain" />
            </div>
            <p>Product Name</p>
          </div>
          <div className={styles.shopby_categories_small_card}>
            <div className={styles.shopby_categories_card_image}>
              <Image src={sofa} alt="sofa" layout="fill" objectFit="contain" />
            </div>
            <p>Product Name</p>
          </div>
        </div>
      </div>

      {/* <div className={styles.categories}>
    {categories?.categories?.slice(0, 6).map((category) => (
      <CategoriesCard
        key={category._id}
        img={category.image}
        title={category.title}
        slug={category.slug}
      />
    ))}
  </div> */}
    </div>
  );
};

export default ShopByCategories;
