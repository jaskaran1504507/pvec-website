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
      <Helmet>
        <script
          src="assets/js/vendor/jquery-1.12.4.min.js"
          type="text/javascript"
        />
        <script
          src="assets/js/vendor/modernizr-3.7.1.min.js"
          type="text/javascript"
        />
        <script src="assets/js/popper.min.js" type="text/javascript" />
        <script src="assets/js/plugins.js" type="text/javascript" />
        <script src="assets/js/slick.min.js" type="text/javascript" />
        <script src="assets/js/ajax-contact.js" type="text/javascript" />
        <script src="assets/js/waypoints.min.js" type="text/javascript" />
        <script
          src="assets/js/jquery.counterup.min.js"
          type="text/javascript"
        />
        <script
          src="assets/js/jquery.magnific-popup.min.js"
          type="text/javascript"
        />
        <script src="assets/js/jquery.easing.min.js" type="text/javascript" />
        <script src="assets/js/scrolling-nav.js" type="text/javascript" />
        <script src="assets/js/wow.min.js" type="text/javascript" />
        <script src="assets/js/particles.min.js" type="text/javascript" />

        <script src="assets/js/main.js" type="text/javascript" />
      </Helmet>
      <Carousel autoPlay swipeable infiniteLoop>
        {banner.map((b) => (
          <div className="pb-2 md:py-0" key={b.img}>
            <Banner
              banner={b.img}
              textColor={b.textColor}
              text={b.text}
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
