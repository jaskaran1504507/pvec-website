import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import Banner from "../../components/Banner";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Promotions() {
  return (
    <>
      <div className="mt-28">
        {/* <Carousel autoPlay swipeable infiniteLoop> */}
        {[
          {
            link: "https://www.reviewob.com/wp-content/uploads/2017/10/10-25-17glasses.jpg",
            title: "Clearance Sale",
            description:
              "Select eyewear from 50-90% off with fully coated lenses purchase",
          },
          {
            link: "https://images.squarespace-cdn.com/content/v1/5d30ea61f16b850001147f58/1585435822475-I6FQWPFD24ED97BXJK4T/iStock-1131639271.jpg?format=1000w",
            title: "Every Day Value Offer",
            description: (
              <>
                Buy 1 Complete Pair (frame+lenses), Get 2nd pair 30% off frame
                and lenses! <br />
                Buy 1 Pair of Non-Prescription Sunglasses, get 2nd pair 20% Off!
              </>
            ),
          },
          {
            link: "https://da4e1j5r7gw87.cloudfront.net/wp-content/uploads/sites/2520/2018/06/Hero-3-1280x480.jpeg",
            title: "Summertime Sun Sale Limited Time Offer",
            description:
              "Select Polarized Sunglasses: Regular price $200 on for $99",
          },
          {
            link: "https://www.ipshealth.co.za/wp-content/uploads/2020/11/eyehealth.jpg",
            title:
              "Have Extended Insurance? Ask us how to get glasses or sunglasses for little to no expense out of your pocket!",
          },
        ].map((m) => (
          <Link
            href={m.link}
            key={m.link}
            style={{
              position: "relative",
              width: "100%",
              overflow: "hidden",
              background: "#F6F8F3",
            }}
          >
            <div className="pb-2 md:py-0 mt-10" key={m.link}>
              <div
                style={{
                  backgroundImage: `url(${m.link})`,
                  backgroundColor: "#cccccc",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  maxHeight: "540px",
                }}
                className=" u-active text-center u-section-1-1 banner-img  u-carousel-item  justify-center flex u-clearfix u-image u-shading "
              >
                <div className="u-clearfix u-sheet flex items-center u-sheet-1 top-section md:mt-0 md:py-0 py-4">
                  <div className="backdrop-blur" style={{ marginTop: "15em" }}>
                    <h2
                      style={{
                        color: "white",
                        fontSize: "4em",
                        textAlign: "start",
                        color: "#1D3D74",
                      }}
                    >
                      {m.title}
                    </h2>
                    {m.description && (
                      <p
                        style={{
                          color: "#2968ce",
                          alignItems: "flex-start",
                          fontSize: "23px",
                        }}
                      >
                        {m.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
        {/* </Carousel> */}
      </div>
      {/* <div className="flex align-items-center justify-content-between mt-20 mx-10">
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
      </div> */}
    </>
  );
}
