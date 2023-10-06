import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  HomeFilled,
  HomeOutlined,
  MailOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import { brandsArr, contactsBrandsArr, cards } from "../../constant";

export default function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const handleNavClick = () => {
    setIsNavVisible((prev) => !prev);
  };
  const location = useRouter();
  return (
    <>
      <div className="flex h-screen ">
        {/* Sidebar */}
        <div className="text-white w-56 flex flex-col items-center py-2">
          {/* Logo */}
          <div className="mb-4 mt-8">
            <img src="https://pvec-bucket.s3.ca-central-1.amazonaws.com/eyecare-logo.png" alt="Logo" className="w-44 h-18" />
          </div>

          {/* Navigation Options */}
          <ul className="text-lg">
            {/* <li className="mb-4">
              <a href="/" className="text-black hover:text-gray-300">Home</a>
            </li> */}

            <li className="mb-4 active ">
              <div className="relative group">
                <div className="absolute"></div>

                <a
                  className={classNames(
                    "page-scroll rounded-lg",
                    location?.route == "/" ? "bg-black" : "bg-white"
                  )}
                  href="/"
                >
                  <span className="flex items-center ">
                    {" "}
                    <span
                      className={classNames(
                        "px-1 font-bold text-black",
                        location?.route == "/"
                          ? "text-white"
                          : "text-black"
                      )}
                    >
                      Home
                    </span>
                  </span>
                </a>
              </div>
            </li>

            <li className="mb-4">
              <div className="glasses-option relative group">
                <div className="absolute "></div>
                <a
                  className={classNames(
                    " page-scroll font-bold rounded-lg hover:text-gray-300",
                    location?.route == "/glasses-contacts" &&
                      location?.query?.query == "glasses"
                      ? "bg-black"
                      : "bg-white"
                  )}
                  href="/glasses-contacts?query=glasses"
                >
                  <span
                    className={classNames(
                      "px-1 font-bold text-black hover:text-gray-300",
                      location?.route == "/glasses-contacts" &&
                        location?.query?.query == "glasses"
                        ? "text-white"
                        : "text-black"
                    )}
                  >
                    Sun/Glasses
                  </span>
                </a>
                <div className="dropdown-content-glasses top-6 left-20">
                  {brandsArr.map((brand) => (
                    <a href={brand.addr} target="_blank">
                      <div className="flex">
                        <img
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
              <div className="contacts-option relative group">
                <div className="absolute "></div>
                <a
                  className={classNames(
                    "page-scroll font-bold rounded-lg hover:text-gray-300",
                    location?.route == "/glasses-contacts" &&
                      location?.query?.query == "contacts"
                      ? "bg-black"
                      : "bg-white"
                  )}
                  href="/glasses-contacts?query=contacts"
                >
                  <span
                    className={classNames(
                      "px-1 font-bold text-black",
                      location?.route == "/glasses-contacts" &&
                        location?.query?.query == "contacts"
                        ? "text-white"
                        : "text-black"
                    )}
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
              <div className="services-option relative group">
                <div className="absolute"></div>

                <a
                  className={classNames(
                    "page-scroll font-bold rounded-lg hover:text-gray-300",
                    location?.route == "/services"
                      ? "bg-black"
                      : "bg-white"
                  )}
                  href="/services"
                >
                  <span
                    className={classNames(
                      "px-1 font-bold",
                      location?.route == "/services"
                        ? "text-white"
                        : "text-black"
                    )}
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
              <div className="relative group">
                <div className="absolute"></div>

                <a
                  className={classNames(
                    "page-scroll font-bold rounded-lg hover:text-gray-300",
                    location?.route == "/products" &&
                      location?.query?.query == "eye-medic"
                      ? "bg-black"
                      : "bg-white"
                  )}
                  href="/products?query=eye-medic"
                >
                  <span
                    className={classNames(
                      "px-1 font-bold text-black",
                      location?.route == "/products" &&
                        location?.query?.query == "eye-medic"
                        ? "text-white"
                        : "text-black"
                    )}
                  >
                    EyeCare
                  </span>
                </a>
              </div>
            </li>
            <li className="mb-4">
              <div className="relative group">
                <div className="absolute"></div>
                <a
                  className={classNames(
                    "page-scroll font-bold rounded-lg hover:text-gray-300",
                    location?.route == "/promotions"
                      ? "bg-black"
                      : "bg-white"
                  )}
                  href="/promotions"
                >
                  <span
                    className={classNames(
                      "px-1 font-bold",
                      location?.route == "/promotions"
                        ? "text-white"
                        : "text-black"
                    )}
                  >
                    Promotions
                  </span>
                </a>
              </div>
            </li>
            <li className="mb-4">
              <div className="faq-option relative group">
                <div className="absolute"></div>
                <a
                  className={classNames(
                    "page-scroll font-bold rounded-lg hover:text-gray-300",
                    location?.route == "/faq"
                      ? "bg-black"
                      : "bg-white"
                  )}
                  href="/faq"
                >
                  <span
                    className={classNames(
                      "px-1 font-bold",
                      location?.route == "/faq"
                        ? "text-white"
                        : "text-black"
                    )}
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
                        What age should I get my child’s eye exams
                        done?
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
              <div className="relative group">
                <div className="absolute"></div>
                <a
                  className={classNames(
                    "page-scroll font-bold rounded-lg hover:text-gray-300",
                    location?.route == "/about-us"
                      ? "bg-black"
                      : "bg-white"
                  )}
                  href="/about-us"
                >
                  <span
                    className={classNames(
                      "px-1 font-bold",
                      location?.route == "/about-us"
                        ? "text-white"
                        : "text-black"
                    )}
                  >
                    About
                  </span>
                </a>
              </div>
            </li>
          </ul>
          <div className="mb-3">
            <a
              className="main-btn"
              data-scroll-nav="0"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeciQeXbMzKdezp0kkCx1Itxm1SCnUL5bv1C7rT1m1aBp1vsg/viewform?usp=sf_link"
              target="_blank"
            >
              {" "}
              <span className="px-2 font-bold">Order Contacts</span>
            </a>
          </div>
          <div className="mb-3">
            <a
              className="main-btn"
              data-scroll-nav="0"
              // href="https://docs.google.com/forms/d/e/1FAIpQLSfOr3fsy1F9RpZw9Gh8VyyUDAgm3Wg6HeskeIZRyiZvelRNNg/viewform?usp=sf_link"
              // target="_blank"
              href="/bookings#appointment"
            >
              {" "}
              <span className="px-2 font-bold">Book Appointment</span>
            </a>
          </div>
          <div className="mb-3">
            <a
              className="main-btn"
              data-scroll-nav="0"
              href="https://docs.google.com/forms/d/e/1FAIpQLSex8fCDLOm41BPwOB235NRWKaZVdXk-tRiNbObpbV9vuUxV0Q/viewform?usp=sf_link"
              target="_blank"
            >
              {" "}
              <span className="px-2 font-bold">Check Benefits</span>
            </a>
          </div>
          <ul className="social text-black flex flex-row space-x-4">
            <li >
              <a href="https://www.facebook.com/PerformanceVisionEyeCare/" target="_blank">
                <i className="lni-facebook-filled"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/performancevisioneyecare/?hl=en">
                <i className="lni-instagram-filled"></i>
              </a>
            </li>
          </ul>
        </div>


        {/* Main Content */}
        <div className="flex-1 border-r-2 flex flex-col overflow-x-hidden overflow-y-auto p-2">
          {/* Content Goes Here */}
        </div>
      </div>

    </>
  );
}

function classNames(...args) {
  return args.filter(Boolean).join(" ");
}
