import React from "react";
import Link from "next/link";
import banner from "../styles/ThinBannerCard.module.scss";
import bg from "../components/assets/fur16.jpg";

const ThinBannerCard = ({ data }) => {
  const featCat = data?.filter((item) => {
    return item.slug === "bedding";
  });

  const imgURL = "https://ashley-api.herokuapp.com/uploads/";
  return (
    <div
      className={banner.thin_banner_card}
      style={{
        backgroundImage: `url(${imgURL}categories/${featCat[0].image})`,
      }}
    >
      <div className={banner.info}>
        <p>Re-Introducing</p>
        <h4>{featCat[0].title}</h4>
      </div>
      <Link href="/products/sheet-sets">
        <a>
          <button>Shop Now</button>
        </a>
      </Link>
    </div>
  );
};

export default ThinBannerCard;
