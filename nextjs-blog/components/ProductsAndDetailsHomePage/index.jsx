import Link from "next/link";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { callApi } from "../../utils/apiUtils";
// import { homeServicesCards } from "../../constant";
import Endpoints from "../../utils/endpoints";
import Loading from "../Loading";

export default function ProductsAndDetailsHomePage() {
  const [seeMore, setSeeMore] = useState({});
  const [homeServicesCards, setHomeServicesCards] = useState([]);
  const imgArr = [
    "images/Rectangle 6-1.jpg",
    "images/Rectangle 4-2.jpg",
    "images/prod_cat_2.png",
    "images/Rectangle 6-4.jpg",
    "images/prod_cat_1.png",
  ];
  useEffect(() => {
    callApi({
      uriEndPoint: {
        ...Endpoints.getServicesHome,
      },
    })
      .then((res) => {
        setHomeServicesCards(res?.services);
      })
      .catch();
  }, []);
  return (
    <>
      <div className="container md:mt-20 md:block hidden bg-gray-100">
        <div className="row justify-content-center">
          <div className="w-[78vw] flex h-[172vh] relative">
            <div id="obj2" className="w-1/2 h-full content-start font-mono">

              <div className="section-title text-left pb-30 mt-24">
                <h3 className="title text-lg uppercase">Do you suffer from Dry Eyes, Keratoconus or post refractive surgery complications?</h3>
                <div className="w-full flex mt-3">
                  <div className="w-1/4 border-2 mt-8 border-[#23ADCA] m-auto">
                  </div>
                  <div className="w-3/4">
                  </div>
                </div>
                <h4><br />We may have the solution for you. Book a consultation for a scleral contact lens fit.</h4>
              </div>

              <div className="section-title text-left pb-30 mt-28">
                <h3 className="title text-lg uppercase">Carefully Curated Glasses </h3>
                <div className="w-full flex mt-3">
                  <div className="w-1/4 border-2 mt-8 border-[#23ADCA] m-auto">
                  </div>
                  <div className="w-3/4">
                  </div>
                </div>
                <h4><br />Each piece is hand selected by our team of expert stylists. We factor in design quality, complimentary colour palettes, and flattering shapes that suit faces of all types. We are constantly on the lookout for new and exciting styles our patients will look great in!</h4>
              </div>

              <div className="section-title text-left pb-30 mt-28">
                <h3 className="title text-lg uppercase">Are you on Disability/low income assistance or First Nations status?</h3>
                <div className="w-full flex mt-3">
                  <div className="w-1/4 border-2 mt-8 border-[#23ADCA] m-auto">
                  </div>
                  <div className="w-3/4">
                  </div>
                </div>
                <h4><br />We partner with government assistance programs to provide your eyecare at little to no expense to you.* </h4>
                <h5 className="text-xs"> <br />*Terms & conditions apply. Based on eligibility.</h5>
              </div>
            </div>
            <div id="obj1" className="w-1/2 h-full flex">
              <div className="bg-black mt-64 absolute right-0 bottom-0 w-[30vw] h-[70vh]">
                <img
                  className="object-cover w-full h-full"
                  src="/images/water.jpg"
                  alt="Logo"
                />
              </div>
              <div className="absolute top-0 right-0 bg-blue-400 w-[58vh] h-fit mr-10">
                <img
                  className="object-cover w-full h-full shadow-xl shadow-black"
                  src="/images/long_profiler.png"
                  alt="Logo"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="container mt-2 mb-80 md:hidden block bg-gray-100">
        <div className="row justify-content-center">
          <div className="w-full flex flex-col h-[80vh] ">
            <div id="obj2" className="w-full h-full py-4 px-3 content-start font-mono">
            <div className="section-title text-left pb-30">
                <h3 className="title text-lg uppercase">Do you suffer from Dry Eyes, Keratoconus or post refractive surgery complications?</h3>
                <div className="w-full flex mt-3">
                  <div className="w-1/4 border-2 mt-8 border-[#23ADCA] m-auto">
                  </div>
                  <div className="w-3/4">
                  </div>
                </div>
                <h4><br />We may have the solution for you. Book a consultation for a scleral contact lens fit.</h4>
              </div>

              <div className="section-title text-left pb-30">
                <h3 className="title text-lg uppercase">Carefully Curated Glasses </h3>
                <div className="w-full flex mt-3">
                  <div className="w-1/4 border-2 mt-8 border-[#23ADCA] m-auto">
                  </div>
                  <div className="w-3/4">
                  </div>
                </div>
                <h4><br />Each piece is hand selected by our team of expert stylists. We factor in design quality, complimentary colour palettes, and flattering shapes that suit faces of all types. We are constantly on the lookout for new and exciting styles our patients will look great in!</h4>
              </div>

              <div className="section-title text-left pb-30">
                <h3 className="title text-lg uppercase">Are you on Disability/low income assistance or First Nations status?</h3>
                <div className="w-full flex mt-3">
                  <div className="w-1/4 border-2 mt-8 border-[#23ADCA] m-auto">
                  </div>
                  <div className="w-3/4">
                  </div>
                </div>
                <h4><br />We partner with government assistance programs to provide your eyecare at little to no expense to you.* </h4>
                <h5 className="text-xs"> <br />*Terms & conditions apply. Based on eligibility.</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}