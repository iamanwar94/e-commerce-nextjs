import { Provider } from "react-redux";
import store from "../app/Store/store";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}

export default MyApp;
