import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  HomeFilled,
  HomeOutlined,
  MailOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import { navArr } from "../../constant";

export default function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const handleNavClick = () => {
    setIsNavVisible((prev) => !prev);
  };
  const location = useRouter();
  console.log("dfds", location.query)
  return (
    // <>
    //   <div className="relative bg-white">
    //     <div className="mx-auto max-w-7xl px-4 sm:px-6">
    //       <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2 md:justify-start md:space-x-10">
    //         <div className="flex justify-center lg:w-0 lg:flex-1">
    //           <a href="#">
    //             <span className="sr-only">Your Company</span>
    //             <div
    //               style={{
    //                 width: "201px",
    //                 height: "69px",
    //                 margin: "16px auto 0 0",
    //               }}
    //             >
    //               <img
    //                 className="w-full h-full"
    //                 src="/images/eyecare-logo.png"
    //                 alt=""
    //               />
    //             </div>
    //           </a>
    //         </div>
    //         <div className="-my-2 -mr-2 md:hidden w-full flex justify-end">
    //           <button
    //             type="button"
    //             className="inline-flex items-center justify-end rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
    //             aria-expanded="false"
    //             onClick={handleNavClick}
    //           >
    //             <span className="sr-only">Open menu</span>
    //             <svg
    //               className="h-6 w-6"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               strokeWidth="1.5"
    //               stroke="currentColor"
    //               aria-hidden="true"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    //               />
    //             </svg>
    //           </button>
    //         </div>
    //         <div className="flex flex-col  ">
    //           <div className="flex hidden justify-end pt-1">
    //             <input
    //               type="search"
    //               name=""
    //               className="border hidden md:block py-1 border-black focus:outline-none rounded-full"
    //               id=""
    //             />
    //             <div className="pl-1 flex items-center">
    //               <Image
    //                 // className="pl-3"
    //                 height="20"
    //                 width='15'
    //                 src="/images/search.png"
    //               />
    //             </div>
    //             {/* <button><embed src="icon.svg" /></button> */}
    //           </div>
    //   <nav className="hidden space-x-10  pt-5 items-center md:flex">
    //             {navArr.map((nav) => (
    //               <Link href={nav.path} key={nav.name}>
    //                 {/* <a
    //                   href="#"
    //                   className={`${
    //                     location.pathname === nav.path
    //                       ? " text-black"
    //                       : "text-gray-500 hover:text-gray-900 "
    //                   } font-bold text-gray-500 hover:text-gray-900`}
    //                 >
    //                   {nav.name}
    //                 </a> */}
    //               </Link>
    //             ))}
    //           </nav>
    //         </div>
    //       </div>
    //     </div>

    //     <div
    //       className={`${
    //         isNavVisible ? "" : "hidden"
    //       } absolute z-10 inset-x-0 top-0 origin-top-right transform  transition md:hidden`}
    //     >
    //       <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
    //         <div className="">
    //           <div className="flex items-centerc   px-4  pt-4 justify-between ">
    //             <div style={{ width: "201px", height: "69px" }}>
    //               <img
    //                 className="w-full h-full"
    //                 src="/images/eyecare-logo.png"
    //                 alt=""
    //                 // height={}
    //               />
    //             </div>
    //             <div className="">
    //               <button
    //                 onClick={handleNavClick}
    //                 type="button"
    //                 className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
    //               >
    //                 <span className="sr-only">Close menu</span>
    //                 <svg
    //                   className="h-6 w-6"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   fill="none"
    //                   viewBox="0 0 24 24"
    //                   strokeWidth="1.5"
    //                   stroke="currentColor"
    //                   aria-hidden="true"
    //                 >
    //                   <path
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                     d="M6 18L18 6M6 6l12 12"
    //                   />
    //                 </svg>
    //               </button>
    //             </div>
    //           </div>
    //           <div className="mt-6 ">
    //             <nav className="grid  gap-y-8">
    //               {navArr.map((nav) => (
    //                 <Link href={nav.path} key={nav.name}>
    //                   {/* <a
    //                     href="#"
    //                     className={` ${
    //                       location.pathname === nav.path
    //                         ? "bg-slate-100 text-black"
    //                         : "text-gray-500 hover:text-gray-900  hover:bg-gray-50"
    //                     } flex items-center rounded-md px-6 py-2`}
    //                   >
    //                     <span className="font-bold ">{nav.name}</span>
    //                   </a> */}
    //                   <span className="font-bold ">{nav.name}</span>
    //                 </Link>
    //               ))}
    //             </nav>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <>
      {!isNavVisible && (
        <div
          style={{
            position: "sticky",
            width: "100%",
            // top: "111px",
            zIndex: 2000,
          }}
          className="hidden md:block pr-4"
        >
          <div className="mx-auto  flex justify-end">
            <div
              className="pl-8 pr-2"
            // style={{
            //   background:
            //     "linear-gradient(to right, #1d3d74 0%, #3598cf 50%, #1d3d74 100%)",
            // }}
            >
              <span className="text-white flex items-center space-x-36 text-lg font-bold">
              
                <a className="pl-2 " href="mailto:info@pveyecare.ca" target="_blank">
                  {/* <a href="mailto:info@pveyecare.ca"> */}
                  <MailOutlined  style={{color: "#349BD6"}} /> &nbsp; &nbsp;
                  <span className="hover:white focus:white" style={{color: "#349BD6"}} >
                    info@pveyecare.ca
                  </span>
                  {/* </a> */}
                </a>
          
                <a className="pl-2 " style={{color: "#349BD6"}} href="tel:+16046899962"  target="_blank"><MobileOutlined twoToneColor="white" style={{color: "#349BD6"}}/>&nbsp; &nbsp;+1 604 689 9962</a>
              
                <a className="pl-2" style={{color: "#349BD6"}} href="https://goo.gl/maps/rh7x6UiVqRNjZTBa7" target="_blank"><HomeOutlined style={{color: "#349BD6"}}/> &nbsp; &nbsp;
                  1242 Burrard Street, Vancouver BC, V6Z 1Z1
                </a>

              </span>
            </div>
          </div>
        </div>
      )}
      <header className="header-area">
        {/* <script src="assets/js/bootstrap.min.js"></script> */}
        <div className="navbar-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg pb-0">
                  <a className="navbar-brand" href="#">
                    <img src="images/eyecare-logo.png" style={{maxWidth :'9rem', height :'4.4rem'}} alt="Logo" />
                  </a>
                  <button
                    onClick={handleNavClick}
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                  </button>
                  <div
                    // style={{
                    //   background:
                    //     " linear-gradient(to right, #6441A5 0%, #2a0845  51%, #6441A5  100%)",
                    // }}
                    className={`navbar-collapse sub-menu-bar `}
                    style={{
                      display: isNavVisible ? "block" : "none",
                      // background:
                      //   " linear-gradient(to right, #6441A5 0%, #2a0845  51%, #6441A5  100%)",
                    }}
                    id="navbarSupportedContent"
                  >
                    {/* <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent"> */}
                    <ul id="nav" className="navbar-nav ml-auto font-bold">
                     <li className="nav-item active "><div class="relative group">
                      <div class="absolute -inset-0.5 bg-gradient-to-r from-cyan-800 to-sky-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

                        <a className={classNames("page-scroll rounded-lg", location?.route=="/"?"bg-white":"bg-black")} href="/">      
                          <span className="flex items-center ">
                            {" "}
                            <span className={classNames("px-1 font-bold text-black", location?.route=="/"?"text-black":"text-white")}>Home</span>
                          </span>
                        </a>
                        </div>
                      </li>
                      <li className="nav-item"> <div class="relative group">
                      <div class="absolute -inset-0.5 bg-gradient-to-r from-cyan-800 to-sky-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

                        <a className={classNames("page-scroll font-bold rounded-lg", (location?.route=="/glasses-contacts" && location?.query?.query=="glasses")?"bg-white":"bg-black")} href="/glasses-contacts?query=glasses">
                        <span className={classNames("px-1 font-bold text-black",  (location?.route=="/glasses-contacts" && location?.query?.query=="glasses")?"text-black":"text-white")}>Sun/Glasses</span>
                        </a>
                        </div>
                      </li>

                      <li className="nav-item">
                      <div class="relative group">
                      <div class="absolute -inset-0.5 bg-gradient-to-r from-cyan-800 to-sky-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <a className={classNames("page-scroll font-bold rounded-lg", (location?.route=="/glasses-contacts" && location?.query?.query=="contacts")?"bg-white":"bg-black")} href="/glasses-contacts?query=contacts">
                        <span className={classNames("px-1 font-bold text-black",  (location?.route=="/glasses-contacts" && location?.query?.query=="contacts")?"text-black":"text-white")}>Contacts</span>
                        </a>
                        </div>
                      </li>
                      <li className="nav-item">
                      <div class="relative group">
                      <div class="absolute -inset-0.5 bg-gradient-to-r from-cyan-800 to-sky-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

                        <a className={classNames("page-scroll font-bold rounded-lg", location?.route=="/services"?"bg-white":"bg-black")} href="/services">
                        <span className={classNames("px-1 font-bold", location?.route=="/services"?"text-black":"text-white")}>Services</span>
                        </a>
                        </div>
                      </li>
                      <li className="nav-item">
                      <div class="relative group">
                      <div class="absolute -inset-0.5 bg-gradient-to-r from-cyan-800 to-sky-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

                        <a className={classNames("page-scroll font-bold rounded-lg", (location?.route=="/products" && location?.query?.query=="eye-medic")?"bg-white":"bg-black")} href="/products?query=eye-medic">
                        <span className={classNames("px-1 font-bold text-black",  (location?.route=="/products" && location?.query?.query=="eye-medic")?"text-black":"text-white")}>EyeCare</span>
                        </a>
                        </div>
                      </li>
                      <li className="nav-item">
                      <div class="relative group">
                      <div class="absolute -inset-0.5 bg-gradient-to-r from-cyan-800 to-sky-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <a className={classNames("page-scroll font-bold rounded-lg", location?.route=="/promotions"?"bg-white":"bg-black")} href="/promotions">
                        <span className={classNames("px-1 font-bold", location?.route=="/promotions"?"text-black":"text-white")}>Promotions</span>
                        </a>
                        </div>
                      </li>
                      <li className="nav-item">
                      <div class="relative group">
                      <div class="absolute -inset-0.5 bg-gradient-to-r from-cyan-800 to-sky-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                      <a className={classNames("page-scroll font-bold rounded-lg", location?.route=="/about-us"?"bg-white":"bg-black")} href="/about-us">
                        <span className={classNames("px-1 font-bold", location?.route=="/about-us"?"text-black":"text-white")}>About</span>
                        </a>
                        </div>
                      </li>
                      <li className="nav-item">
                      <div class="relative group">
                      <div class="absolute -inset-0.5 bg-gradient-to-r from-cyan-800 to-sky-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div> 
                        <a className={classNames("page-scroll font-bold rounded-lg", location?.route=="/blogs"?"bg-white":"bg-black")} href="/blogs">
                        <span className={classNames("px-1 font-bold", location?.route=="/blogs"?"text-black":"text-white")}>Blogs</span>
                        </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* #1D3D74 #3598CF */}
                  <div className="navbar-btn d-none d-sm-inline-block">
                    <a
                      className="main-btn"
                      data-scroll-nav="0"
                      href="/bookings#appointment"
                    > <span className="px-2 font-bold">Book Appointment</span>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* <div id="home" className="header-hero bg_cover" style={{backgroundImage: "assets/images/banner-bg.svg"}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="header-hero-content text-center">
                            <h3 className="header-sub-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">Basic - SaaS Landing Page</h3>
                            <h2 className="header-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">Kickstart Your SaaS or App Site</h2>
                            <p className="text wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                            <a href="#" className="main-btn wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="1.1s">Get Started</a>
                        </div> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="header-hero-image text-center wow fadeIn" data-wow-duration="1.3s" data-wow-delay="1.4s">
                            <img src="assets/images/header-hero.png" alt="hero"/>
                        </div> 
                    </div>
                </div> 
            </div>
            <div id="particles-1" className="particles"></div>
        </div>  */}
      </header>
    </>
  );
}

function classNames(...args) {
  return args.filter(Boolean).join(' ')
}
