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
          href="#appointment"
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
            href="#appointment"
            className="text-blue-800 font-semibold rounded-full border py-3  px-8 bg-white font-semibold  u-btn u-btn-round u-button-style u-radius-50 u-btn-1"
          >
            BOOK My APPOINTMENT
          </a>
        </Banner>
      </div>
      <div
        id="appointment"
        className="u-clearfix u-sheet mx-auto u-valign-middle u-sheet-1 md:px-40"
      >
        <div className="flex items-center justify-center py-12 md:p-12">
          <div className="mx-auto w-full max-w-[550px] bg-white">
            <form
              onSubmit={(ev) => {
                ev.preventDefault();
                alert("Appointment submitted");
              }}
              method="POST"
            >
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Full Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#0C4A6E] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="phone"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Phone Number
                </label>
                <input
                  required
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#0C4A6E] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#0C4A6E] focus:shadow-md"
                />
              </div>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="date"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#0C4A6E] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="time"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Available slots
                    </label>
                    {/* <input
                      type="time"
                      name="time"
                      id="time"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#0C4A6E] focus:shadow-md"
                    /> */}
                    <select
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#0C4A6E] focus:shadow-md"
                      name="slot"
                      id=""
                    >
                      <option value="">01:00pm-02:00pm</option>
                      <option value="">02:00pm-03:00pm</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <button className="hover:shadow-form w-full rounded-md bg-sky-900 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Book Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
