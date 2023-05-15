import React from "react";
import Link from "next/link";

export default function FeedbackHomePage() {
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
      {/* <!--====== TESTIMONIAL PART START ======--> */}

      {/* <!--====== TESTIMONIAL PART ENDS ======--> */}
    </>
  );
}
const commentedCode = `<section id="testimonial" className="testimonial-area pt-120">
<div className="container">
  <div className="row justify-content-center">
    <div className="col-lg-5">
      <div className="section-title text-center pb-10">
        <div className="line m-auto"></div>
        <h3 className="title">Users sharing<span> their experience</span></h3>
      </div>
      {/* <!-- section title --> */}
    </div>
  </div>
  {/* <!-- row --> */}
  <div
    className="row testimonial-active wow fadeInUpBig"
    data-wow-duration="1s"
    data-wow-delay="0.8s"
  >
    <div className="col-lg-4">
      <div className="single-testimonial">
        <div
          className="testimonial-review d-flex align-items-center justify-content-between"
        >
          <div className="quota">
            <i className="lni-quotation"></i>
          </div>
          <div className="star">
            <ul>
              <li><i className="lni-star-filled"></i></li>
              <li><i className="lni-star-filled"></i></li>
              <li><i className="lni-star-filled"></i></li>
              <li><i className="lni-star-filled"></i></li>
              <li><i className="lni-star-filled"></i></li>
            </ul>
          </div>
        </div>
        <div className="testimonial-text">
          <p className="text">
            Lorem ipsum dolor sit amet,consetetur sadipscing elitr,
            seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor
            sit amet,consetetur sadipscing elitr, seddiam nonu.
          </p>
        </div>
        <div className="testimonial-author d-flex align-items-center">
          <div className="author-image">
            <img
              className="shape"
              src="assets/images/textimonial-shape.svg"
              alt="shape"
            />
            <img
              className="author"
              src="assets/images/author-1.png"
              alt="author"
            />
          </div>
          <div className="author-content media-body">
            <h6 className="holder-name">Jenny Deo</h6>
            <p className="text">CEO, SpaceX</p>
          </div>
        </div>
      </div>
      {/* <!-- single testimonial --> */}
    </div>
    <div className="col-lg-4">
      <div className="single-testimonial">
        <div
          className="testimonial-review d-flex align-items-center justify-content-between"
        >
          <div className="quota">
            <i className="lni-quotation"></i>
          </div>
          <div className="star">
            <ul>
              <li><i className="lni-star-filled"></i></li>
              <li><i className="lni-star-filled"></i></li>
              <li><i className="lni-star-filled"></i></li>
              <li><i className="lni-star-filled"></i></li>
              <li><i className="lni-star-filled"></i></li>
            </ul>
          </div>
        </div>
        <div className="testimonial-text">
          <p className="text">
            Lorem ipsum dolor sit amet,consetetur sadipscing elitr,
            seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor
            sit amet,consetetur sadipscing elitr, seddiam nonu.
          </p>
        </div>
        <div className="testimonial-author d-flex align-items-center">
          <div className="author-image">
            <img
              className="shape"
              src="assets/images/textimonial-shape.svg"
              alt="shape"
            />
            <img
              className="author"
              src="assets/images/author-2.png"
              alt="author"
            />
          </div>
          <div className="author-content media-body">
            <h6 className="holder-name">Marjin Otte</h6>
            <p className="text">UX Specialist, Yoast</p>
          </div>
        </div>
      </div>
      {/* <!-- single testimonial --> */}
    </div>
    <div className="col-lg-4">
      <div className="single-testimonial">
        <div
          className="testimonial-review d-flex align-items-center justify-content-between"
        >
          <div className="quota">
            <i className="lni-quotation"></i>
          </div>
          <div className="star">
            <ul>
              <li><i className="lni-star-filled"></i></li>
              <li><i className="lni-star-filled"></i></li>
              <li><i className="lni-star-filled"></i></li>
              <li><i className="lni-star-filled"></i></li>
              <li><i className="lni-star-filled"></i></li>
            </ul>
          </div>
        </div>
        <div className="testimonial-text">
          <p className="text">
            Lorem ipsum dolor sit amet,consetetur sadipscing elitr,
            seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor
            sit amet,consetetur sadipscing elitr, seddiam nonu.
          </p>
        </div>
        <div className="testimonial-author d-flex align-items-center">
          <div className="author-image">
            <img
              className="shape"
              src="assets/images/textimonial-shape.svg"
              alt="shape"
            />
            <img
              className="author"
              src="assets/images/author-3.png"
              alt="author"
            />
          </div>
          <div className="author-content media-body">
            <h6 className="holder-name">David Smith</h6>
            <p className="text">CTO, Alphabet</p>
          </div>
        </div>
      </div>
      {/* <!-- single testimonial --> */}
    </div>
    <div className="col-lg-4">
      <div className="single-testimonial">
        <div
          className="testimonial-review d-flex align-items-center justify-content-between"
        >
          <div className="quota">
            <i className="lni-quotation"></i>
          </div>
          <div className="star">
            <ul>
              <li><i className="lni-star-filled"></i></li>
              <li><i className="lni-star-filled"></i></li>
              <li><i className="lni-star-filled"></i></li>
              <li><i className="lni-star-filled"></i></li>
              <li><i className="lni-star-filled"></i></li>
            </ul>
          </div>
        </div>
        <div className="testimonial-text">
          <p className="text">
            Lorem ipsum dolor sit amet,consetetur sadipscing elitr,
            seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor
            sit amet,consetetur sadipscing elitr, seddiam nonu.
          </p>
        </div>
        <div className="testimonial-author d-flex align-items-center">
          <div className="author-image">
            <img
              className="shape"
              src="assets/images/textimonial-shape.svg"
              alt="shape"
            />
            <img
              className="author"
              src="assets/images/author-2.png"
              alt="author"
            />
          </div>
          <div className="author-content media-body">
            <h6 className="holder-name">Fajar Siddiq</h6>
            <p className="text">COO, MakerFlix</p>
          </div>
        </div>
      </div>
      {/* <!-- single testimonial --> */}
    </div>
  </div>
  {/* <!-- row --> */}
</div>
{/* <!-- container --> */}
<div className="flex justify-center pt-12">
        <Link href="#">
              <u className="explore-services-container uppercase rounded-full white text-sm font-semibold px-4 py-3">
              Help us grow, share your feedback{" "}
              </u>
            </Link>
      </div>
</section>`;
