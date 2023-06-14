import React from "react";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Review = ({
  text = `     Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
nulla reprehenderit beatae miima maxime cupiditate enim aut cum
impedit nihil eum, porro iste explicabo soluta aspernatur blanditiis
neque magni ullam.`,
  date = "11.20.2022",
  user = "User",
}) => (
  <div className="feed_box">
    <div className="user_icon">
      <img src="https://raw.githubusercontent.com/ikrombdm/data-for-image/main/details/five.jpg" />
    </div>
    <ul className="feed__hed">
      <li className="usr_img">
        <img
          src="https://raw.githubusercontent.com/ikrombdm/data-for-image/main/details/PngItem_690659.png"
          width="40px"
        />
      </li>
      <li>
        <h1>{user}</h1>
      </li>
    </ul>
    <div className="feed_txt">
      <summary>{text}</summary>
    </div>
    <ul className="feed_foot">
      <li>{date}</li>
      {/* <li>
            <a href="#">Ko'rish</a>
          </li> */}
    </ul>
  </div>
);
const component = [
  [<Review />, <Review />, <Review />],
  [<Review />, <Review />, <Review />],
  [<Review />, <Review />, <Review />],
];
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
      <section id="testimonial" className="testimonial-area pt-120">
        <div className="row mx-auto container">
          <div className="col-lg-5">
            <div className="section-title text-center pb-10">
              <div className="line "></div>
              <h3 className="title">
                Users sharing<span> their experience</span>
              </h3>
            </div>
            {/* <!-- section title --> */}
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center ">
            <Carousel autoPlay infiniteLoop className="w-full">
              {component.map((d, i) => (
                <div key={i} className="flex justify-between">
                  {d}
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
      {/* <!--====== TESTIMONIAL PART ENDS ======--> */}
    </>
  );
}
