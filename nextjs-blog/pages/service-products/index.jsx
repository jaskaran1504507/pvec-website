import Image from "next/image";
import React from "react";
import { cards } from "../../constant";
import Link from "next/link";

export default function ServiceProducts() {
  const imgArr = [
    "/images/PVEC_idrop.jpeg",
    "/images/PVEC_omega3.jpeg",
    "/images/PVEC_teatree.jpeg",
    "/images/PVEC_eyemask.jpeg",
    "/images/PVEC_lidlash.jpeg",
  ];
  const brandsArr = [
    "PVEC_EmporioArmani.jpeg",
    "PVEC_FYSH.jpeg",
    "PVEC_Gucci.png",
    "PVEC_Guess.jpeg",
    "PVEC_HugoBoss.png",
    "PVEC_KateSpade.png",
    "PVEC_KliikDenmark.jpeg",
    "PVEC_LaFont.png",
    "PVEC_MarcJacobs.jpeg",
    "PVEC_MichaelKors.jpeg",
    "PVEC_Moleskine.png",
    "PVEC_Oakley.png",
    "PVEC_RayBan.png",
    "PVEC_Staag.png",
    "PVEC_Superflex.jpeg",
    "PVEC_TF.png",
  ];
  const brandsLinkArr = [
    "https://www.armani.com/en-in/emporio-armani/man/eyewear",
    "https://fyshuk.com",
    "https://www.gucci.com/us/en/st/capsule/women-eyewear",
    "https://www.guess.com/us/en/women/accessories/sunglasses",
    "https://www.hugoboss.com/men-glasses/",
    "https://www.katespade.com/shop/accessories/sunglasses-reading-glasses",
    "https://www.kliik.com/",
    "https://www.lafont.com/the-collection/",
    "https://www.marcjacobs.com/default/the-marc-jacobs/the-accessories/sunglasses/",
    "https://www.michaelkors.ca/men/accessories/sunglasses/_/N-285v",
    "https://moleskine-eyewear.com/en/",
    "https://www.oakley.com/en-eu",
    "https://www.ray-ban.com/canada/en",
    "",
    "",
    "https://www.tomford.com/eyewear/men/optical/"
  ];
  let index =0;
  return (
    <main>
      <div className="grid gap-16  mt-20 grid-cols-1 md:grid-cols-2 u-clearfix u-sheet mx-auto u-valign-middle u-sheet-1">
        <div className="px-6">
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
              Service & Products
            </span>
          </h2>
          <div>
            {" "}
            <p>
              We have been helping people with quality care with a from our team
              of expert eye doctors in downtown Vancouver since 2005
            </p>
            <br />
            <p>
              Our team of eye specialists have many years of professional
              experience and can provide proper diagnosis of eye health
              conditions right in the Downtown Care of Vancouver.
            </p>
          </div>
        </div>
        <div className="flex justify-center px-6" style={{ height: "450px" }}>
          <Image
            src="/images/MainPage_Illustration.png"
            alt=""
            layout="fill"
            srcSet=""
          />
        </div>
        <div>
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
        <div className="hidden md:block"></div>
        <div>
          <div className="px-6" style={{ height: "450px" }}>
            <Image src="/images/door.jpeg" alt="" layout="fill" srcSet="" />
          </div>
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
          <div className="px-6" style={{ height: "450px" }}>
            <Image
              src="/images/Rectangle 3-1.jpg"
              alt=""
              layout="fill"
              srcSet=""
            />
          </div>
        </div>{" "}
      </div>
      <div className="grid gap-8 mt-20 grid-cols-1 md:grid-cols-3 u-clearfix u-sheet mx-auto u-valign-middle u-sheet-1">
        {cards.map(({ img, text, head }) => (
          <div key={img} className="shadow-lg rounded-lg">
            <div>
              <Image
                // layout="fill"
                // objectFit="cover"
                className="rounded-none"
                src={img}
                alt=""
                srcSet=""
                height="250px"
                width="355px"
              />
            </div>
            <h1 className="text-blue-900 my-3 text-center font-semibold">
              {head}
            </h1>
            <div className="px-4 pb-2">{text}</div>
          </div>
        ))}
      </div>
      <div className="mt-12 u-clearfix u-sheet mx-auto u-valign-middle u-sheet-1">
        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/2 text-blue-900 font-semibold mb-6">
            {" "}
            <div>
              <h2
                style={{
                  textAlign: "left",
                  fontWeight: 400,
                  fontSize: "2.25rem",
                  lineHeight: 1.1,
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{ lineHeight: 2 }}
                  className="text-blue-900 font-semibold"
                >
                  Product Catalogue
                </span>
              </h2>
            </div>
            <p className="mb-6">
              We have a range of eye care products for regular or specific eye
              care necessities.{" "}
            </p>
            <p>To know more about contact lenses, call us at 604-XXX-XXXX</p>
          </div>
          <div className="md:w-1/2 grid gap-6 grid-cols-2">
            {imgArr.map((img) => (
              <Image key={img} src={img} height="250px" width="300px" />
            ))}
          </div>
        </div>
      </div>
      <div className="u-clearfix u-sheet mx-auto u-valign-middle u-sheet-1">
        <h2
          style={{
            textAlign: "left",
            fontWeight: 400,
            fontSize: "2.25rem",
            lineHeight: 1.1,
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <span
            style={{ lineHeight: 2 }}
            className="text-blue-900 font-semibold"
          >
            Brands We Love!
          </span>
        </h2>
      </div>
      <div className="u-clearfix u-sheet mx-auto u-valign-middle u-sheet-1">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {brandsArr.map((brand) =>  (
            <div key={brand}>
              {/* <Link href={brandsLinkArr[index++]} legacyBehavior passHref> */}
              <a target="_blank" href={brandsLinkArr[index++]} rel="noopener noreferrer">
              <Image
                src={"/images/brands/" + brand}
                //   layout="fill"
                height="150px"
                width="150x"
              />
              {/* </Link> */}
              </a>
            </div>
          )
          )}
        </div>
      </div>
    </main>
  );
}
