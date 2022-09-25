import React from "react";
import Image from "next/image";
import Link from "next/link";
import category from "../styles/CategoryCard.module.scss";
const CategoryCard = ({ products }) => {
  const imageURl = "https://ashley-api.herokuapp.com/uploads/";

  const images = products?.variants.slice(1, 2).map((variant) => {
    return variant.features.slice(0, 1).map((feature) => {
      return feature.images.slice(0, 1).map((images) => {
        return images;
      });
    });
  });

  const imageToShow = images[0]?.map((item) => {
    return item[0];
  });

  // console.log("imageToShow", imageToShow);

  return (
    <div className={category.category_card}>
      <div className={category.img}>
        {imageToShow && (
          <Image
            src={`${imageURl}products/${imageToShow[0]}`}
            alt={products?.title.slice(0, 20)}
            layout="fill"
            objectFit="cover"
          />
        )}
      </div>
      <div className={category.info}>
        <h6>{products && products.title}</h6>
        <Link href={`products/productdetail/${products && products.slug}`}>
          <a>
            <button>Shop Now</button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
