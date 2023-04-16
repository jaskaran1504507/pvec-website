// import "./css/global.css";
import Head from "next/head";
import Footer from "../components/Footer";
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
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <link
        id="u-theme-google-font"
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i"
      ></link>
      <script src="https://cdn.tailwindcss.com"></script>
      <Head>
        <title>PV Eye Care</title>
        <link rel="icon" href="/pvec-small.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
