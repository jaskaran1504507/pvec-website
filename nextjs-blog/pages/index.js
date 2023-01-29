import Link from "next/link";
import Banner from "../components/Banner";
import Carouselcard from "../components/Carouselcard";
import ProductCatalogue from "../components/ProductCatalogue";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Button from "../components/Button";
import { banner } from "../constant";

export default function Home() {
  return (
    <main>
      <Carousel autoPlay swipeable infiniteLoop>
        {banner.map((b) => (
          <div className="pb-2 md:py-0" key={b.img}>
            <Banner banner={b.img} textColor={b.textColor} text={b.text}>
              <Link href="/bookings#appointment">
                <a href="#">
                  <Button className="bg-blue-400 text-white">
                    BOOK MY APPOINTMENT
                  </Button>
                </a>
              </Link>
            </Banner>
          </div>
        ))}
      </Carousel>{" "}
      {/* About us and product services */}
      <section className="u-align-left u-clearfix u-section-2" id="sec-0eb6">
        <div className="u-clearfix u-sheet mx-auto u-valign-middle u-sheet-1">
          <div
            style={{ margin: "60px 0" }}
            className="fr-view u-clearfix u-rich-text u-text u-text-1"
          >
            {/* About Us */}
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
                About Us
              </span>
            </h2>
            <p
              style={{ textAlign: "left", color: "#111111" }}
              className="py-5 "
            >
              We have been helping people with quality care from our team of
              expert eye doctors in downtown Vancouver since 2005. Our team of
              eye specialists have many years of professional experience and can
              provide proper diagnosis of eye health conditions right in the
              heart of Vancouver.
            </p>
            <p style={{ textAlign: "left" }}>
              If your eyes are causing you trouble, whether it's loss of vision
              or irritation, its time to search "Optometrist Near me." We are
              conveniently located downtown Vancouver, on the ground level on
              Burrard St and just West of Davie St.
            </p>

            <h2
              style={{
                textAlign: "left",
                fontSize: "2.25rem",
                lineHeight: 1.1,
              }}
              className="text-blue-900 mt-6 font-semibold"
            >
              Services &amp; Products
            </h2>
          </div>
        </div>
      </section>
      {/* Gird */}
      <Carouselcard />
      <ProductCatalogue />
    </main>
  );
}
