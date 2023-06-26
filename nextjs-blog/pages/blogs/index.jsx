import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import Banner from "../../components/Banner";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import BlogList from "../../components/BlogList";

export default function Blogs() {
  // const blogsList = [
  //   {
  //     id: 1,
  //     title: 'My first post',
  //     description: 'A high quality solution beautifully designed for startups',
  //     publishedDate: 'Aug 2nd',
  //     coverImage : '/images/pexels-photo-268533.jpeg',
  //   },
  //   {
  //     id: 2,
  //     title: 'My second post',
  //     description:
  //       'A high quality solution beautifully designed for startups and Bussiness schools',
  //     publishedDate: 'Mar 1st',
  //     coverImage : '/images/pexels-photo-268533.jpeg'
  //   },
  //   {
  //     id: 3,
  //     title: 'My third post',
  //     description: 'A high quality solution beautifully designed for startups',
  //     publishedDate: 'Jan 2nd',
  //     coverImage : '/images/pexels-photo-268533.jpeg'
  //   },
  //   {
  //     id: 4,
  //     title: 'My fourth post',
  //     description:
  //       'A high quality solution beautifully designed for startups and Bussiness schools. ',
  //     publishedDate: 'Dec 24th',
  //     coverImage : '/images/pexels-photo-268533.jpeg'
  //   },
  //   {
  //     id: 5,
  //     title: 'My fifth post',
  //     description: 'A high quality solution beautifully designed for startups',
  //     publishedDate: 'Nov 10th',
  //   },
  // ]
  const blogsList = [
    {
      id: 1,
      title: 'FAQ',
      description: 'Frequently asked question and their answers from Performance Vision EyeCare',
      publishedDate: '18 June',
      // coverImage : '/images/pexels-photo-268533.jpeg',
      idTitle : 'faq'
    },
  ]
  return (

    <>
      {/* <div className="flex align-items-center justify-content-between mt-20 mx-10">
 
    <div
              className="about-content mt-50 wow fadeInLeftBig"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <div className="section-title-promotions">
                <h3 className="title-promotions">No Blogs Available! <br/>
                Our expert doctors are curating eye health related blogs for you. Do   visit soon to get to know more about your eye health.</h3>
                
              </div>
            </div>
  <img src="images/no-blog.jpg" alt="Snow" style={{width:'70%', maxHeight:'540px'}}/>
</div> */}
      <div className="grid gap-16 mt-20 grid-cols-1 md:grid-cols-2 u-clearfix u-sheet mx-auto u-valign-middle u-sheet-1">
        <div>
          <h2
            style={{
              textAlign: "left",
              fontWeight: 400,
              fontSize: "2.25rem",
              lineHeight: 1.1,
            }}
          >
            <span
              style={{ lineHeight: 2 }}
              className="text-blue-900 font-semibold"
            >
              Our Blogs
            </span>
          </h2>
        </div>
      </div>

      <BlogList className = "mt-20" blogsList={blogsList} />
    </>
  );
}
