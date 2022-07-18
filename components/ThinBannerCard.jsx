import React from "react";
import Image from "next/image";
import banner from "../styles/ThinBannerCard.module.scss";
import bg from "../components/assets/fur16.jpg";

const ThinBannerCard = ({ title, feature }) => {
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
      <button>Shop Now</button>
    </div>
  );
};

export default ThinBannerCard;
