import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import Banner from "../../components/Banner";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Promotions() {
  return (
    // <section className="about-area pt-70">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-lg-6">
    //         <div
    //           className="about-content mt-50 wow fadeInLeftBig"
    //           data-wow-duration="1s"
    //           data-wow-delay="0.5s"
    //         >
    //           <div className="section-title">
    //             <h3 className="title">Eye Drops</h3>

    //           </div>
    //         </div>
    //         {/* <!-- about content --> */}
    //       </div>
    //       <div className="col-lg-6">
    //         <div
    //           className="about-image text-center mt-50 wow fadeInRightBig"
    //           data-wow-duration="1s"
    //           data-wow-delay="0.5s"
    //         >
    //           <img
    //             src="images/eyedrops.jpg"
    //             alt="about"
    //             style={{ maxHeight: "80%", maxWidth: "80%" }}
    //           />
    //         </div>
    //         {/* <!-- about image --> */}
    //       </div>
    //     </div>
    //     {/* <!-- row --> */}
    //   </div>
    //   {/* <!-- container --> */}
    //   <div className="about-shape-1">
    //     <img src="assets/images/about-shape-1.svg" alt="shape" />
    //   </div>
    // </section>

    <>
      <div className="mt-28">
        <Carousel autoPlay swipeable infiniteLoop>
          {[
            {
              link: "https://www.reviewob.com/wp-content/uploads/2017/10/10-25-17glasses.jpg",
            },
            {
              link: "https://www.essilorindia.com/sites/default/files/2023-05/304-23%20CHO%20-%20Web%20Banners%20-%20Man%20-%201280%20x%20420%20px%20-%20general_1.jpg",
            },
            {
              link: "https://www.everydayonsales.com/wp-content/uploads/2022/07/MOG-Eyewear-Buy-1-Free-1-Promotion-350x350.jpg",
            },
          ].map((m) => (
            <div
              className="pb-2 md:py-0 "
              key={m.link}
              style={{
                position: "relative",
                width: "100%",
                overflow: "hidden",
                background: "#F6F8F3",
              }}
            >
              <div
                style={{
                  backgroundImage: `url(${m.link})`,
                  backgroundColor: "#cccccc",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className=" u-active text-center u-section-1-1 banner-img  u-carousel-item  justify-center flex u-clearfix u-image u-shading "
              >
                <div className="u-clearfix u-sheet flex items-center u-sheet-1 top-section md:mt-0 md:py-0 py-4">
                  <div style={{ marginTop: "15em" }}>
                    <h2
                      style={{
                        color: "white",
                        fontSize: "5em",
                        textAlign: "start",
                      }}
                    >
                      This is heading
                    </h2>
                    <p style={{ color: "white" }}>
                      Disclaimer: The offer is not available for everywhere.
                      please check with local shop does offer apply to you. The
                      offer is not available for everywhere. please check with
                      local shop does offer apply to you. The offer is not
                      available for everywhere. please check with local shop
                      does offer apply to you. The offer is not available for
                      everywhere. please check with local shop does offer apply
                      to you
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="flex align-items-center justify-content-between mt-20 mx-10">
        <div
          className="about-content mt-50 wow fadeInLeftBig"
          data-wow-duration="1s"
          data-wow-delay="0.5s"
        >
          <div className="section-title-promotions">
            <h3 className="title-promotions">
              Ahh, ha! We don't have any active promotions yet, please check
              back in sometime{" "}
            </h3>
          </div>
        </div>
        <img
          src="images/no-promotions-2.jpg"
          alt="Snow"
          style={{ width: "70%", maxHeight: "540px" }}
        />
      </div>
    </>
  );
}
