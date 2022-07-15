import React from "react";
import Image from "next/image";

import { AiOutlineHeart, AiFillStar } from "react-icons/ai";

import product from "../styles/ProductCard.module.scss";
import bed1 from "./assets/bed_PNG17418.png";
import bed2 from "./assets/APK-B643-QUB-10x8-CROP.webp";

const ProductCard = () => {
  return (
    <div className={product.products_card}>
      <div className={product.heart}>
        <h4 className={product.icon}>
          <AiOutlineHeart />
        </h4>
        <h4 className={product.display}>Add to Wishlist</h4>
      </div>
      <div className={product.card_image}>
        <Image src={bed1} alt="bed" className={product.img1} />
        <div className={product.display}>
          <Image src={bed2} alt="bed" className={product.img2} />
          <p>QUICK VIEW</p>
        </div>
      </div>
      <div className={product.card_info}>
        <h4>Lorem ipsum dolor sit amet.</h4>
        <div className={product.ratings}>
          <div className={product.span}>
            <AiFillStar />
          </div>
          <div className={product.span}>
            <AiFillStar />
          </div>
          <div className={product.span}>
            <AiFillStar />
          </div>
          <div className={product.span}>
            <AiFillStar />
          </div>
          <div className={product.span}>
            <AiFillStar />
          </div>
        </div>
        <p>Price at $499.99 - $ 899.99</p>
        <p className={product.delovery_detail}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
