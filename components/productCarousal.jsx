import React from "react";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import carousal from "../styles/Carousal.module.scss";

const ProductCarousal = ({ height, slider, url }) => {
  return (
    <div className={carousal.carousal_wrapper}>
      <div className={carousal.carousal}>
        <Carousel
          interval={4000}
          animation="slide"
          duration={1200}
          navButtonsAlwaysVisible={true}
          height={height}
        >
          {slider?.map((sliderImage, i) => (
            <div className={carousal.slider} key={i} style={{ position: "relative" }}>
              <Image
                src={`${url}${sliderImage}`}
                key={i}
                alt={i}
                layout="fill"
                objectFit="contain"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductCarousal;
