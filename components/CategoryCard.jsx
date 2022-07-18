import React from "react";
import Image from "next/image";
import Link from 'next/link'
import category from "../styles/CategoryCard.module.scss";
const CategoryCard = ({ img, title, feature }) => {
  return (
    <div className={category.category_card}>
      <Image src={img} alt={title} className={category.img} height={3600} />
      <div className={category.info}>
        <h4>{title}</h4>
        <p>{feature}</p>
        <Link href="/products">
          <a>
            <button>Shop Now</button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
