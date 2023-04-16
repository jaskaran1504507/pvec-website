import Link from "next/link";
import Banner from "../components/Banner";
import Carouselcard from "../components/Carouselcard";
import ProductCatalogue from "../components/ProductCatalogue";
import ServicesCatalogueHomePage from "../components/ServicesCatalogueHomePage";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Button from "../components/Button";
import { banner } from "../constant";
import ProductCatalogueHomePage from "../components/ProductCatalogueHomePage";
import FeedbackHomePage from "../components/FeedbackHomePage";
import { Helmet } from "react-helmet";
import $ from "jquery";

export default function Home() {
  return (
    <main>
      <Helmet>
        <script
          src="assets/js/vendor/jquery-1.12.4.min.js"
          type="text/javascript"
        />
        <script
          src="assets/js/vendor/modernizr-3.7.1.min.js"
          type="text/javascript"
        />
        <script src="assets/js/popper.min.js" type="text/javascript" />
        {/* <script src="assets/js/bootstrap.min.js" type="text/javascript" /> */}
        <script src="assets/js/plugins.js" type="text/javascript" />
        <script src="assets/js/slick.min.js" type="text/javascript" />
        <script src="assets/js/ajax-contact.js" type="text/javascript" />
        <script src="assets/js/waypoints.min.js" type="text/javascript" />
        <script
          src="assets/js/jquery.counterup.min.js"
          type="text/javascript"
        />
        <script
          src="assets/js/jquery.magnific-popup.min.js"
          type="text/javascript"
        />
        <script src="assets/js/jquery.easing.min.js" type="text/javascript" />
        <script src="assets/js/scrolling-nav.js" type="text/javascript" />
        <script src="assets/js/wow.min.js" type="text/javascript" />
        <script src="assets/js/particles.min.js" type="text/javascript" />
        {/* <script
          src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"
          type="text/javascript"
        /> */}
        <script src="assets/js/main.js" type="text/javascript" />
      </Helmet>
      <Carousel autoPlay swipeable infiniteLoop>
        {banner.map((b) => (
          <div className="pb-2 md:py-0" key={b.img}>
            <Banner banner={b.img} textColor={b.textColor} text={b.text}>
              {/* <Link href="/bookings#appointment"> */}
              {/* <a href="#">
                  <Button className="bg-blue-400 text-white">
                    BOOK MY APPOINTMENT
                  </Button>
                </a> */}
              {/* <Button className="bg-blue-400 text-white">
                  BOOK MY APPOINTMENT
                </Button> */}
              {/* </Link> */}
            </Banner>
          </div>
        ))}
      </Carousel>{" "}
      {/* Main frame code starts */}
      <ServicesCatalogueHomePage />
      <ProductCatalogueHomePage />
      <FeedbackHomePage />
      {/* Main frame code ends here */}
      {/* About us and product services */}
      {/* <section className="u-align-left u-clearfix u-section-2" id="sec-0eb6">
        <div className="u-clearfix u-sheet mx-auto u-valign-middle u-sheet-1">
          <div
            style={{ margin: "60px 0" }}
            className="fr-view u-clearfix u-rich-text u-text u-text-1"
          >
            // {/* About Us */}
      {/* <h2
              style={{
                textAlign: "left",
                fontWeight: 400,
                fontSize: "2.25rem",
                lineHeight: 1.1,
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <span
                style={{ lineHeight: 2 }}
                className="text-blue-900 font-semibold"
              >
                About Us
              </span>
            </h2>
            <p
              style={{ textAlign: "left", color: "#111111" }}
              className="py-5 "
            >
              We have been helping people with quality care from our team of
              expert eye doctors in downtown Vancouver since 2005. Our team of
              eye specialists have many years of professional experience and can
              provide proper diagnosis of eye health conditions right in the
              heart of Vancouver.
            </p>
            <p style={{ textAlign: "left" }}>
              If your eyes are causing you trouble, whether it's loss of vision
              or irritation, its time to search "Optometrist Near me." We are
              conveniently located downtown Vancouver, on the ground level on
              Burrard St and just West of Davie St.
            </p>
            <h2 style={{ textAlign: "left" }}>Services &amp; Products</h2>
            <p style={{ textAlign: "left" }}>
              <span style={{ lineHeight: 2 }}>
                Euismod in pellentesque massa placerat. Risus quis varius quam
                quisque. Fermentum leo vel orci porta non pulvinar neque.
                Pretium vulputate sapien nec sagittis aliquam malesuada bibendum
                arcu vitae. Viverra aliquet eget sit amet. Platea dictumst
                vestibulum rhoncus est.
              </span>
            </p>
            {/* Services & Products */}
            <h2
              style={{
                textAlign: "left",
                fontSize: "2.25rem",
                lineHeight: 1.1,
                // marginTop: "20px",
                // marginBottom: "20px",
              }}
              className="text-blue-900 mt-6 font-semibold"
            >
              Services &amp; Products
            </h2>
          </div>
        </div>
      </section> */}
      {/* Gird */}
      {/* <Carouselcard /> */}
      {/* <ProductCatalogue /> */}
    </main>
  );
}

// export default function Home() {
//   return (
//     //   <!DOCTYPE html>
//     // <html className="no-js" lang="en">
//     //  <head>
//     //   <meta charset="utf-8" />

//     //   <title>Basic - SaaS Landing Page</title>

//     //   <meta name="description" content="" />
//     //   <meta name="viewport" content="width=device-width, initial-scale=1" />

//     //   <link
//     //     rel="shortcut icon"
//     //     href="assets/images/favicon.png"
//     //     type="image/png"
//     //   />

//     //   <link rel="stylesheet" href="assets/css/animate.css" />

//     //   <link rel="stylesheet" href="assets/css/magnific-popup.css" />

//     //   <link rel="stylesheet" href="assets/css/slick.css" />

