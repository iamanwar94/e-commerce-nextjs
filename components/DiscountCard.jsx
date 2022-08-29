import React from "react";
import Image from "next/image";
import cardStyles from "../styles/DiscountCard.module.scss";
import Link from "next/link";

const DiscountCard = ({ products }) => {
  const imageURl = "https://ashley-api.herokuapp.com/uploads/";

  // const images = products.variants.slice(1, 2).map((variant) => {
  //   return variant.features.slice(0, 1).map((feature) => {
  //     return feature.images.slice(0, 1).map((images) => {
  //       return images;
  //     });
  //   });
  // });
  return (
    <div className={cardStyles.discount_card}>
      <Link href={`/discountedproducts/${products.slug}`}>
        <div className={cardStyles.img}>
          <Image
            src={`${imageURl}categories/${products.discount_image}`}
            alt={products.title}
            layout="fill"
            objectFit="fill"
          />
        </div>
      </Link>
    </div>
  );
};

export default DiscountCard;
