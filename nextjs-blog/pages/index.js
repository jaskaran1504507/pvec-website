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

      <div className="md:mt-0 mt-28">
        <Carousel dynamicHeight autoPlay swipeable infiniteLoop interval="5000">
          {banner.map((b) => (
            <div className="pb-2 md:py-0 md:h-auto h-96" key={b.img}>
              <Banner
                banner={b.img}
                textColor={b.textColor}
                text={b.text}
                description={b.description}
                subText={b.subText}
                subText2={b.subText2}
                subText3={b.subText3}
              ></Banner>
            </div>
          ))}
        </Carousel>
      </div>
      <ServicesCatalogueHomePage />
      <ProductCatalogueHomePage />
      <FeedbackHomePage />
    </main>
  );
}