//     //   <link rel="stylesheet" href="assets/css/LineIcons.css" />

//     //   <link rel="stylesheet" href="assets/css/font-awesome.min.css" />

//     //   <link rel="stylesheet" href="assets/css/bootstrap.min.css" />

//     //   <link rel="stylesheet" href="assets/css/default.css" />

//     //   <link rel="stylesheet" href="assets/css/style.css" />
//     // </head>

//     // {/* <body> */}
//     // {/* <!--[if IE]>
//     //   <p className="browserupgrade">
//     //     You are using an <strong>outdated</strong> browser. Please
//     //     <a href="https://browsehappy.com/">upgrade your browser</a> to improve
//     //     your experience and security.
//     //   </p>
//     // <![endif]--> */}

//     // {/* <!--====== PRELOADER PART START ======--> */}
//     <main>
//       <div className="preloader">
//         <div className="loader">
//           <div className="ytp-spinner">
//             <div className="ytp-spinner-container">
//               <div className="ytp-spinner-rotator">
//                 <div className="ytp-spinner-left">
//                   <div className="ytp-spinner-circle"></div>
//                 </div>
//                 <div className="ytp-spinner-right">
//                   <div className="ytp-spinner-circle"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <!--====== PRELOADER PART ENDS ======--> */}

//       {/* {/* <!--====== HEADER PART START ======--> */}

//       <header className="header-area">
//         <div className="navbar-area">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-12">
//                 <nav className="navbar navbar-expand-lg">
//                   <a className="navbar-brand" href="index.html">
//                     <img src={"assets/images/logo.svg"} alt="Logo" />
//                   </a>
//                   <button
//                     className="navbar-toggler"
//                     type="button"
//                     data-toggle="collapse"
//                     data-target="#navbarSupportedContent"
//                     aria-controls="navbarSupportedContent"
//                     aria-expanded="false"
//                     aria-label="Toggle navigation"
//                   >
//                     <span className="toggler-icon"></span>
//                     <span className="toggler-icon"></span>
//                     <span className="toggler-icon"></span>
//                   </button>

//                   <div
//                     className="collapse navbar-collapse sub-menu-bar"
//                     id="navbarSupportedContent"
//                   >
//                     <ul id="nav" className="navbar-nav ml-auto">
//                       <li className="nav-item active">
//                         <a className="page-scroll" href="#home">
//                           Home
//                         </a>
//                       </li>
//                       <li className="nav-item">
//                         <a className="page-scroll" href="#features">
//                           Features
//                         </a>
//                       </li>
//                       <li className="nav-item">
//                         <a className="page-scroll" href="#about">
//                           About
//                         </a>
//                       </li>
//                       <li className="nav-item">
//                         <a className="page-scroll" href="#facts">
//                           Why
//                         </a>
//                       </li>
//                       <li className="nav-item">
//                         <a className="page-scroll" href="#team">
//                           Team
//                         </a>
//                       </li>
//                       <li className="nav-item">
//                         <a className="page-scroll" href="#blog">
//                           Blog
//                         </a>
//                       </li>
//                       ‰
//                     </ul>
//                   </div>
//                   {/* <!-- navbar collapse --> */}

//                   <div className="navbar-btn d-none d-sm-inline-block">
//                     <a className="main-btn" data-scroll-nav="0" href="#pricing">
//                       Free Trial
//                     </a>
//                   </div>
//                 </nav>
//                 {/* <!-- navbar --> */}
//               </div>
//             </div>
//             {/* <!-- row --> */}
//           </div>
//           {/* <!-- container --> */}
//         </div>
//         {/* <!-- navbar area --> */}

//         <div
//           id="home"
//           className="header-hero bg_cover"
//           style={{ backgroundImage: "assets/images/banner-bg.svg" }}
//           // "background-image: url(assets/images/banner-bg.svg)"
//         >
//           <div className="container">
//             <div className="row justify-content-center">
//               <div className="col-lg-8">
//                 <div className="header-hero-content text-center">
//                   <h3
//                     className="header-sub-title wow fadeInUp"
//                     data-wow-duration="1.3s"
//                     data-wow-delay="0.2s"
//                   >
//                     Basic - SaaS Landing Page
//                   </h3>
//                   <h2
//                     className="header-title wow fadeInUp"
//                     data-wow-duration="1.3s"
//                     data-wow-delay="0.5s"
//                   >
//                     Kickstart Your SaaS or App Site
//                   </h2>
//                   <p
//                     className="text wow fadeInUp"
//                     data-wow-duration="1.3s"
//                     data-wow-delay="0.8s"
//                   >
//                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
//                     diam nonumy eirmod tempor
//                   </p>
//                   <a
//                     href="#"
//                     className="main-btn wow fadeInUp"
//                     data-wow-duration="1.3s"
//                     data-wow-delay="1.1s"
//                   >
//                     Get Started
//                   </a>
//                 </div>
//                 {/* <!-- header hero content --> */}
//               </div>
//             </div>
//             {/* <!-- row --> */}
//             <div className="row">
//               <div className="col-lg-12">
//                 <div
//                   className="header-hero-image text-center wow fadeIn"
//                   data-wow-duration="1.3s"
//                   data-wow-delay="1.4s"
//                 >
//                   <img src={"assets/images/header-hero.png"} alt="hero" />
//                 </div>
//                 {/* <!-- header hero image --> */}
//               </div>
//             </div>
//             {/* <!-- row --> */}
//           </div>
//           {/* <!-- container --> */}
//           <div id="particles-1" className="particles"></div>
//         </div>
//         {/* <!-- header hero --> */}
//       </header>

//       {/* <!--====== HEADER PART ENDS ======--> */}

//       {/* <!--====== BRAMD PART START ======--> */}

