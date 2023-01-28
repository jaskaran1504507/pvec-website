import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import Banner from "../../components/Banner";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { dummmy } from "../../constant";

export default function Promotions() {
  return (
    <main>
      <Carousel autoPlay swipeable infiniteLoop>
        <div className="pb-2 md:py-0">
          <Banner
            banner="banner-permotion-img"
            textColor="black"
            text="40% off sale now on! Grab a bargain before it's gone."
          >
            <Link href="/bookings#appointment">
              <a
                href="#"
                className="bg-blue-400 rounded-full border py-3  px-8 text-white font-semibold  u-btn u-btn-round u-button-style u-radius-50 u-btn-1"
              >
                SHOP NOW
              </a>
            </Link>
          </Banner>
        </div>
        <div className="pb-2 md:py-0">
          <Banner
            banner="banner-permotion-img-1"
            text="Get 40% off on all contact lens! Limited time offer. Order now!"
            textColor="black"
          >
            <Link href="/bookings#appointment">
              <a
                href="#"
                className="bg-blue-400 rounded-full border py-3  px-8 text-white font-semibold  u-btn u-btn-round u-button-style u-radius-50 u-btn-1"
              >
                SHOP NOW
              </a>
            </Link>
          </Banner>
        </div>
        <div className="pb-2 md:py-0">
          <Banner
            banner="banner-permotion-img-2"
            text="Save big on Eye drops! 40% off sale ends soon!"
            textColor="white"
          >
            <Link href="/bookings#appointment">
              <a
                href="#"
                className="bg-blue-400 rounded-full border py-3  px-8 text-white font-semibold  u-btn u-btn-round u-button-style u-radius-50 u-btn-1"
              >
                SHOP NOW
              </a>
            </Link>
          </Banner>
        </div>
      </Carousel>
      {/* <div className="grid gap-16  mt-20 grid-cols-1 md:grid-cols-1 u-clearfix u-sheet mx-auto u-valign-middle u-sheet-1">
        {dummmy.map((n, i) => (
          <div className="w-full grid grid-cols-2 gap-2">
            {i % 2 === 1 && (
              <div className="px-6 ">
                <Image
                  height="450px"
                  width="500px"
                  src={n.img}
                  alt=""
                  srcSet=""
                />
              </div>
            )}

            <div className="">
              <h2
                style={{
                  textAlign: "left",
                  // fontSize: "2.25rem",
                  lineHeight: 1.1,
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{ lineHeight: 2 }}
                  className="text-blue-900 text-center md:text-left text-4xl font-semibold"
                >
                  {n.heading}
                </span>
              </h2>

              <br />
              <p className="text-blue-900">{n.tageLine}</p>
            </div>
            {i % 2 === 0 && (
              <div className="px-6 ">
                <Image
                  src="/images/Rectangle 2.png"
                  alt=""
                  height="450px"
                  width="500px"
                  srcSet=""
                />
              </div>
            )}
          </div>
        ))}
      </div> */}
    </main>
  );
}
//
