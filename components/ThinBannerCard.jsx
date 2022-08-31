import React from "react";
import Link from "next/link";
import banner from "../styles/ThinBannerCard.module.scss";
import bg from "../components/assets/fur16.jpg";

const ThinBannerCard = ({ data }) => {
  // const featCat = data?.filter((item) => {
  //   return item.slug === "bedding";
  // });

  const imgURL = "https://ashley-api.herokuapp.com/uploads/";
  return (
    <div
      className={banner.thin_banner_card}
      style={{
        backgroundImage: `url(${imgURL}banners/${data[0]?.image})`,
      }}
    >
      <div className={banner.info}>
        <p>{data[0]?.description} </p>
        <h4>{data[0]?.title}</h4>
      </div>
      <Link href={`/products/${data[0]?.category_id.slug}`}>
        <a>
          <button>Shop Now</button>
        </a>
      </Link>
    </div>
  );
};

export default ThinBannerCard;
