import Image from "next/image";
import React, { useState } from "react";
import { cards, productCatalogue, brandsArr } from "../../constant";
import ProductsComponent from "../../components/ProductsComponent";

export default function Products() {
  const [seeMore, setSeeMore] = useState({});

  return (
    <main className="mt-8">
      {/* <div className="grid gap-16 mt-20 grid-cols-1 md:grid-cols-2 u-clearfix u-sheet mx-auto u-valign-middle u-sheet-1">
        <div className="px-6">
          <h2
            style={{
              textAlign: "left",
              // fontSize: "2.25rem",
              lineHeight: 1.1,
              marginTop: "6rem",
              marginBottom: "20px",
            }}
          >
            <span
              style={{ lineHeight: 2 }}
              className="text-blue-900 text-center md:text-left text-4xl font-semibold"
            >
              Service & Products
            </span>
          </h2>
          <div>
            {" "}
            <p className="text">
            We have been helping people with quality care from our team of
            expert eye doctors in Downtown Vancouver since 2005
            </p>
            <br />
          </div>
        </div>
        <div className="flex justify-center px-6 mt-20" style={{ height: "450px" }}>
          <Image
            src="/images/MainPage_Illustration.png"
            alt=""
            layout="fill"
            srcSet=""
          />
        </div>
        <div>
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
              Services
            </span>
          </h2>
        </div>
        {/* <div className="hidden md:block"></div> */}
        {/* <div>
          <div className="px-6" style={{ height: "450px" }}>
            <Image src="/images/door.jpeg" alt="" layout="fill" srcSet="" />
          </div>
        </div> */}
        {/* <div>
          With some of the best Optometrists in Downtime Vancouver on our hand,
          we can always guarantee you will be given the best advice. We partner
          with the best Ophthalmologists around to care for your cataracts,
          glaucoma, and other common eye conditions.
          <br />
          Providing pre and post operative consultations, we will be there every
          step of the way throughout eye care journey!
          <br />
          <br />
          We provide the best care for your eyes which includes: full
          compressive exams, prescription eye glasses or sunglasses, contact
          lenses, and top notch vitamins and drops especially to promote health!
        </div> */}
        {/* <div>
          Some people believe that eye examinations are not necessary for people
          that see well. The fact is, there are a number of eye disease that can
          go undetected until it is too late.
          <br />
          <br />
          We routinely see patients who are symptom free but were found to have
          eye disease such as glaucoma, retinal hemorrhages, and even retinal
          holes; these can be serious threat to vision if left untreated.
          <br />
          <br />
          Our goal is to detect eye health issues before permanent damage
          occurs.
        </div> */}
        {/* <div>
          <div className="px-6" style={{ height: "450px" }}>
            <Image
              src="/images/Rectangle 3-1.jpg"
              alt=""
              layout="fill"
              srcSet=""
            />
          </div>
        </div>{" "} */}
      {/* </div>
      <div className="grid  gap-6 mt-10 grid-cols-1 md:grid-cols-3 u-clearfix u-sheet mx-auto u-valign-middle u-sheet-1">
        {cards.map(({ img, text, head }) => (
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
            <h1 className="text-blue-900 my-3 text-center font-semibold">
              {head}
            </h1>
            <div className="px-6 py-4 ">
              {seeMore[img] || text.slice(0, 250)}
              {text.length > 250 && (
                <span
                  onClick={() => {
                    setSeeMore((prev) => ({
                      ...prev,
                      [img]: prev[img] ? "" : text,
                    }));
                  }}
                  className=" pl-2 text-blue-900 hover:underline cursor-pointer">
                  see {seeMore[img] ? "less" : "more"}...
                </span>
              )}
            </div> */}
            {/* <div className="flex justify-center">
            <div className="flex-end justify-center navbar-btn d-none d-sm-inline-block"> */}
              {/* <div>
                <a className="link" data-scroll-nav="0" href="#pricing">Book your checkup appointment </a> */}
                {/* <div className="long-arrow-right"></div> */}
              {/* </div> */}
              {/* </div>
              </div> */}
          {/* </div>
        ))}
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
              Product Catalogue
            </span>
          </h2>

          <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            {productCatalogue.map(({ img, text, head }) => (
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
                      className=" pl-2 text-blue-900 hover:underline cursor-pointer"
                    >
                      see {seeMore[img] ? "less" : "more"}...
                    </span>
                  )}
                </div>
                <div>
                <button className="hover:shadow-form w-full rounded-md bg-sky-900 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Check products
                </button>
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
            <div key={brand.link}> */}
              {/* <Link href={brandsLinkArr[index++]} legacyBehavior passHref> */}
              {/* <a target="_blank" href={brand.addr} rel="noopener noreferrer">
                <div style={{ height: '200px', position: "relative" , width : '200px'}}>
                  <Image src={"/images/brands/" + brand.link} height = '100' width='200'  alt="brd"/>
                </div>
               
              </a> */}
               {/* </Link>  */}
            {/* </div>
          ))}
        </div>
      </div> */}
      <ProductsComponent/>
    </main>
  );
}
