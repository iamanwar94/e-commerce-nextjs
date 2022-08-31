import React from "react";
import Image from "next/image";

import { useSelector, useDispatch } from "react-redux";
import {
  selectWishlist,
  removeToWishlist,
} from "../app/features/wishlistSlice";

import styles from "../styles/Wishlist.module.scss";
import wishlistimg from "./assets/fur12.jpg";
import { AiOutlineDelete, AiOutlineHeart } from "react-icons/ai";

const imageURL = process.env.NEXT_PUBLIC_IMAGE_URL
  ? process.env.NEXT_PUBLIC_IMAGE_URL
  : "https://ashley-api.herokuapp.com/uploads/";

const Wishlist = () => {
  const wishList = useSelector(selectWishlist);
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(removeToWishlist(id));
  };
  return (
    <div className={styles.wishlist_wrapper}>
      <div className={styles.wishlist_heading}>
        <h2>My Wish List</h2>
        <h1>
          <AiOutlineHeart />
        </h1>
      </div>
      <div className={styles.wishlist_cards_wrapper}>
        {wishList?.map((item) => (
          <div className={styles.wishlist_card} key={item._id}>
            <div className={styles.wishlist_card_img}>
              <Image
                src={`${imageURL}products/${item.image}`}
                alt="wishlist-img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.wishlist_card_info}>
              {console.log(`/${imageURL}products/${item.image}`)}
              <h3> {item.title} </h3>
              <h6>{item.size}</h6>
              <h6>{item.color} </h6>
              <h6>In Stock</h6>
              <div className={styles.btn}>
                <button
                  className={styles.dlt}
                  title="Delete"
                  onClick={() => deleteHandler(item.sku)}
                >
                  <AiOutlineDelete />
                </button>
                {/* <button className={styles.add} title="Add to Cart">
                  <BsCartPlus />
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
