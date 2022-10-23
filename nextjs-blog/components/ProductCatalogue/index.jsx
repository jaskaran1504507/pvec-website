import React from "react";

export default function ProductCatalogue() {
  const imgArr = [
    "images/PVEC_ContactLenses.jpeg",
    "images/PVEC_ContactLenses.jpeg",
    "images/PVEC_ContactLenses.jpeg",
    "images/PVEC_ContactLenses.jpeg",
    "images/PVEC_ContactLenses.jpeg",
    "images/PVEC_ContactLenses.jpeg",
    "images/PVEC_ContactLenses.jpeg",
  ];
  return (
    <section className="u-clearfix u-grey-10 u-section-3" id="sec-f593">
      <div className="u-clearfix u-sheet mx-auto u-valign-middle u-sheet-1">
        <div
          //   style={{ margin: "50px 0" }}
          className="fr-view u-clearfix w-full u-rich-text u-text u-text-1"
        >
          {" "}
        </div>
        <div className=" grid grid-cols-1 md:flex ">
          <div className="">
            <h2
              style={{
                textAlign: "left",
                fontWeight: 400,
                fontSize: "2.25rem",
                lineHeight: 1.1,
                //   marginTop: "20px",
                //   marginBottom: "20px",
              }}
            >
              <span
                style={{ lineHeight: 2 }}
                className="text-blue-900 font-semibold"
              >
                Product Catalogue
              </span>
            </h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            corrupti adipisci consequuntur, saepe minima sint ipsam sit
            reiciendis tempora tempore exercitationem facilis similique vitae
            incidunt praesentium! Explicabo provident labore ex?
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            temporibus debitis vel ad reprehenderit aliquam possimus quas natus.
            Iusto dolor expedita nisi deleniti minus mollitia repellendus labore
            eveniet aliquam dignissimos?
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-8">
            {imgArr.map((img) => (
              <img src={img} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
