import React from "react";

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
        data-image-height="641"
      >
        <div className="u-clearfix u-sheet flex items-center u-sheet-1 top-section md:mt-0 md:py-0 py-4">
          <div className="mt-4 md:mt-0 md:text-left">
            {" "}
            {text && (
              <h1
                style={{ lineHeight: "1.25" }}
                className="font-serif u-text text-white text-left text-2xl md:text-5xl md:mb-12 mb-2  md:text-5xl font-bold"
              >
                <span style={{ color: textColor }}> {text}</span>
              </h1>
            )}
            {subText && (
              <h2
                style={{ color: textColor, lineHeight: "1" }}
                className="font-serif u-text text-white text-left text-xl md:text-2xl md:mb-12 mb-2  md:text-2xl font-bold "
              >
                {" "}
                {subText}
              </h2>
            )}
            {subText2 && (
              <h2
                style={{ color: textColor, lineHeight: "1" }}
                className="font-serif u-text text-white text-left text-xl md:text-2xl md:mb-12 mb-2  md:text-2xl font-bold "
              >
                {" "}
                {subText2}
              </h2>
            )}
            {subText3 && (
              <h2
                style={{ color: textColor, lineHeight: "1" }}
                className="font-serif u-text text-white text-left text-xl md:text-2xl md:mb-12 mb-2  md:text-2xl font-bold "
              >
                {subText3}
              </h2>
            )}
            {description && (
              <h3 style={{ color: textColor }}> {description}</h3>
            )}
            {children}
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
