import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { addToCart } from "../../../App/Features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../App/Features/productSlice";
import { fetchCategory } from "../../../App/Features/categorySlice";

import { AiFillStar } from "react-icons/ai";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineHeart } from "react-icons/ai";

import ProductCarousal from "../../../components/productCarousal.jsx";
import bed from "../../assets/fur12.jpg";
import product from "../../../styles/ProductDetail.module.scss";
import dimension from "../..//assets/dimensions.webp";
import { display } from "@mui/system";

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
    setCartDetail({
      ...cartDetail,
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
    });
  }, [sizeID, colorID, productQuantity]);

  const addToCartHandler = () => {
    dispatch(addToCart(cartDetail));
    setProductQuantity(1);
  };

  const activeLinkHandler = (id) => {
    // if (activeIndex === id) {
    //   setActiveIndex();
    // } else {
    //   setActiveIndex(id);
    // }
    // console.log(id);
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
                {console.log(cartDetail)}
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
                    backgroundColor: color,
                    color: "whitesmoke",
                    height: 60,
                    fontSize: 10,
                    fontWeight: 600,
                    width: 60,
                    borderRadius: "50%",
                    padding: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0 0 2px grey",
                    textShadow: "0 0 5px grey",
                  }}
                  onClick={() => colorChangeHandler(i)}
                >
                  {color}
                </p>
              ))}
              {/* <span style={{ height: 50, width: 50, position: "relative" }}>
                <Image
                  src={`https://ashley-api.herokuapp.com/uploads/products/${colorImg}`}
                  layout="fill"
                  objectFit="cover"
                />
              </span> */}
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
              {/* <div className={product.description}>
              <h3>Details and Overview</h3>
              <h4>Description</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium, corrupti. Saepe animi maiores modi quas perferendis
                asperiores assumenda voluptatibus nobis ipsa non minus tempore
                provident nisi adipisci eaque, reprehenderit ratione.
              </p>
              <ul>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum, molestiae! Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Non, dolorem?
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum, molestiae! Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Non, dolorem?
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum, molestiae! Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Non, dolorem?
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum, molestiae! Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Non, dolorem?
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum, molestiae! Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Non, dolorem?
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum, molestiae! Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Non, dolorem?
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum, molestiae! Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Non, dolorem?
                </li>
              </ul>
              <h4>Weight</h4>
              <p>189.81 lbs. (86.1 kgs.)</p>
            </div> */}
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
              >
                {/* <h4>Dimensions</h4>
              <img src={dimension} alt="" />
              <ul>
                <li>Width: 150</li>
                <li>Height: 150</li>
                <li>Depth: 140</li>
              </ul>
              <h4>Additional Dimensions</h4>
              <ul>
                <li>Queen upholstered footboard Width: 64.00"</li>
                <li>Queen upholstered footboard Width: 64.00"</li>
                <li>Queen upholstered footboard Width: 64.00"</li>
                <li>Queen upholstered footboard Width: 64.00"</li>
                <li>Queen upholstered footboard Width: 64.00"</li>
                <li>Queen upholstered footboard Width: 64.00"</li>
              </ul>
              <h4>Assembly Instructions</h4>
              <p>Please Download this Guide</p> */}
              </div>
            </div>
          )}

          {activeIndex === 2 && (
            <div className={product.reviews}>This is review section</div>
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
            <div className={product.icon}>
              <AiOutlineHeart className={product.heart} />
            </div>
          </div>
          <div className={product.delivery}>
            <h6>Delivery Options</h6>
            <p>Free Ground Shipping</p>
            <p>Usually ships in 1 to 2 weeks</p>
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
