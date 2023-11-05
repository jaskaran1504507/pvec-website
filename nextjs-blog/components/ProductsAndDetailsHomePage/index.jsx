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
      <div className="container md:mt-12 md:block hidden bg-gray-100">
        <div className="row justify-content-center">
          <div className="w-[78vw] flex flex-col h-[120vh] relative">

            <div className="w-full h-full flex content-start font-mono">
              <div className="w-1/4 h-full">
                <img
                  className="object-cover w-full h-4/5 shadow-xl shadow-black"
                  src="/images/couple-with-sunglasses-posing-street.jpg"
                  alt="Logo"
                />
              </div>
              <div className="w-3/4 h-full content-start px-12">

                <div className="section-title text-left">
                  <h3 className="title text-lg">Carefully Curated Glasses </h3>
                  <div className="w-full flex mt-3 border-2 mt-8 border-[#23ADCA] m-auto">
                    {/* <div className="w-3/5 border-2 mt-8 border-[#23ADCA] m-auto">
                    </div>
                    <div className="w-2/5">
                    </div> */}
                  </div>
                  <h4 className="text-xl"><br />Each piece is hand selected by our team of expert stylists. We factor in design quality, complimentary colour palettes, and flattering shapes that suit faces of all types. We are constantly on the lookout for new and exciting styles our patients will look great in! <a className="page-scroll  rounded-lg hover:underline text-[#21AECA]" href="/glasses-contacts?query=glasses">
                  Browse our Brands</a></h4>
                </div>
              </div>

            </div>
            <div className="w-full h-full flex content-start mt-8 font-mono">
              <div className="w-1/4 h-full">
                <img
                  className="object-cover w-full h-4/5 shadow-xl shadow-black"
                  src="/images/dry_eye.avif"
                  alt="Logo"
                />
              </div>
              <div className="w-3/4 h-full content-start px-12">

                <div className="section-title text-left">
                  <h3 className="title text-lg">Do you suffer from Dry Eyes, Keratoconus or Post Refractive surgery complications?</h3>
                  <div className="w-full flex mt-3 border-2 mt-8 border-[#23ADCA] m-auto">
                    {/* <div className="w-10/12 border-2 mt-8 border-[#23ADCA] m-auto">
                    </div>
                    <div className="w-1/12">
                    </div> */}
                  </div>
                  <h4 className="text-xl"><br />We may have the solution for you. <a className="page-scroll  rounded-lg hover:underline text-[#21AECA]" href="/bookings#appointment">
                  Book a consultation</a> for a scleral contact lens fit.</h4>
                </div>
              </div>

            </div>

            <div className="w-full h-full flex content-start font-mono">
              <div className="w-1/4 h-full">
                <img
                  className="object-cover w-full h-4/5 shadow-xl shadow-black"
                  src="/images/Flexible-Work-for-People-With-Disabilities.jpg"
                  alt="Logo"
                />
              </div>
              <div className="w-3/4 h-full content-start px-12">
                <div className="section-title text-left">
                  <h3 className="title text-lg">Are you on disability/low income assistance or First Nations status?</h3>
                  <div className="w-full flex mt-3 border-2 mt-8 border-[#23ADCA] m-auto">
                    {/* <div className="w-9/12 border-2 mt-8 border-[#23ADCA] m-auto">
                    </div>
                    <div className="w-3/12">
                    </div> */}
                  </div>
                  <h4 className="text-xl"><br />We partner with government assistance programs to provide your eyecare at little to no expense to you.* </h4>
                  <h5 className="text-xs"> <br />*Terms & conditions apply. Based on eligibility.</h5>
                </div>
              </div>
            </div>
            {/* <div id="obj1" className="w-1/2 h-full flex">
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
            </div> */}

          </div>
        </div>
      </div>
      <div className="container mt-2 md:hidden block bg-gray-100">
        <div className="row justify-content-center">
          <div className="w-full flex flex-col h-fit ">
            <div id="obj2" className="w-full h-full px-3 content-start font-mono">
              <div className="section-title text-left pb-30">
                <h3 className="title text-lg">Carefully Curated Glasses </h3>
                <div className="w-full border-2 mt-8 border-[#23ADCA] m-auto">
                  {/* <div className="w-1/4 border-2 mt-8 border-[#23ADCA] m-auto">
                  </div>
                  <div className="w-3/4">
                  </div> */}
                </div>
                <h4><br />Each piece is hand selected by our team of expert stylists. We factor in design quality, complimentary colour palettes, and flattering shapes that suit faces of all types. We are constantly on the lookout for new and exciting styles our patients will look great in! <a className="page-scroll  rounded-lg hover:underline text-[#21AECA]" href="/glasses-contacts?query=glasses">
                  Browse our Brands</a></h4>
              </div>
              <div className="section-title text-left pb-30">
                <h3 className="title text-lg">Do you suffer from Dry Eyes, Keratoconus or Post Refractive Surgery complications?</h3>
                {/* <br /> */}
                <div className="w-full flex mt-3 border-2 mt-8 border-[#23ADCA] m-auto">
                  {/* <div className="w-1/4 border-2 mt-8 border-[#23ADCA] m-auto">
                  </div>
                  <div className="w-3/4">
                  </div> */}
                </div>
                <h4><br />We may have the solution for you. <a className="page-scroll  rounded-lg hover:underline text-[#21AECA]" href="/bookings#appointment">
                  Book a consultation</a> for a scleral contact lens fit.</h4>
              </div>
              <div className="section-title text-left">
                <h3 className="title text-lg">Are you on Disability/low income assistance or First Nations status?</h3>
                <div className="w-full flex mt-3 border-2 mt-8 border-[#23ADCA] m-auto">
                  {/* <div className="w-1/4 border-2 mt-8 border-[#23ADCA] m-auto">
                  </div>
                  <div className="w-3/4">
                  </div> */}
                </div>
                {/* <br /> */}
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