import React from "react";
import product from "./ProductCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import bed1 from "./assets/bed_PNG17418.png";
import bed2 from "./assets/APK-B643-QUB-10x8-CROP.webp";

const ProductCard = () => {
  return (
    <div className={product.products_card}>
      <div className={product.heart}>
        <h4 className={product.icon}>
          <FontAwesomeIcon icon={faHeart} />
        </h4>
        <h4 className={product.display}>Add to Wishlist</h4>
      </div>
      <div className={product.card_image}>
        <img src={bed1} alt="bed" className={product.img1} />
        <div className={product.display}>
          <img src={bed2} alt="bed" className={product.img2} />
          <p>QUICK VIEW</p>
        </div>
      </div>
      <div className={product.card_info}>
        <h4>Lorem ipsum dolor sit amet.</h4>
        <div className={product.ratings}>
          <div className={product.span}>
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className={product.span}>
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className={product.span}>
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className={product.span}>
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className={product.span}>
            <FontAwesomeIcon icon={faStar} />
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
