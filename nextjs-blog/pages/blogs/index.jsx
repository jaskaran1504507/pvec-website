import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import Banner from "../../components/Banner";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Blogs() {
  return (

    <>
    <div className="flex align-items-center justify-content-between mt-20 mx-10">
 
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
</div>
</>
  );
}