//       <div className="brand-area pt-90">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="brand-logo d-flex align-items-center justify-content-center justify-content-md-between">
//                 <div
//                   className="single-logo mt-30 wow fadeIn"
//                   data-wow-duration="1s"
//                   data-wow-delay="0.2s"
//                 >
//                   <img src={"assets/images/brand-1.png"} alt="brand" />
//                 </div>
//                 {/* <!-- single logo --> */}
//                 <div
//                   className="single-logo mt-30 wow fadeIn"
//                   data-wow-duration="1.5s"
//                   data-wow-delay="0.2s"
//                 >
//                   <img src={"assets/images/brand-2.png"} alt="brand" />
//                 </div>
//                 {/* <!-- single logo --> */}
//                 <div
//                   className="single-logo mt-30 wow fadeIn"
//                   data-wow-duration="1.5s"
//                   data-wow-delay="0.3s"
//                 >
//                   <img src={"assets/images/brand-3.png"} alt="brand" />
//                 </div>
//                 {/* <!-- single logo --> */}
//                 <div
//                   className="single-logo mt-30 wow fadeIn"
//                   data-wow-duration="1.5s"
//                   data-wow-delay="0.4s"
//                 >
//                   <img src={"assets/images/brand-4.png"} alt="brand" />
//                 </div>
//                 {/* <!-- single logo --> */}
//                 <div
//                   className="single-logo mt-30 wow fadeIn"
//                   data-wow-duration="1.5s"
//                   data-wow-delay="0.5s"
//                 >
//                   <img src={"assets/images/brand-5.png"} alt="brand" />
//                 </div>
//                 {/* <!-- single logo --> */}
//               </div>
//               {/* <!-- brand logo --> */}
//             </div>
//           </div>
//           {/* <!-- row --> */}
//         </div>
//         {/* <!-- container --> */}
//       </div>

//       {/* <!--====== BRAMD PART ENDS ======--> */}

//       {/* <!--====== SERVICES PART START ======--> */}

//       <section id="features" className="services-area pt-120">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-10">
//               <div className="section-title text-center pb-40">
//                 <div className="line m-auto"></div>
//                 <h3 className="title">
//                   Clean and simple design,
//                   <span> Comes with everything you need to get started!</span>
//                 </h3>
//               </div>
//               {/* <!-- section title --> */}
//             </div>
//           </div>
//           {/* <!-- row --> */}
//           <div className="row justify-content-center">
//             <div className="col-lg-4 col-md-7 col-sm-8">
//               <div
//                 className="single-services text-center mt-30 wow fadeIn"
//                 data-wow-duration="1s"
//                 data-wow-delay="0.2s"
//               >
//                 <div className="services-icon">
//                   <img
//                     className="shape"
//                     src={"assets/images/services-shape.svg"}
//                     alt="shape"
//                   />
//                   <img
//                     className="shape-1"
//                     src={"assets/images/services-shape-1.svg"}
//                     alt="shape"
//                   />
//                   <i className="lni-baloon"></i>
//                 </div>
//                 <div className="services-content mt-30">
//                   <h4 className="services-title">
//                     <a href="#">Clean</a>
//                   </h4>
//                   <p className="text">
//                     Lorem ipsum dolor sit amet,consetetur sadipscing elitr,
//                     seddiam nonu eirmod tempor invidunt labore.
//                   </p>
//                   <a className="more" href="#">
//                     Learn More <i className="lni-chevron-right"></i>
//                   </a>
//                 </div>
//               </div>
//               {/* <!-- single services --> */}
//             </div>
//             <div className="col-lg-4 col-md-7 col-sm-8">
//               <div
//                 className="single-services text-center mt-30 wow fadeIn"
//                 data-wow-duration="1s"
//                 data-wow-delay="0.5s"
//               >
//                 <div className="services-icon">
//                   <img
//                     className="shape"
//                     src={"assets/images/services-shape.svg"}
//                     alt="shape"
//                   />
//                   <img
//                     className="shape-1"
//                     src={"assets/images/services-shape-2.svg"}
//                     alt="shape"
//                   />
//                   <i className="lni-cog"></i>
//                 </div>
//                 <div className="services-content mt-30">
//                   <h4 className="services-title">
//                     <a href="#">Robust</a>
//                   </h4>
//                   <p className="text">
//                     Lorem ipsum dolor sit amet,consetetur sadipscing elitr,
//                     seddiam nonu eirmod tempor invidunt labore.
//                   </p>
//                   <a className="more" href="#">
//                     Learn More <i className="lni-chevron-right"></i>
//                   </a>
//                 </div>
//               </div>
//               {/* <!-- single services --> */}
//             </div>
//             <div className="col-lg-4 col-md-7 col-sm-8">
//               <div
//                 className="single-services text-center mt-30 wow fadeIn"
//                 data-wow-duration="1s"
//                 data-wow-delay="0.8s"
//               >
//                 <div className="services-icon">
//                   <img
//                     className="shape"
//                     src={"assets/images/services-shape.svg"}
//                     alt="shape"
//                   />
//                   <img
//                     className="shape-1"
//                     src={"assets/images/services-shape-3.svg"}
//                     alt="shape"
//                   />
//                   <i className="lni-bolt-alt"></i>
//                 </div>
//                 <div className="services-content mt-30">
//                   <h4 className="services-title">
//                     <a href="#">Powerful</a>
//                   </h4>
//                   <p className="text">
//                     Lorem ipsum dolor sit amet,consetetur sadipscing elitr,
//                     seddiam nonu eirmod tempor invidunt labore.
//                   </p>
//                   <a className="more" href="#">
//                     Learn More <i className="lni-chevron-right"></i>
//                   </a>
//                 </div>
//               </div>
//               {/* <!-- single services --> */}
//             </div>
//           </div>
//           {/* <!-- row --> */}
//         </div>
//         {/* <!-- container --> */}
//       </section>

//       {/* <!--====== SERVICES PART ENDS ======--> */}

