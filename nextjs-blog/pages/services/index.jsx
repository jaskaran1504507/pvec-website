import Image from "next/image";
import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { productCatalogue, brandsArr } from "../../constant";
import { callApi } from "../../utils/apiUtils";
import Endpoints from "../../utils/endpoints";

const imgArr = [
  "/images/PVEC_idrop.jpeg",
  "/images/PVEC_omega3.jpeg",
  // "/images/PVEC_teatree.jpeg",
  // "/images/PVEC_eyemask.jpeg",
  // "/images/PVEC_lidlash.jpeg",
];
const imgArr1 = [
  // "/images/PVEC_idrop.jpeg",
  // "/images/PVEC_omega3.jpeg",
  // "/images/PVEC_teatree.jpeg",
  "/images/PVEC_eyemask.jpeg",
  "/images/PVEC_lidlash.jpeg",
];

export default function ServiceProducts() {
  const [seeMore, setSeeMore] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    callApi({
      uriEndPoint: {
        ...Endpoints.getServices,
      },
    })
      .then((res) => {
        console.log("res", res);
        setCards(res?.services);
      })
      .catch();
  }, []);
  return (
    <main>
      <div className="grid gap-16 mt-20 grid-cols-1 md:grid-cols-2 u-clearfix u-sheet mx-auto u-valign-middle u-sheet-1">
        <div className="mt-8 md:mt-0">
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
      </div>
      {cards?.length ? (
        <div className="grid gap-1 mt-10 grid-cols-1 md:grid-cols-3 u-clearfix u-sheet mx-auto u-valign-middle u-sheet-1">
          {cards.map(({ image, description, heading, conditions, id }, index) => (
            <div
              id={id}
              key={image}
              className={`p-2 shadow-lg card flex flex-col border border-gray-300 mx-2 ${
                index === cards.length - 1 && cards.length % 3 === 1
                  ? "justify-center md:col-start-2" // Center the last element when there's an odd number of elements
                  : ""
              }`}
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
                <h1 className="text-blue-900 my-3 text-center font-semibold">
                  {heading}
                </h1>

                <div className="px-6 py-4 ">
                  {seeMore[image] || description.slice(0, 250)}
                  {description.length > 250 && (
                    <span
                      onClick={() => {
                        setSeeMore((prev) => ({
                          ...prev,
                          [image]: prev[image] ? "" : description,
                        }));
                      }}
                      className=" pl-2 text-blue-900 hover:underline cursor-pointer"
                    >
                      see {seeMore[image] ? "less" : "more"}...
                    </span>
                  )}
                </div>
              </div>

              {/* <div className="flex justify-center">
            <div className="flex-end justify-center navbar-btn d-none d-sm-inline-block"> */}

              <div className="card-button">
                {conditions && (
                  <div className="px-6">
                    <p className="text-xs">{conditions} </p>
                  </div>
                )}
                <div className="flex align-items-center justify-center">
                  <a
                    className="main-btn-products"
                    data-scroll-nav="0"
                    href="bookings#appointment"
                  >
                    Book your appointment{" "}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </main>
  );
}
