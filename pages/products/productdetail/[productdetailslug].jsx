import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../App/Features/cartSlice";

import { AiFillStar } from "react-icons/ai";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineHeart } from "react-icons/ai";

import Carousal from "../../../components/Carousal.jsx";
import bed from "../../assets/fur12.jpg";
import product from "../../../styles/ProductDetail.module.scss";
import dimension from "../..//assets/dimensions.webp";

const ProductDetail = ({ productDetail }) => {
  const cartData = {
    _id: "",
    title: "",
    size: "",
    color: "",
    price: "",
    quantity: "",
    image: "",
  };

  const [sizeID, setSizeID] = useState(0);
  const [colorID, setColorID] = useState(0);
  const [cartDetail, setCartDetail] = useState(cartData);
  const [productQuantity, setProductQuantity] = useState(1);
  const dispatch = useDispatch();

  // const router = useRouter();
  // const { productdetail } = router.query;
  // const variants = productDetail.variants.map((variant) => {
  //   return variant;
  // });
  const sizeChangeHandler = (i) => {
    setSizeID(i);
    setCartDetail({
      ...cartDetail,
      _id: productDetail._id,
      title: productDetail.title,
      price: Number(price.slice(sizeID, sizeID + 1).map((price) => price)[0]),
      size: sizes[sizeID],
      color: colors.slice(sizeID, sizeID + 1).map((color) => color[colorID])[0],
      image: images[0].map((image) => image[0])[0],
      quantity: productQuantity,
    });

    console.log(cartDetail);
    // console.log(sizeID);
  };
  const colorChangeHandler = (i) => {
    setColorID(i);
    setCartDetail({
      ...cartDetail,
      _id: productDetail._id,
      title: productDetail.title,
      price: Number(price.slice(sizeID, sizeID + 1).map((price) => price)[0]),
      size: sizes[sizeID],
      color: colors.slice(sizeID, sizeID + 1).map((color) => color[colorID])[0],
      image: images[0].map((image) => image[0])[0],
      quantity: productQuantity,
    });

    console.log(cartDetail);
    // console.log(colorID);
    // console.log(slider[0]);
    // console.log(images);
    // console.log(productDetail);
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
    return variant.price;
  });
  const colors = productDetail.variants.map((variant) => {
    return variant.features.map((feature) => {
      return feature.color;
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

  const addToCartHandler = () => {
    setCartDetail({
      ...cartDetail,
      _id: productDetail._id,
      title: productDetail.title,
      price: Number(price.slice(sizeID, sizeID + 1).map((price) => price)[0]),
      size: sizes[sizeID],
      color: colors.slice(sizeID, sizeID + 1).map((color) => color[colorID])[0],
      image: images[0].map((image) => image[0])[0],
      quantity: productQuantity,
    });

    console.log(cartDetail);
    // console.log(images[0]);
    dispatch(addToCart(cartDetail));
    setProductQuantity(1)
  };

  return (
    <div className={product.product_detail_wrapper}>
      <div className={product.img_and_detail} key={productDetail._id}>
        <div className={product.carousel}>
          <Carousal
            // height={260}
            slider={slider[0]}
            url="https://ashley-api.herokuapp.com/uploads/"
          />

          {/* <Carousel
            interval={4000}
            animation="slide"
            duration={1200}
            navButtonsAlwaysVisible={true}
            height={300}
          >
            {slider.map((image, i) => (
              <img
                src={`https://ashley-api.herokuapp.com/uploads/${image}`}
                key={i}
                alt={image}
              />
            ))}
          </Carousel> */}

          {/* <Carousel
            interval={4000}
            animation="slide"
            duration={1200}
            navButtonsAlwaysVisible={true}
            height={260}
          > */}
          {/* {slider.map((image, i) => (
              <img
                src={`https://ashley-api.herokuapp.com/uploads/${image[i]}`}
                key={i}
                alt={image + i}
                width={400}
              />
            ))} */}
          {/* <img src={bed} alt="bed" width={500} height={500} />
            <img src={bed} alt="bed" width={500} height={500} />
            <img src={bed} alt="bed" width={500} height={500} />
          </Carousel> */}
        </div>
        <div className={product.product_detail}>
          <div className={product.name_price}>
            <h4>{productDetail.brand_id.title}</h4>
            <h2> {productDetail.title} </h2>
            <p>Item Code: ED1201301-1013</p>
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
              {/* {price.map((price) => ( */}
              <h3>${price.slice(sizeID, sizeID + 1)}</h3>
              {/* ))} */}
              {/* <span className={product.mx - 2}> */}
              {/* <RiToolsFill className={product.setting_icon} /> */}
              {/* </span> */}
              {/* <h3>Assembly Required</h3> */}
            </div>
          </div>
          <div className={product.color_size}>
            <div className={product.color + " " + product.flex}>
              {/* <TbCircle1 className={product.icon} /> */}
              <h4>Colors:</h4>
              {/* {features.map((feature,i) => (
                <p key={feature._id}>{feature.color[i].map((color)=>(

                ))}</p>
              ))} */}
              {colors[sizeID].map((color, i) => (
                <p
                  key={i}
                  style={{ backgroundColor: color, color: "white" }}
                  onClick={() => colorChangeHandler(i)}
                >
                  {color}
                </p>
              ))}
            </div>
            <div className={product.size + " " + product.flex}>
              {/* <TbCircle1 className={product.icon} /> */}
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
            <h4>Details and Overview</h4>
            <h4>Products Reviews</h4>
            <h4>Customer Care</h4>
          </div>
          <div className={product.overview}>
            <div className={product.description}>
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
            </div>
            <div className={product.dimenstion}>
              <h4>Dimensions</h4>
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
              <p>Please Download this Guide</p>
            </div>
          </div>

          <div className={product.reviews}></div>
          <div className={product.customer_care}></div>
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
  console.log(data);
  const productDetail = data.product;

  return {
    props: { productDetail }, // will be passed to the page component as props
  };
}

export default ProductDetail;
