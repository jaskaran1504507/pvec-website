// import "./css/global.css";
import Head from "next/head";
import Footer from "../components/Footer";
import Footer2 from "../components/Footer2";
import Header from "../components/header";
import "./css/home.css";
import "./../pages/dummy/assets/css/animate.css";
import "./../pages/dummy/assets/css/magnific-popup.css";
import "./../pages/dummy/assets/css/slick.css";
import "./../pages/dummy/assets/css/LineIcons.css";
import "./../pages/dummy/assets/css/font-awesome.min.css";
import "./../pages/dummy/assets/css/bootstrap.min.css";
import "./../pages/dummy/assets/css/default.css";
import "./../pages/dummy/assets/css/style.css";
import "./../components/FloatInput/index.css";
import "./../styles/globals.css";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useReducer, useState } from "react";
import Context from "../components/context";

function classNames(...args) {
  return args.filter(Boolean).join(" ");
}
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [isVisited, setIsVisited] = useState(true);
  const [state, dispatch] = useState({ count: 0 });
  useEffect(() => {
    if (!localStorage.getItem("isVisited")) {
      setIsVisited(false);
    }
  }, []);

  return (
    <>
      <link
        id="u-theme-google-font"
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i"
      ></link>
      <Head>
        <title>PV Eye Care</title>
        <link rel="icon" href="/pvec-small.ico" />
      </Head>
      <Context.Provider value={{ state, dispatch }}>
        <Header />
        <Component {...pageProps} />
      </Context.Provider>
      {router.pathname == "/about-us" ? <Footer2 /> : <Footer />}
      {!isVisited && (
        <div
          style={{
            position: "fixed",
            width: "100%",
            bottom: "0px",
            zIndex: 2000,
          }}
        >
          <div
            className="alert bg-black text-white text-center cookiealert show"
            role="alert"
          >
            <b>Do you like cookies ?</b>🍪 We use cookies to ensure you get
            the best experience on our website. By using our website, you
            agree to our use of cookies
            <button
              type="button"
              onClick={() => {
                localStorage.setItem("isVisited", "true");
                setIsVisited((p) => !p);
              }}
              className="ant-btn ml-2 mt-2 ant-btn-primary"
            >
              <span>Confirm</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
