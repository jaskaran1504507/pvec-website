import Image from "next/image";
import Link from "next/link";
import React from "react";
import Banner from "../../components/Banner";

export default function AboutUs() {
  return (
    <main>
      <div
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          background: "#F6F8F3",
        }}
      >
        <div
          className={` banner-about-us-img u-active text-center u-section-1-1 banner-img  u-carousel-item  justify-center flex u-clearfix u-image u-shading `}
          src=""
          data-image-width="1248"
          data-image-height="641"
        >
          <div className="h-full w-full" style={{ background: "#2a346e94" }}>
            <div className="u-clearfix u-sheet flex items-center justify-center px-20 u-sheet-1 top-section md:mt-0 md:py-0 py-4">
              <div className="mt-48 md:mt-0 md:text-left">
                {" "}
                <h1
                  style={{ lineHeight: "1.25" }}
                  className="u-text text-white text-left text-2xl md:text-5xl mb-12 md:text-5xl font-semibold "
                >
                  Great eye health begins with a preventive eye exam!
                  <br />
                  New patient are welcome at our <u>Vancouver </u>location
                </h1>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>

      <div className=" u-clearfix u-sheet mx-auto u-valign-middle u-sheet-1">
        <h2
          style={{
            textAlign: "left",
            // fontSize: "2.25rem",
            lineHeight: 1.1,
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <span
            style={{ lineHeight: 2 }}
            className="text-blue-900 text-center md:text-left text-4xl font-semibold"
          >
            About Us
          </span>
        </h2>
        <p className="text-blue-900 font-semibold pl-20 text-lg">
          Our practices proudly serve Vancouver area with a tradition of quality
          service and dedicated staff.{" "}
        </p>
        <div className="my-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Image
            src="/images/AboutUs_Unslapsh.png"
            height="450px"
            width="400px"
          />
          <div className="h-full flex items-center">
            <div>
              {" "}
              <p>
                We work together with ophthalmology and can expedite any
                surgical needs. We can even help you decide if laser surgery is
                right for you!
              </p>
              <br />
              <Link href="/bookings#appointment">
                <u className="text-blue-800 font-semibold cursor-pointer">
                  Book your appointment{" "}
                </u>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid gird-cols-1 gap-10 md:grid-cols-3">
          <div>
            "
            <i className="text-blue-900">
              Did you know the eye is the only organ we can see blood vessels
              and other structure linked to the general body health ?
            </i>
            "
            <br />
            <br />
            <p>
              "This allows our doctors to detect many serious health conditions
              including: diabetes, hypertension , auto-immune disorders, high
              cholesterol, thyroid disease, tumors and even cancer! The eye exam
              is really a window into your overall health and well-being. "
            </p>
          </div>
          <div className="flex justify-end">
            {" "}
            <Image src="/images/LM.jpeg" height="300px" width="250px" />
          </div>
          <div className="flex justify-start">
            <Image src="/images/WY.jpeg" height="300px" width="250px" />
          </div>
        </div>
        <div className="mt-20">
          <div className="font-semibold text-blue-900">
            "Performance Vision Optometry saved my right eye from being further
            damaged. I truly value the professional support from their doctors
            as well as their kindness and gentleness with taking care of me.
            Fortunately, my eye has now completely heated. Thank you so much!"
            <br /> <br />- Janice, Vancouver
          </div>
        </div>
      </div>
    </main>
  );
}