//       {/* <!--====== ABOUT PART START ======--> */}

//       <section id="about" className="about-area pt-70">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6">
//               <div
//                 className="about-content mt-50 wow fadeInLeftBig"
//                 data-wow-duration="1s"
//                 data-wow-delay="0.5s"
//               >
//                 <div className="section-title">
//                   <div className="line"></div>
//                   <h3 className="title">
//                     Quick & Easy <span>to Use Bootstrap Template</span>
//                   </h3>
//                 </div>
//                 {/* <!-- section title --> */}
//                 <p className="text">
//                   Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam
//                   nonumy eirmod tempor invidunt ut labore et dolore magna
//                   aliquyam erat, sed diam voluptua. At vero eos et accusam et
//                   justo duo dolores et ea rebum. Stet clita kasd gubergren, no
//                   sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
//                   ipsum dolor sit amet, consetetur sadipscing.
//                 </p>
//                 <a href="#" className="main-btn">
//                   Try it Free
//                 </a>
//               </div>
//               {/* <!-- about content --> */}
//             </div>
//             <div className="col-lg-6">
//               <div
//                 className="about-image text-center mt-50 wow fadeInRightBig"
//                 data-wow-duration="1s"
//                 data-wow-delay="0.5s"
//               >
//                 <img src={"assets/images/about1.svg"} alt="about" />
//               </div>
//               {/* <!-- about image --> */}
//             </div>
//           </div>
//           {/* <!-- row --> */}
//         </div>
//         {/* <!-- container --> */}
//         <div className="about-shape-1">
//           <img src={"assets/images/about-shape-1.svg"} alt="shape" />
//         </div>
//       </section>

//       {/* <!--====== ABOUT PART ENDS ======--> */}

//       {/* <!--====== ABOUT PART START ======--> */}

//       <section className="about-area pt-70">
//         <div className="about-shape-2">
//           <img src={"assets/images/about-shape-2.svg"} alt="shape" />
//         </div>
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6 order-lg-last">
//               <div
//                 className="about-content mt-50 wow fadeInLeftBig"
//                 data-wow-duration="1s"
//                 data-wow-delay="0.5s"
//               >
//                 <div className="section-title">
//                   <div className="line"></div>
//                   <h3 className="title">
//                     Modern design <span> with Essential Features</span>
//                   </h3>
//                 </div>
//                 {/* <!-- section title --> */}
//                 <p className="text">
//                   Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam
//                   nonumy eirmod tempor invidunt ut labore et dolore magna
//                   aliquyam erat, sed diam voluptua. At vero eos et accusam et
//                   justo duo dolores et ea rebum. Stet clita kasd gubergren, no
//                   sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
//                   ipsum dolor sit amet, consetetur sadipscing.
//                 </p>
//                 <a href="#" className="main-btn">
//                   Try it Free
//                 </a>
//               </div>
//               {/* <!-- about content --> */}
//             </div>
//             <div className="col-lg-6 order-lg-first">
//               <div
//                 className="about-image text-center mt-50 wow fadeInRightBig"
//                 data-wow-duration="1s"
//                 data-wow-delay="0.5s"
//               >
//                 <img src={"assets/images/about2.svg"} alt="about" />
//               </div>
//               {/* <!-- about image --> */}
//             </div>
//           </div>
//           {/* <!-- row --> */}
//         </div>
//         {/* <!-- container --> */}
//       </section>

//       {/* <!--====== ABOUT PART START ======--> */}

//       <section className="about-area pt-70">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6">
//               <div
//                 className="about-content mt-50 wow fadeInLeftBig"
//                 data-wow-duration="1s"
//                 data-wow-delay="0.5s"
//               >
//                 <div className="section-title">
//                   <div className="line"></div>
//                   <h3 className="title">
//                     <span>Crafted for</span> SaaS, App and Software Landing Page
//                   </h3>
//                 </div>
//                 {/* <!-- section title --> */}
//                 <p className="text">
//                   Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam
//                   nonumy eirmod tempor invidunt ut labore et dolore magna
//                   aliquyam erat, sed diam voluptua. At vero eos et accusam et
//                   justo duo dolores et ea rebum. Stet clita kasd gubergren, no
//                   sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
//                   ipsum dolor sit amet, consetetur sadipscing.
//                 </p>
//                 <a href="#" className="main-btn">
//                   Try it Free
//                 </a>
//               </div>
//               {/* <!-- about content --> */}
//             </div>
//             <div className="col-lg-6">
//               <div
//                 className="about-image text-center mt-50 wow fadeInRightBig"
//                 data-wow-duration="1s"
//                 data-wow-delay="0.5s"
//               >
//                 <img src={"assets/images/about3.svg"} alt="about" />
//               </div>
//               {/* <!-- about image --> */}
//             </div>
//           </div>
//           {/* <!-- row --> */}
//         </div>
//         {/* <!-- container --> */}
//         <div className="about-shape-1">
//           <img src={"assets/images/about-shape-1.svg"} alt="shape" />
//         </div>
//       </section>

//       {/* <!--====== ABOUT PART ENDS ======--> */}

//       {/* <!--====== ABOUT PART ENDS ======--> */}

//       {/* <!--====== VIDEO COUNTER PART START ======--> */}

