import React from "react";
import Banner from "../../components/Banner";
import { brandsArr, eyeBrand } from "../../constant";
import ProductsComponent from "../../components/ProductsComponent";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Image from "next/image";
import { useRouter } from "next/router";
const brands = [[], [], [], []];

for (let index = 0; index < brandsArr.length; index++) {
  const brand = brandsArr[index];
  console.log(Math.floor(index / 4));
  brands[Math.floor(index / 4)].push(
    <div key={brand.link}>
      {/* <Link href={brandsLinkArr[index++]} legacyBehavior passHref> */}
      <a target="_blank" href={brand.addr} rel="noopener noreferrer">
        <div
          style={{
            height: "200px",
            position: "relative",
            width: "200px",
          }}
        >
          <Image
            src={"/images/brands/" + brand.link}
            height="100"
            width="200"
            alt="brd"
          />
        </div>
      </a>
      {/* </Link> */}
    </div>
  );
}
console.log(brands);
export default function GlassesContacts() {
  const router = useRouter();
  return (
    <main className="mt-32">
      <ProductsComponent />
      {/* <Banner
        banner="banner-contact-img"
        text={
          <p className="text-blue-900 ml-12 mt-4 md:m-0">Glasses & Contacts</p>
        }
      />

      <div className="u-clearfix u-sheet mx-auto u-valign-middle u-sheet-1 ">
        <h2
          style={{
            textAlign: "left",
            lineHeight: 1.1,
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <span
            style={{ lineHeight: 2 }}
            className="text-blue-900 text-center md:text-left text-4xl font-semibold"
          >
            Designer Eyewear
          </span>
        </h2>
        <p>
          We have the latest in digital and high definition single vision,
          bifocal, trifocal and progressive (no-line) lenses. Build your own
          lenses to custom fit your needs - we offer a variety of options such
          as UVA/UVB block, blue light filter, computer anti-fatigue,
          anti-reflective, anti-fog, high-index, safety, transitions, tinted or
          polarized. With the advancement of technology, the possibility of
          superb vision correction is now possible. We offer front surface
          digital lenses that will widen your field of view (taking away that
          swimming effect) and give you crisp, clear vision throughout.
        </p>
        <br />
        <p>
          Whether your needs are refractive or strictly for fashion, we can help
          you find your new look! Stop in and browse our vast selection of
          premium quality designer frames. Our styles are constantly updated
          from our broad range of suppliers, representing the latest trends from
          around the world.
        </p>
        <br />
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
            How Much Do New Frames Cost?
          </span>
        </h2>
        <p>
          Many people believe that glasses must cost more from a doctor’s
          office...in truth, our fees are usually substantially lower. We offer
          a range of styles that can fit any budget, and offer direct billing
          for glasses orders. - Visit our promotions page to see what deals are
          on now!
        </p>
        <Banner banner="banner-contact-img-1" />
        <h2
          style={{
            textAlign: "left",
            lineHeight: 1.1,
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <span
            style={{ lineHeight: 2 }}
            className="text-blue-900 text-center md:text-left text-4xl font-semibold"
          >
            Brand Name Fashion Frames
          </span>
        </h2>
        <ul className="grid grid-cols-2">
          {eyeBrand.map((n) => (
            <li className="list-disc">
              <p className="text-left"> {n}</p>
            </li>
          ))}
        </ul>
      </div> */}

      {/* <div className="mt-4">
        <Carousel
          autoPlay
          swipeable
          transitionTime={1500}
          infiniteLoop
          centerMode
        >
          {brands.map((b, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-5"
            >
              {b}
            </div>
          ))}
        </Carousel>
      </div> */}
    </main>
  );
}
