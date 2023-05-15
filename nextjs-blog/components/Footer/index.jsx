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

    <footer id="footer" className="footer-area pt-120">
      <div className="container">
        <div
          className="subscribe-area wow fadeIn"
          data-wow-duration="1s"
          data-wow-delay="0.5s"
        >
          <div className="row">
            <div className="col-lg-6">
              <div className="subscribe-content mt-35">
                <h2 className="subscribe-title">
                  Subscribe Our Newsletter
                </h2>
                <h3 >
                  <span>for the offers on our products, eye health related blogs and the free or discounted eye checkup camp* notifications</span>
                </h3>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="subscribe-form mt-42">
                <form action="#">
                  <input type="text" placeholder="Enter eamil" />
                  <button className="main-btn">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
          {/* <!-- row --> */}
        </div>
        {/* <!-- subscribe area --> */}
        <div className="footer-widget pb-100">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-8">
              <div
                className="footer-about mt-50 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <a className="logo" href="#">
                  <img style={{backgroundColor: '#fff',
    color: '#fff', margin: '2px', padding: '2px'}} src="images/eyecare-logo.png" alt="logo" />
                </a>
                <p className="text">
                We have been helping people with quality care from our team of
              expert eye doctors in downtown Vancouver since 2005. Our team of
              eye specialists have many years of professional experience and can
              provide proper diagnosis of eye health conditions right in the
              heart of Vancouver.
                </p>
                <ul className="social">
                  <li>
                    <a href="#"><i className="lni-facebook-filled"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="lni-twitter-filled"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="lni-instagram-filled"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="lni-linkedin-original"></i></a>
                  </li>
                </ul>
              </div>
              {/* <!-- footer about --> */}
            </div>
            <div className="col-lg-3 col-md-7 col-sm-7">
              <div className="footer-link d-flex mt-50 justify-content-md-between">
                {/* <div
                  className="link-wrapper wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay="0.4s"
                >
                  <div className="footer-title">
                    <h4 className="title">Quick Link</h4>
                  </div>
                  <ul className="link">
                    <li><a href="#">Road Map</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Refund Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Pricing</a></li>
                  </ul>
                </div> */}
                {/* <!-- footer wrapper --> */}
                <div
                  className="link-wrapper wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay="0.6s"
                >
                  <div className="footer-title">
                    <h4 className="title">Resources</h4>
                  </div>
                  <ul className="link">
                    {/* <li><a href="/">Home</a></li> */}
                    <li><a href="#">Appointment</a></li>
                    {/* <li><a href="#">Order Products</a></li> */}
                    <li><a href="/promotions">Promotions</a></li>
                    <li><a href="/service-products">Services & Products</a></li>
                    <li><a href="/glasses-contacts">Glasses & Contacts</a></li>
                    {/* <li><a href="/about-us">About</a></li> */}
                    <li><a href="/blogs">Blogs</a></li>
                  </ul>
                </div>
                {/* <!-- footer wrapper --> */}
              </div>
              {/* <!-- footer link --> */}
            </div>
            <div className="col-lg-3 col-md-5 col-sm-5">
              <div
                className="footer-contact mt-50 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.8s"
              >
                <div className="footer-title">
                  <h4 className="title">Contact Us</h4>
                </div>
                <ul className="contact">
                  <li>+1 604 689 9962</li>
                  <li>info@pveyecare.ca</li>
                  <li>www.pveyecare.ca</li>
                  <li>1242 Burrard Street, Vancouver BC, V6Z 1Z1
                  </li>
                </ul>
              </div>
              {/* <!-- footer contact --> */}
            </div>
          </div>
          {/* <!-- row --> */}
        </div>
        {/* <!-- footer widget --> */}
        {/* <div className="footer-copyright">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright d-sm-flex justify-content-between">
                <div className="copyright-content">
                  <p className="text">
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
