import React from "react";
import Image from 'next/image'
import cardStyles from "../styles/DiscountCard.module.scss";

const DiscountCard = ({img}) => {
  return <div className={cardStyles.discount_card}>
    <Image src={img} alt="img" className={cardStyles.img} />
  </div>;
};

export default DiscountCard;
