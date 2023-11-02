import Image from "next/image";
import React from "react";
import FeedbackHomePage from "../../components/FeedbackHomePage";

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
          className={`banner-about-us-img mt-28 md:mt-0 u-active text-center u-section-1-1 banner-img  u-carousel-item  justify-center flex u-clearfix u-image u-shading `}
          src=""
          data-image-width="1248"
          data-image-height="641"
        >
          <div className="h-full w-full" style={{ background: "#2a346e94" }}>
            <div className="u-clearfix u-sheet flex items-center justify-center px-0 md:px-20 u-sheet-1 top-section md:mt-0">
              <div className=" md:text-left">
                {" "}
                <h1
                  style={{ lineHeight: "1.25" }}
                  className="u-text text-white text-left text-2xl md:text-5xl mb-12 md:text-5xl font-semibold "
                >
                  Great eye health begins with a preventive eye exam!
                  <br />
                  We are now accepting new patients in our{" "}
                  <u>Downtown Vancouver</u> clinic.
                </h1>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>

      <div className=" u-clearfix u-sheet mx-auto u-valign-middle u-sheet-1">
        <h2
          style={{
            // textAlign: "left",
            // fontSize: "2.25rem",
            lineHeight: 2,
            marginTop: "20px",
            marginBottom: "20px",
          }}
          className="text-blue-900 text-center md:text-left text-4xl font-semibold"
        >
          <span style={{ lineHeight: 2 }}>About Us</span>
        </h2>
        <p className="text-blue-900 text-center font-semibold md:pl-20 text-lg">
          Our practice proudly serves Greater Vancouver with a tradition of
          quality service and dedicated staff.{" "}
        </p>
        <div className="my-20 grid grid-cols-1 inline-flex center gap-8 flex">
          {/* <Image
            src="/images/AboutUs_Unslapsh.png"
            height="450"
            width="400"
          /> */}
          <div className="text-center h-full">
            <div>
              {" "}
              <p className="font-bold text-2xl text-black">
                We can even help you decide if laser surgery is right for you!
              </p>
              <br />
              <div className="flex align-items-center justify-center">
                <a
                  className="main-btn-products"
                  data-scroll-nav="0"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfOr3fsy1F9RpZw9Gh8VyyUDAgm3Wg6HeskeIZRyiZvelRNNg/viewform?usp=sf_link"
                  target="_blank"
                >
                  Book your appointment{" "}
                </a>
                {/* <div className="long-arrow-right"></div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="grid gird-cols-1 gap-10 md:grid-cols-1 divide-y">
          <div className="mt-2 text-center">
            <p className="mt-2 text-2xl font-bold">
              {" "}
              <i className="text-blue-900">
                "Did you know the eye is the only organ we can see blood vessels
                and other structure linked to the general body health ?"
              </i>
            </p>

            <div className="md:ml-4 mt-8">
              <p className="text-2xl text-blue-900">
                This allows our doctors to detect many serious health
                conditions including: diabetes, hypertension, auto-immune
                disorders, high cholesterol, thyroid disease, tumors and even
                cancer! The eye exam is really a window into your overall health
                and well-being.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-center md:text-left">
              Our Professionals
            </h2>
            <div className="mt-4 flex flex-row mx-40">
              <div className="mt-4 flex justify-center md:justify-end w-1/4">
                <Image src="/images/Wayne.jpg" height="300" width="300" />
              </div>
              <div className="ml-4 font-semibold text-blue-900 mt-24  w-3/4">
                "Dr. Wayne Yip is the primary Optometrist here at Performance
                Vision EyeCare. <br />
                Dr. Yip attended the University of Waterloo for his
                undergraduate program and then graduated from the prestigious
                New England College of Optometry in 2014; he has been working in
                British Columbia since then. Aside from primary care, with his
                over a decade of experience in providing comprehensive care, Dr.
                Yip has developed a keen interest in specialized contact lenses
                for the treatment of corneal conditions and dystrophies such as
                keratoconus, post refractive surgery complications, and severe
                chronic dry eye. In addition, Dr. Yip has personal experience
                and can especially relate to patients with complicated
                prescriptions due to his own high myopia."
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="mt-12">
          <h2 className="mt-2 text-2xl font-bold">
            We’ve been <span className="rainbow-text">Proudly Rocking</span> the{" "}
            <span className="text-red-700">R</span>
            <span className="text-orange-700">a</span>
            <span className="text-yellow-700">i</span>
            <span className="text-green-700">n</span>
            <span className="text-blue-700">b</span>
            <span className="text-indigo-700">o</span>
            <span className="text-violet-700">w</span> since the 1700’s
          </h2>
          <div className="ml-6">
            <p className="text-2xl font-bold">
              Newton's <span className="text-red-700">R</span>
              <span className="text-orange-700">a</span>
              <span className="text-yellow-700">i</span>
              <span className="text-green-700">n</span>
              <span className="text-blue-700">b</span>
              <span className="text-indigo-700">o</span>
              <span className="text-violet-700">w</span>. In the 1660s, English
              physicist and mathematician Isaac Newton began a series of
              experiments with sunlight and prisms. He demonstrated that clear
              white light was composed of seven visible colors.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-1 gap-8">
            <Image
              src="/images/visible-light-wave-length.jpg"
              height="480"
              width="6400"
            />
          </div>
        </div>
      </div>
      <FeedbackHomePage />
    </main>
  );
}
