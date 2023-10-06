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
import { useEffect, useState } from "react";
import { brandsArr, cards, contactsBrandsArr } from "../constant";

function classNames(...args) {
  return args.filter(Boolean).join(" ");
}
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const location = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [isVisited, setIsVisited] = useState(true);
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
      <div className="flex h-screen">
        {isVisible && (
          <div className="md:hidden block ">
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  height: "100vh",
                  width: "100vw",
                  background: "black",
                  zIndex: 21,
                }}
              >
                {/* START */}
                <div style={{ display: "flex", justifyContent: "end" }}>
                  <img
                    onClick={() => {
                      setIsVisible((prev) => !prev);
                    }}
                    src="/cross.png"
                    style={{ height: "35px", margin: "45px 25px 0 0" }}
                  />
                </div>
                <ul className="text-lg" style={{ marginTop: "6rem" }}>
                  {/* <li className="mb-4">
              <a href="/" className="text-black hover:text-gray-300">Home</a>
            </li> */}

                  <li className="mb-6 active ">
                    <div className="relative group text-center">
                      <div className="absolute"></div>

                      <a
                        className={classNames("page-scroll rounded-lg")}
                        href="/"
                      >
                        <span className="flex items-center ">
                          {" "}
                          <span
                            style={{ fontSize: "2.5rem", fontWeight: "200" }}
                            className="text-white"
                          >
                            Home
                          </span>
                        </span>
                      </a>
                    </div>
                  </li>

                  <li className="mb-6">
                    <div className="glasses-option relative group text-center">
                      <div className="absolute "></div>
                      <a
                        className={classNames(
                          " page-scroll  rounded-lg hover:text-gray-300"
                        )}
                        href="/glasses-contacts?query=glasses"
                      >
                        <span
                          className={classNames(
                            "px-1   hover:text-gray-300 text-white"
                          )}
                          style={{ fontSize: "2.5rem", fontWeight: "200" }}
                        >
                          Sun/Glasses
                        </span>
                      </a>
                      <div className="dropdown-content-glasses top-6 left-20">
                        {brandsArr.map((brand) => (
                          <a href={brand.addr} target="_blank">
                            <div className="flex">
                              <img
                                onClick={() => setIsVisible(false)}
                                className="img-fluid mx-1 img-responsive rounded product-image-v2"
                                src={"/images/brands/" + brand.link}
                              />
                              <h2 className="font-bold">{brand.name}</h2>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="contacts-option relative group text-center">
                      <div className="absolute "></div>
                      <a
                        className={classNames(
                          "page-scroll  rounded-lg hover:text-gray-300"
                        )}
                        href="/glasses-contacts?query=contacts"
                      >
                        <span
                          style={{ fontSize: "2.5rem", fontWeight: "200" }}
                          className="text-white"
                        >
                          Contacts
                        </span>
                      </a>
                      <div className="dropdown-content-contacts  top-6 left-20">
                        {contactsBrandsArr.map((brand) => (
                          <a href={brand.addr} target="_blank">
                            <div className="flex">
                              <img
                                className="img-fluid mx-1 img-responsive rounded product-image-v2"
                                src={"/images/" + brand.link}
                              />
                              <h2 className="font-bold">{brand.name}</h2>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="services-option relative group text-center">
                      <div className="absolute"></div>

                      <a
                        className={classNames(
                          "page-scroll  rounded-lg text-white"
                        )}
                        href="/services"
                      >
                        <span
                          className={classNames("px-1 ")}
                          style={{ fontSize: "2.5rem", fontWeight: "200" }}
                        >
                          Services
                        </span>
                      </a>
                      <div className="dropdown-content-services top-6 left-20">
                        {cards.map((service) => (
                          <a href={"/services#" + service.id}>
                            <div className="flex my-1">
                              <h2 className="md:font-bold mx-2">
                                {service.head2}
                              </h2>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="relative group text-center">
                      <div className="absolute"></div>

                      <a
                        className={classNames(
                          "page-scroll rounded-lg hover:text-gray-300"
                        )}
                        href="/products?query=eye-medic"
                      >
                        <span
                          style={{ fontSize: "2.5rem", fontWeight: "200" }}
                          className={classNames("px-1  text-white")}
                        >
                          EyeCare
                        </span>
                      </a>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="relative group text-center">
                      <div className="absolute"></div>
                      <a
                        className={classNames(
                          "page-scroll font-bold rounded-lg hover:text-gray-300"
                        )}
                        href="/promotions"
                      >
                        <span
                          className={classNames("px-1  text-white")}
                          style={{ fontSize: "2.5rem", fontWeight: "200" }}
                        >
                          Promotions
                        </span>
                      </a>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="faq-option relative group text-center">
                      <div className="absolute"></div>
                      <a
                        className={classNames(
                          "page-scroll  rounded-lg hover:text-gray-300"
                        )}
                        href="/faq"
                      >
                        <span
                          className={classNames("px-1 text-white")}
                          style={{ fontSize: "2.5rem", fontWeight: "200" }}
                        >
                          FAQs
                        </span>
                      </a>
                      <div className="dropdown-content-faq top-2 left-14">
                        <a href="/faq#q1">
                          <div className="flex">
                            <h2 className="font-bold">
                              How often should you get your eyes checked?
                            </h2>
                          </div>
                        </a>
                        <a href="/faq#q2">
                          <div className="flex">
                            <h2 className="font-bold">
                              What age should I get my child’s eye exams done?
                            </h2>
                          </div>
                        </a>
                        <a href="/faq#q3">
                          <div className="flex">
                            <h2 className="font-bold">
                              How do I choose the right pair of glasses?
                            </h2>
                          </div>
                        </a>
                        <a href="/faq#q4">
                          <div className="flex">
                            <h2 className="font-bold">
                              Are sunglasses just for fashion or are they
                              necessary?
                            </h2>
                          </div>
                        </a>
                        <a href="/faq#q5">
                          <div className="flex">
                            <h2 className="font-bold">
                              Why Buy Contact Lenses In-Store vs Online?
                            </h2>
                          </div>
                        </a>
                        <a href="/faq#q6">
                          <div className="flex">
                            <h2 className="font-bold">
                              How can I reduce eye strain and redness?
                            </h2>
                          </div>
                        </a>
                        <a href="/faq#q7">
                          <div className="flex">
                            <h2 className="font-bold">
                              Do we do direct billing?
                            </h2>
                          </div>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="relative group text-center">
                      <div className="absolute"></div>
                      <a
                        className={classNames(
                          "page-scroll  rounded-lg hover:text-gray-300"
                        )}
                        href="/about-us"
                      >
                        <span
                          style={{ fontSize: "2.5rem", fontWeight: "200" }}
                          className={classNames("px-1 text-center text-white")}
                        >
                          About
                        </span>
                      </a>
                    </div>
                  </li>
                </ul>

                {/* END */}
              </div>
            </div>
          </div>
        )}
        <div className="w-1/6 text-black p-2 md:block hidden">
          {/* Header content goes here */}

          <Header />
        </div>
        <div className="flex-1 flex flex-col overflow-x-hidden overflow-y-auto">
          {/* The Component */}
          <div className=" flex md:hidden justify-between ">
            <a className="navbar-brand " href="#">
              <img
                src="https://pvec-bucket.s3.ca-central-1.amazonaws.com/eyecare-logo.png"
                style={{
                  maxWidth: "11rem",
                  height: "4.5rem",
                  marginLeft: 24,
                  marginTop: 24,
                  zIndex: 2000,
                  paddingLeft: 2,
                  paddingRight: 2,
                }}
                alt="Logo"
              />
            </a>
            <div className="container mt-6">
              <div className="row">
                <div className="col-lg-12">
                  <nav className="navbar navbar-expand-lg flex justify-end">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                      onClick={() => {
                        setIsVisible((prev) => !prev);
                      }}
                    >
                      <span
                        className="toggler-icon bg-black"
                        style={{ background: "black" }}
                      />
                      <span
                        className="toggler-icon bg-black"
                        style={{ background: "black" }}
                      />
                      <span
                        className="toggler-icon bg-black"
                        style={{ background: "black" }}
                      />
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <Component {...pageProps} />
          {location.pathname == "/about-us" ? <Footer2 /> : <Footer />}
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
        </div>
      </div>
    </>
  );
}
