import React from "react";
import Image from "next/image";
import Link from "next/link";
import banner from "../styles/BannerCard.module.scss";
const BannerCard = ({ img, title, feature }) => {
  return (
    <div className={banner.banner_card}>
      <Image src={img} alt={title} className={banner.img} width={980} />
      <div className={banner.info}>
        <h4>{title}</h4>
        <p>{feature}</p>
        <Link href="/products">
          <a>
            <button>Shop Now</button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default BannerCard;
