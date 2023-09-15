import Link from "next/link";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { callApi } from "../../utils/apiUtils";
// import { homeServicesCards } from "../../constant";
import Endpoints from "../../utils/endpoints";
import Loading from "../Loading";

export default function ServicesCatalogueHomePage() {
  const [seeMore, setSeeMore] = useState({});
  const [homeServicesCards, setHomeServicesCards] = useState([]);
  const imgArr = [
    "images/Rectangle 6-1.jpg",
    "images/Rectangle 4-2.jpg",
    "images/prod_cat_2.png",
    "images/Rectangle 6-4.jpg",
    "images/prod_cat_1.png",
  ];
  useEffect(() => {
    callApi({
      uriEndPoint: {
        ...Endpoints.getServicesHome,
      },
    })
      .then((res) => {
        console.log("res", res);
        setHomeServicesCards(res?.services);
      })
      .catch();
  }, []);
  return (
    // <!--====== SERVICES PART START ======-->

    //     <section id="features" className="services-area pt-82 px-px-120">
    //       <div className="container">
    //         <div className="row justify-content-center">
    //           <div className="col-lg-10">
    //             <div className="section-title text-center pb-30">
    //               <div className="line m-auto"></div>
    //               <h3 className="title">
    //                 Our Services
    //               </h3>
    //               <h3>
    //                 <span className="text-lg font-semibold"><br/>Everything you need for happy, healthy eyes!</span>
    //               </h3>
    //             </div>
    //             {/* <!-- section title --> */}
    //           </div>
    //         </div>
    //         {/* <!-- row --> */}
    //         <div className="row justify-content-center">
    //         {/* <div className="flex items-stretch -mx-4"> */}
    //         <div className="col-lg-1.5 col-md-0 col-sm-0"></div>
    //           <div className="col-lg-3 col-md-7 col-sm-8 h-full">
    //             <div
    //               className="single-services text-center mt-30 wow fadeIn"
    //               data-wow-duration="1s"
    //               data-wow-delay="0.2s"
    //             >
    //               <div className="services-icon">
    //                 <img
    //                   className="shape"
    //                   src="assets/images/services-shape.svg"
    //                   alt="shape"
    //                 />
    //                 <img
    //                   className="shape-1"
    //                   src="/images/Rectangle 1-6.jpg"
    //                   alt="shape"
    //                   style={{height: '100%', width: '200%'}}
    //                 />
    //                 {/* <i className="lni-baloon"></i> */}
    //               </div>
    //               <div className="services-content mt-30">
    //                 <h4 className="services-title"><a href="/service-products" >Comprehensive Eye Exam</a></h4>
    //                 <p className="text text-base">
    //                 for Adults/Senior/Children
    //                 </p>
    //                 <a className="more" href="/service-products"
    //                   >Learn More <i className="lni-chevron-right"></i></a>
    //               </div>
    //             </div>
    //             {/* <!-- single services --> */}
    //           </div>
    //           <div className="col-lg-3 col-md-7 col-sm-8 h-full	">
    //             <div
    //               className="single-services text-center mt-30 wow fadeIn"
    //               data-wow-duration="1s"
    //               data-wow-delay="0.5s"
    //             >
    //               <div className="services-icon">
    //                 <img
    //                   className="shape"
    //                   src="assets/images/services-shape.svg"
    //                   alt="shape"
    //                 />
    //                 <img
    //                   className="shape-1"
    //                   src="/images/Rectangle 1-4.jpg"
    //                   alt="shape"
    //                   style={{height: '100%', width: '200%'}}
    //                 />
    //                 {/* <i className="lni-cog"></i> */}
    //               </div>
    //               <div className="services-content mt-30">
    //                 <h4 className="services-title"><a href="/service-products">Computer Vision Syndrome
    // </a></h4>
    //                 <p className="texttext-base">
    //                 Eye problems caused by prolonged computer use including: Eye irritation (Dry eyes, itchy eyes, red eyes) Blurred vision. Headaches.
    //                 </p>
    //                 <a className="more" href="/service-products">Learn More <i className="lni-chevron-right"></i></a>
    //               </div>
    //             </div>
    //             {/* <!-- single services --> */}
    //           </div>
    //           <div className="col-lg-3 col-md-7 col-sm-8 h-full	">
    //             <div
    //               className="single-services text-center mt-30 wow fadeIn"
    //               data-wow-duration="1s"
    //               data-wow-delay="0.8s"
    //             >
    //               <div className="services-icon">
    //                 <img
    //                   className="shape"
    //                   src="assets/images/services-shape.svg"
    //                   alt="shape"
    //                 />
    //                 <img
    //                   className="shape-1"
    //                   src="/images/Rectangle 1-5.jpg"
    //                   alt="shape"
    //                   style={{height: '100%', width: '200%'}}
    //                 />
    //                 {/* <i className="lni-bolt-alt"></i> */}
    //               </div>
    //               <div className="services-content mt-30">
    //                 <h4 className="services-title"><a href="/service-products">Lasik/PRK Surgery Consult</a></h4>
    //                 <p className="text text-base">
    //                 Pre-Op and Post-Op Care Cataract Surgery Management, Glaucoma Treatment, Macular Degeneration Care, Diabetic Eye Care.
    //                 </p>
    //                 <a className="more" href="/service-products">Learn More <i className="lni-chevron-right"></i></a>
    //               </div>
    //             </div>
    //             {/* <!-- single services --> */}
    //           </div>
    //           <div className="col-lg-1.5 col-md-0 col-sm-0"></div>

    //         </div>
    //         {/* <!-- row --> */}
    //         {/* Explore more about our services */}

    //       </div>
    //       <div className="flex justify-center pt-12">
    //           <Link href="/service-products">
    //                 <u className="explore-services-container uppercase rounded-full white text-lg font-semibold px-4 py-3">
    //                 Explore more of our services{" "}
    //                 </u>
    //               </Link>
    //         </div>
    //       {/* <!-- container --> */}
    //     </section>
    <>
      {/* <!--====== ABOUT PART START ======--> */}
      <div className="container md:pt-6">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title text-center pb-30">
              <div className="line m-auto"></div>
              <h3 className="title text-xl">Our Services</h3>
              <h4>
                <span className="text-xl font-semibold">
                  <br />
                  Everything you need for happy, healthy eyes!
                </span>
              </h4>
            </div>
            {/* <!-- section title --> */}
          </div>
        </div>
        {homeServicesCards.length ? (
          <div className="grid gap-2 md:mt-10 grid-cols-1 md:grid-cols-3 u-clearfix u-sheet mx-auto u-valign-middle u-sheet-1">
            {homeServicesCards.map(
              ({ image, description, head, conditions }) => (
                <div
                  key={image}
                  className="p-2 shadow-lg card flex flex-col border border-gray-300 mx-2"
                >
                  <div className="card-content flex-grow">
                    <div>
                      <Image
                        // layout="fill"
                        // objectFit="cover"
                        className="rounded-lg"
                        src={image}
                        alt=""
                        srcSet=""
                        height="250"
                        width="355"
                      />
                    </div>
                    <h1 className="text-blue-900 mt-3 text-center font-semibold">
                      {head}
                    </h1>
                    <div className="px-2 py-4">
                      {seeMore[image] || description.slice(0, 250)}
                      {description.length > 250 && (
                        <span
                          onClick={() => {
                            setSeeMore((prev) => ({
                              ...prev,
                              [image]: prev[image] ? "" : description,
                            }));
                          }}
                          className="pl-2 text-blue-900 hover:underline cursor-pointer"
                        >
                          see {seeMore[image] ? "less" : "more"}...
                        </span>
                      )}
                    </div>
                  </div>
                  {/* <div className="flex justify-center">
            <div className="flex-end justify-center navbar-btn d-none d-sm-inline-block"> */}
                  <div className="card-button">
                    <div className="flex align-items-center justify-center">
                      <a
                        className="main-btn-products"
                        data-scroll-nav="0"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfOr3fsy1F9RpZw9Gh8VyyUDAgm3Wg6HeskeIZRyiZvelRNNg/viewform?usp=sf_link"
                        target="_blank"
                      >
                        Book your appointment{" "}
                      </a>
                      {/* <div className="long-arrow-right"></div> */}
                    </div>
                    {/* </div>
              </div> */}
                    {conditions && (
                      <div className="px-6">
                        <p className="text-xs">{conditions} </p>
                      </div>
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        ) : (
          <Loading />
        )}
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
                    <h3 className="title">Comprehensive Eye Exam</h3>
                    <h3 className="text-lg">
                      <span>
                        <br />
                        for Adults/Senior/Children.
                      </span>
                    </h3>
                  </div>
                  {/* <!-- section title --> */}
        {/* <p className="text text-lg">
                  for Adults/Senior/Children.
                  </p> */}

        {/* <a href="/service-products" className="main-btn text-lg">
                    Learn more
                  </a> */}
        {/* </div> */}
        {/* <!-- about content --> */}
        {/* </div>
              <div className="col-lg-6">
                <div
                  className="about-image text-center mt-50 wow fadeInRightBig"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <img
                    src="/images/5411448.jpg"
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
            <img src="/images/5917616.jpg" alt="shape" />
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
                    <h3 className="title">Computer Vision Syndrome</h3>
                    <h3 className="text-lg">
                      <span>
                        <br />
                        Eye problems caused by prolonged computer use including: Eye irritation (Dry eyes, itchy eyes, red eyes) Blurred vision. Headaches.{" "}
                      </span>
                    </h3>
                  </div>
                  {/* <!-- section title --> */}
        {/* <a href="/service-products" className="main-btn">
                    Learn more
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
                    src="assets/images/services-shape.svg"
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
                    <h3 className="title">Contact Lens Fitting</h3>
                    <h3 className="text-lg">
                      <span>
                        <br />
                        Whether you are a first time wearer, or a
    seasoned Contact Lens veteran, we can help you get the most out of your contact lenses
    by providing you with options
    from all of the top brands. We can educate,
    fit and recommend the contacts that best suit
    your lifestyle needs. 
    Ask about how to get free trial contacts!
                      </span>
                    </h3>
                  </div>
                  {/* <!-- section title --> */}
        {/* <p className="text text-lg">
                  We have the relief you need with our Optometrist recommended selection of dry eye products.
                  <br/> Relieve dry, irritated eyes with our selection of high quality eye-drops, lid and eyelash care products, and therapeutic masks.
                  <br/>Perfect for the net addicts, cyberphiles and contact lens wearers out there!
                  </p> */}
        {/* <a href="/service-products" className="main-btn">
                    Learn more
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
                    src="/images/PVEC_ContactLenses.jpeg"
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
        <div className="flex justify-center pt-12">
          {/* <Link href="/service-products">
            <u className="explore-services-container uppercase rounded-full white text-lg font-semibold px-4 py-3">
              Explore our range of products{" "}
            </u>
          </Link> */}
          <Link href="/service-products">
            <u className="explore-services-container uppercase rounded-full white md:text-lg font-semibold px-4 py-3">
              Explore more of our services{" "}
            </u>
          </Link>
        </div>
      </div>
      {/* <!--====== ABOUT PART ENDS ======--> */}

      {/* <!--====== ABOUT PART ENDS ======--> */}
    </>
  );
}

{
  /* <div className="container mx-auto p-6">
  <div className="flex items-stretch -mx-4">
    <div className="flex-1 p-4">
      <div className="block bg-white overflow-hidden border-2 h-full">
        <div className="p-4">
          <h2 className="mt-2 mb-2 font-bold text-2xl font-Headingg">
            Card Name
          </h2>
          <div className="mb-4 flex flex-wrap">
            <span className="mr-2">Link 1</span>
            <span>Link 2</span>
          </div>

          <p className="text-md text-justify">Some Description</p>
        </div>
        <div className="p-4 flex flex-wrap items-center">
          <p className="px-1 py-2 tracking-wide text-xs mr-2 mb-2">Tag #1</p>
          <p className="px-1 py-2 tracking-wide text-xs mr-2 mb-2">Tag #2</p>
        </div>
      </div>
    </div>
    
    <div className="flex-1 p-4">
      <div className="block bg-white overflow-hidden border-2 h-full">
        <div className="p-4">
          <h2 className="mt-2 mb-2 font-bold text-2xl font-Headingg">
            Card Name
          </h2>
          <div className="mb-4 flex flex-wrap">
            <span className="mr-2">Link 1</span>
            <span>Link 2</span>
          </div>

          <p className="text-md text-justify">Some Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel enim lectus.</p>
        </div>
        <div className="p-4 flex flex-wrap items-center">
          <p className="px-1 py-2 tracking-wide text-xs mr-2 mb-2">Tag #1</p>
          <p className="px-1 py-2 tracking-wide text-xs mr-2 mb-2">Tag #2</p>
        </div>
      </div>
    </div>
  </div>
</div> */
}
