import Link from "next/link";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { callApi } from "../../utils/apiUtils";
// import { homeServicesCards } from "../../constant";
import Endpoints from "../../utils/endpoints";
import Loading from "../Loading";

export default function BrandDetailsHomePage() {
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
      <div className="container md:mt-20 xl:mt-24 lg:mt-24 2xl:mt-24 md:block hidden">
        <div className="row justify-content-center">
          {/* <div className="col-lg-10">
            <div className="section-title text-left pb-30">
              <h3 className="title text-xl uppercase">VISIT OUR PRACTICE <br />AT 1242 Burrard Street</h3>
              <div className="w-full flex mt-3">
                <div className="w-1/4 border-2 mt-8 border-[#23ADCA] m-auto">

                </div>
                <div className="w-3/4">

                </div>
              </div>
              <h4>
                <span className="">
                  <br />
                  Performance Vision Eye Care is a conveniently located eye doctor's clinic on 1242 Burrard Street in Vancouver.(just across from the Esso Gas Station). Call us at
                  <a
                    className="pl-1 inline-flex center text-[#21AECA]"
                    href="tel:+16046899962"
                    target="_blank"
                   
                  >&nbsp;+1 (604) 689 9962&nbsp;
                  </a> or email <a className="pl-1 inline-flex center text-[#21AECA]" href="mailto:info@pveyecare.ca" target="_blank">info@pveyecare.ca</a> to make an appointment with one of our Optometrists, or just to ask about your eyecare needs. 
                </span>
              </h4>
            </div>
          </div> */}
          <div className="col-lg-10">
            <div className="section-title text-left pb-30">
              {/* <h3 className="title text-xl uppercase">VISIT OUR PRACTICE <br />AT 1242 Burrard Street</h3> */}
              <div className="w-full flex mt-3">
                <div className="w-2/5 border-2 mt-8 border-[#23ADCA] m-auto">
                </div>
                <div className="w-3/5">
                </div>
              </div>
            </div>
          </div>
          <div className="w-[75vw] flex h-[80vh] relative">
            <div id="obj1" className="w-full h-full flex">
              <div className="bg-black mt-64 w-full h-84">
                <img
                  className="object-cover w-full h-full"
                  src="/images/water.jpg"
                  alt="Logo"
                />
              </div>
              <div className="absolute top-0 right-0 mr-6 w-full h-[78vh]">
                <img
                  className="object-cover w-full h-full shadow-xl shadow-black"
                  src="/images/collage_1.png"
                  alt="Logo"
                />
              </div>
            </div>
            {/* <div id="obj2" className="w-1/2 h-full content-start font-mono">
              <h2 className="title text-3xl uppercase text-[#21AECA]">Performance Vision Eye Care</h2>
              <div className="mt-3 leading-loose"><h3 className="title text-xl">1242 Burrard Street <br/> Vancouver, BC, V6Z 1Z1</h3></div>
              <h2 className="title mt-8 text-3xl uppercase text-[#21AECA]">CONTACT INFORMATION</h2>
              <div className="mt-3 leading-loose"><h3 className="title text-xl"><a href="tel:+16046899962" target="_blank">+1 604 689 9962</a></h3></div>
              <div className="leading-loose"><h3 className="title text-xl"><a href="mailto:info@pveyecare.ca" target="_blank">info@pveyecare.ca</a></h3></div>
              <h2 className="title mt-8 text-3xl uppercase text-[#21AECA]">CLINIC HOURS</h2>
              <div className="w-3/4 mt-3 leading-loose flex justify-between"><span className="title text-xl">Monday:</span><span className="title text-xl">10:00 AM - 6:00 PM</span></div>
              <div className="w-3/4 mt-3 leading-loose flex justify-between"><span className="title text-xl">Tuesday:</span><span className="title text-xl">10:00 AM - 6:00 PM</span></div>
              <div className="w-3/4 mt-3 leading-loose flex justify-between"><span className="title text-xl">Wednesday:</span><span className="title text-xl">10:00 AM - 6:00 PM</span></div>
              <div className="w-3/4 mt-3 leading-loose flex justify-between"><span className="title text-xl">Thursday:</span><span className="title text-xl">10:00 AM - 6:00 PM</span></div>
              <div className="w-3/4 mt-3 leading-loose flex justify-between"><span className="title text-xl">Friday:</span><span className="title text-xl">10:00 AM - 6:00 PM</span></div>
              <div className="w-3/4 mt-3 leading-loose flex justify-between"><span className="title text-xl">Saturday:</span><span className="title text-xl">11:00 AM - 4:00 PM</span></div>
              <div className="w-3/4 mt-3 leading-loose flex justify-between"><span className="title text-xl">Sunday:</span><span className="title text-xl">Closed</span></div>
              <div className="mt-8 text-xl">
                <a className="page-scroll hover:underline text-[#21AECA] uppercase border-2 border-[#21AECA] p-2" href="/bookings#appointment">
                  Request appointment
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className="container mt-2 mb-96 md:hidden block">
        <div className="row justify-content-center">
          <div className="w-full flex flex-col h-[80vh] ">
            <div id="obj1" className="w-full h-full flex">
              <div className="bg-blue-400 w-full h-[55vh]">
                <img
                  className="object-cover w-full h-full "
                  src="/images/71F9963F-46C6-41D4-8207-4499D775D391.jpeg"
                  alt="Logo"
                />
              </div>
            </div>
            <div id="obj2" className="w-full h-full py-4 px-3 content-start font-mono">
            <h2 className="title text-2xl uppercase text-[#21AECA]">Performance Vision Eye Care</h2>
              <div className="mt-1 leading-loose"><h3 className="title text-lg">1242 Burrard Street <br/> Vancouver, BC, V6Z 1Z1</h3></div>
              <h2 className="title mt-4 text-2xl uppercase text-[#21AECA]">CONTACT INFORMATION</h2>
              <div className="mt-3 leading-loose"><h3 className="title text-lg"><a href="tel:+16046899962" target="_blank">+1 604 689 9962</a></h3></div>
              <div className="leading-loose"><h3 className="title text-lg"><a href="mailto:info@pveyecare.ca" target="_blank">info@pveyecare.ca</a></h3></div>
              <h2 className="title mt-4 text-2xl uppercase text-[#21AECA]">CLINIC HOURS</h2>
              <div className="w-3/4 mt-1 leading-loose flex justify-between"><span className="title text-base">Monday:</span><span className="title text-base">10:00AM - 6:00PM</span></div>
              <div className="w-3/4 mt-1 leading-loose flex justify-between"><span className="title text-base">Tuesday:</span><span className="title text-base	">10:00AM - 6:00PM</span></div>
              <div className="w-3/4 mt-1 leading-loose flex justify-between"><span className="title text-base">Wednesday:</span><span className="title text-base	">10:00AM - 6:00PM</span></div>
              <div className="w-3/4 mt-1 leading-loose flex justify-between"><span className="title text-base">Thursday:</span><span className="title text-base	">10:00AM - 6:00PM</span></div>
              <div className="w-3/4 mt-1 leading-loose flex justify-between"><span className="title text-base">Friday:</span><span className="title text-base	">10:00AM - 6:00PM</span></div>
              <div className="w-3/4 mt-1 leading-loose flex justify-between"><span className="title text-base">Saturday:</span><span className="title text-base">11:00AM - 4:00PM</span></div>
              <div className="w-3/4 mt-1 leading-loose flex justify-between"><span className="title text-base">Sunday:</span><span className="title text-base">Closed</span></div>
              <div className="mt-4 text-lg">
                <a className="page-scroll hover:underline text-[#21AECA] uppercase border-2 border-[#21AECA] p-2" href="/bookings#appointment">
                  Request appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}