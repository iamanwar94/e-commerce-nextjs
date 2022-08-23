import * as React from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { next, back, selectStep, addAddress } from "../app/features/stepSlice";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const steps = ["Shipping address", "Payment details", "Review your order"];

const data = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  country: "",
};

export default function AddressForm() {
  const [addressData, setAddressData] = useState(data);

  const dispatch = useDispatch();
  const activeStep = useSelector(selectStep);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setAddressData({ ...addressData, [name]: value });
  };

  const handleNext = () => {
    dispatch(next());
    console.log(addressData);
    dispatch(addAddress(addressData));
  };

  const handleBack = () => {
    dispatch(back());
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={addressData.firstName}
            onChange={inputChangeHandler}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={addressData.lastName}
            onChange={inputChangeHandler}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="shipping address"
            variant="standard"
            value={addressData.address}
            onChange={inputChangeHandler}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={addressData.city}
            onChange={inputChangeHandler}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            value={addressData.state}
            onChange={inputChangeHandler}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value={addressData.zip}
            onChange={inputChangeHandler}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            value={addressData.country}
            onChange={inputChangeHandler}
          />
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mx: 2 }}>
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