//       <section id="facts" className="video-counter pt-70">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6">
//               <div
//                 className="video-content mt-50 wow fadeIn"
//                 data-wow-duration="1s"
//                 data-wow-delay="0.5s"
//               >
//                 <img
//                   className="dots"
//                   src={"assets/images/dots.svg"}
//                   alt="dots"
//                 />
//                 <div className="video-wrapper">
//                   <div className="video-image">
//                     <img src={"assets/images/video.png"} alt="video" />
//                   </div>
//                   <div className="video-icon">
//                     <a
//                       href="https://www.youtube.com/watch?v=r44RKWyfcFw"
//                       className="video-popup"
//                     >
//                       <i className="lni-play"></i>
//                     </a>
//                   </div>
//                 </div>
//                 {/* <!-- video wrapper --> */}
//               </div>
//               {/* <!-- video content --> */}
//             </div>
//             <div className="col-lg-6">
//               <div
//                 className="counter-wrapper mt-50 wow fadeIn"
//                 data-wow-duration="1s"
//                 data-wow-delay="0.8s"
//               >
//                 <div className="counter-content">
//                   <div className="section-title">
//                     <div className="line"></div>
//                     <h3 className="title">
//                       Cool facts <span> this about app</span>
//                     </h3>
//                   </div>
//                   {/* <!-- section title --> */}
//                   <p className="text">
//                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
//                     seiam nonumy eirmod tempor invidunt ut labore et dolore
//                     magna aliquyam erat, sed diam voluptua.
//                   </p>
//                 </div>
//                 {/* <!-- counter content --> */}
//                 <div className="row no-gutters">
//                   <div className="col-4">
//                     <div className="single-counter counter-color-1 d-flex align-items-center justify-content-center">
//                       <div className="counter-items text-center">
//                         <span className="count">
//                           <span className="counter">125</span>K
//                         </span>
//                         <p className="text">Downloads</p>
//                       </div>
//                     </div>
//                     {/* <!-- single counter --> */}
//                   </div>
//                   <div className="col-4">
//                     <div className="single-counter counter-color-2 d-flex align-items-center justify-content-center">
//                       <div className="counter-items text-center">
//                         <span className="count">
//                           <span className="counter">87</span>K
//                         </span>
//                         <p className="text">Active Users</p>
//                       </div>
//                     </div>
//                     {/* <!-- single counter --> */}
//                   </div>
//                   <div className="col-4">
//                     <div className="single-counter counter-color-3 d-flex align-items-center justify-content-center">
//                       <div className="counter-items text-center">
//                         <span className="count">
//                           <span className="counter">4.8</span>
//                         </span>
//                         <p className="text">User Rating</p>
//                       </div>
//                     </div>
//                     {/* <!-- single counter --> */}
//                   </div>
//                 </div>
//                 {/* <!-- row --> */}
//               </div>
//               {/* <!-- counter wrapper --> */}
//             </div>
//           </div>
//           {/* <!-- row --> */}
//         </div>
//         {/* <!-- container --> */}
//       </section>

//       {/* <!--====== VIDEO COUNTER PART ENDS ======--> */}

//       {/* <!--====== TEAM PART START ======--> */}

//       <section id="team" className="team-area pt-120">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-5">
//               <div className="section-title text-center pb-30">
//                 <div className="line m-auto"></div>
//                 <h3 className="title">
//                   <span>Meet Our</span> Creative Team Members
//                 </h3>
//               </div>
//               {/* <!-- section title --> */}
//             </div>
//           </div>
//           {/* <!-- row --> */}
//           <div className="row justify-content-center">
//             <div className="col-lg-4 col-md-7 col-sm-8">
//               <div
//                 className="single-team text-center mt-30 wow fadeIn"
//                 data-wow-duration="1s"
//                 data-wow-delay="0.2s"
//               >
//                 <div className="team-image">
//                   <img src={"assets/images/team-1.png"} alt="Team" />
//                   <div className="social">
//                     <ul>
//                       <li>
//                         <a href="#">
//                           <i className="lni-facebook-filled"></i>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           <i className="lni-twitter-filled"></i>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           <i className="lni-instagram-filled"></i>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           <i className="lni-linkedin-original"></i>
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="team-content">
//                   <h5 className="holder-name">
//                     <a href="#">Isabela Moreira</a>
//                   </h5>
//                   <p className="text">Founder and CEO</p>
//                 </div>
//               </div>
//               {/* <!-- single team --> */}
//             </div>
//             <div className="col-lg-4 col-md-7 col-sm-8">
//               <div
//                 className="single-team text-center mt-30 wow fadeIn"
//                 data-wow-duration="1s"
//                 data-wow-delay="0.5s"
//               >
//                 <div className="team-image">
//                   <img src={"assets/images/team-2.png"} alt="Team" />
//                   <div className="social">
//                     <ul>
//                       <li>
//                         <a href="#">
//                           <i className="lni-facebook-filled"></i>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           <i className="lni-twitter-filled"></i>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           <i className="lni-instagram-filled"></i>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           <i className="lni-linkedin-original"></i>
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="team-content">
//                   <h5 className="holder-name">
//                     <a href="#">Elon Musk</a>
//                   </h5>
//                   <p className="text">Sr. Software Engineer</p>
//                 </div>
//               </div>
//               {/* <!-- single team --> */}
//             </div>
//             <div className="col-lg-4 col-md-7 col-sm-8">
//               <div
//                 className="single-team text-center mt-30 wow fadeIn"
//                 data-wow-duration="1s"
//                 data-wow-delay="0.8s"
//               >
//                 <div className="team-image">
//                   <img src={"assets/images/team-3.png"} alt="Team" />
//                   <div className="social">
//                     <ul>
//                       <li>
//                         <a href="#">
//                           <i className="lni-facebook-filled"></i>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           <i className="lni-twitter-filled"></i>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           <i className="lni-instagram-filled"></i>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           <i className="lni-linkedin-original"></i>
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="team-content">
//                   <h5 className="holder-name">
//                     <a href="#">Fiona Smith</a>
//                   </h5>
//                   <p className="text">Business Development Manager</p>
//                 </div>
//               </div>
//               {/* <!-- single team --> */}
//             </div>
//           </div>
//           {/* <!-- row --> */}
//         </div>
//         {/* <!-- container --> */}
//       </section>

//       {/* <!--====== TEAM PART ENDS ======--> */}

//       {/* <!--====== TESTIMONIAL PART START ======--> */}

