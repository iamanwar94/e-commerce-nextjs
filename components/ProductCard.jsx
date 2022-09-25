import React from "react";
import Image from "next/image";
import Link from "next/link";
import ReactStars from "react-stars";

import { AiOutlineHeart, AiFillStar } from "react-icons/ai";

import product from "../styles/ProductCard.module.scss";

const ProductCard = ({ products }) => {
  const price = products.variants.map((variant) => {
    return variant.sale_price;
  });
  // const desc = products.variants.map((variant) => {
  //   return variant.description.slice(0,10);
  // });

  const images = products.variants.slice(1, 2).map((variant) => {
    return variant.features.slice(0, 1).map((feature) => {
      return feature.images.slice(0, 1).map((images) => {
        return images;
      });
    });
  });
  const imagesHover = products.variants.slice(0, 1).map((variant) => {
    return variant.features.slice(0, 1).map((feature) => {
      return feature.images.slice(0, 1).map((images) => {
        return images;
      });
    });
  });

  const maxPrice = price.reduce((a, b) => {
    return Math.max(a, b);
  });
  const minPrice = price.reduce((a, b) => {
    return Math.min(a, b);
  });

  const imageURL = "https://ashley-api.herokuapp.com/uploads/";
  // const src = imageURL;

  const options = {
    edit: false,
    color1: "rgb(20,20,20,0.1)",
    color2: "tomato",
    value: products.rating,
  };

  return (
    <Link href={`/productsNew/productdetailNew/${products.slug}`}>
      <a className={product.products_card}>
        <div className={product.heart}>
          <h4 className={product.icon}>
            <AiOutlineHeart />
          </h4>
          <h4 className={product.display}>Add to Wishlist</h4>
        </div>
        <div className={product.card_image}>
          <Image
            src={`${imageURL}products/${images[0][0][0]}`}
            alt="bed"
            layout="fill"
            objectFit="cover"
          />
          <div className={product.display}>
            <Image
              src={`${imageURL}products/${imagesHover[0][0][0]}`}
              alt="bed"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className={product.card_info}>
          <h4>{products.title}</h4>
          <div className={product.ratings}>
            <ReactStars {...options} />

            {/* <div className={product.span}>
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
            </div> */}
          </div>
          <p>
            $ {minPrice} - $ {maxPrice}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
