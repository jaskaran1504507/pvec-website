import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { productCards } from "../../constant";

export default function ProductCatalogueHomePage() {

  const [seeMore, setSeeMore] = useState({});

  const imgArr = [
    "images/Rectangle 6-1.jpg",
    "images/Rectangle 4-2.jpg",
    "images/prod_cat_2.png",
    "images/Rectangle 6-4.jpg",
    "images/prod_cat_1.png",

    // "images/Rectangle 1-4.jpg",
    // "images/PVEC_ContactLenses.jpeg",
  ];
  return (
    <>
      {/* <!--====== ABOUT PART START ======--> */}
      <div className="container pt-120">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title text-center pb-30">
              <div className="line m-auto"></div>
              <h3 className="title text-xl">Our Products</h3>
              <h4>
                <span className="text-xl font-semibold	">
                  <br />
                  Over 750+ Ophthalmic frames, 250+ Stylish Sunglasses, Top Branded Contact Lenses, and various eye care products in stock to choose from!
                </span>
              </h4>
            </div>
            {/* <!-- section title --> */}
          </div>
        </div>
        {/* <section id="about" className="about-area pt-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="about-content mt-50 wow fadeInLeftBig"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <div className="section-title">
                    <div className="line"></div>
                    <h2 className="title">Contact Lenses</h2>
                    <h3 className="text-lg">
                      <span>
                        <br />
                        Disposable Daily, Bi-Weekly, Monthly, Astigmastic,
• Colored or Cos-play Contact Lenses (with or without prescription) delivered with Free Shipping!
                      </span>
                    </h3>
                  </div>
                  {/* <!-- section title --> */}
                  {/* <p className="text text-lg">
                  Our speciality is Rigid Gas Permeable and Scleral Contact lens fittings.
                  </p>
                  <p className="text text-lg">
                  All at competitive prices with applicable manufacturer's rebates* (based on quantity ordered)
                  </p>
                  <a href="/glasses-contacts?query=contacts" className="main-btn text-lg">
                    Get yours now
                  </a>
                </div> */}
                {/* <!-- about content --> */}
              {/* </div>
              <div className="col-lg-6">
                <div
                  className="about-image text-center mt-50 wow fadeInRightBig"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <img
                    src="images/26415.jpg"
                    alt="about"
                    style={{ maxHeight: "80%", maxWidth: "80%" }}
                  />
                </div> */}
                {/* <!-- about image --> */}
              {/* </div>
            </div> */}
            {/* <!-- row --> */}
          {/* </div> */}
          {/* <!-- container --> */}
          {/* <div className="about-shape-1">
            <img src="assets/images/about-shape-1.svg" alt="shape" />
          </div>
        </section> */}

        {/* <!--====== ABOUT PART ENDS ======--> */}

        {/* <!--====== ABOUT PART START ======--> */}

        {/* <section className="about-area pt-70">
          <div className="about-shape-2">
            <img src="assets/images/about-shape-2.svg" alt="shape" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 order-lg-last">
                <div
                  className="about-content mt-50 wow fadeInLeftBig"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <div className="section-title">
                    <div className="line"></div>
                    <h3 className="title">Eye Wear</h3>
                    <h3 className="text-lg">
                      <span>
                        <br />
                        New Modern Trends, Timeless Classics,Bold or Conservative and even Safety Protective eyewear; our collection has it all!{" "}
                      </span>
                    </h3>
                  </div>
                  {/* <!-- section title --> */}
                  {/* <p className="text text-lg">
                  We are constantly updating our selections year round to keep our collection up-to-date
                  </p>
                  <a href="/glasses-contacts?query=glasses" className="main-btn">
                    Style it now
                  </a>
                </div> */}
                {/* <!-- about content --> */}
              {/* </div>
              <div className="col-lg-6 order-lg-first">
                <div
                  className="about-image text-center mt-50 wow fadeInRightBig"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <img
                    src="images/eyewears.jpg"
                    alt="about"
                    style={{ maxHeight: "80%", maxWidth: "80%" }}
                  />
                </div> */}
                {/* <!-- about image --> */}
              {/* </div>
            </div> */}
            {/* <!-- row --> */}
          {/* </div> */}
          {/* <!-- container --> */}
        {/* </section> */} 

        {/* <!--====== ABOUT PART START ======--> */}

        {/* <section className="about-area pt-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="about-content mt-50 wow fadeInLeftBig"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <div className="section-title">
                    <div className="line"></div>
                    <h3 className="title">Eye Drops</h3>
                    <h3 className="text-lg">
                      <span>
                        <br />
                        Over 30% of the population struggle with dry eye syndrome which can lead to many eye complications.
                      </span>
                    </h3>
                  </div>
                  {/* <!-- section title --> */}
                  {/* <p className="text text-lg">
                  We have the relief you need with our Optometrist recommended selection of dry eye products.
                  <br/> Relieve dry, irritated eyes with our selection of high quality eye-drops, lid and eyelash care products, and therapeutic masks.
                  <br/>Perfect for the net addicts, cyberphiles and contact lens wearers out there!
                  </p>
                  <a href="/products?query=eye-medic" className="main-btn">
                    Get it now
                  </a>
                </div> */}
                {/* <!-- about content --> */}
              {/* </div>
              <div className="col-lg-6">
                <div
                  className="about-image text-center mt-50 wow fadeInRightBig"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <img
                    src="images/eyedrops.jpg"
                    alt="about"
                    style={{ maxHeight: "80%", maxWidth: "80%" }}
                  />
                </div> */}
                {/* <!-- about image --> */}
              {/* </div>
            </div> */}
            {/* <!-- row --> */}
          {/* </div> */}
          {/* <!-- container --> */}
          {/* <div className="about-shape-1">
            <img src="assets/images/about-shape-1.svg" alt="shape" />
          </div>
        </section> */}



        <div className="grid  gap-6 mt-10 grid-cols-1 md:grid-cols-3 u-clearfix u-sheet mx-auto u-valign-middle u-sheet-1">
        {productCards.map(({ img, text, head, link, linkText }) => (
          <div key={img} className="p-2 shadow-lg ">
            <div>
              <Image
                // layout="fill"
                // objectFit="cover"
                className="rounded-lg"
                src={img}
                alt=""
                srcSet=""
                height="250"
                width="355"
              />
            </div>
            <h1 className="text-blue-900 my-3 text-center font-semibold">
              {head}
            </h1>
            <div className="px-6 py-4 ">
              {seeMore[img] || text.slice(0, 250)}
              {text.length > 250 && (
                <span
                  onClick={() => {
                    setSeeMore((prev) => ({
                      ...prev,
                      [img]: prev[img] ? "" : text,
                    }));
                  }}
                  className=" pl-2 text-blue-900 hover:underline cursor-pointer"
                >
                  see {seeMore[img] ? "less" : "more"}...
                </span>
              )}
            </div>

            {/* <div className="flex justify-center">
            <div className="flex-end justify-center navbar-btn d-none d-sm-inline-block"> */}
            <div className="flex align-items-center justify-center">
              <a
                className="main-btn-products"
                data-scroll-nav="0"
                href={link}
              >
                {linkText}{" "}
              </a>
              {/* <div className="long-arrow-right"></div> */}
            </div>
            {/* </div>
              </div> */}
          </div>
        ))}
      </div>



        <div className="flex justify-center pt-12">
          <Link href="/service-products">
            <u className="explore-services-container uppercase rounded-full white text-lg font-semibold px-4 py-3">
              Explore our range of products{" "}
            </u>
          </Link>
        </div>
      </div>
      {/* <!--====== ABOUT PART ENDS ======--> */}

      {/* <!--====== ABOUT PART ENDS ======--> */}
    </>
  );
}
