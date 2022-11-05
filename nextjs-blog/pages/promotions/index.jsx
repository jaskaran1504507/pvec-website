import Image from "next/image";
import React from "react";

export default function Promotions() {
  const dummmy = [
    {
      img: "/images/Rectangle 2.png",
      heading: `Purchase any complete pair of glasses (frame & lenses) and get
    your 2nd complete pair 30% off  (even sunglasses)`,
      tageLine: ` *Some restrictions apply, see for associate for details. Glasses
    must be purchased on the same day. Cannot be combined with any
    other offers.`,
    },
    {
      img: "/images/Rectangle 4-2.jpg",
      heading: `Our tom fords are up for clearance for upto 50% off`,
      tageLine: ` *Some restrictions apply, see for associate for details.`,
    },
  ];
  return (
    <main>
      <div className="grid gap-16  mt-20 grid-cols-1 md:grid-cols-1 u-clearfix u-sheet mx-auto u-valign-middle u-sheet-1">
        {dummmy.map((n, i) => (
          <div className="w-full grid grid-cols-2 gap-2">
            {i % 2 === 1 && (
              <div className="px-6 ">
                <Image
                  height="450px"
                  width="500px"
                  src={n.img}
                  alt=""
                  srcSet=""
                />
              </div>
            )}

            <div className="">
              <h2
                style={{
                  textAlign: "left",
                  // fontSize: "2.25rem",
                  lineHeight: 1.1,
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{ lineHeight: 2 }}
                  className="text-blue-900 text-center md:text-left text-4xl font-semibold"
                >
                  {n.heading}
                </span>
              </h2>

              <br />
              <p className="text-blue-900">{n.tageLine}</p>
            </div>
            {i % 2 === 0 && (
              <div className="px-6 ">
                <Image
                  src="/images/Rectangle 2.png"
                  alt=""
                  height="450px"
                  width="500px"
                  srcSet=""
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
