import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const data = { name: "", email: "", msg: "" };

const theme = createTheme();

export default function Contact() {
  const [msgData, setMsgData] = useState(data);
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setMsgData({ ...msgData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(msgData);
    setMsgData(data);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Contact us
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="Name"
              autoFocus
              value={msgData.name}
              onChange={changeHandler}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={msgData.email}
              onChange={changeHandler}
            />
            <TextField
              margin="normal"
              label="Write your message here"
              multiline
              rows={4}
              fullWidth
              autoFocus
              required
              id="msg"
              name="msg"
              value={msgData.msg}
              onChange={changeHandler}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
