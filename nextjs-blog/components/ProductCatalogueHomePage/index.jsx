import React from "react";
import Link from "next/link";

export default function ProductCatalogueHomePage() {
  const imgArr = [
    "images/Rectangle 6-1.jpg",
    "images/Rectangle 4-2.jpg",
    "images/prod_cat_2.png",
    "images/Rectangle 6-4.jpg",
    "images/prod_cat_1.png",
    
    // "images/Rectangle 1-4.jpg",
    // "images/PVEC_ContactLenses.jpeg",
  ];
  return (
    <>
  {/* <!--====== ABOUT PART START ======--> */}
  <div className="container pt-120">
  <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title text-center pb-30">
              <div className="line m-auto"></div>
              <h3 className="title">
                Our Products
              </h3>
              <h4 >
                <span><br/>Style it, daily wearables, or for your eye protection. We have everything!</span>
              </h4>
            </div>
            {/* <!-- section title --> */}
          </div>
        </div>
<section id="about" class="about-area pt-70">
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <div
          class="about-content mt-50 wow fadeInLeftBig"
          data-wow-duration="1s"
          data-wow-delay="0.5s"
        >
          <div class="section-title">
            <div class="line"></div>
            <h3 class="title">
              Contact Lenses
            </h3>
            <h3>
              <span><br/>Vision correction | Designer - All categories available</span>
            </h3>
          </div>
          {/* <!-- section title --> */}
          <p class="text">
          Experience clear vision with our wide selection of contact lenses. Perfect for any need, prescription or non-prescription available.
          </p>
          <a href="#/service-products" class="main-btn">Get yours now</a>
        </div>
        {/* <!-- about content --> */}
      </div>
      <div class="col-lg-6">
        <div
          class="about-image text-center mt-50 wow fadeInRightBig"
          data-wow-duration="1s"
          data-wow-delay="0.5s"
        >
          <img src="images/26415.jpg" alt="about" style={{maxHeight:'80%', maxWidth:'80%'}}/>
        </div>
        {/* <!-- about image --> */}
      </div>
    </div>
    {/* <!-- row --> */}
  </div>
  {/* <!-- container --> */}
  <div class="about-shape-1">
    <img src="assets/images/about-shape-1.svg" alt="shape" />
  </div>
</section>

{/* <!--====== ABOUT PART ENDS ======--> */}

{/* <!--====== ABOUT PART START ======--> */}

<section class="about-area pt-70">
  <div class="about-shape-2">
    <img src="assets/images/about-shape-2.svg" alt="shape" />
  </div>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 order-lg-last">
        <div
          class="about-content mt-50 wow fadeInLeftBig"
          data-wow-duration="1s"
          data-wow-delay="0.5s"
        >
          <div class="section-title">
            <div class="line"></div>
            <h3 class="title">
              Eye Wear
            </h3>
            <h3>
              <span><br/>Checkout our exclusive brand associates </span>
            </h3>
          </div>
          {/* <!-- section title --> */}
          <p class="text">
          Upgrade your style with our collection of trendy eye wears. From classic to modern, we have something for everyone.
          </p>
          <a href="/service-products" class="main-btn">Style it now</a>
        </div>
        {/* <!-- about content --> */}
      </div>
      <div class="col-lg-6 order-lg-first">
        <div
          class="about-image text-center mt-50 wow fadeInRightBig"
          data-wow-duration="1s"
          data-wow-delay="0.5s"
        >
          <img src="images/eyewears.jpg" alt="about" style={{maxHeight:'80%', maxWidth:'80%'}}/>
        </div>
        {/* <!-- about image --> */}
      </div>
    </div>
    {/* <!-- row --> */}
  </div>
  {/* <!-- container --> */}
</section>

{/* <!--====== ABOUT PART START ======--> */}

<section class="about-area pt-70">
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <div
          class="about-content mt-50 wow fadeInLeftBig"
          data-wow-duration="1s"
          data-wow-delay="0.5s"
        >
          <div class="section-title">
            <div class="line"></div>
            <h3 class="title">
              Eye Drops
            </h3>
            <h3>
              <span><br/>Protect your eyes</span>
            </h3>
          </div>
          {/* <!-- section title --> */}
          <p class="text">
          Relieve dry, irritated eyes with our collection of high-quality eye drops. Perfect for daily use and for contact lens wearers.
          </p>
          <a href="/service-products" class="main-btn">Get it now</a>
        </div>
        {/* <!-- about content --> */}
      </div>
      <div class="col-lg-6">
        <div
          class="about-image text-center mt-50 wow fadeInRightBig"
          data-wow-duration="1s"
          data-wow-delay="0.5s"
        >
          <img src="images/eyedrops.jpg" alt="about" style={{maxHeight:'80%', maxWidth:'80%'}}/>
        </div>
        {/* <!-- about image --> */}
      </div>
    </div>
    {/* <!-- row --> */}
  </div>
  {/* <!-- container --> */}
  <div class="about-shape-1">
    <img src="assets/images/about-shape-1.svg" alt="shape" />
  </div>
</section>
<div className="flex justify-center pt-12">
          <Link href="/service-products">
                <u className="explore-services-container uppercase rounded-full white text-sm font-semibold px-4 py-3">
                Explore our range of products{" "}
                </u>
              </Link>
        </div>

</div>
{/* <!--====== ABOUT PART ENDS ======--> */}

{/* <!--====== ABOUT PART ENDS ======--> */}


    </>
  );
}
