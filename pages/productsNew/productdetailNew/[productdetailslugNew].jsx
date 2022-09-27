import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import Switch from "@mui/material/Switch";
import Image from "next/image";
import { addToCart } from "../../../app/features/cartSlice";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../../app/features/productSlice";
import { fetchCategory } from "../../../app/features/categorySlice";
import { addToWishlist } from "../../../app/features/wishlistSlice";

import { AiFillStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

import ProductCarousal from "../../../components/productCarousal.jsx";
// import product from "../../../styles/ProductDetail.module.scss";
import product from "../../../styles/ProductDetailNew.module.scss";

import { Link } from "@mui/material";
import { MdOutlinePhotoCameraBack } from "react-icons/md";

// import shipping_delivery from "../../assets/helpicon/shipping-delivery.png";

import { IoChatbubblesOutline } from "react-icons/io";
// import Slider from "react-slick";
// import bed from "../../../pages/assets/bed.webp";

import { Component } from "react";
import Slider from "react-slick";
// import styles from "../styles/Practiceslider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bed from "../../assets/bed.webp";
import ReactPlayer from "react-player";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        // background: "black",
        background: "#909090",
        paddingTop: "1.5px",
        color: "orange",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#909090",
        height: "20px",
        paddingTop: "1.5px",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

const ProductDetail = ({ productDetail }) => {
  const cartData = {
    _id: "",
    title: "",
    size: "",
    color: "",
    price: "",
    quantity: "",
    image: "",
    sku: "",
  };

  const [sizeID, setSizeID] = useState(0);
  const [activeIndex, setActiveIndex] = useState(1);
  const [colorID, setColorID] = useState(0);
  const [cartDetail, setCartDetail] = useState(cartData);
  const [productQuantity, setProductQuantity] = useState(1);
  const [customeractiveIndex, setCustomerActiveIndex] = useState(1);

  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const sizeChangeHandler = (i) => {
    setSizeID(i);
  };
  const colorChangeHandler = (i) => {
    setColorID(i);
  };

  const decQuantity = () => {
    productQuantity > 1
      ? setProductQuantity(productQuantity - 1)
      : productQuantity;
  };
  const incQuantity = () => {
    setProductQuantity(productQuantity + 1);
  };

  const sizes = productDetail.variants.map((variant) => {
    return variant.size;
  });
  const price = productDetail.variants.map((variant) => {
    return variant.sale_price;
  });
  const desc = productDetail.variants.map((variant) => {
    return variant.description;
  });
  const dimension = productDetail.variants.map((variant) => {
    return variant.dimensions;
  });
  const colors = productDetail.variants.map((variant) => {
    return variant.features.map((feature) => {
      return feature.color_id;
    });
  });
  const colorImg = productDetail.variants.map((variant) => {
    return variant.features.map((feature) => {
      return feature.color_id.image;
    });
  });
  const sku = productDetail.variants.map((variant) => {
    return variant.features.map((feature) => {
      return feature.sku;
    });
  });
  const stock = productDetail.variants.map((variant) => {
    return variant.features.map((feature) => {
      return feature.quantity;
    });
  });
  const zeroStock = productDetail.variants.map((variant) => {
    return variant.features.map((feature) => {
      return feature.zero_stock_msg;
    });
  });

  const zeroStockMsg = zeroStock
    .slice(sizeID, sizeID + 1)
    .map((stock) => stock[colorID])[0];

  const stockInHand = stock
    .slice(sizeID, sizeID + 1)
    .map((stock) => stock[colorID])[0];

  // const stockInHand = 0;

  const imgURL = "https://ashley-api.herokuapp.com/uploads/";

  const images = productDetail.variants
    .slice(sizeID, sizeID + 1)
    .map((variant) => {
      return variant.features.slice(colorID, colorID + 1).map((feature) => {
        return feature.images.map((images) => {
          return images;
        });
      });
    });
  const slider = images[0];

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setCartDetail({
      ...cartDetail,
      _id: productDetail._id,
      title: productDetail.title,
      price: Number(
        price.slice(sizeID, sizeID + 1).map((price) => price)[0]
      ).toFixed(2),
      size: sizes[sizeID],
      color: colors.slice(sizeID, sizeID + 1).map((color) => color[colorID])[0]
        .title,
      sku: sku.slice(sizeID, sizeID + 1).map((sku) => sku[colorID])[0],
      image: images[0].map((image) => image[0])[0],
      quantity: Number(productQuantity),
    });
    // setCartDetail((prev) => ({
    //   ...prev,
    //   _id: productDetail._id,
    //   title: productDetail.title,
    //   price: Number(
    //     price.slice(sizeID, sizeID + 1).map((price) => price)[0]
    //   ).toFixed(0),
    //   size: sizes[sizeID],
    //   color: colors.slice(sizeID, sizeID + 1).map((color) => color[colorID])[0],
    //   sku: sku.slice(sizeID, sizeID + 1).map((sku) => sku[colorID])[0],
    //   image: images[0].map((image) => image[0])[0],
    //   quantity: Number(productQuantity),
    // }));
  }, [sizeID, colorID, productQuantity]);

  const addToCartHandler = () => {
    dispatch(addToCart(cartDetail));
    setProductQuantity(1);
  };
  const addToWishHandler = () => {
    dispatch(addToWishlist(cartDetail));
  };

  const activeLinkHandler = (id) => {
    setActiveIndex(id);
  };

  const activeCustomerHandler = (id) => {
    setCustomerActiveIndex(id);
  };

  const options = {
    edit: false,
    color1: "rgb(20,20,20,0.1)",
    color2: "tomato",
    value: productDetail.rating,
  };

  const settings = {
    dots: true,
    // infinite: true,
    infinite: false,
    // speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    // autoplay: true,
    autoplay: false,
    autoplaySpeed: 3000,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const siblingproductssettings = {
    dots: true,
    // infinite: true,
    infinite: false,
    // speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    // autoplay: true,
    autoplay: false,
    autoplaySpeed: 3000,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className={product.product_detail_wrapper}>
      <div className={product.bread_crumbs}>
        <Link href="/">
          <span>Home </span>
        </Link>
        /<span>Furniture </span> /<span>Living Room Furniture</span> /
        <span>Sofa & Couches</span> /
        <span className={product.last_span}>Maimz Sofa</span>
      </div>

      <div className={product.img_and_detail} key={productDetail._id}>
        {/* <div className={product.aa}> */}
        <div className={product.image_detail}>
          <div className={product.large_img_div}>
            <Image
              src={bed}
              alt="Picture of the author"
              layout="fill"
              className={product.img}
            />
          </div>

          <div className={product.productslider_wrapper}>
            <Slider {...settings}>
              <div className={product.imagediv}>
                <Image
                  src={bed}
                  alt="Picture of the author"
                  layout="fill"
                  className={product.image}
                />
              </div>
              <div className={product.imagediv}>
                <Image
                  src={bed}
                  alt="Picture of the author"
                  layout="fill"
                  className={product.image}
                />
              </div>
              <div className={product.imagediv}>
                <Image
                  src={bed}
                  alt="Picture of the author"
                  layout="fill"
                  className={product.image}
                />
              </div>
              <div className={product.imagediv}>
                <Image
                  src={bed}
                  alt="Picture of the author"
                  layout="fill"
                  className={product.image}
                />
              </div>
              <div className={product.imagediv}>
                <Image
                  src={bed}
                  alt="Picture of the author"
                  layout="fill"
                  className={product.image}
                />
              </div>
              <div className={product.imagediv}>
                <Image
                  src={bed}
                  alt="Picture of the author"
                  layout="fill"
                  className={product.image}
                />
              </div>
              <div className={product.imagediv}>
                <Image
                  src={bed}
                  alt="Picture of the author"
                  layout="fill"
                  className={product.image}
                />
              </div>
              <div className={product.imagediv}>
                <Image
                  src={bed}
                  alt="Picture of the author"
                  layout="fill"
                  className={product.image}
                />
              </div>
              <div className={product.imagediv}>
                <Image
                  src={bed}
                  alt="Picture of the author"
                  layout="fill"
                  className={product.image}
                />
              </div>
              <div className={product.imagediv}>
                <Image
                  src={bed}
                  alt="Picture of the author"
                  layout="fill"
                  className={product.image}
                />
              </div>
              <div className={product.imagediv}>
                <Image
                  src={bed}
                  alt="Picture of the author"
                  layout="fill"
                  className={product.image}
                />
              </div>
            </Slider>
          </div>
        </div>
        <div className={product.product_detail}>
          <div className={product.name_price}>
            <h2> {productDetail.title} </h2>
            <p>
              Item Code:
              {sku.slice(sizeID, sizeID + 1).map((sku) => sku[colorID])[0]}
            </p>
            <div className={product.flex + " " + product.reviews}>
              <span className={product.flex}>
                {/* <AiFillStar className={product.icon} />
                <AiFillStar className={product.icon} />
                <AiFillStar className={product.icon} />
                <AiFillStar className={product.icon} />
                <AiFillStar className={product.icon} /> */}

                <ReactStars {...options} />
              </span>
              <p>121 Reviews</p>
            </div>
            <div className={product.flex + " " + product.price}>
              <h3>${price.slice(sizeID, sizeID + 1)}</h3>
            </div>
            {/* changes work  start*/}
            <div className={product.reatail_price}>
              <MdOutlinePhotoCameraBack className={product.icon} />
              <p>
                <span className={product.bold}>
                  or $71/mo w/12 mos special financing
                </span>
                <span className={product.lern_how}> Learn How </span> <br />
                span Based on retail price of $849.99 (sales & promotion
                excluded)
              </p>
            </div>
            <p className={product.local_store}>
              <span className={product.bold}>
                Local Store Prices and Products may very by location .
              </span>
              Prices displayed in USD only.
            </p>

            <div className={product.special_offer}>
              <span className={product.right_border}>SPECIAL OFFER</span>
              <span className={product.left_border}>
                Save 5% with code : LDSAVINGS
              </span>
            </div>
            {/* changes work end */}
          </div>
          <div className={product.color_size}>
            <div className={product.color + " " + product.flex}>
              <h4>Colors:</h4>
              {colors[sizeID].map((color, i) => (
                <p
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                  onClick={() => colorChangeHandler(i)}
                >
                  <span>{color.title}</span>
                  <span
                    style={{
                      backgroundImage: `url(${imgURL}colors/${color.image})`,
                      height: 24,
                      width: 24,
                      fontWeight: 600,
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow: "0 0 2px grey",
                      margin: "0 10px",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></span>
                </p>
              ))}
            </div>
            <div className={product.size + " " + product.flex}>
              <h4>Sizes:</h4>
              {sizes.map((size, i) => (
                <p
                  key={i}
                  onClick={() => sizeChangeHandler(i)}
                  style={{
                    height: 36,
                    width: 36,
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "50%",
                    boxShadow: "0 0 5px grey",
                    justifyContent: "center",
                  }}
                >
                  {size}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={product.product_features_and_subtotal}>
        <div className={product.features}>
          <div className={product.feature_heading}>
            <h4
              onClick={() => activeLinkHandler(1)}
              style={
                activeIndex === 1
                  ? { color: "grey", borderBottom: "3px solid grey" }
                  : { color: "black" }
              }
            >
              Details and Overview
            </h4>
            <h4
              onClick={() => activeLinkHandler(2)}
              style={
                activeIndex === 2
                  ? { color: "grey", borderBottom: "3px solid grey" }
                  : { color: "black" }
              }
            >
              Products Reviews
            </h4>
            <h4
              onClick={() => activeLinkHandler(3)}
              style={
                activeIndex === 3
                  ? { color: "grey", borderBottom: "3px solid grey" }
                  : { color: "black" }
              }
            >
              Closest Stores
            </h4>
            <h4
              onClick={() => activeLinkHandler(4)}
              style={
                activeIndex === 4
                  ? { color: "grey", borderBottom: "3px solid grey" }
                  : { color: "black" }
              }
              className={product.last_line}
            >
              Product Video
            </h4>
          </div>
          {activeIndex === 1 && (
            <div className={product.overview}>
              <div
                className={product.description}
                dangerouslySetInnerHTML={{
                  __html: desc.slice(sizeID, sizeID + 1),
                }}
              ></div>
              <div
                className={product.dimenstion}
                dangerouslySetInnerHTML={{
                  __html: dimension.slice(sizeID, sizeID + 1),
                }}
              ></div>
            </div>
          )}

          {activeIndex === 2 && (
            <div className={product.reviews}>
              <div
                className={product.overall_ratings}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px solid black",
                }}
              >
                <div className={product.total_rating}>
                  <h1>
                    {productDetail.rating} <span>/5.0</span>
                  </h1>
                  <span
                    style={{
                      fontSize: "30px",
                      margin: "0 10px 0 0",
                      color: "gold",
                    }}
                  >
                    <ReactStars {...options} />
                  </span>
                  <span>5 Ratings</span>
                </div>
                <div>
                  <div
                    className={product.rating_by_stars}
                    style={{ display: "flex" }}
                  >
                    <span style={{ margin: "", color: "gold" }}>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </span>
                    <div
                      style={{
                        height: 10,
                        width: 100,
                        backgroundColor: "gold",
                        margin: "10px",
                      }}
                    ></div>
                    <span>5</span>
                  </div>
                  <div
                    className={product.rating_by_stars}
                    style={{ display: "flex" }}
                  >
                    <span style={{ margin: "", color: "gold" }}>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </span>
                    <div
                      style={{
                        height: 10,
                        width: 100,
                        backgroundColor: "gold",
                        margin: "10px",
                      }}
                    ></div>
                    <span>5</span>
                  </div>
                  <div
                    className={product.rating_by_stars}
                    style={{ display: "flex" }}
                  >
                    <span style={{ margin: "", color: "gold" }}>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </span>
                    <div
                      style={{
                        height: 10,
                        width: 100,
                        backgroundColor: "gold",
                        margin: "10px",
                      }}
                    ></div>
                    <span>5</span>
                  </div>
                  <div
                    className={product.rating_by_stars}
                    style={{ display: "flex" }}
                  >
                    <span style={{ margin: "", color: "gold" }}>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />

                      <AiFillStar />
                    </span>
                    <div
                      style={{
                        height: 10,
                        width: 100,
                        backgroundColor: "gold",
                        margin: "10px",
                      }}
                    ></div>
                    <span>5</span>
                  </div>
                  <div
                    className={product.rating_by_stars}
                    style={{ display: "flex" }}
                  >
                    <span style={{ margin: "", color: "gold" }}>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </span>
                    <div
                      style={{
                        height: 10,
                        width: 100,
                        backgroundColor: "gold",
                        margin: "10px",
                      }}
                    ></div>
                    <span>5</span>
                  </div>
                </div>
              </div>
              <div className={product.review_by_customer}>
                <h5>Reviews</h5>
                <div>
                  <span style={{ margin: "", color: "gold" }}>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </span>
                </div>
                <h6>By Customer Name</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  iusto quos quibusdam totam officiis, ipsa aliquid quas
                  doloribus enim! Quidem.
                </p>
              </div>
            </div>
          )}

          {activeIndex === 3 && <div>Closest Stores</div>}

          {/* {activeIndex === 3 && (
            <div className={product.customer_care}>

              <p>
                For help with your online or in-store purchase, please select
                from the options below.
              </p>

              <div className={product.heading}>
                <h4
                  onClick={() => activeCustomerHandler(1)}
                  style={
                    customeractiveIndex === 1
                      ? { color: "grey", borderBottom: "3px solid grey" }
                      : { color: "black" }
                  }
                >
                  For Online Purchases
                </h4>
                <h4
                  onClick={() => activeCustomerHandler(2)}
                  style={
                    customeractiveIndex === 2
                      ? { color: "grey", borderBottom: "3px solid grey" }
                      : { color: "black" }
                  }
                >
                  For In-Store Purchases
                </h4>
                <h4
                  onClick={() => activeCustomerHandler(3)}
                  style={
                    customeractiveIndex === 3
                      ? { color: "grey", borderBottom: "3px solid grey" }
                      : { color: "black" }
                  }
                >
                  Help Topics
                </h4>
              </div>
              {customeractiveIndex === 1 && (
                <div className={product.onlie_wrapper}>
                  <div className={product.left_div}>
                    <div className={product.left_first_div}>
                      <IoIosContacts className={product.icon} />
                    </div>
                    <p>
                      <span> Call Us:</span>
                      <br />
                      866-436-3393
                    </p>
                    <p>
                      <span>Hours:</span> <br />
                      Monday-Friday 7:00 a.m. - 7:00 p.m. (CT) <br />
                      Saturday 7:00 a.m. - 5:30 p.m. (CT)
                    </p>
                    <div className={product.left_fourth_div}>
                      <div className={product.question_back}>
                        <div className={product.question_back_imgdiv}>
                          <Image
                            src={callcentergirl}
                            alt="expert"
                            className={product.question_back_img}
                          />
                        </div>
                        <p>Have questions ?</p>
                      </div>

                      <div className={product.questioninput}>
                        <Link href="/" className={product.questioninputlink}>
                          <p>Need help selecting the perfect item ?</p>
                          <div className={product.questioninput_icondiv}>
                            <BsChatDots
                              className={product.questioninput_icon}
                            />
                          </div>
                        </Link>
                      </div>

                      <div
                        className={
                          product.questioninput + " " + product.questioninputtwo
                        }
                      >
                        <Link href="/" className={product.questioninputlink}>
                          <p>Need help selecting the perfect item ?</p>
                          <div className={product.questioninput_icondiv}>
                            <BsChatDots
                              className={product.questioninput_icon}
                            />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className={product.right_div}>
                    <p>Need further Assistance?</p>

                    <div className={product.right_div_secondline}>
                      <Link hrf="/" className={product.link}>
                        <BsChatDots className={product.icon} />
                        <span>Ask Furniture Mecca</span>
                      </Link>
                    </div>

                    <p>
                      Ask Ashley is your one stop spot for everything from
                      frequently asked questions to live chat support.
                    </p>

                    <p>
                      You’ll also have access to in-store appointment
                      scheduling, Ashley Advantage™ accounts, furniture
                      protection plan claims and more.
                    </p>

                    <div className={product.right_div_fifthline}>
                      <Link href="/" className={product.link}>
                        <span>Visit The Help</span>
                        <HiArrowSmRight className={product.icon} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
              {customeractiveIndex === 2 && (
                <div className={product.store_wrapper}>
                  <div className={product.store_upper_wrapper}>
                    <div className={product.img}>
                      <Link href="/">
                        <Image
                          src={mapimage}
                          alt="zip code images"
                        />
                      </Link>
                    </div>
                    <div className={product.para}>
                      <p>
                        For in store purchases, please enter a valid Zip Code
                      </p>
                      <br />
                      <Link href="/" className={product.link}>
                        <h6>Enter Your Zip Code</h6>
                      </Link>
                    </div>
                  </div>

                  <div className={product.store_downwork_wrapper}>
                    <div className={product.call_icon_div}>
                      <IoIosContacts className={product.call_icon} />
                    </div>
                    <p>
                      Please refer to your contact information on your receipt
                      or
                      <Link href="/" className={product.link}>
                        <span>look up store information </span>
                      </Link>
                      here.
                    </p>
                  </div>
                </div>
              )}
              {customeractiveIndex === 3 && (
                <div className={product.help_wrapper}>

                  <div className={product.icon_divone}>
                    <div className={product.icon_sub_div}>
                      <IoIosContacts className={product.help_icon} />
                      <span>Contact Us</span>
                    </div>

                    <div className={product.icon_sub_div}>
                      <BsCartCheck className={product.help_icon} />
                      <span>Shopping</span>
                    </div>

                    <div className={product.icon_sub_div}>
                      <MdOutlineAssignmentReturned
                        className={product.help_icon}
                      />
                      <span>Returns</span>
                    </div>

                    <div className={product.icon_sub_div}>
                      <BsTruck className={product.help_icon} />
                      <span>
                        Shipping & <br /> Delivery
                      </span>
                    </div>
                  </div>


                  <div className={product.icon_divone}>
                    <div className={product.icon_sub_div}>
                      <FaQuestion className={product.help_icon} />
                      <span>FAQ</span>
                    </div>

                    <div className={product.icon_sub_div}>
                      <MdOutlineStickyNote2 className={product.help_icon} />
                      <span>
                        Care & <br />
                        Cleaning
                      </span>
                    </div>

                    <div className={product.icon_sub_div}>
                      <TbCertificate className={product.help_icon} />
                      <span>
                        Warranty <br /> Information
                      </span>
                    </div>

                    <div className={product.icon_sub_div}>
                      <MdImageSearch className={product.help_icon} />
                      <span>Glossary</span>
                    </div>
                  </div>


                  <div className={product.lernmore_div}>
                    <Link href="/" className={product.lernmore}>
                      <span>Leran more</span>
                      <HiArrowSmRight className={product.arrow_icon} />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )} */}

          {activeIndex === 4 && (
            <div className={product.product_video_wrapper}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=EUhIIbiFrCs"
                className={product.product_video}
                playing
                width="100%"
                height="100%"
                controls={false}
              />
            </div>
          )}
        </div>

        {stockInHand >= 1 ? (
          <div className={product.subtotal}>
            <h3>Subtotal: $ {productQuantity * cartDetail.price}</h3>
            {stockInHand <= 9 && (
              <h3 style={{ color: "red" }}>
                Hurry Up Only{" "}
                <span
                  style={{
                    borderRadius: "50%",
                    boxShadow: "0 0 5px red",
                    padding: "2px 10px",
                  }}
                >
                  {stockInHand}
                </span>{" "}
                Items Left
              </h3>
            )}

            <div className={product.qty_wrapper}>
              <h3>Qty:</h3>
              <div className={product.qty}>
                <p onClick={decQuantity}>-</p>
                <p>{productQuantity}</p>
                <p onClick={incQuantity}>+</p>
              </div>
              <button onClick={addToCartHandler}>Add Items to Cart</button>
              <div
                className={product.icon}
                onClick={addToWishHandler}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: "50%",
                  boxShadow: "0 0 2px grey",
                }}
              >
                <AiOutlineHeart className={product.heart} />
              </div>
            </div>
            <div className={product.delivery}>
              <h6>Delivery Options</h6>
              <p>Free Ground Shipping</p>
              <p>Usually ships in 1 to 2 weeks</p>
            </div>
            <div className={product.expert_service}>
              <div style={{ position: "relative", display: "flex" }}>
                {" "}
                <Image
                  src="/../../assets/expert.png"
                  alt="expert"
                  layout="fill"
                />{" "}
              </div>
              <div>
                {" "}
                <h6>Add Expert Service</h6>{" "}
                <h5>Expert Assembly & Installation by Handy</h5>
                <div>
                  <Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                  <p>Add Service - $91.50 (applies per item)</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={product.out_of_stock}>
            <h4>
              Subtotal: <span>${productQuantity * cartDetail.price}</span>
            </h4>
            <div className={product.heading_and_icon}>
              <h4>Temporarily Out of Stock</h4>
              <div
                className={product.icon}
                onClick={addToWishHandler}
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: "50%",
                  boxShadow: "0 0 2px grey",
                }}
              >
                <AiOutlineHeart className={product.heart} />
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: zeroStockMsg,
              }}
              style={{ padding: 10 }}
            >
              {/* You have great taste! This item is so popular and it just sold
              out. Do not worry it will be back in stock soon. */}
              {/* <span> Browse Similar Products</span> */}
            </div>
          </div>
        )}
      </div>

      <div className={product.realted_product_wrapper}>
        <p className={product.realted_product_heading}>YOU MAY ALSO LIKE</p>
        <Slider {...siblingproductssettings}>
          {/* cardWrapper one */}
          <div className={product.realtedProduct_cardWrapper}>
            <div className={product.heart}>
              <h4 className={product.icon}>
                <AiOutlineHeart />
              </h4>
              <h4 className={product.display}>Add to Wishlist</h4>
            </div>
            <div className={product.realted_product_imagediv}>
              <Image
                src={bed}
                alt="Picture of the author"
                layout="fill"
                className={product.realted_product_image}
              />
            </div>
            <h6>chiming 12 inch Hybird Matters</h6>
            <div className={product.star}>
              <AiFillStar className={product.icon} />
              <AiFillStar className={product.icon} />
              <AiFillStar className={product.icon} />
              <AiFillStar className={product.icon} />
              <AiFillStar className={product.icon} />
            </div>
            <h5>$289.99</h5>
            <p>or $49/mo w/6 mos special financing</p>
            <h4>Save 5% wid Code:LDSAVINGS</h4>
            <h3>Free Grounp Shipping</h3>
            <h2>More Products Options Available</h2>
          </div>

          {/* cardWrapper two */}
          <div className={product.realtedProduct_cardWrapper}>
            <div className={product.heart}>
              <h4 className={product.icon}>
                <AiOutlineHeart />
              </h4>
              <h4 className={product.display}>Add to Wishlist</h4>
            </div>
            <div className={product.realted_product_imagediv}>
              <Image
                src={bed}
                alt="Picture of the author"
                layout="fill"
                className={product.realted_product_image}
              />
            </div>
            <h6>chiming 12 inch Hybird Matters</h6>
            <div className={product.star}>
              <AiFillStar className={product.icon} />
              <AiFillStar className={product.icon} />
              <AiFillStar className={product.icon} />
              <AiFillStar className={product.icon} />
              <AiFillStar className={product.icon} />
            </div>
            <h5>$289.99</h5>
            <p>or $49/mo w/6 mos special financing</p>
            <h4>Save 5% wid Code:LDSAVINGS</h4>
            <h3>Free Grounp Shipping</h3>
            <h2>More Products Options Available</h2>
          </div>

          {/* cardWrapper three */}
          <div className={product.realtedProduct_cardWrapper}>
            <div className={product.heart}>
              <h4 className={product.icon}>
                <AiOutlineHeart />
              </h4>
              <h4 className={product.display}>Add to Wishlist</h4>
            </div>
            <div className={product.realted_product_imagediv}>
              <Image
                src={bed}
                alt="Picture of the author"
                layout="fill"
                className={product.realted_product_image}
              />
            </div>
            <h6>chiming 12 inch Hybird Matters</h6>
            <div className={product.star}>
              <AiFillStar className={product.icon} />
              <AiFillStar className={product.icon} />
              <AiFillStar className={product.icon} />
              <AiFillStar className={product.icon} />
              <AiFillStar className={product.icon} />
            </div>
            <h5>$289.99</h5>
            <p>or $49/mo w/6 mos special financing</p>
            <h4>Save 5% wid Code:LDSAVINGS</h4>
            <h3>Free Grounp Shipping</h3>
            <h2>More Products Options Available</h2>
          </div>

          {/* cardWrapper four */}
          <div className={product.realtedProduct_cardWrapper}>
            <div className={product.heart}>
              <h4 className={product.icon}>
                <AiOutlineHeart />
              </h4>
              <h4 className={product.display}>Add to Wishlist</h4>
            </div>
            <div className={product.realted_product_imagediv}>
              <Image
                src={bed}
                alt="Picture of the author"
                layout="fill"
                className={product.realted_product_image}
              />
            </div>
            <h6>chiming 12 inch Hybird Matters</h6>
            <div className={product.star}>
              <AiFillStar className={product.icon} />
              <AiFillStar className={product.icon} />
              <AiFillStar className={product.icon} />
              <AiFillStar className={product.icon} />
              <AiFillStar className={product.icon} />
            </div>
            <h5>$289.99</h5>
            <p>or $49/mo w/6 mos special financing</p>
            <h4>Save 5% wid Code:LDSAVINGS</h4>
            <h3>Free Grounp Shipping</h3>
            <h2>More Products Options Available</h2>
          </div>

          {/* cardWrapper five*/}
          <div className={product.realtedProduct_cardWrapper}>
            <div className={product.heart}>
              <h4 className={product.icon}>
                <AiOutlineHeart />
              </h4>
              <h4 className={product.display}>Add to Wishlist</h4>
            </div>
            <div className={product.realted_product_imagediv}>
              <Image
                src={bed}
                alt="Picture of the author"
                layout="fill"
                className={product.realted_product_image}
              />
            </div>
            <h6>chiming 12 inch Hybird Matters</h6>
            <div className={product.star}>
              <AiFillStar className={product.icon} />
              <AiFillStar className={product.icon} />
              <AiFillStar className={product.icon} />
              <AiFillStar className={product.icon} />
              <AiFillStar className={product.icon} />
            </div>
            <h5>$289.99</h5>
            <p>or $49/mo w/6 mos special financing</p>
            <h4>Save 5% wid Code:LDSAVINGS</h4>
            <h3>Free Grounp Shipping</h3>
            <h2>More Products Options Available</h2>
          </div>

          {/* cardWrapper six*/}
          <div className={product.realtedProduct_cardWrapper}>
            <div className={product.heart}>
              <h4 className={product.icon}>
                <AiOutlineHeart />
              </h4>
              <h4 className={product.display}>Add to Wishlist</h4>
            </div>
            <div className={product.realted_product_imagediv}>
              <Image
                src={bed}
                alt="Picture of the author"
                layout="fill"
                className={product.realted_product_image}
              />
            </div>
            <h6>chiming 12 inch Hybird Matters</h6>
            <div className={product.star}>
              <AiFillStar className={product.icon} />
              <AiFillStar className={product.icon} />
              <AiFillStar className={product.icon} />
              <AiFillStar className={product.icon} />
              <AiFillStar className={product.icon} />
            </div>
            <h5>$289.99</h5>
            <p>or $49/mo w/6 mos special financing</p>
            <h4>Save 5% wid Code:LDSAVINGS</h4>
            <h3>Free Grounp Shipping</h3>
            <h2>More Products Options Available</h2>
          </div>
        </Slider>
      </div>
    </div>
  );
};

// export async function getServerSideProps(context) {
//   const { productdetailslug } = context.query;

//   const res = await fetch(
//     `https://ashley-api.herokuapp.com/products/${productdetailslug}`
//   );
//   const data = await res.json();
//   const productDetail = data.product;

//   return {
//     props: { productDetail }, // will be passed to the page component as props
//   };
// }

export async function getServerSideProps(context) {
  const { productdetailslugnew } = context.query;

  const res = await fetch(
    `https://ashley-api.herokuapp.com/products/${productdetailslugnew}`
  );

  const data = await res.json();
  const productDetail = data.product;

  return {
    props: { productDetail }, // will be passed to the page component as props
  };
}

export default ProductDetail;
