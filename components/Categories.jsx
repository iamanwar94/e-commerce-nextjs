import React from "react";
import Image from "next/image";
import categories from "../styles/Categories.module.scss";
import cardimage from "./assets/fur12.jpg";
const Categories = () => {
  const Card = () => {
    return (
      <div className={categories.six_card_item}>
        <Image src={cardimage} alt="furniture" />
        <div className={categories.card_title}>
          <p>Dummy Text</p>
        </div>
      </div>
    );
  };
  return (
    <div className={categories.category_wrapper}>
      <div className={categories.category_six_cards_wrapper}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className={categories.category_six_cards_wrapper}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Categories;
