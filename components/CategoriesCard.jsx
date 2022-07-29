import React from "react";
import Image from "next/image";
import Link from "next/link";
import categories from "../styles/CategoriesCard.module.scss";
import cardimage from "./assets/fur12.jpg";
const CategoriesCard = ({ img, title }) => {
  const imageURL = "https://ashley-api.herokuapp.com/uploads/categories/";

  const src = imageURL + img;

  return (
    <div className={categories.category_wrapper}>
      <div className={categories.img}>
        <Link href="/categories">
          <a>
            <Image
              loader={() => src}
              src={src}
              alt={title}
              height={50}
              width={50}
            />
          </a>
        </Link>
      </div>
      <h4>{title}</h4>
    </div>
  );
};

export default CategoriesCard;
