import React from "react";
import Image from "next/image";
import categories from "../styles/CategoriesCard.module.scss";
import cardimage from "./assets/fur12.jpg";
const CategoriesCard = ({ img, title }) => {
  return (
    <div className={categories.category_wrapper}>
      <div className={categories.img}>
        <Image src={img} alt={title}  />
      </div>
      <h4>{title}</h4>
    </div>
  );
};

export default CategoriesCard;
