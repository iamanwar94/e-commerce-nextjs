import { Provider } from "react-redux";
import { useEffect } from "react";
import store from "../app/store/store";
import { ToastContainer } from "react-toastify";
// import { persistStore } from "redux-persist";
// import { PersistGate } from "redux-persist/integration/react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";

// let persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <ToastContainer autoClose={3000} />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        {/* </PersistGate> */}
      </Provider>
    </>
  );
}

export default MyApp;
