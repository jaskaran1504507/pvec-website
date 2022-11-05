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
    <>
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2 md:justify-start md:space-x-10">
            <div className="flex justify-center lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Your Company</span>
                <div
                  style={{
                    width: "201px",
                    height: "69px",
                    margin: "16px auto 0 0",
                  }}
                >
                  <img
                    className="w-full h-full"
                    src="/images/eyecare-logo.png"
                    alt=""
                  />
                </div>
              </a>
            </div>
            <div className="-my-2 -mr-2 md:hidden w-full flex justify-end">
              <button
                type="button"
                className="inline-flex items-center justify-end rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded="false"
                onClick={handleNavClick}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col  ">
              <div className="flex hidden justify-end pt-1">
                <input
                  type="search"
                  name=""
                  className="border hidden md:block py-1 border-black focus:outline-none rounded-full"
                  id=""
                />
                <div className="pl-1 flex items-center">
                  <Image
                    // className="pl-3"
                    height="20px"
                    width="15px"
                    src="/images/search.png"
                  />
                </div>
                {/* <button><embed src="icon.svg" /></button> */}
              </div>
              <nav className="hidden space-x-10  pt-5 items-center md:flex">
                {navArr.map((nav) => (
                  <Link href={nav.path} key={nav.name}>
                    <a
                      href="#"
                      className={`${
                        location.pathname === nav.path && " text-black"
                      } font-bold text-gray-500 hover:text-gray-900`}
                    >
                      {nav.name}
                    </a>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div
          className={`${
            isNavVisible ? "" : "hidden"
          } absolute z-10 inset-x-0 top-0 origin-top-right transform  transition md:hidden`}
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="">
              <div className="flex items-centerc   px-4  pt-4 justify-between ">
                <div style={{ width: "201px", height: "69px" }}>
                  <img
                    className="w-full h-full"
                    src="/images/eyecare-logo.png"
                    alt=""
                    // height={}
                  />
                </div>
                <div className="">
                  <button
                    onClick={handleNavClick}
                    type="button"
                    className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6 ">
                <nav className="grid  gap-y-8">
                  {navArr.map((nav) => (
                    <Link href={nav.path} key={nav.name}>
                      <a
                        href="#"
                        className={` ${
                          location.pathname === nav.path && " text-black"
                        } flex items-center rounded-md px-6 py-2 hover:bg-gray-50`}
                      >
                        <span className="font-bold text-gray-500 hover:text-gray-900">
                          {nav.name}
                        </span>
                      </a>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