//       <section id="testimonial" className="testimonial-area pt-120">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-5">
//               <div className="section-title text-center pb-40">
//                 <div className="line m-auto"></div>
//                 <h3 className="title">
//                   Users sharing<span> their experience</span>
//                 </h3>
//               </div>
//               {/* <!-- section title --> */}
//             </div>
//           </div>
//           {/* <!-- row --> */}
//           <div
//             className="row testimonial-active wow fadeInUpBig"
//             data-wow-duration="1s"
//             data-wow-delay="0.8s"
//           >
//             <div className="col-lg-4">
//               <div className="single-testimonial">
//                 <div className="testimonial-review d-flex align-items-center justify-content-between">
//                   <div className="quota">
//                     <i className="lni-quotation"></i>
//                   </div>
//                   <div className="star">
//                     <ul>
//                       <li>
//                         <i className="lni-star-filled"></i>
//                       </li>
//                       <li>
//                         <i className="lni-star-filled"></i>
//                       </li>
//                       <li>
//                         <i className="lni-star-filled"></i>
//                       </li>
//                       <li>
//                         <i className="lni-star-filled"></i>
//                       </li>
//                       <li>
//                         <i className="lni-star-filled"></i>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="testimonial-text">
//                   <p className="text">
//                     Lorem ipsum dolor sit amet,consetetur sadipscing elitr,
//                     seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor
//                     sit amet,consetetur sadipscing elitr, seddiam nonu.
//                   </p>
//                 </div>
//                 <div className="testimonial-author d-flex align-items-center">
//                   <div className="author-image">
//                     <img
//                       className="shape"
//                       src={"assets/images/textimonial-shape.svg"}
//                       alt="shape"
//                     />
//                     <img
//                       className="author"
//                       src="assets/images/author-1.png"
//                       alt="author"
//                     />
//                   </div>
//                   <div className="author-content media-body">
//                     <h6 className="holder-name">Jenny Deo</h6>
//                     <p className="text">CEO, SpaceX</p>
//                   </div>
//                 </div>
//               </div>
//               {/* <!-- single testimonial --> */}
//             </div>
//             <div className="col-lg-4">
//               <div className="single-testimonial">
//                 <div className="testimonial-review d-flex align-items-center justify-content-between">
//                   <div className="quota">
//                     <i className="lni-quotation"></i>
//                   </div>
//                   <div className="star">
//                     <ul>
//                       <li>
//                         <i className="lni-star-filled"></i>
//                       </li>
//                       <li>
//                         <i className="lni-star-filled"></i>
//                       </li>
//                       <li>
//                         <i className="lni-star-filled"></i>
//                       </li>
//                       <li>
//                         <i className="lni-star-filled"></i>
//                       </li>
//                       <li>
//                         <i className="lni-star-filled"></i>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="testimonial-text">
//                   <p className="text">
//                     Lorem ipsum dolor sit amet,consetetur sadipscing elitr,
//                     seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor
//                     sit amet,consetetur sadipscing elitr, seddiam nonu.
//                   </p>
//                 </div>
//                 <div className="testimonial-author d-flex align-items-center">
//                   <div className="author-image">
//                     <img
//                       className="shape"
//                       src={"assets/images/textimonial-shape.svg"}
//                       alt="shape"
//                     />
//                     <img
//                       className="author"
//                       src={"assets/images/author-2.png"}
//                       alt="author"
//                     />
//                   </div>
//                   <div className="author-content media-body">
//                     <h6 className="holder-name">Marjin Otte</h6>
//                     <p className="text">UX Specialist, Yoast</p>
//                   </div>
//                 </div>
//               </div>
//               {/* <!-- single testimonial --> */}
//             </div>
//             <div className="col-lg-4">
//               <div className="single-testimonial">
//                 <div className="testimonial-review d-flex align-items-center justify-content-between">
//                   <div className="quota">
//                     <i className="lni-quotation"></i>
//                   </div>
//                   <div className="star">
//                     <ul>
//                       <li>
//                         <i className="lni-star-filled"></i>
//                       </li>
//                       <li>
//                         <i className="lni-star-filled"></i>
//                       </li>
//                       <li>
//                         <i className="lni-star-filled"></i>
//                       </li>
//                       <li>
//                         <i className="lni-star-filled"></i>
//                       </li>
//                       <li>
//                         <i className="lni-star-filled"></i>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="testimonial-text">
//                   <p className="text">
//                     Lorem ipsum dolor sit amet,consetetur sadipscing elitr,
//                     seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor
//                     sit amet,consetetur sadipscing elitr, seddiam nonu.
//                   </p>
//                 </div>
//                 <div className="testimonial-author d-flex align-items-center">
//                   <div className="author-image">
//                     <img
//                       className="shape"
//                       src={"assets/images/textimonial-shape.svg"}
//                       alt="shape"
//                     />
//                     <img
//                       className="author"
//                       src={"assets/images/author-3.png"}
//                       alt="author"
//                     />
//                   </div>
//                   <div className="author-content media-body">
//                     <h6 className="holder-name">David Smith</h6>
//                     <p className="text">CTO, Alphabet</p>
//                   </div>
//                 </div>
//               </div>
//               {/* <!-- single testimonial --> */}
//             </div>
//             <div className="col-lg-4">
//               <div className="single-testimonial">
//                 <div className="testimonial-review d-flex align-items-center justify-content-between">
//                   <div className="quota">
//                     <i className="lni-quotation"></i>
//                   </div>
//                   <div className="star">
//                     <ul>
//                       <li>
//                         <i className="lni-star-filled"></i>
//                       </li>
//                       <li>
//                         <i className="lni-star-filled"></i>
//                       </li>
//                       <li>
//                         <i className="lni-star-filled"></i>
//                       </li>
//                       <li>
//                         <i className="lni-star-filled"></i>
//                       </li>
//                       <li>
//                         <i className="lni-star-filled"></i>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="testimonial-text">
//                   <p className="text">
//                     Lorem ipsum dolor sit amet,consetetur sadipscing elitr,
//                     seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor
//                     sit amet,consetetur sadipscing elitr, seddiam nonu.
//                   </p>
//                 </div>
//                 <div className="testimonial-author d-flex align-items-center">
//                   <div className="author-image">
//                     <img
//                       className="shape"
//                       src={"assets/images/textimonial-shape.svg"}
//                       alt="shape"
//                     />
//                     <img
//                       className="author"
//                       src={"assets/images/author-2.png"}
//                       alt="author"
//                     />
//                   </div>
//                   <div className="author-content media-body">
//                     <h6 className="holder-name">Fajar Siddiq</h6>
//                     <p className="text">COO, MakerFlix</p>
//                   </div>
//                 </div>
//               </div>
//               {/* <!-- single testimonial --> */}
//             </div>
//           </div>
//           {/* <!-- row --> */}
//         </div>
//         {/* <!-- container --> */}
//       </section>

