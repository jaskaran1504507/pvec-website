import Link from "next/link";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { callApi } from "../../utils/apiUtils";
// import { homeServicesCards } from "../../constant";
import Endpoints from "../../utils/endpoints";
import Loading from "../Loading";

export default function HeadBrandHomePage() {
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
    <div className="container md:pt-8">
      <div className="row justify-content-center">
        {/* <div className="w-full bg-black h-48">
          <div id="obj1" className="flex">
            <div className="w-1/3 bg-blue-200 h-48">
            </div>
            <div className="w-2/3 h-48 bg-green-400 flex items-center justify-center">
              <img
                className="object-cover w-full h-full"
                src="/images/water.jpg"
                alt="Logo"
              />
            </div>
          </div>
          <div id="obj2" className="flex">
            <div className="w-2/5 bg-blue-200 h-48">
            </div>
            <div className="w-3/5 h-48 bg-green-400 flex items-center justify-center">
            </div>
          </div>
        </div> */}

        <div className="h-[80vh] bg-black h-64 relative hidden md:block">
          <div id="obj1" className="flex">
            <div className="w-1/3 bg-blue-100 h-64">
            </div>
            <div className="w-2/3 h-64 flex items-center justify-center relative z-0">
              <img
                className="object-cover w-full h-full"
                src="/images/water.jpg"
                alt="Logo"
              />
            </div>
          </div>
          <div id="obj2" className="flex absolute top-0 left-0 w-full h-full">
            <div className="w-2/5 h-full ">
              <img
                className="p-2 object-cover w-full h-full drop-shadow-md"
                src="/images/hermosa_n_despoda.jpeg"
                alt="Logo"
              />
            </div>
            <div className="w-3/5 h-full flex items-center justify-center relative z-10">
              <div className="flex w-full h-full flex-col">
                <div className="h-3/5 mt-4 mr-2 text-left text-xl font-mono text-white"><span className="font-bold">Hermosa & Despada - </span> Luxury eyeglasses and luxury sunglasses made in Europe. Servicing Eyes on the Performance vision since 2004.</div>
                <div className="h-2/5 my-4 flex ">
                  <div className="h-full w-1/3 flex justify-center">
                    <a className={`text-white font-bold py-4 px-4 my-1 border-2 text-xl flex justify-center content-center`}>
                      VISIT US TODAY
                    </a>
                  </div>
                  <div className="h-full w-2/3 flex p-2 ml-2">
                    <div className="flex bg-blue-100">
                      <div className="w-1/2">  <img
                        className=" object-fill w-full h-full shadow-lg px-4 py-1"
                        src="https://pvec-bucket.s3.ca-central-1.amazonaws.com/eyecare-logo.png"
                        alt="Logo"
                      /></div>
                      <div className="w-1/2">  <img
                        className=" object-fill w-full h-full shadow-lg"
                        src="/images/DESPADA-LOGO-BLACK.png"
                        alt="Logo"
                      /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-black h-56 mb-80 relative md:hidden block">
          <div id="obj1" className="flex flex-col">
            <div className="w-full bg-blue-100 h-56">
              <div className="w-full h-full ">
                <img
                  className="p-2 object-cover w-full h-full drop-shadow-md"
                  src="/images/hermosa_n_despoda.jpeg"
                  alt="Logo"
                />
              </div>
            </div>
            <div className="w-full h-56 flex items-center justify-center relative z-0">
              <img
                className="object-cover w-full h-full"
                src="/images/water.jpg"
                alt="Logo"
              />
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="h-3/5 mt-2 mx-2 text-left text-xl font-mono text-white"><span className="font-bold">Hermosa & Despada - </span> Luxury eyeglasses and luxury sunglasses made in Europe. Servicing Eyes on the Performance vision since 2004.</div>
                <div className="h-10 mt-10 w-full flex justify-center">
                    <a className={`text-white font-bold p-1 border-2 text-xl flex justify-center content-center`}>
                      VISIT US TODAY
                    </a>
                  </div>
                <div className="flex bg-blue-50 m-2">
                  <div className="w-1/2">  <img
                    className=" object-fill w-full h-full shadow-lg px-2 py-1"
                    src="https://pvec-bucket.s3.ca-central-1.amazonaws.com/eyecare-logo.png"
                    alt="Logo"
                  /></div>
                  <div className="w-1/2">  <img
                    className=" object-fill w-full h-full shadow-lg"
                    src="/images/DESPADA-LOGO-BLACK.png"
                    alt="Logo"
                  /></div>
                </div>
              </div>
            </div>
          </div>
          <div id="obj2" className="flex absolute top-0 left-0 w-full h-full">
            <div className="w-2/5 h-full ">
              {/* <img
                className="p-2 object-cover w-full h-full drop-shadow-md"
                src="/images/hermosa_n_despoda.jpeg"
                alt="Logo"
              /> */}
              <div className="flex w-full h-full flex-col">
                {/* <div className="h-3/5 mt-4 mr-2 text-left text-xl font-mono text-white"><span className="font-bold">Hermosa & Despada - </span> Luxury eyeglasses and luxury sunglasses made in Europe. Servicing Eyes on the Performance vision since 2004.</div> */}
                <div className="h-2/5 my-4 flex ">
                  {/* <div className="h-full w-1/3 flex justify-center">
                    <a className={`text-white font-bold py-4 px-4 my-1 border-2 text-xl flex justify-center content-center`}>
                      VISIT US TODAY
                    </a>
                  </div> */}
                  {/* <div className="h-full w-2/3 flex p-2 ml-2">
                    <div className="flex bg-blue-100">
                      <div className="w-1/2">  <img
                        className=" object-fill w-full h-full shadow-lg px-10 py-1"
                        src="https://pvec-bucket.s3.ca-central-1.amazonaws.com/eyecare-logo.png"
                        alt="Logo"
                      /></div>
                      <div className="w-1/2">  <img
                        className=" object-fill w-full h-full shadow-lg"
                        src="/images/DESPADA-LOGO-BLACK.png"
                        alt="Logo"
                      /></div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-10">
          <div className="section-title text-center pb-30">
            <div className="line m-auto"></div>
            <h3 className="title text-xl">Our Services</h3>
            <h4>
              <span className="text-xl font-semibold">
                <br />
                Everything you need for happy, healthy eyes!
              </span>
            </h4>
          </div>
        </div> */}
      </div>
      {/* {homeServicesCards?.length ? (
        <div className="grid gap-2 md:mt-10 grid-cols-1 md:grid-cols-3 u-clearfix u-sheet mx-auto u-valign-middle u-sheet-1">
          {homeServicesCards.map(
            ({ image, description, heading, conditions }) => (
              <div
                key={image}
                className="p-2 shadow-lg card flex flex-col border border-gray-300 mx-2"
              >
                <div className="card-content flex-grow">
                  <div>
                    <Image
                      // layout="fill"
                      // objectFit="cover"
                      className="rounded-lg"
                      src={image}
                      alt=""
                      srcSet=""
                      height="250"
                      width="355"
                    />
                  </div>
                  <h1 className="text-blue-900 mt-3 text-center font-semibold">
                    {heading}
                  </h1>
                  <div className="px-2 py-4">
                    {seeMore[image] || description.slice(0, 250)}
                    {description.length > 250 && (
                      <span
                        onClick={() => {
                          setSeeMore((prev) => ({
                            ...prev,
                            [image]: prev[image] ? "" : description,
                          }));
                        }}
                        className="pl-2 text-blue-900 hover:underline cursor-pointer"
                      >
                        see {seeMore[image] ? "less" : "more"}...
                      </span>
                    )}
                  </div>
                </div>
                <div className="card-button">
                  <div className="flex align-items-center justify-center">
                    <a
                      className="main-btn-products"
                      data-scroll-nav="0"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfOr3fsy1F9RpZw9Gh8VyyUDAgm3Wg6HeskeIZRyiZvelRNNg/viewform?usp=sf_link"
                      target="_blank"
                    >
                      Book your appointment{" "}
                    </a>
                  </div>
                  {conditions && (
                    <div className="px-6">
                      <p className="text-xs">{conditions} </p>
                    </div>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      ) : (
        <Loading />
      )}
      <div className="flex justify-center pt-12">
        <Link href="/products">
          <p className="explore-services-container uppercase rounded-full white md:text-lg font-semibold px-4 py-3">
            Explore more of our services{" "}
          </p>
        </Link>
      </div> */}
    </div>
  );
}