import React from "react";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineHeart, AiFillStar } from "react-icons/ai";

import product from "../styles/ProductCard.module.scss";
import bed1 from "./assets/bed_PNG17418.png";
import bed2 from "./assets/APK-B643-QUB-10x8-CROP.webp";

const ProductCard = ({ products }) => {
// const img = products.map(product=>product.variants).map()

  const imageURL = "https://ashley-api.herokuapp.com/uploads/";
  const src = imageURL + img;
  return (
    <Link href="/products/productdetail/productdetail">
      <a className={product.products_card}>
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
          <h4>{products.title}</h4>
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

          <p>{products.variants.map((price) => "$" + price.price + " - ")}</p>

          <p
            className={product.delivery_detail}
            dangerouslySetInnerHTML={{
              __html: products.detail_2.slice(0, 100),
            }}
          >
            {/* {products.detail_2.slice(0,100)} */}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
