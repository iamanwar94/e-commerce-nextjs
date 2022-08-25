import React from "react";
import Image from "next/image";
import cardStyles from "../styles/DiscountCard.module.scss";

const DiscountCard = ({ products }) => {
  const imageURl = "https://ashley-api.herokuapp.com/uploads/";

  const images = products.variants.slice(1, 2).map((variant) => {
    return variant.features.slice(0, 1).map((feature) => {
      return feature.images.slice(0, 1).map((images) => {
        return images;
      });
    });
  });
  return (
    <div className={cardStyles.discount_card}>
      <div className={cardStyles.img}>
        <Image
          src={`${imageURl}products/${images[0][0][0]}`}
          alt={products.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default DiscountCard;
