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
    <div className="container md:mt-20 md:block hidden">
      <div className="row justify-content-center">
        <div className="w-full flex h-[80vh] relative">
          <div id="obj1" className="w-1/2 mx-24 h-full flex">
            <div className="bg-black mt-52 w-72 h-72">
              <img
                className="object-cover w-full h-full"
                src="/images/water.jpg"
                alt="Logo"
              />
            </div>
            <div className="absolute top-0 left-0 ml-32 bg-blue-400 w-[55vh] h-[55vh]">
                <img
                className="object-cover w-full h-full shadow-xl shadow-black"
                src="/images/bg-gl.jpg"
                alt="Logo"
              />
            </div>
          </div>
          <div id="obj2" className="w-1/2 h-full p-4 content-start font-mono">
            <h2 className="title text-4xl uppercase ">Servicing Eyes on the Performance vision since 2004</h2>
            <div className="content-start line m-auto h-1 bg-[#21AECA] mt-4 w-1/2"></div>
            <div className="mt-8 leading-loose"><h3 className="title text-xl">Welcome to performance vision eye care, located at 1242 Burrard st,Vancouver, BC. <br />
              We provide a full range of eye care services. From fashion-forward eyewear to family-oriented service, we are here to fulfill all of your eye health needs.</h3></div>
            <div className="mt-20 text-xl">
              <a className="page-scroll  rounded-lg hover:underline text-[#21AECA]" href="/bookings#appointment">
                Request an appointment for your next eye exam.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}