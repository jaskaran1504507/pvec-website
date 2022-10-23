import React from "react";

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
          {imgArr.map((img) => (
            <div className=" pb-4 mx-auto ">
              {" "}
              <div
                // style={{ width: "380px" }}
                className="bg-white px-4 pb-6 grid place-center"
              >
                {" "}
                <img src={img} style={{ height: "350px" }} />
                <p className="mb-4 text-base py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur non voluptate pariatur repellat delectus numquam,
                  voluptatum vero ullam exercitationem harum, ea ratione
                  reiciendis ex? Veniam consequuntur ipsum mollitia laboriosam
                  ex?
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center pb-10">
          <div className="uppercase rounded-full bg-amber-400 text-sm font-semibold px-8 py-3">
            Click here to know more
          </div>
        </div>
      </section>
    </div>
  );
}
