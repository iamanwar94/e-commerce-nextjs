import { Provider } from "react-redux";
import store from "../app/Store/store";
// import { persistStore } from "redux-persist";
// import { PersistGate } from "redux-persist/integration/react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.scss";

// let persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        {/* </PersistGate> */}
      </Provider>
    </>
  );
}

export default MyApp;
