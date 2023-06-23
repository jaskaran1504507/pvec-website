import React from "react";
import Link from "next/link";

export default function ServicesCatalogueHomePage() {
  const imgArr = [
    "images/Rectangle 6-1.jpg",
    "images/Rectangle 4-2.jpg",
    "images/prod_cat_2.png",
    "images/Rectangle 6-4.jpg",
    "images/prod_cat_1.png"
  ];
  return (
    
    // <!--====== SERVICES PART START ======-->

    <section id="features" className="services-area pt-82 px-px-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title text-center pb-30">
              <div className="line m-auto"></div>
              <h3 className="title">
                Our Services
              </h3>
              <h3>
                <span className="text-lg font-semibold"><br/>Everything you need for happy, healthy eyes!</span>
              </h3>
            </div>
            {/* <!-- section title --> */}
          </div>
        </div>
        {/* <!-- row --> */}
        <div className="row justify-content-center">
        {/* <div className="flex items-stretch -mx-4"> */}
        <div className="col-lg-1.5 col-md-0 col-sm-0"></div>
          <div className="col-lg-3 col-md-7 col-sm-8 h-full">
            <div
              className="single-services text-center mt-30 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div className="services-icon">
                <img
                  className="shape"
                  src="assets/images/services-shape.svg"
                  alt="shape"
                />
                <img
                  className="shape-1"
                  src="/images/Rectangle 1-6.jpg"
                  alt="shape"
                  style={{height: '100%', width: '200%'}}
                />
                {/* <i className="lni-baloon"></i> */}
              </div>
              <div className="services-content mt-30">
                <h4 className="services-title"><a href="/service-products" >Comprehensive Eye Exam</a></h4>
                <p className="text text-base">
                for Adults/Senior/Children
                </p>
                <a className="more" href="/service-products"
                  >Learn More <i className="lni-chevron-right"></i></a>
              </div>
            </div>
            {/* <!-- single services --> */}
          </div>
          <div className="col-lg-3 col-md-7 col-sm-8 h-full	">
            <div
              className="single-services text-center mt-30 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <div className="services-icon">
                <img
                  className="shape"
                  src="assets/images/services-shape.svg"
                  alt="shape"
                />
                <img 
                  className="shape-1"
                  src="/images/Rectangle 1-4.jpg"
                  alt="shape"
                  style={{height: '100%', width: '200%'}}
                />
                {/* <i className="lni-cog"></i> */}
              </div>
              <div className="services-content mt-30">
                <h4 className="services-title"><a href="/service-products">Computer Vision Syndrome
</a></h4>
                <p className="texttext-base">
                Eye problems caused by prolonged computer use including: Eye irritation (Dry eyes, itchy eyes, red eyes) Blurred vision. Headaches.
                </p>
                <a className="more" href="/service-products">Learn More <i className="lni-chevron-right"></i></a>
              </div>
            </div>
            {/* <!-- single services --> */}
          </div>
          <div className="col-lg-3 col-md-7 col-sm-8 h-full	">
            <div
              className="single-services text-center mt-30 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.8s"
            >
              <div className="services-icon">
                <img
                  className="shape"
                  src="assets/images/services-shape.svg"
                  alt="shape"
                />
                <img
                  className="shape-1"
                  src="/images/Rectangle 1-5.jpg"
                  alt="shape"
                  style={{height: '100%', width: '200%'}}
                />
                {/* <i className="lni-bolt-alt"></i> */}
              </div>
              <div className="services-content mt-30">
                <h4 className="services-title"><a href="/service-products">Lasik/PRK Surgery Consult</a></h4>
                <p className="text text-base">
                Pre-Op and Post-Op Care Cataract Surgery Management, Glaucoma Treatment, Macular Degeneration Care, Diabetic Eye Care.
                </p>
                <a className="more" href="/service-products">Learn More <i className="lni-chevron-right"></i></a>
              </div>
            </div>
            {/* <!-- single services --> */}
          </div>
          <div className="col-lg-1.5 col-md-0 col-sm-0"></div>
          
        </div>
        {/* <!-- row --> */}
        {/* Explore more about our services */}
       
      </div>
      <div className="flex justify-center pt-12">
          <Link href="/service-products">
                <u className="explore-services-container uppercase rounded-full white text-lg font-semibold px-4 py-3">
                Explore more of our services{" "}
                </u>
              </Link>
        </div>
      {/* <!-- container --> */}
    </section>
  );
}

{/* <div className="container mx-auto p-6">
  <div className="flex items-stretch -mx-4">
    <div className="flex-1 p-4">
      <div className="block bg-white overflow-hidden border-2 h-full">
        <div className="p-4">
          <h2 className="mt-2 mb-2 font-bold text-2xl font-Headingg">
            Card Name
          </h2>
          <div className="mb-4 flex flex-wrap">
            <span className="mr-2">Link 1</span>
            <span>Link 2</span>
          </div>

          <p className="text-md text-justify">Some Description</p>
        </div>
        <div className="p-4 flex flex-wrap items-center">
          <p className="px-1 py-2 tracking-wide text-xs mr-2 mb-2">Tag #1</p>
          <p className="px-1 py-2 tracking-wide text-xs mr-2 mb-2">Tag #2</p>
        </div>
      </div>
    </div>
    
    <div className="flex-1 p-4">
      <div className="block bg-white overflow-hidden border-2 h-full">
        <div className="p-4">
          <h2 className="mt-2 mb-2 font-bold text-2xl font-Headingg">
            Card Name
          </h2>
          <div className="mb-4 flex flex-wrap">
            <span className="mr-2">Link 1</span>
            <span>Link 2</span>
          </div>

          <p className="text-md text-justify">Some Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel enim lectus.</p>
        </div>
        <div className="p-4 flex flex-wrap items-center">
          <p className="px-1 py-2 tracking-wide text-xs mr-2 mb-2">Tag #1</p>
          <p className="px-1 py-2 tracking-wide text-xs mr-2 mb-2">Tag #2</p>
        </div>
      </div>
    </div>
  </div>
</div> */}