//       {/* <!--====== TESTIMONIAL PART ENDS ======--> */}

//       {/* <!--====== BLOG PART START ======--> */}

//       <section id="blog" className="blog-area pt-120">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6">
//               <div className="section-title pb-35">
//                 <div className="line"></div>
//                 <h3 className="title">
//                   <span>Our Recent</span> Blog Posts
//                 </h3>
//               </div>
//               {/* <!-- section title --> */}
//             </div>
//           </div>
//           {/* <!-- row --> */}
//           <div className="row justify-content-center">
//             <div className="col-lg-4 col-md-7">
//               <div
//                 className="single-blog mt-30 wow fadeIn"
//                 data-wow-duration="1s"
//                 data-wow-delay="0.2s"
//               >
//                 <div className="blog-image">
//                   <img src={"assets/images/blog-1.jpg"} alt={"blog"} />
//                 </div>
//                 <div className="blog-content">
//                   <ul className="meta">
//                     <li>
//                       Posted By: <a href="#">Admin</a>
//                     </li>
//                     <li>03 June, 2023</li>
//                   </ul>
//                   <p className="text">
//                     Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod
//                     tempor invidunt labore.
//                   </p>
//                   <a className="more" href="#">
//                     Learn More <i className="lni-chevron-right"></i>
//                   </a>
//                 </div>
//               </div>
//               {/* <!-- single blog --> */}
//             </div>
//             <div className="col-lg-4 col-md-7">
//               <div
//                 className="single-blog mt-30 wow fadeIn"
//                 data-wow-duration="1s"
//                 data-wow-delay="0.5s"
//               >
//                 <div className="blog-image">
//                   <img src={"assets/images/blog-2.jpg"} alt="blog" />
//                 </div>
//                 <div className="blog-content">
//                   <ul className="meta">
//                     <li>
//                       Posted By: <a href="#">Admin</a>
//                     </li>
//                     <li>03 June, 2023</li>
//                   </ul>
//                   <p className="text">
//                     Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod
//                     tempor invidunt labore.
//                   </p>
//                   <a className="more" href="#">
//                     Learn More <i className="lni-chevron-right"></i>
//                   </a>
//                 </div>
//               </div>
//               {/* <!-- single blog --> */}
//             </div>
//             <div className="col-lg-4 col-md-7">
//               <div
//                 className="single-blog mt-30 wow fadeIn"
//                 data-wow-duration="1s"
//                 data-wow-delay="0.8s"
//               >
//                 <div className="blog-image">
//                   <img src={"assets/images/blog-3.jpg"} alt={"blog"} />
//                 </div>
//                 <div className="blog-content">
//                   <ul className="meta">
//                     <li>
//                       Posted By: <a href="#">Admin</a>
//                     </li>
//                     <li>03 June, 2023</li>
//                   </ul>
//                   <p className="text">
//                     Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod
//                     tempor invidunt labore.
//                   </p>
//                   <a className="more" href="#">
//                     Learn More <i className="lni-chevron-right"></i>
//                   </a>
//                 </div>
//               </div>
//               {/* <!-- single blog --> */}
//             </div>
//           </div>
//           {/* <!-- row --> */}
//         </div>
//         {/* <!-- container --> */}
//       </section>

//       {/* <!--====== BLOG PART ENDS ======--> */}

//       {/* <!--====== FOOTER PART START ======--> */}

