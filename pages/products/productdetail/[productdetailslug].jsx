import React, { useEffect, useState } from "react";
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
import product from "../../../styles/ProductDetail.module.scss";

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
      return feature.color_id.title;
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
    setCartDetail((prev) => ({
      ...prev,
      _id: productDetail._id,
      title: productDetail.title,
      price: Number(
        price.slice(sizeID, sizeID + 1).map((price) => price)[0]
      ).toFixed(0),
      size: sizes[sizeID],
      color: colors.slice(sizeID, sizeID + 1).map((color) => color[colorID])[0],
      sku: sku.slice(sizeID, sizeID + 1).map((sku) => sku[colorID])[0],
      image: images[0].map((image) => image[0])[0],
      quantity: Number(productQuantity),
    }));
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

  return (
    <div className={product.product_detail_wrapper}>
      <div className={product.img_and_detail} key={productDetail._id}>
        <div className={product.carousel}>
          <ProductCarousal
            height={300}
            slider={slider[0]}
            url="https://ashley-api.herokuapp.com/uploads/products/"
          />
        </div>
        <div className={product.product_detail}>
          <div className={product.name_price}>
            <h4>{productDetail.brand_id.title}</h4>
            <h2> {productDetail.title} </h2>
            <p>
              Item Code:{" "}
              {sku.slice(sizeID, sizeID + 1).map((sku) => sku[colorID])[0]}
            </p>
            <div className={product.flex + " " + product.reviews}>
              <span className={product.flex}>
                <AiFillStar className={product.icon} />
                <AiFillStar className={product.icon} />
                <AiFillStar className={product.icon} />
                <AiFillStar className={product.icon} />
                <AiFillStar className={product.icon} />
              </span>
              <p>121 Reviews</p>
            </div>
            <div className={product.flex + " " + product.price}>
              <h3>${price.slice(sizeID, sizeID + 1)}</h3>
            </div>
          </div>
          <div className={product.color_size}>
            <div className={product.color + " " + product.flex}>
              <h4>Colors:</h4>
              {colors[sizeID].map((color, i) => (
                <p
                  key={i}
                  style={{
                    // backgroundColor: color,
                    // color: "whitesmoke",
                    // height: 60,
                    // fontSize: 10,
                    // fontWeight: 600,
                    // width: 60,
                    // borderRadius: "50%",
                    // padding: 2,
                    display: "flex",
                    justifyContent: "space-around",
                    // alignItems: "center",
                    // boxShadow: "0 0 2px grey",
                    // textShadow: "0 0 5px grey",
                  }}
                  onClick={() => colorChangeHandler(i)}
                >
                  <span>{color}</span>
                  <span
                    style={{
                      backgroundColor: color,
                      height: 20,
                      width: 20,
                      fontWeight: 600,
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow: "0 0 2px grey",
                      margin: "0 10px",
                    }}
                  ></span>
                </p>
              ))}
            </div>
            <div className={product.size + " " + product.flex}>
              <h4>Sizes:</h4>
              {sizes.map((size, i) => (
                <p key={i} onClick={() => sizeChangeHandler(i)}>
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
              Customer Care
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
                    5.0 <span>/5.0</span>
                  </h1>
                  <span
                    style={{
                      fontSize: "30px",
                      margin: "0 10px 0 0",
                      color: "gold",
                    }}
                  >
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
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
          {activeIndex === 3 && (
            <div className={product.customer_care}>
              This is Customer Care Section
            </div>
          )}
        </div>
        <div className={product.subtotal}>
          <h3>Subtotal: $ {productQuantity * cartDetail.price}</h3>
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
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { productdetailslug } = context.query;

  const res = await fetch(
    `https://ashley-api.herokuapp.com/products/${productdetailslug}`
  );
  const data = await res.json();
  const productDetail = data.product;

  return {
    props: { productDetail }, // will be passed to the page component as props
  };
}

export default ProductDetail;
