import React, { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

const Email = ({ email }) => {
  const router = useRouter();

  const token = email;

  useEffect(() => {
    const token = router.query.email;

    async function verifyEmail() {
      const config = {
        url: `https://ashley-api.herokuapp.com/users/email-confirmation/${token}`,
        method: "PUT",
        // headers: {
        //   "content-type": "application/json",
        // },
      };
      const response = await axios(config);
      console.log(response);
    }
    verifyEmail();
    console.log(token);
  }, []);

  return (
    <div style={{ width: "95%", margin: "30px auto", textAlign: "center" }}>
      Your Email has been Confirmed Please{" "}
      <Link href={"/login"}>
        <span style={{ cursor: "pointer", textDecoration: "underline" }}>
          Login Now
        </span>
      </Link>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { email } = context.query;

  // const config = {
  //   url: `https://ashley-api.herokuapp.com/users/email-confirmation/${token}`,
  //   method: "PUT",
  // };
  // const response = await axios(config);
  // console.log(response);

  // const res = await fetch(
  //   `https://ashley-api.herokuapp.com/products/${productdetailslug}`
  // );
  // const data = await res.json();
  // const productDetail = data.product;

  return {
    props: { email }, // will be passed to the page component as props
  };
}

export default Email;
