import * as React from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { next, back, selectStep, addPayment } from "../app/features/stepSlice";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const data = {
  cardName: "",
  cardNumber: "",
  expDate: "",
  cvv: "",
};
const steps = ["Shipping address", "Payment details", "Review your order"];

export default function PaymentForm() {
  const [paymentData, setPaymentData] = useState(data);

  const dispatch = useDispatch();
  const activeStep = useSelector(selectStep);

  const paymentDataChangeHandler = (e) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  const handleNext = () => {
    // setActiveStep(activeStep + 1);
    // console.log("object");
    dispatch(next());
    console.log(paymentData);
    dispatch(addPayment(paymentData));
  };

  const handleBack = () => {
    // setActiveStep(activeStep - 1);
    dispatch(back());
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            name="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            value={paymentData.cardName}
            onChange={paymentDataChangeHandler}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            name="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            value={paymentData.cardNumber}
            onChange={paymentDataChangeHandler}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            type="date"
            required
            id="expDate"
            name="expDate"
            // label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            value={paymentData.expDate}
            onChange={paymentDataChangeHandler}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            name="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            value={paymentData.cvv}
            onChange={paymentDataChangeHandler}
          />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid> */}
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
