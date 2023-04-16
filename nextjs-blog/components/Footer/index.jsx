import React from "react";

export default function Footer() {
  return (
    // <footer className="bg-sky-900 mx-auto flex justify-center py-20 mt-10">
    //   <div className="grid grid-cols-1 md:grid-cols-2 place-items-center	">
    //     <div>
    //       <p className="text-white font-semibold text-base">
    //         {" "}
    //         1234 NW Bobcat Lane,
    //       </p>
    //       <p className="text-white font-semibold text-base">
    //         {" "}
    //         Robert Robertson,
    //       </p>
    //       <p className="text-white font-semibold text-base">
    //         St. Robert, MO 65584-5678.
    //       </p>
    //     </div>
    //     <div style={{ height: "200px", width: "348px" }}>
    //       <img
    //         src="https://i.stack.imgur.com/xYkPu.png"
    //         alt=""
    //         className="rounded-lg"
    //       />
    //     </div>
    //   </div>
    // </footer>


    // <!--====== FOOTER PART START ======-->

    <footer id="footer" class="footer-area pt-120">
      <div class="container">
        <div
          class="subscribe-area wow fadeIn"
          data-wow-duration="1s"
          data-wow-delay="0.5s"
        >
          <div class="row">
            <div class="col-lg-6">
              <div class="subscribe-content mt-35">
                <h2 class="subscribe-title">
                  Subscribe Our Newsletter
                </h2>
                <h3 >
                  <span>for the offers on our products, eye health related blogs and the free or discounted eye checkup camps*</span>
                </h3>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="subscribe-form mt-42">
                <form action="#">
                  <input type="text" placeholder="Enter eamil" />
                  <button class="main-btn">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
          {/* <!-- row --> */}
        </div>
        {/* <!-- subscribe area --> */}
        <div class="footer-widget pb-100">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-8">
              <div
                class="footer-about mt-50 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <a class="logo" href="#">
                  <img style={{backgroundColor: '#fff',
    color: '#fff', margin: '2px', padding: '2px'}} src="images/eyecare-logo.png" alt="logo" />
                </a>
                <p class="text">
                We have been helping people with quality care from our team of
              expert eye doctors in downtown Vancouver since 2005. Our team of
              eye specialists have many years of professional experience and can
              provide proper diagnosis of eye health conditions right in the
              heart of Vancouver.
                </p>
                <ul class="social">
                  <li>
                    <a href="#"><i class="lni-facebook-filled"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="lni-twitter-filled"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="lni-instagram-filled"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="lni-linkedin-original"></i></a>
                  </li>
                </ul>
              </div>
              {/* <!-- footer about --> */}
            </div>
            <div class="col-lg-3 col-md-7 col-sm-7">
              <div class="footer-link d-flex mt-50 justify-content-md-between">
                {/* <div
                  class="link-wrapper wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay="0.4s"
                >
                  <div class="footer-title">
                    <h4 class="title">Quick Link</h4>
                  </div>
                  <ul class="link">
                    <li><a href="#">Road Map</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Refund Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Pricing</a></li>
                  </ul>
                </div> */}
                {/* <!-- footer wrapper --> */}
                <div
                  class="link-wrapper wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay="0.6s"
                >
                  <div class="footer-title">
                    <h4 class="title">Resources</h4>
                  </div>
                  <ul class="link">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Page</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
                {/* <!-- footer wrapper --> */}
              </div>
              {/* <!-- footer link --> */}
            </div>
            <div class="col-lg-3 col-md-5 col-sm-5">
              <div
                class="footer-contact mt-50 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.8s"
              >
                <div class="footer-title">
                  <h4 class="title">Contact Us</h4>
                </div>
                <ul class="contact">
                  <li>+809272561823</li>
                  <li>info@gmail.com</li>
                  <li>www.yourweb.com</li>
                  <li>
                    123 Stree New York City , United <br />
                    States Of America 750.
                  </li>
                </ul>
              </div>
              {/* <!-- footer contact --> */}
            </div>
          </div>
          {/* <!-- row --> */}
        </div>
        {/* <!-- footer widget --> */}
        {/* <div class="footer-copyright">
          <div class="row">
            <div class="col-lg-12">
              <div class="copyright d-sm-flex justify-content-between">
                <div class="copyright-content">
                  <p class="text">
                    Designed and Developed by
                    <a href="https://uideck.com" rel="nofollow">UIdeck</a>
                  </p>
                </div>
                {/* <!-- copyright content --> */}
              {/* </div> */}
              {/* <!-- copyright --> */}
            {/* </div> */}
          {/* </div> */}
          {/* <!-- row --> */}
        {/* </div> */}
        {/* <!-- footer copyright --> */}
      </div>
      {/* <!-- container --> */}
      <div id="particles-3"></div>
    </footer>

    // <!--====== FOOTER PART ENDS ======-->
  );
}
