import React from "react";

export default function Banner({ banner, text, children }) {
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
        data-image-height="641"
      >
        <div className="u-clearfix u-sheet flex items-center u-sheet-1 top-section md:mt-0 md:py-0 py-4">
          <div className="mt-48 md:mt-0 md:w-1/2 md:text-left">
            {" "}
            {text && (
              <h1
                style={{ color: "#454545", lineHeight: "1.25" }}
                className="u-text text-white text-left text-2xl md:text-5xl mb-12 md:text-5xl font-semibold "
              >
                {text}
              </h1>
            )}
            {children}
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
