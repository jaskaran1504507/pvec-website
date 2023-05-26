import React from "react";

export default function Footer2() {
  return (
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
                <h2 className="subscribe-title">Subscribe Our Newsletter</h2>
                <h3>
                  <span>
                  and follow us facebook and instragram
to keep up-to-date on our latest offers, new stock announcements, and access to our health care blog
                  </span>
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
        </div>
        {/* Map goes here */}
        <div className=" mt-20 flex justify-center">
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.890499360897!2d-123.13233812330994!3d49.27847207105212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673d361e5189d%3A0xc4a149fa64f2a9ed!2sPerformance%20Vision%20Eye%20Care!5e0!3m2!1sen!2sin!4v1681929243514!5m2!1sen!2sin" width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.890499360897!2d-123.13233812330994!3d49.27847207105212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673d361e5189d%3A0xc4a149fa64f2a9ed!2sPerformance%20Vision%20Eye%20Care!5e0!3m2!1sen!2sin!4v1681929761028!5m2!1sen!2sin" width="600" height="440" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.890499360897!2d-123.13233812330994!3d49.27847207105212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673d361e5189d%3A0xc4a149fa64f2a9ed!2sPerformance%20Vision%20Eye%20Care!5e0!3m2!1sen!2sin!4v1681929761028!5m2!1sen!2sin" width="600" height="380" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="footer-widget pb-100">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-8">
              <div
                className="footer-about mt-50 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <a className="logo" href="#">
                  <img
                    style={{
                      backgroundColor: "#fff",
                      color: "#fff",
                      margin: "2px",
                      padding: "2px",
                    }}
                    src="images/eyecare-logo.png"
                    alt="logo"
                  />
                </a>
                <p className="text">
                We have been caring for eyes in downtown Vancouver since 2005. Our team of expert eye doctors have many years of experience to provide proper diagnosis of health conditions, future care recommendations, and to expedite urgent care needs to our extensive list of associate ophthalmologists.
                </p>
                <ul className="social">
                  <li>
                    <a href="#">
                      <i className="lni-facebook-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni-twitter-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni-instagram-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni-linkedin-original"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-7 col-sm-7">
              <div className="footer-link d-flex mt-50 justify-content-md-between">
                <div
                  className="link-wrapper wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay="0.6s"
                >
                  <div className="footer-title">
                    <h4 className="title">Resources</h4>
                  </div>
                  <ul className="link">
                    <li>
                      <a href="#">Appointment</a>
                    </li>
                    <li>
                      <a href="/promotions">Promotions</a>
                    </li>
                    <li>
                      <a href="/service-products">Services & Products</a>
                    </li>
                    <li>
                      <a href="/glasses-contacts">Glasses & Contacts</a>
                    </li>
                    <li>
                      <a href="/blogs">Blogs</a>
                    </li>
                  </ul>
                </div>
              </div>
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
                  <li>1242 Burrard Street, Vancouver BC, V6Z 1Z1</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="particles-3"></div>
    </footer>
  );
}
