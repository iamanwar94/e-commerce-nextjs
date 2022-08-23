import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import sofa from "../pages/assets/fur12.jpg";

import { IoIosArrowDroprightCircle } from "react-icons/io";

const ShopByCategories = ({ categoriesData }) => {
  const [catIndex, setCatIndex] = useState(0);
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
  return (
    <div className={styles.categories_wrapper}>
      <h3>Shop By Categories</h3>
      <div className={styles.shopby_categories_headings}>
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
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}categories/${newselectedCategory.image}`}
              alt="sofa"
              layout="fill"
              objectFit="cover"
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
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}categories/${item.image}`}
                    alt="sofa"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <p>{item.title}</p>
              </div>
            </Link>
          ))}

          {/* <div className={styles.shopby_categories_small_card}>
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
          </div> */}
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
