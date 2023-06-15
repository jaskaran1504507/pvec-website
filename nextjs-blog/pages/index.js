import Banner from "../components/Banner";
import ServicesCatalogueHomePage from "../components/ServicesCatalogueHomePage";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { banner } from "../constant";
import ProductCatalogueHomePage from "../components/ProductCatalogueHomePage";
import FeedbackHomePage from "../components/FeedbackHomePage";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <main>
      <Helmet></Helmet>
      <Carousel autoPlay swipeable infiniteLoop>
        {banner.map((b) => (
          <div className="pb-2 md:py-0" key={b.img}>
            <Banner
              banner={b.img}
              textColor={b.textColor}
              text={b.text}
              description={b.description}
              subText={b.subText}
            ></Banner>
          </div>
        ))}
      </Carousel>{" "}
      <ServicesCatalogueHomePage />
      <ProductCatalogueHomePage />
      <FeedbackHomePage />
    </main>
  );
}
