import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import Banner from "../../components/Banner";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

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
              {/* <a
                href="#"
                className="bg-blue-400 rounded-full border py-3  px-8 text-white font-semibold  u-btn u-btn-round u-button-style u-radius-50 u-btn-1"
              >
                SHOP NOW
              </a> */}
               SHOP NOW
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
              {/* <a
                href="#"
                className="bg-blue-400 rounded-full border py-3  px-8 text-white font-semibold  u-btn u-btn-round u-button-style u-radius-50 u-btn-1"
              >
                SHOP NOW
              </a> */}
              SHOP NOW
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
              {/* <a
                href="#"
                className="bg-blue-400 rounded-full border py-3  px-8 text-white font-semibold  u-btn u-btn-round u-button-style u-radius-50 u-btn-1"
              >
                SHOP NOW
              </a> */}
              SHOP NOW
            </Link>
          </Banner>
        </div>
      </Carousel>
    </main>
  );
}