//       <footer id="footer" className="footer-area pt-120">
//         <div className="container">
//           <div
//             className="subscribe-area wow fadeIn"
//             data-wow-duration="1s"
//             data-wow-delay="0.5s"
//           >
//             <div className="row">
//               <div className="col-lg-6">
//                 <div className="subscribe-content mt-45">
//                   <h2 className="subscribe-title">
//                     Subscribe Our Newsletter <span>get reguler updates</span>
//                   </h2>
//                 </div>
//               </div>
//               <div className="col-lg-6">
//                 <div className="subscribe-form mt-50">
//                   <form action="#">
//                     <input type="text" placeholder="Enter eamil" />
//                     <button className="main-btn">Subscribe</button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//             {/* <!-- row --> */}
//           </div>
//           {/* <!-- subscribe area --> */}
//           <div className="footer-widget pb-100">
//             <div className="row">
//               <div className="col-lg-4 col-md-6 col-sm-8">
//                 <div
//                   className="footer-about mt-50 wow fadeIn"
//                   data-wow-duration="1s"
//                   data-wow-delay="0.2s"
//                 >
//                   <a className="logo" href="#">
//                     <img src={"assets/images/logo.svg"} alt="logo" />
//                   </a>
//                   <p className="text">
//                     Lorem ipsum dolor sit amet consetetur sadipscing elitr,
//                     sederfs diam nonumy eirmod tempor invidunt ut labore et
//                     dolore magna aliquyam.
//                   </p>
//                   <ul className="social">
//                     <li>
//                       <a href="#">
//                         <i className="lni-facebook-filled"></i>
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#">
//                         <i className="lni-twitter-filled"></i>
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#">
//                         <i className="lni-instagram-filled"></i>
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#">
//                         <i className="lni-linkedin-original"></i>
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//                 {/* <!-- footer about --> */}
//               </div>
//               <div className="col-lg-5 col-md-7 col-sm-7">
//                 <div className="footer-link d-flex mt-50 justify-content-md-between">
//                   <div
//                     className="link-wrapper wow fadeIn"
//                     data-wow-duration="1s"
//                     data-wow-delay="0.4s"
//                   >
//                     <div className="footer-title">
//                       <h4 className="title">Quick Link</h4>
//                     </div>
//                     <ul className="link">
//                       <li>
//                         <a href="#">Road Map</a>
//                       </li>
//                       <li>
//                         <a href="#">Privacy Policy</a>
//                       </li>
//                       <li>
//                         <a href="#">Refund Policy</a>
//                       </li>
//                       <li>
//                         <a href="#">Terms of Service</a>
//                       </li>
//                       <li>
//                         <a href="#">Pricing</a>
//                       </li>
//                     </ul>
//                   </div>
//                   {/* <!-- footer wrapper --> */}
//                   <div
//                     className="link-wrapper wow fadeIn"
//                     data-wow-duration="1s"
//                     data-wow-delay="0.6s"
//                   >
//                     <div className="footer-title">
//                       <h4 className="title">Resources</h4>
//                     </div>
//                     <ul className="link">
//                       <li>
//                         <a href="#">Home</a>
//                       </li>
//                       <li>
//                         <a href="#">Page</a>
//                       </li>
//                       <li>
//                         <a href="#">Portfolio</a>
//                       </li>
//                       <li>
//                         <a href="#">Blog</a>
//                       </li>
//                       <li>
//                         <a href="#">Contact</a>
//                       </li>
//                     </ul>
//                   </div>
//                   {/* <!-- footer wrapper --> */}
//                 </div>
//                 {/* <!-- footer link --> */}
//               </div>
//               <div className="col-lg-3 col-md-5 col-sm-5">
//                 <div
//                   className="footer-contact mt-50 wow fadeIn"
//                   data-wow-duration="1s"
//                   data-wow-delay="0.8s"
//                 >
//                   <div className="footer-title">
//                     <h4 className="title">Contact Us</h4>
//                   </div>
//                   <ul className="contact">
//                     <li>+809272561823</li>
//                     <li>info@gmail.com</li>
//                     <li>www.yourweb.com</li>
//                     <li>
//                       123 Stree New York City , United <br />
//                       States Of America 750.
//                     </li>
//                   </ul>
//                 </div>
//                 {/* <!-- footer contact --> */}
//               </div>
//             </div>
//             {/* <!-- row --> */}
//           </div>
//           {/* <!-- footer widget --> */}
//           <div className="footer-copyright">
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="copyright d-sm-flex justify-content-between">
//                   <div className="copyright-content">
//                     <p className="text">
//                       Designed and Developed by
//                       <a href="https://uideck.com" rel="nofollow">
//                         UIdeck
//                       </a>
//                     </p>
//                   </div>
//                   {/* <!-- copyright content --> */}
//                 </div>
//                 {/* <!-- copyright --> */}
//               </div>
//             </div>
//             {/* <!-- row --> */}
//           </div>
//           {/* <!-- footer copyright --> */}
//         </div>
//         {/* <!-- container --> */}
//         <div id="particles-2"></div>
//       </footer>

//       {/* <!--====== FOOTER PART ENDS ======--> */}

//       {/* <!--====== BACK TOP TOP PART START ======--> */}

//       <a href="#" className="back-to-top">
//         <i className="lni-chevron-up"></i>
//       </a>

//       {/* <!--====== BACK TOP TOP PART ENDS ======--> */}

//       {/* <!--====== PART START ======--> */}

//       {/* <!--
//     <section className="">
//         <div className="container">
//             <div className="row">
//                 <div className="col-lg-"></div>
//             </div>
//         </div>
//     </section>
// --> */}

//       {/* <!--====== PART ENDS ======--> */}

//       {/* <!--====== Jquery js ======--> */}
//       <script src="assets/js/vendor/jquery-1.12.4.min.js"></script>
//       <script src="assets/js/vendor/modernizr-3.7.1.min.js"></script>

//       {/* <!--====== Bootstrap js ======--> */}
//       <script src="assets/js/popper.min.js"></script>
//       <script src="assets/js/bootstrap.min.js"></script>

//       {/* <!--====== Plugins js ======--> */}
//       <script src="assets/js/plugins.js"></script>

//       {/* <!--====== Slick js ======--> */}
//       <script src="assets/js/slick.min.js"></script>

//       {/* <!--====== Ajax Contact js ======--> */}
//       <script src="assets/js/ajax-contact.js"></script>

//       {/* <!--====== Counter Up js ======--> */}
//       <script src="assets/js/waypoints.min.js"></script>
//       <script src="assets/js/jquery.counterup.min.js"></script>

//       {/* <!--====== Magnific Popup js ======--> */}
//       <script src="assets/js/jquery.magnific-popup.min.js"></script>

//       {/* <!--====== Scrolling Nav js ======--> */}
//       <script src="assets/js/jquery.easing.min.js"></script>
//       <script src="assets/js/scrolling-nav.js"></script>

//       {/* <!--====== wow js ======--> */}
//       <script src="assets/js/wow.min.js"></script>

//       {/* <!--====== Particles js ======--> */}
//       <script src="assets/js/particles.min.js"></script>

//       <script src="assets/js/main.js"></script>
//     </main>
//   );
// }
