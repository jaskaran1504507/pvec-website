import React from "react";

export default function Banner({
  banner,
  text,
  children,
  textColor = "#454545",
  description,
  subText
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
        data-image-height="641"
      >
        <div className="u-clearfix u-sheet flex items-center u-sheet-1 top-section md:mt-0 md:py-0 py-4">
          <div className=" mt-6 md:mt-0 md:w-1/2 md:text-left">
            {" "}
            {text && (
              <h1
                style={{ lineHeight: "1.25" }}
                className="font-serif u-text text-white text-left text-3xl md:text-5xl mb-12 md:text-5xl font-bold"
              >
                <span style={{ color: textColor }}> {text}</span>
              </h1>
            )}
            {
              subText && (
                <h2 style={{ color: textColor, lineHeight: "1" }} className="font-serif u-text text-white text-left text-xl md:text-2xl mb-12 md:text-2xl font-bold "> {subText}</h2>
              )
            }
            {
              description && (
                <h3 style={{ color: textColor }}> {description}</h3>
              )
            }
            {children}
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
