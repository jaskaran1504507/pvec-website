import Link from "next/link";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { callApi } from "../../utils/apiUtils";
// import { homeServicesCards } from "../../constant";
import Endpoints from "../../utils/endpoints";
import Loading from "../Loading";

export default function IntroHomePage() {
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
      <div className="container md:mt-20 md:block hidden">
        <div className="row justify-content-center">
          <div className="w-[84vw] flex h-[80vh] relative">
            <div id="obj1" className="w-1/2 h-full flex">
              <div className="bg-black mt-64 xl:mt-56 w-72 h-72">
                <img
                  className="object-cover w-full h-full"
                  src="/images/water.jpg"
                  alt="Logo"
                />
              </div>
              <div className="absolute top-0 left-4 ml-6 xl:ml-1 lg:ml-1 bg-blue-400 w-[58vh] h-[58vh]">
                <img
                  className="object-cover w-full h-full shadow-xl shadow-black"
                  src="/images/bg-shenaaz.jpeg"
                  alt="Logo"
                />
              </div>
            </div>
            <div id="obj2" className="w-1/2 h-full content-start font-mono">
              <h2 className="title text-4xl xl:text-3xl uppercase text-left">Proudly serving the downtown (DT) core since 2004. </h2>
              <div className="w-full flex mt-3">
                <div className="w-1/4 border-2 mt-8 border-[#23ADCA] m-auto">
                </div>
                <div className="w-3/4">
                </div>
              </div>
              <div className="mt-8 leading-loose"><h3 className="title text-xl">Welcome to Performance Vision Eye Care!
              {/* <br/>Located at 1242 Burrard St, Vancouver, BC.  */}
              <br />
              <br />
              We pride ourselves on providing the complete eyecare experience which includes: a comprehensive eye exam, a selection of modern and timeless eyewear to choose from, an extensive sunglass collection ranging from active to elegant, and all of the top name brand contact lenses.<br/> Best of all, we direct bill to most insurance providers so you pay little to no money out of pocket*! </h3> 
              <br/> <span className="title text-xs"> *Terms and conditions apply. Based on eligibility.</span></div>
              <div className="mt-8 xl:mb-8 2xl:mb-8 text-xl">
                <a className="page-scroll  rounded-lg hover:underline text-[#21AECA]" href="/bookings#appointment">
                  Request an appointment for your next eye exam.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-12 md:mb-8 mb-52 md:hidden block">
        <div className="row justify-content-center">
          <div className="w-full flex flex-col h-[80vh] ">
            <div id="obj1" className="w-full h-full flex">
              {/* <div className="bg-black mt-52 w-full h-full">
              <img
                className="object-cover w-full h-full"
                src="/images/water.jpg"
                alt="Logo"
              />
            </div> */}
              <div className="bg-blue-400 w-full h-[55vh]">
                <img
                  className="object-cover w-full h-full "
                  src="/images/bg-shenaaz.jpeg"
                  alt="Logo"
                />
              </div>
            </div>
            <div id="obj2" className="w-full h-full p-4 content-start font-mono">
              <h2 className="title text-xl uppercase ">PROUDLY SERVING THE DOWNTOWN (DT) CORE SINCE 2004.</h2>
              <div className="mt-8 leading-loose"><h3 className="title ">Welcome to Performance Vision Eye Care!
               {/* located at 1242 Burrard st,Vancouver, BC.  */}
               <br />
               <br />
                We provide a full range of eye care services. From fashion-forward eyewear to family-oriented service, we are here to fulfill all of your eye health needs.</h3></div>
              <div className="mt-4  xl:ml-8 2xl:mb-8 text-lg">
                <a className="page-scroll  rounded-lg hover:underline text-[#21AECA]" href="/bookings#appointment">
                  Request an appointment for your next eye exam.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}