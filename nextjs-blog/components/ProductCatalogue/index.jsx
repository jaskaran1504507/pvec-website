import React from "react";
import Link from "next/link";

export default function ProductCatalogue() {
  const imgArr = [
    "images/Rectangle 6-1.jpg",
    "images/Rectangle 4-2.jpg",
    "images/prod_cat_2.png",
    "images/Rectangle 6-4.jpg",
    "images/prod_cat_1.png",
    
    // "images/Rectangle 1-4.jpg",
    // "images/PVEC_ContactLenses.jpeg",
  ];
  return (
    <section className="u-clearfix u-grey-10 u-section-3" id="sec-f593">
      <div className="u-clearfix u-sheet mx-auto u-valign-middle u-sheet-1">
        <div
          //   style={{ margin: "50px 0" }}
          className="fr-view u-clearfix w-full u-rich-text u-text u-text-1"
        >
          {" "}
        </div>
        <div className=" grid grid-cols-1 md:flex ">
          <div className="">
            <h2
              style={{
                textAlign: "left",
                fontWeight: 400,
                fontSize: "2.25rem",
                lineHeight: 1.1,
                //   marginTop: "20px",
                //   marginBottom: "20px",
              }}
            >
              <span
                style={{ lineHeight: 2 }}
                className="text-blue-900 font-semibold"
              >
                Product Catalogue
              </span>
            </h2>
            Many people believe that glasses must cost more from a doctor's office... in truth, our fees are usually substantially lower.
            <br />
            We offer a range of styles that can fit any budget, and offer direct billing for glasses orders.
            <br />
            <Link href="/promotions">
                <u className="text-blue-800 font-semibold cursor-pointer">
                  Visit our promotionan page to see what deals are on now!{" "}
                </u>
              </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-8">
            {imgArr.map((img) => (
              <img src={img} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
