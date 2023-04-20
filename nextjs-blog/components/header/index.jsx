import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { navArr } from "../../constant";

export default function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const handleNavClick = () => {
    setIsNavVisible((prev) => !prev);
  };
  const location = useRouter();
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
        <header className="header-area">
        {/* <script src="assets/js/bootstrap.min.js"></script> */}
        <div className="navbar-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand" href="#">
                                <img src="images/eyecare-logo.png" alt="Logo"/>
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                            </button>

                            <div className="navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                            {/* <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent"> */}
                                <ul id="nav" className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <a className="page-scroll" href="/">Home</a>
                                    </li>
                                    {/* <li className="nav-item">
                                        <a className="page-scroll" href="#features">Bookings</a>
                                    </li> */}
                                    <li className="nav-item">
                                        <a className="page-scroll" href="/promotions">Promotions</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="/service-products">Services & Products</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="/glasses-contacts">Glasses & Contacts</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="/about-us">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="/blogs">Blogs</a>
                                    </li>
                                </ul>
                            </div>  
                            {/* #1D3D74 #3598CF */}
                            <div className="navbar-btn d-none d-sm-inline-block">
                                <a className="main-btn" data-scroll-nav="0" href="#pricing">Book Appointment</a>
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
