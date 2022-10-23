import React from "react";

export default function Footer() {
  return (
    <footer className="bg-sky-900 mx-auto flex justify-center py-20 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center	">
        <div>
          <p className="text-white font-semibold text-base">
            {" "}
            1234 NW Bobcat Lane,
          </p>
          <p className="text-white font-semibold text-base">
            {" "}
            Robert Robertson,
          </p>
          <p className="text-white font-semibold text-base">
            St. Robert, MO 65584-5678.
          </p>
          <br />
          <p className="text-white font-semibold text-base">
            {" "}
            1234 NW Bobcat Lane,
          </p>
          <p className="text-white font-semibold text-base">
            {" "}
            Robert Robertson,
          </p>
          <p className="text-white font-semibold text-base">
            St. Robert, MO 65584-5678.
          </p>
        </div>
        <div style={{ height: "200px", width: "348px" }}>
          <img
            src="https://i.stack.imgur.com/xYkPu.png"
            alt=""
            className="rounded-lg"
          />
        </div>
      </div>
    </footer>
  );
}
