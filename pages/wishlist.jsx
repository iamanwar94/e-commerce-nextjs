import React from "react";
import Image from "next/image";
import styles from "../styles/Wishlist.module.scss";
import wishlistimg from "./assets/fur12.jpg";
import { AiOutlineDelete, AiOutlineHeart } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";

const wishlist = () => {
  return (
    <div className={styles.wishlist_wrapper}>
      <div className={styles.wishlist_heading}>
        <h2>My Wish List</h2>
        <h1>
          <AiOutlineHeart />
        </h1>
      </div>
      <div className={styles.wishlist_cards_wrapper}>
        <div className={styles.wishlist_card}>
          <div className={styles.wishlist_card_img}>
            <Image
              src={wishlistimg}
              alt="wishlist-img"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={styles.wishlist_card_info}>
            <h3>XYZ Product</h3>
            <h6>Large</h6>
            <h6>Red</h6>
            <h6>In Stock</h6>
            <div className={styles.btn}>
              <button className={styles.dlt} title="Delete">
                <AiOutlineDelete />
              </button>
              <button className={styles.add} title="Add to Cart">
                <BsCartPlus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default wishlist;
