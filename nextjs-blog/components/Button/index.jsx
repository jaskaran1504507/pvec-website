import React from "react";

export default function Button({ children, className }) {
  return (
    <button
      className={`${className} font-semibold rounded-full border py-3  px-8  font-semibold  u-btn u-btn-round u-button-style u-radius-50 u-btn-1`}
    >
      {children}
    </button>
  );
}