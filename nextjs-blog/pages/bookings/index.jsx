import React from "react";
import Banner from "../../components/Banner";

export default function Bookings() {
  return (
    <main>
      <Banner
        banner="banner-bookings-img"
        text={
          <p className="text-black md:text-white">
            Get a full check up
            <br />
            with one of our Optometrists; we're available evenings
            <br />
            and weekends too!
          </p>
        }
      >
        <a
          href="#"
          className="text-blue-800 font-semibold rounded-full border py-3  px-8 bg-white font-semibold  u-btn u-btn-round u-button-style u-radius-50 u-btn-1"
        >
          BOOK My APPOINTMENT
        </a>
      </Banner>

      <div className="mt-40">
        <Banner
          banner="banner-bookings-img-1"
          text={
            <p className="text-black md:text-white">
              Get a full check up
              <br />
              with one of our Optometrists; we're available evenings
              <br />
              and weekends too!
            </p>
          }
        >
          <a
            href="#"
            className="text-blue-800 font-semibold rounded-full border py-3  px-8 bg-white font-semibold  u-btn u-btn-round u-button-style u-radius-50 u-btn-1"
          >
            BOOK My APPOINTMENT
          </a>
        </Banner>
      </div>
    </main>
  );
}
