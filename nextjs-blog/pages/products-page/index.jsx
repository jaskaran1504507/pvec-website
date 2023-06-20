import Image from "next/image";
import React, { useState } from "react";
import { cards, productCatalogue, brandsArr } from "../../constant";

const imgArr = [
  "/images/PVEC_idrop.jpeg",
  "/images/PVEC_omega3.jpeg",
  // "/images/PVEC_teatree.jpeg",
  // "/images/PVEC_eyemask.jpeg",
  // "/images/PVEC_lidlash.jpeg",
];
const imgArr1 = [
  // "/images/PVEC_idrop.jpeg",
  // "/images/PVEC_omega3.jpeg",
  // "/images/PVEC_teatree.jpeg",
  "/images/PVEC_eyemask.jpeg",
  "/images/PVEC_lidlash.jpeg",
];

export default function ServiceProducts() {
  const [seeMore, setSeeMore] = useState({});

  return (
    <main>
      <div className="grid gap-16 mt-20 grid-cols-1 md:grid-cols-2 u-clearfix u-sheet mx-auto u-valign-middle u-sheet-1">
      </div>
      <div className="mt-12 u-clearfix u-sheet mx-auto u-valign-middle u-sheet-1">
        <div className="">
          <h2
            style={{
              textAlign: "left",
              fontWeight: 400,
              fontSize: "2.25rem",
              lineHeight: 1.1,
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <span
              style={{ lineHeight: 2 }}
              className="text-blue-900 font-semibold"
            >
              Products
            </span>
          </h2>

          <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            {productCatalogue.map(({ img, text, head, link }) => (
              <div key={img} className="p-2 shadow-lg ">
                <div>
                  <Image
                    // layout="fill"
                    // objectFit="cover"
                    className="rounded-lg"
                    src={img}
                    alt=""
                    srcSet=""
                    height="250"
                    width="355"
                  />
                </div>
                <h1 className="text-blue-900 my-2 text-center font-semibold">
                  {head}
                </h1>
                <div className="px-6 py-2">
                  {seeMore[img] || text.slice(0, 250)}
                  {text.length > 250 && (
                    <span
                      onClick={() => {
                        setSeeMore((prev) => ({
                          ...prev,
                          [img]: prev[img] ? "" : text,
                        }));
                      }}
                      className="pl-2 text-blue-900 hover:underline cursor-pointer"
                    >
                      see {seeMore[img] ? "less" : "more"}...
                    </span>
                  )}
                </div>
                <div>
                  {/* <button className="hover:shadow-form w-full rounded-md bg-sky-900 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Check products
                </button> */}
                  <div className="flex align-items-center justify-center">
                    <a
                      className="main-btn-products"
                      data-scroll-nav="0"
                      href={link}
                    >
                      Check products
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="u-clearfix u-sheet mx-auto u-valign-middle u-sheet-1">
        <h2
          style={{
            textAlign: "left",
            fontWeight: 400,
            fontSize: "2.25rem",
            lineHeight: 1.1,
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <span
            style={{ lineHeight: 2 }}
            className="text-blue-900 font-semibold"
          >
            Brands We Love!
          </span>
        </h2>
      </div>
      <div className="u-clearfix u-sheet mx-auto u-valign-middle u-sheet-1">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-5">
          {brandsArr.map((brand) => (
            <div key={brand.link}>
              {/* <Link href={brandsLinkArr[index++]} legacyBehavior passHref> */}
              <a target="_blank" href={brand.addr} rel="noopener noreferrer">
                <div
                  style={{
                    height: "200px",
                    position: "relative",
                    width: "200px",
                  }}
                >
                  <Image
                    src={"/images/brands/" + brand.link}
                    height="100"
                    width="200"
                    alt="brd"
                  />
                </div>
              </a>
              {/* </Link> */}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
