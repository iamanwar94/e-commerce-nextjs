import * as React from "react";
import { useEffect } from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import axios from "axios";

// import { useDispatch, useSelector } from "react-redux";
import { next, back, selectStep } from "../app/features/stepSlice";

import { useSelector, useDispatch } from "react-redux";
import { selectCart } from "../app/features/cartSlice";
import { selectCheckout } from "../app/features/checkoutSlice";
import { selectAddress, selectPayment } from "../app/features/stepSlice";

const products = [
  {
    name: "Product 1",
    desc: "A nice thing",
    price: "$9.99",
  },
  {
    name: "Product 2",
    desc: "Another thing",
    price: "$3.45",
  },
  {
    name: "Product 3",
    desc: "Something else",
    price: "$6.51",
  },
  {
    name: "Product 4",
    desc: "Best thing of all",
    price: "$14.11",
  },
  { name: "Shipping", desc: "", price: "Free" },
];

const steps = ["Shipping address", "Payment details", "Review your order"];

export default function Review() {
  const selectCartDetail = useSelector(selectCart);
  const selectCheckoutDetail = useSelector(selectCheckout);
  const activeStep = useSelector(selectStep);
  const address = useSelector(selectAddress);
  const payment = useSelector(selectPayment);
  const dispatch = useDispatch();

  const addresses = [
    address.address,
    address.city,
    address.state,
    address.zip,
    address.country,
  ];
  // const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];
  const payments = [
    { name: "Card type", detail: "Visa" },
    { name: "Card holder", detail: payment.cardName },
    { name: "Card number", detail: payment.cardNumber },
    { name: "Expiry date", detail: payment.expDate },
  ];

  useEffect(() => {
    // console.log(selectCartDetail);
  }, [selectCartDetail]);

  const userInfo = JSON.parse(localStorage.getItem("user"));

  const data = { ...selectCartDetail[0], user_id: userInfo.user_id };
  console.log("this is cart detail", selectCartDetail[0]);

  const handleNext = () => {
    // setActiveStep(activeStep + 1);
    // console.log("object");
    dispatch(next());

    if (activeStep === 2) {
      fetch("https://ashley-api.herokuapp.com/orders", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log("this is resp", json));
    }
  };

  const handleBack = () => {
    dispatch(back());
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {selectCartDetail?.map((product) => (
          <ListItem key={product._id} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={product.title}
              secondary={product.quantity}
            />
            <Typography variant="body2">$ {product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0, borderTop: 1 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $ {selectCheckoutDetail && selectCheckoutDetail.total}
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Taxes" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $ {selectCheckoutDetail && selectCheckoutDetail.taxes.toFixed(2)}
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Grand Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${" "}
            {selectCheckoutDetail && selectCheckoutDetail.grandTotal.toFixed(2)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            {address.firstName + " " + address.lastName}{" "}
          </Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          {activeStep !== 0 && (
            <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
              Back
            </Button>
          )}

          <Button
            variant="contained"
            onClick={handleNext}
            sx={{ mt: 3, ml: 1 }}
          >
            {activeStep === steps.length - 1 ? "Place order" : "Next"}
          </Button>
        </Box>
      </Grid>
    </React.Fragment>
  );
}
