import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Promotions() {
  const [seeMore, setSeeMore] = useState({});

  const cards = [
    {
      link: "/images/10-25-17glasses.jpg",
      title: "Clearance Sale",
      description:
        "Select eyewear from 50-90% off with fully coated lenses purchase",
      url: "/glasses-contacts",
    },
    {
      link: "/images/iStock-1131639271.jpg",
      title: "Every Day Value Offer",
      description: (
        <>
          Buy 1 Complete Pair (frame+lenses), Get 2nd pair 30% off frame
          and lenses! <br />
          Buy 1 Pair of Non-Prescription Sunglasses, get 2nd pair 20% Off!
        </>
      ),
      url: "/glasses-contacts",
    },
    {
      link: "/images/Hero-3-1280x480.webp",
      title: "Summertime Sun Sale Limited Time Offer",
      description:
        "Select Polarized Sunglasses: Regular price $200 on for $99",
      url: "/glasses-contacts",
    },
    {
      link: "/images/eyehealth.jpg",
      title:
        "Have Extended Insurance? Ask us how to get glasses or sunglasses for little to no expense out of your pocket!",
      url: "/service-products",
    },
  ];
  return (
    <>
    <div className="mt-20 md:mt-20">
          <h2
            style={{
              textAlign: "left",
              fontWeight: 400,
              fontSize: "2.25rem",
              lineHeight: 1.1,
            }}
          >
            <span
              style={{ lineHeight: 2 }}
              className="text-blue-900 font-semibold"
            >
              Promotions
            </span>
          </h2>
        </div>
     <div className="grid gap-1 mt-10 grid-cols-1 md:grid-cols-3 u-clearfix u-sheet mx-auto u-valign-middle u-sheet-1">
        {

          cards.map((m, index) => (
            // <Link
            //   href={m.url}
            //   key={m.url}
            //   style={{
            //     position: "relative",
            //     width: "100%",
            //     overflow: "hidden",
            //     background: "#F6F8F3",
            //   }}
            // >
            //   <div className="pb-2 md:py-0 mt-10" key={m.link}>
            //     <div
            //       style={{
            //         backgroundImage: `url(${m.link})`,
            //         backgroundColor: "#cccccc",
            //         backgroundRepeat: "no-repeat",
            //         backgroundSize: "cover",
            //         maxHeight: "540px",
            //       }}
            //       className=" u-active text-center u-section-1-1 banner-img  u-carousel-item  justify-center flex u-clearfix u-image u-shading "
            //     >
            //       <div className="u-clearfix u-sheet flex items-center u-sheet-1 top-section md:mt-0 md:py-0 py-4">
            //         <div className="backdrop-blur" style={{ marginTop: "15em" }}>
            //           <h2
            //             className="font-semibold md:text-6xl text-3xl"
            //             style={{
            //               color: "white",
            //               // fontSize: "3.8em",
            //               textAlign: "start",
            //               color: "#1D3D74",
            //             }}
            //           >
            //             {m.title}
            //           </h2>
            //           {m.description && (
            //             <p
            //               className="font-semibold md:text-4xl text-xl"
            //               style={{
            //                 color: "#2968ce",
            //                 alignItems: "flex-start",
            //                 // fontSize: "26px",
            //               }}
            //             >
            //               {m.description}
            //             </p>
            //           )}
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // </Link>

            <div
              id={m.link}
              key={m.link}
              className={`p-2 shadow-lg card flex flex-col border border-gray-300 mx-2 ${index === cards.length - 1 && cards.length % 3 === 1
                ? 'justify-center md:col-start-2' // Center the last element when there's an odd number of elements
                : ''
                }`}
            >
              <div className="card-content flex-grow">
                <div>
                  <Image
                    // layout="fill"
                    // objectFit="cover"
                    className="rounded-lg"
                    src={ m.link}
                    alt=""
                    srcSet=""
                    height="250"
                    width="355"
                  />
                </div>
                <h1 className="text-blue-900 my-3 text-center font-semibold">
                  {m?.title}
                </h1>

                <div className="px-6 py-4 ">
                  {m?.description}
                </div>
              </div>

              {/* <div className="flex justify-center">
<div className="flex-end justify-center navbar-btn d-none d-sm-inline-block"> */}

              <div className="card-button">
                <div className="flex align-items-center justify-center">
                  <a
                    className="main-btn-products"
                    data-scroll-nav="0"
                    href={m?.url}
                  >
                    Avail Now!!{" "}
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
