import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import ServicesCatalogueHomePage from "../components/ServicesCatalogueHomePage";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import { banner } from "../constant";
import ProductCatalogueHomePage from "../components/ProductCatalogueHomePage";
import FeedbackHomePage from "../components/FeedbackHomePage";
import { Helmet } from "react-helmet";
import { callApi } from "../utils/apiUtils";
import Endpoints from "../utils/endpoints";
import Loading from "../components/Loading";
import BannerSlider from "../components/BannerSlider";

export default function Home() {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    callApi({
      uriEndPoint: {
        ...Endpoints.getBanners,
      },
    })
      .then((res) => {
        console.log("res", res);
        setBanner(res?.banners);
      })
      .catch();
  }, []);

  return (
    <main>
      <Helmet></Helmet>

      <div className="md:mt-0 mt-2 ">
        {banner.length ? (
          <BannerSlider slides={banner}/>
        ) : (
          <Loading />
        )}
      </div>

      {/* <div className="md:mt-0 mt-28 block md:hidden">
        <Carousel dynamicHeight autoPlay swipeable infiniteLoop interval="5000">
          {banner
            .filter((_, i) => i <= 1)
            .map((b) => (
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
          <div
            className="pb-2 md:py-0 md:h-auto h-96"
            key={banner[2].img + "333"}
          >
            <Banner
              banner={banner[2].img}
              textColor={banner[2].textColor}
              text={banner[2].text}
              description={banner[2].description}
              subText={banner[2].subText}
              // subText2={banner[2].subText2}
              // subText3={banner[2].subText3}
            ></Banner>
          </div>
          <div className="pb-2 md:py-0 md:h-auto h-96" key={banner[2].img}>
            <Banner
              banner={banner[2].img}
              textColor={banner[2].textColor}
              // text={banner[2].text}
              // description={banner[2].description}
              // subText={banner[2].subText}
              subText2={banner[2].subText2}
              subText3={banner[2].subText3}
            ></Banner>
          </div>
        </Carousel>
      </div> */}
      <ServicesCatalogueHomePage />
      <ProductCatalogueHomePage />
      <FeedbackHomePage />
    </main>
  );
}
