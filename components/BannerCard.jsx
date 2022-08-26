import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/BannerCard.module.scss";
const BannerCard = ({ banner }) => {
  const imageURl = "https://ashley-api.herokuapp.com/uploads/";

  return (
    <div className={styles.banner_card}>
      <div className={styles.img}>
        <Image
          src={`${imageURl}banners/${banner && banner.image}`}
          alt={banner.title}
          layout="fill"
          objectFit="fill"
        />
      </div>
      <div className={styles.info}>
        <h4>{banner && banner.title}</h4>
        <p>{banner && banner.description}</p>
        <Link href="/">
          <a>
            <button>Shop Now</button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default BannerCard;
