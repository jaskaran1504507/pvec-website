import React, { useEffect, useState } from "react";
import Reviews from "../../utils/services/fetchGoogleReviews";
import Link from "next/link";
import { callApi } from "../../utils/apiUtils";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 3,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 2,
    partialVisibilityGutter: 30,
  },
};
export default function FeedbackHomePage() {
  //   const [reviews, setReviews] = useState([]);

  //   // useEffect(() => {
  //   //   //Runs only on the first render
  //   //   setReviews(fetchGoogleReviews());
  //   // }, []);

  //   const imgArr = [
  //     "images/Rectangle 6-1.jpg",
  //     "images/Rectangle 4-2.jpg",
  //     "images/prod_cat_2.png",
  //     "images/Rectangle 6-4.jpg",
  //     "images/prod_cat_1.png",

  //     // "images/Rectangle 1-4.jpg",
  //     // "images/PVEC_ContactLenses.jpeg",
  //   ];
  //   return (
  //     <>
  //       {/* <!--====== TESTIMONIAL PART START ======--> */}
  //       {/* <Reviews/> */}
  //       {/* <!--====== TESTIMONIAL PART ENDS ======--> */}
  //     </>
  //   );

  const [reviews, setReviews] = useState([]);
  const [seeMore, setSeeMore] = useState({});

  useEffect(() => {
    const fetchReviews = async () => {
      callApi({ uriEndPoint: { uri: "/reviews", method: "GET", version: "" } })
        .then((res) => {
          // console.log("res : ", res);
          setReviews(res.reviews);
        })
        .catch((err) => console.log("err", err));
    };

    fetchReviews();
  }, []);

  // Render the reviews on your website
  return (
    <>
      {/* <div>
      {reviews && reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review.author_name}>
            <p>{review.author_name}</p>
            <p>{review.profile_photo_url}</p>
            <p>{review.text}</p>
            <p>{review.rating}</p>
          </div>
        ))
      ) : (
        <p>No reviews found.</p>
      )}
    </div> */}
      <section id="testimonial" className="testimonial-area pt-20">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="section-title text-center pb-10">
                <div className="line m-auto"></div>
                <h3 className="title">
                  See what<span> our patients</span> are saying...
                </h3>
              </div>
              {/* <!-- section title --> */}
            </div>
          </div>
          {/* <!-- row --> */}
          {/* <div
            className="row testimonial-active wow fadeInUpBig"
            data-wow-duration="1s"
            data-wow-delay="0.8s"
          > */}

          {/* <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"> */}
          <div className="flex justify-center">
            <Carousel
              class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
              additionalTransfrom={0}
              arrows={false}
              autoPlaySpeed={4000}
              centerMode={false}
              className=""
              containerClass="container md:px-4 px-0"
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              responsive={responsive}
              // autoPlay
              rewind
              rewindWithAnimation
              shouldResetAutoplay
              showDots
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {reviews && reviews.length > 0 ? (
                reviews.map((review) => (
                  <div
                    className="single-testimonial card flex flex-col border border-gray-300 mx-2"
                    style={{ height: "420px" }}
                  >
                    <div className="card-content flex-grow px-4 pt-2">
                      <div className="testimonial-review d-flex align-items-center justify-content-between">
                        <div className="quota">
                          <i className="lni-quotation"></i>
                        </div>
                        <div className="star">
                          <ul>
                            <li>
                              <i className="lni-star-filled"></i>
                            </li>
                            <li>
                              <i className="lni-star-filled"></i>
                            </li>
                            <li>
                              <i className="lni-star-filled"></i>
                            </li>
                            <li>
                              <i className="lni-star-filled"></i>
                            </li>
                            {review.rating == 5 ? (
                              <>
                                <li>
                                  <i className="lni-star-filled"></i>
                                </li>
                              </>
                            ) : (
                              <>
                                <li>
                                  <i className="lni-star"></i>
                                </li>
                              </>
                            )}
                          </ul>
                        </div>
                      </div>
                      <div className="testimonial-text">
                        <p className="text">
                          <div className="px-3 py-2 ">
                            {seeMore[review.text] || review.text.slice(0, 250)}
                            {review.text.length > 250 && (
                              <span
                                onClick={() => {
                                  setSeeMore((prev) => ({
                                    ...prev,
                                    [review.text]: prev[review.text]
                                      ? ""
                                      : review.text,
                                  }));
                                }}
                                className="pl-2 text-blue-900 hover:underline cursor-pointer"
                              >
                                see {seeMore[review.text] ? "less" : "more"}...
                              </span>
                            )}
                          </div>
                        </p>
                      </div>
                    </div>
                    <div className="card-button">
                      <div className="mt-0 testimonial-author d-flex align-items-center">
                        <div className="author-image">
                          <img
                            className="shape"
                            src="assets/images/textimonial-shape.svg"
                            alt="shape"
                          />
                          <img
                            className="author"
                            src={review.profile_photo_url}
                            alt="author"
                          />
                        </div>
                        <div className="author-content media-body">
                          <h6 className="holder-name">{review.author_name}</h6>
                          {/* <p className="text">UX Specialist, Yoast</p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No reviews found.</p>
              )}
            </Carousel>
          </div>
          {/* </div> */}
        </div>
        <div className="flex justify-center pt-12">
          <Link href="https://g.page/r/Ce2p8mT6SaHEEBM/review" target="_blank">
            <p className="explore-services-container uppercase rounded-full white text-sm font-semibold px-4 py-3">
              Help us grow, share your feedback{" "}
            </p>
          </Link>
        </div>
      </section>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="card flex flex-col border border-gray-300">
          <div className="card-content flex-grow p-4">
            <h3>Card 1</h3>
            <p>This is the content of card 1. It can have varying lengths.</p>
          </div>
          <div className="card-button text-center py-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Action</button>
          </div>
        </div>

        <div className="card flex flex-col border border-gray-300">
          <div className="card-content flex-grow p-4">
            <h3>Card 2</h3>
            <p>This is the content of card 2.</p>
          </div>
          <div className="card-button text-center py-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Action</button>
          </div>
        </div>

        <div className="card flex flex-col border border-gray-300">
          <div className="card-content flex-grow p-4">
            <h3>Card 3</h3>
            <p>This is the content of card 3. It can be much longer and wrap to multiple lines.</p>
          </div>
          <div className="card-button text-center py-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Action</button>
          </div>
        </div>
      </div> */}
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
