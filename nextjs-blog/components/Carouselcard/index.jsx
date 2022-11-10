import React from "react";
import Link from "next/link";

export default function Carouselcard() {
  const imgArr = [
    "images/Rectangle4.jpg",
    "images/Rectangle4-2.jpg",
    "images/PVEC_ContactLenses.jpeg",
  ];
  return (
    <div>
      <section className="u-clearfix u-sheet mx-auto u-valign-middle u-sheet-1">
        <div className="grid-cols-1 md:grid-cols-3 grid gap-4 place-items-center  ">
          {/* {imgArr.map((img) => ( */}
            <div className=" pb-4 mx-auto ">
              {" "}
              <div
                // style={{ width: "380px" }}
                className="bg-white px-4 pb-6 grid place-center"
              >
                {" "}
                <img src={imgArr[0]} style={{ height: "350px" }} />
                <p className="mb-4 text-base py-2">
                <br/>
                  We carry a range of specialized eye care products
                  recommended by our optometrists. These unique products are normally
                  not available in retail or pharmacy chains.

                  <br/>
                  <br/>
                  For example, we keep I-lid n lash, I-Drop (four types), Omega 3, 
                  Lattise, Tea tree oil and foaming cleaner, thermal eye pack.
                  
                </p>
              </div>
            </div>

            <div className=" pb-4 mx-auto ">
              {" "}
              <div
                // style={{ width: "380px" }}
                className="bg-white px-4 pb-6 grid place-center"
              >
                {" "}
                <img src={imgArr[1]} style={{ height: "350px" }} />
                <p className="mb-4 text-base py-2">
                <br/>
                  We have the latest in digital and high definition single vision, bifocal,
                  trifocal and progressive (no-line) lenses. Build your own lenses to custom fit
                  your needs - we offer a varitey of options such as  UVA/UVB block, blue light filter, 
                  computer anti fatigue, anti-reflective, anti-fog, high-index, safety, transitions, tinted or polarized.
              
                </p>
              </div>
            </div>

            <div className=" pb-4 mx-auto ">
              {" "}
              <div
                // style={{ width: "380px" }}
                className="bg-white px-4 pb-6 grid place-center"
              >
                {" "}
                <img src={imgArr[2]} style={{ height: "350px" }} />
                <p className="mb-4 text-base py-2">
                <br/>
                  Our doctors are constantly updated on the latest contact lens technology
                  and use the leading contact lens materials produced by innovative manufacturers.
                  We are proud to prescribe contacts from a full range of suppliers (including Acuvue, 
                  Alcon, Cooper Vision and Bausch & Lomb), allowing us to suggest the best lens for you 
                  without restriction
                </p>
              </div>
            </div>
          {/* ))} */}
        </div>
        <div className="flex justify-center pb-10">
          <Link href="/service-products">
                <u className="uppercase rounded-full bg-amber-400 text-sm font-semibold px-8 py-3">
                Click here to know more{" "}
                </u>
              </Link>
        </div>
      </section>
    </div>
  );
}
