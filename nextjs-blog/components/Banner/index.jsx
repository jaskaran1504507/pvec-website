import React from "react";
const parse = require('html-react-parser');

export default function Banner({
  banner,
  text,
  children,
  textColor = "#454545",
  description,
  subText,
  subText2,
  subText3,
}) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        background: "#F6F8F3",
      }}
    >
      <div
        className={`${banner} u-active text-center u-section-1-1 banner-img  u-carousel-item  justify-center flex u-clearfix u-image u-shading `}
        src=""
        data-image-width="1248"
        data-image-height="600"
        style={
          banner && banner.includes(".")
            ? { backgroundImage: `url(${banner})` }
            : {}
        }
      >
        <div className="u-clearfix u-sheet flex items-center h-full w-full justify-between u-sheet-1 top-section flex-col md:mt-0 md:py-0 py-4 md:block hidden">
          {/* <div className="mt-10 md:mt-0 md:text-left">
            {" "}
            {text && (
              <h1
                style={{ lineHeight: "1.25" }}
                className="font-serif u-text text-white text-left text-2xl md:text-5xl md:mb-12 mb-2  md:text-5xl font-bold"
              >
                <span
                  style={{ color: textColor }}
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              </h1>
            )}
            {subText && (
              <h2
                style={{ color: textColor, lineHeight: "1" }}
                className="font-serif u-text text-white text-left text-xl md:text-2xl md:mb-12 mb-2  md:text-2xl font-bold "
                // dangerouslySetInnerHTML={{ __html: subText }}
                >{parse(subText)}</h2>
            )}
            {subText2 && (
              <h2
                style={{ color: textColor, lineHeight: "1" }}
                className="font-serif u-text text-white text-left text-xl md:text-2xl md:mb-12 mb-2  md:text-2xl font-bold "
                // dangerouslySetInnerHTML={{ __html: subText2 }}
              >{parse(subText2)}</h2>
            )}
            {subText3 && (
              <h2
                style={{ color: textColor, lineHeight: "1" }}
                className="font-serif u-text text-white text-left text-xl md:text-2xl md:mb-12 mb-2  md:text-2xl font-bold "
                // dangerouslySetInnerHTML={{ __html: subText3 }}
                >{parse(subText3)}</h2>
            )}
            {description && (
              <h3
                style={{ color: textColor }}
                // dangerouslySetInnerHTML={{ __html: description }}
                >{parse(description)}</h3>
            )}
            {children}
          </div> */}
          <div className="h-1/2 w-full flex justify-between">
            <div> <img
              src="https://pvec-bucket.s3.ca-central-1.amazonaws.com/eyecare-logo.png"
              style={{
                maxWidth: "11rem",
                height: "4.5rem",
                marginLeft: "24px",
                marginTop: "24px",
                zIndex: 2000,
              }}
              alt="Logo"
            /></div>
            <div className="flex flex-col justify-center mr-12"> <h1 className="text-lg"> <a
              className="pl-1 inline-flex center"
              href="https://goo.gl/maps/rh7x6UiVqRNjZTBa7"
              target="_blank"
            >
              &nbsp; &nbsp; 1242 Burrard Street, Vancouver BC
            </a></h1>
              <h1 className="text-3xl"> <a
                className="pl-1 inline-flex center"
                href="tel:+16046899962"
                target="_blank"
              >
                &nbsp; &nbsp;+1 604 689 9962
              </a></h1></div>
          </div>
          <div className="h-1/2 w-full mt-96">
            <div className="flex justify-center">
              <div className="d-none bg-blue-300 d-sm-inline-block text-3xl place-content-center h-12 border-2 border-black" >
                <a
                  className=""
                  data-scroll-nav="0"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeciQeXbMzKdezp0kkCx1Itxm1SCnUL5bv1C7rT1m1aBp1vsg/viewform?usp=sf_link"
                  target="_blank"
                >
                  <span className="px-2">Order Contacts</span>
                </a>
              </div>
              <div className="ml-8 bg-blue-300 d-none d-sm-inline-block ml-2 text-3xl place-content-center h-12 border-2 border-black">
                <a
                  className=""
                  data-scroll-nav="0"
                  href="/bookings#appointment"
                >
                  <span className="px-2">Book Appointment</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="u-clearfix u-sheet flex justify-end h-full w-full mt-28 u-sheet-1 top-section flex-col md:mt-0 md:py-0 py-4 sm:block md:hidden lg:hidden xl:hidden 2xl:hidden ">
          <div className="w-full flex flex-col justify-center place-content-center ">
            <div className="bg-blue-300 text-3xl place-content-center h-12 border-2 border-black" >
              <a
                className=""
                data-scroll-nav="0"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeciQeXbMzKdezp0kkCx1Itxm1SCnUL5bv1C7rT1m1aBp1vsg/viewform?usp=sf_link"
                target="_blank"
              >
                <span className="px-2">Order Contacts</span>
              </a>
            </div>
            <div className="ml-8 bg-blue-300 text-3xl mt-2 place-content-center h-12 border-2 border-black mx-2">
              <a
                className=""
                data-scroll-nav="0"
                href="/bookings#appointment"
              >
                <span className="px-2">Book Appointment</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
