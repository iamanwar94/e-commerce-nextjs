import React from "react";
import Link from "next/link";
import banner from "../styles/ThinBannerCard.module.scss";
import bg from "../components/assets/fur16.jpg";

const ThinBannerCard = ({ title, feature,img, slug }) => {
  return (
    <div
      className={banner.thin_banner_card}
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      {/* <Image src={img} alt={title} className={banner.img} width={980} /> */}
      <div className={banner.info}>
        <p>{feature}</p>
        <h4>{title}</h4>
      </div>
      <Link href='/'>
        <a>
          <button>Shop Now</button>
        </a>
      </Link>
    </div>
  );
};

export default ThinBannerCard;
