import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import Banner from "../../components/Banner";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Promotions() {
  return (
   
    // <section className="about-area pt-70">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-lg-6">
    //         <div
    //           className="about-content mt-50 wow fadeInLeftBig"
    //           data-wow-duration="1s"
    //           data-wow-delay="0.5s"
    //         >
    //           <div className="section-title">
    //             <h3 className="title">Eye Drops</h3>
                
    //           </div>
    //         </div>
    //         {/* <!-- about content --> */}
    //       </div>
    //       <div className="col-lg-6">
    //         <div
    //           className="about-image text-center mt-50 wow fadeInRightBig"
    //           data-wow-duration="1s"
    //           data-wow-delay="0.5s"
    //         >
    //           <img
    //             src="images/eyedrops.jpg"
    //             alt="about"
    //             style={{ maxHeight: "80%", maxWidth: "80%" }}
    //           />
    //         </div>
    //         {/* <!-- about image --> */}
    //       </div>
    //     </div>
    //     {/* <!-- row --> */}
    //   </div>
    //   {/* <!-- container --> */}
    //   <div className="about-shape-1">
    //     <img src="assets/images/about-shape-1.svg" alt="shape" />
    //   </div>
    // </section>

    <>
    <div className="flex align-items-center justify-content-between mt-20 mx-10">
 
    <div
              className="about-content mt-50 wow fadeInLeftBig"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <div className="section-title-promotions">
                <h3 className="title-promotions">Ahh, ha! We don't have any active promotions yet, please check back in sometime </h3>
                
              </div>
            </div>
  <img src="images/no-promotions-2.jpg" alt="Snow" style={{width:'70%', maxHeight:'540px'}}/>
</div>
</>
  );
}
