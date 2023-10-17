import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import navImage from "../../public/images/door.jpeg"
import { callApi } from "../../utils/apiUtils";
import Products from "../../utils/endpoints/Products";
import {
  DownOutlined,
  HomeFilled,
  HomeOutlined,
  MailOutlined,
  MobileOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { brandsArr, contactsBrandsArr, cards } from "../../constant";
import { Badge, Form, Modal, notification } from "antd";
import OrderList from "../OrderList";
import Order from "../Order";
import context from "../context";

export default function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [images, setImages] = useState([]);

  const [form] = Form.useForm();

  const currContext = useContext(context);
  console.log("currContext", currContext);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleCancelOrderModal = () => {
    setIsOrderModalOpen(false);
  };

  const onFinish = (values) => {
    const formData = new FormData();

    formData.append("existing", values?.existing || "");
    formData.append("firstName", values?.firstName || "");
    formData.append("lastName", values?.lastName || "");
    formData.append(
      "preferredContactMethod",
      values?.preferredContactMethod || ""
    );
    formData.append("typeOfContactLenses", values?.typeOfContactLenses || "");
    formData.append("totalSupplyOrder", values?.totalSupplyOrder || "");
    formData.append(
      "upToDatePrescriptionOnFile",
      values?.upToDatePrescriptionOnFile || ""
    );
    formData.append("orderDelivery", values?.orderDelivery || "");
    formData.append("email", values?.email || "");
    formData.append("phone", values?.phone || "");
    formData.append("notes", values?.notes || "");
    formData.append("type", "online");
    if (cartProducts) {
      formData.append("products", JSON.stringify(cartProducts));
    }

    if (fileList) formData.append("files", fileList[0].originFileObj);

    callApi({
      uriEndPoint: {
        ...Products.createOrder,
        headerProps: { "Content-type": "multipart/form-date" },
      },
      body: formData,
    })
      .then(() => {
        localStorage.setItem("products", "[]");
        setCartProducts([]);
        notification.success({
          message: "Order submitted",
          description: "We will update you on your order soon",
        });
        setIsModalOpen(false);
        setIsOrderModalOpen(false);
        form.resetFields();
      })
      .catch((err) => {
        setIsModalOpen(false);
        setIsOrderModalOpen(false);
        form.resetFields();
        notification.error({
          message: "Order failed!",
          description: "Please contact support for the assistance.",
        });
        console.log(err);
      });
  };

  useEffect(() => {
    const localCartProducts = localStorage.getItem("products") || "[]";
    currContext.dispatch({ count: JSON.parse(localCartProducts).length });

    setCartProducts(JSON.parse(localCartProducts));
  }, []);
  const handleNavClick = () => {
    setIsNavVisible((prev) => !prev);
  };
  const location = useRouter();
  return (
    <>
      {/* {!isNavVisible && (
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
              <span className="text-white flex items-center space-x-36 text-xl font-bold">
                <a
                  className="pl-1 inline-flex center"
                  href="mailto:info@pveyecare.ca"
                  target="_blank"
                >
                  <MailOutlined
                    style={{ color: "#349BD6" }}
                    className="mt-1"
                  />{" "}
                  &nbsp; &nbsp;
                  <span
                    className="hover:white focus:white"
                    style={{ color: "#349BD6" }}
                  >
                    info@pveyecare.ca
                  </span>
                </a>

                <a
                  className="pl-1 inline-flex center"
                  style={{ color: "#349BD6" }}
                  href="tel:+16046899962"
                  target="_blank"
                >
                  <MobileOutlined
                    twoToneColor="white"
                    style={{ color: "#349BD6" }}
                    className="mt-1"
                  />
                  &nbsp; &nbsp;+1 604 689 9962
                </a>

                <a
                  className="pl-1 inline-flex center"
                  style={{ color: "#349BD6" }}
                  href="https://goo.gl/maps/rh7x6UiVqRNjZTBa7"
                  target="_blank"
                >
                  <HomeOutlined style={{ color: "#349BD6" }} className="mt-1" />{" "}
                  &nbsp; &nbsp; 1242 Burrard Street, Vancouver BC, V6Z 1Z1
                </a>
              </span>
            </div>
          </div>
        </div>
      )} */}

      {/* <header className="header-area">
        <div className="navbar-area backdrop-blur-sm">
          <div className="flex justify-between ">
            <a className="navbar-brand " href="#">
              <img
                // className="border-solid border-t-2 border-black"
                src="https://pvec-bucket.s3.ca-central-1.amazonaws.com/eyecare-logo.png"
                style={{
                  maxWidth: "11rem",
                  height: "4.5rem",
                  marginLeft: "24px",
                  marginTop: "24px",
                  zIndex: 2000,
                  // backgroundColor: "#fff",
                  paddingLeft: "2px",
                  paddingRight: "2px",
                }}
                alt="Logo"
              />
            </a>
            <div className="container mt-6">
              <div className="row">
                <div className="col-lg-12">
                  <nav className="navbar navbar-expand-lg flex justify-end">
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
                      <span
                        className="toggler-icon bg-black"
                        style={{ background: "black" }}
                      ></span>
                      <span
                        className="toggler-icon bg-black"
                        style={{ background: "black" }}
                      ></span>
                      <span
                        className="toggler-icon bg-black"
                        style={{ background: "black" }}
                      ></span>
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
                      <ul id="nav" className="navbar-nav ml-auto font-bold">
                        <li className="nav-item active ">
                          <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-800 to-sky-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

                            <a
                              className={classNames(
                                "page-scroll rounded-lg",
                                location?.route == "/" ? "bg-white" : "bg-black"
                              )}
                              href="/"
                            >
                              <span className="flex items-center ">
                                {" "}
                                <span
                                  className={classNames(
                                    "px-1 font-bold text-black",
                                    location?.route == "/"
                                      ? "text-black"
                                      : "text-white"
                                  )}
                                >
                                  Home
                                </span>
                              </span>
                            </a>
                          </div>
                        </li>
                        <li className="nav-item">
                          <div className="glasses-option relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-800 to-sky-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                            <a
                              className={classNames(
                                " page-scroll font-bold rounded-lg",
                                location?.route == "/glasses-contacts" &&
                                  location?.query?.query == "glasses"
                                  ? "bg-white"
                                  : "bg-black"
                              )}
                              href="/glasses-contacts?query=glasses"
                            >
                              <span
                                className={classNames(
                                  "px-1 font-bold text-black",
                                  location?.route == "/glasses-contacts" &&
                                    location?.query?.query == "glasses"
                                    ? "text-black"
                                    : "text-white"
                                )}
                              >
                                Sun/Glasses
                              </span>
                            </a>
                            <div className="dropdown-content-glasses">
                              {brandsArr.map((brand) => (
                                <a href={brand.addr} target="_blank">
                                  <div className="flex">
                                    <img
                                      className="img-fluid mx-1 img-responsive rounded product-image-v2"
                                      src={"/images/brands/" + brand.link}
                                    />
                                    <h2 className="font-bold">{brand.name}</h2>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </li>
                        <li className="nav-item">
                          <div className="contacts-option relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-800 to-sky-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                            <a
                              className={classNames(
                                "page-scroll font-bold rounded-lg",
                                location?.route == "/glasses-contacts" &&
                                  location?.query?.query == "contacts"
                                  ? "bg-white"
                                  : "bg-black"
                              )}
                              href="/glasses-contacts?query=contacts"
                            >
                              <span
                                className={classNames(
                                  "px-1 font-bold text-black",
                                  location?.route == "/glasses-contacts" &&
                                    location?.query?.query == "contacts"
                                    ? "text-black"
                                    : "text-white"
                                )}
                              >
                                Contacts
                              </span>
                            </a>
                            <div className="dropdown-content-contacts">
                              {contactsBrandsArr.map((brand) => (
                                <a href={brand.addr} target="_blank">
                                  <div className="flex">
                                    <img
                                      className="img-fluid mx-1 img-responsive rounded product-image-v2"
                                      src={"/images/" + brand.link}
                                    />
                                    <h2 className="font-bold">{brand.name}</h2>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </li>
                        <li className="nav-item">
                          <div className="services-option relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-800 to-sky-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

                            <a
                              className={classNames(
                                "page-scroll font-bold rounded-lg",
                                location?.route == "/services"
                                  ? "bg-white"
                                  : "bg-black"
                              )}
                              href="/services"
                            >
                              <span
                                className={classNames(
                                  "px-1 font-bold",
                                  location?.route == "/services"
                                    ? "text-black"
                                    : "text-white"
                                )}
                              >
                                Services
                              </span>
                            </a>
                            <div className="dropdown-content-services top-8 right-12">
                              {cards.map((service) => (
                                <a href={"/services#" + service.id}>
                                  <div className="flex my-1">
                                    <h2 className="md:font-bold mx-2">
                                      {service.head2}
                                    </h2>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </li>
                        <li className="nav-item">
                          <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-800 to-sky-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

                            <a
                              className={classNames(
                                "page-scroll font-bold rounded-lg",
                                location?.route == "/products" &&
                                  location?.query?.query == "eye-medic"
                                  ? "bg-white"
                                  : "bg-black"
                              )}
                              href="/products?query=eye-medic"
                            >
                              <span
                                className={classNames(
                                  "px-1 font-bold text-black",
                                  location?.route == "/products" &&
                                    location?.query?.query == "eye-medic"
                                    ? "text-black"
                                    : "text-white"
                                )}
                              >
                                EyeCare
                              </span>
                            </a>
                          </div>
                        </li>
                        <li className="nav-item">
                          <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-800 to-sky-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                            <a
                              className={classNames(
                                "page-scroll font-bold rounded-lg",
                                location?.route == "/promotions"
                                  ? "bg-white"
                                  : "bg-black"
                              )}
                              href="/promotions"
                            >
                              <span
                                className={classNames(
                                  "px-1 font-bold",
                                  location?.route == "/promotions"
                                    ? "text-black"
                                    : "text-white"
                                )}
                              >
                                Promotions
                              </span>
                            </a>
                          </div>
                        </li>
                        <li className="nav-item">
                          <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-800 to-sky-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                            <a
                              className={classNames(
                                "page-scroll font-bold rounded-lg",
                                location?.route == "/about-us"
                                  ? "bg-white"
                                  : "bg-black"
                              )}
                              href="/about-us"
                            >
                              <span
                                className={classNames(
                                  "px-1 font-bold",
                                  location?.route == "/about-us"
                                    ? "text-black"
                                    : "text-white"
                                )}
                              >
                                About
                              </span>
                            </a>
                          </div>
                        </li>
                        <li className="nav-item">
                          <div className="faq-option relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-800 to-sky-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                            <a
                              className={classNames(
                                "page-scroll font-bold rounded-lg",
                                location?.route == "/faq"
                                  ? "bg-white"
                                  : "bg-black"
                              )}
                              href="/faq"
                            >
                              <span
                                className={classNames(
                                  "px-1 font-bold",
                                  location?.route == "/faq"
                                    ? "text-black"
                                    : "text-white"
                                )}
                              >
                                FAQs
                              </span>
                            </a>
                            <div className="dropdown-content-faq">
                              <a href="/faq#q1">
                                <div className="flex">
                                  <h2 className="font-bold">
                                    How often should you get your eyes checked?
                                  </h2>
                                </div>
                              </a>
                              <a href="/faq#q2">
                                <div className="flex">
                                  <h2 className="font-bold">
                                    What age should I get my child’s eye exams
                                    done?
                                  </h2>
                                </div>
                              </a>
                              <a href="/faq#q3">
                                <div className="flex">
                                  <h2 className="font-bold">
                                    How do I choose the right pair of glasses?
                                  </h2>
                                </div>
                              </a>
                              <a href="/faq#q4">
                                <div className="flex">
                                  <h2 className="font-bold">
                                    Are sunglasses just for fashion or are they
                                    necessary?
                                  </h2>
                                </div>
                              </a>
                              <a href="/faq#q5">
                                <div className="flex">
                                  <h2 className="font-bold">
                                    Why Buy Contact Lenses In-Store vs Online?
                                  </h2>
                                </div>
                              </a>
                              <a href="/faq#q6">
                                <div className="flex">
                                  <h2 className="font-bold">
                                    How can I reduce eye strain and redness?
                                  </h2>
                                </div>
                              </a>
                              <a href="/faq#q7">
                                <div className="flex">
                                  <h2 className="font-bold">
                                    Do we do direct billing?
                                  </h2>
                                </div>
                              </a>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item active  md:hidden ">
                          <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-800 to-sky-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

                            <a
                              className={classNames(
                                "page-scroll rounded-lg",
                                "bg-black"
                              )}
                              data-scroll-nav="0"
                            // href="https://docs.google.com/forms/d/e/1FAIpQLSfOr3fsy1F9RpZw9Gh8VyyUDAgm3Wg6HeskeIZRyiZvelRNNg/viewform?usp=sf_link"
                            // target="_blank"
                            >
                              <span className="flex items-center ">
                                {" "}
                                <span
                                  className={classNames(
                                    "px-1 font-bold text-black",
                                    "text-white"
                                  )}
                                >
                                  <button
                                    type="button"
                                    style={{ minWidth: "82px" }}
                                    onClick={showModal}
                                  >
                                    Order
                                  </button>
                                  <Badge className="mr-3" count={cartProducts.length}>
                                    <ShoppingCartOutlined style={{ fontSize: "30px" }} />
                                  </Badge>
                                </span>
                              </span>
                            </a>
                          </div>
                        </li>
                        <li className="nav-item active  md:hidden ">
                          <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-800 to-sky-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                            <a
                              className={classNames(
                                "page-scroll rounded-lg",
                                "bg-black"
                              )}
                              data-scroll-nav="0"
                              // href="https://docs.google.com/forms/d/e/1FAIpQLSfOr3fsy1F9RpZw9Gh8VyyUDAgm3Wg6HeskeIZRyiZvelRNNg/viewform?usp=sf_link"
                              href="/bookings#appointment"
                            // target="_blank"
                            >
                              <span className="flex items-center ">
                                {" "}
                                <span
                                  className={classNames(
                                    "px-1 font-bold text-black",
                                    "text-white"
                                  )}
                                >
                                  Book Appointment
                                </span>
                              </span>
                            </a>
                          </div>
                        </li>{" "}
                        <li className="nav-item active  md:hidden ">
                          <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-800 to-sky-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

                            <a
                              className={classNames(
                                "page-scroll rounded-lg",
                                "bg-black"
                              )}
                              href="https://docs.google.com/forms/d/e/1FAIpQLSex8fCDLOm41BPwOB235NRWKaZVdXk-tRiNbObpbV9vuUxV0Q/viewform?usp=sf_link"
                              target="_blank"
                            >
                              <span className="flex items-center ">
                                {" "}
                                <span
                                  className={classNames(
                                    "px-1 font-bold text-black",
                                    "text-white"
                                  )}
                                >
                                  Check Benefits
                                </span>
                              </span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="navbar-btn d-none d-sm-inline-block">
                      <a
                        className="main-btn"
                        data-scroll-nav="0"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeciQeXbMzKdezp0kkCx1Itxm1SCnUL5bv1C7rT1m1aBp1vsg/viewform?usp=sf_link"
                        target="_blank"
                      >
                        {" "}
                        <span className="px-2 font-bold">Order Contacts</span>
                        
                      </a>
                    </div>
                    <div className="navbar-btn d-none d-sm-inline-block ml-2">
                      <a
                        className="main-btn"
                        data-scroll-nav="0"
                        // href="https://docs.google.com/forms/d/e/1FAIpQLSfOr3fsy1F9RpZw9Gh8VyyUDAgm3Wg6HeskeIZRyiZvelRNNg/viewform?usp=sf_link"
                        // target="_blank"
                        href="/bookings#appointment"
                      >
                        {" "}
                        <span className="px-2 font-bold">Book Appointment</span>
                      </a>
                    </div>
                    <div className="navbar-btn d-none d-sm-inline-block ml-2">
                      <a
                        className="main-btn"
                        data-scroll-nav="0"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSex8fCDLOm41BPwOB235NRWKaZVdXk-tRiNbObpbV9vuUxV0Q/viewform?usp=sf_link"
                        target="_blank"
                      >
                        {" "}
                        <span className="px-2 font-bold">Check Benefits</span>
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </li>
            <li className="mb-4">
              <div className="contacts-option relative group">
                <div className="absolute "></div>
                <a
                  className={classNames(
                    "page-scroll font-bold rounded-lg hover:text-gray-300",
                    location?.route == "/glasses-contacts" &&
                      location?.query?.query == "contacts"
                      ? "bg-black"
                      : "bg-white"
                  )}
                  href="/glasses-contacts?query=contacts"
                >
                  <span
                    className={classNames(
                      "px-1 font-bold text-black hover:text-gray-300",
                      location?.route == "/glasses-contacts" &&
                        location?.query?.query == "contacts"
                        ? "text-white"
                        : "text-black"
                    )}
                  >
                    Contacts
                  </span>
                </a>
                <div className="dropdown-content-contacts  top-6 left-20">
                  {contactsBrandsArr.map((brand) => (
                    <a href={brand.addr} target="_blank">
                      <div className="flex">
                        <img
                          className="img-fluid mx-1 img-responsive rounded product-image-v2"
                          src={"/images/" + brand.link}
                        />
                        <h2 className="font-bold">{brand.name}</h2>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </li>
            <li className="mb-4">
              <div className="services-option relative group">
                <div className="absolute"></div>

                <a
                  className={classNames(
                    "page-scroll font-bold rounded-lg hover:text-gray-300",
                    location?.route == "/services"
                      ? "bg-black"
                      : "bg-white"
                  )}
                  href="/services"
                >
                  <span
                    className={classNames(
                      "px-1 font-bold hover:text-gray-300",
                      location?.route == "/services"
                        ? "text-white"
                        : "text-black"
                    )}
                  >
                    Services
                  </span>
                </a>
                <div className="dropdown-content-services top-6 left-20">
                  {cards.map((service) => (
                    <a href={"/services#" + service.id}>
                      <div className="flex my-1">
                        <h2 className="md:font-bold mx-2">
                          {service.head2}
                        </h2>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </li>
            <li className="mb-4">
              <div className="relative group">
                <div className="absolute"></div>

                <a
                  className={classNames(
                    "page-scroll font-bold rounded-lg hover:text-gray-300",
                    location?.route == "/products" &&
                      location?.query?.query == "eye-medic"
                      ? "bg-black"
                      : "bg-white"
                  )}
                  href="/products?query=eye-medic"
                >
                  <span
                    className={classNames(
                      "px-1 font-bold text-black hover:text-gray-300",
                      location?.route == "/products" &&
                        location?.query?.query == "eye-medic"
                        ? "text-white"
                        : "text-black"
                    )}
                  >
                    EyeCare
                  </span>
                </a>
              </div>
            </li>
            <li className="mb-4">
              <div className="relative group">
                <div className="absolute"></div>
                <a
                  className={classNames(
                    "page-scroll font-bold rounded-lg hover:text-gray-300",
                    location?.route == "/promotions"
                      ? "bg-black"
                      : "bg-white"
                  )}
                  href="/promotions"
                >
                  <span
                    className={classNames(
                      "px-1 font-bold hover:text-gray-300",
                      location?.route == "/promotions"
                        ? "text-white"
                        : "text-black"
                    )}
                  >
                    Promotions
                  </span>
                </a>
              </div>
            </li>
            <li className="mb-4">
              <div className="faq-option relative group">
                <div className="absolute"></div>
                <a
                  className={classNames(
                    "page-scroll font-bold rounded-lg hover:text-gray-300",
                    location?.route == "/faq"
                      ? "bg-black"
                      : "bg-white"
                  )}
                  href="/faq"
                >
                  <span
                    className={classNames(
                      "px-1 font-bold hover:text-gray-300",
                      location?.route == "/faq"
                        ? "text-white"
                        : "text-black"
                    )}
                  >
                    FAQs
                  </span>
                </a>
                <div className="dropdown-content-faq top-2 left-14">
                  <a href="/faq#q1">
                    <div className="flex">
                      <h2 className="font-bold">
                        How often should you get your eyes checked?
                      </h2>
                    </div>
                  </a>
                  <a href="/faq#q2">
                    <div className="flex">
                      <h2 className="font-bold">
                        What age should I get my child’s eye exams
                        done?
                      </h2>
                    </div>
                  </a>
                  <a href="/faq#q3">
                    <div className="flex">
                      <h2 className="font-bold">
                        How do I choose the right pair of glasses?
                      </h2>
                    </div>
                  </a>
                  <a href="/faq#q4">
                    <div className="flex">
                      <h2 className="font-bold">
                        Are sunglasses just for fashion or are they
                        necessary?
                      </h2>
                    </div>
                  </a>
                  <a href="/faq#q5">
                    <div className="flex">
                      <h2 className="font-bold">
                        Why Buy Contact Lenses In-Store vs Online?
                      </h2>
                    </div>
                  </a>
                  <a href="/faq#q6">
                    <div className="flex">
                      <h2 className="font-bold">
                        How can I reduce eye strain and redness?
                      </h2>
                    </div>
                  </a>
                  <a href="/faq#q7">
                    <div className="flex">
                      <h2 className="font-bold">
                        Do we do direct billing?
                      </h2>
                    </div>
                  </a>
                </div>
              </div>
            </li>
            <li className="mb-4">
              <div className="relative group">
                <div className="absolute"></div>
                <a
                  className={classNames(
                    "page-scroll font-bold rounded-lg hover:text-gray-300",
                    location?.route == "/about-us"
                      ? "bg-black"
                      : "bg-white"
                  )}
                  href="/about-us"
                >
                  <span
                    className={classNames(
                      "px-1 font-bold hover:text-gray-300",
                      location?.route == "/about-us"
                        ? "text-white"
                        : "text-black"
                    )}
                  >
                    About
                  </span>
                </a>
              </div>
            </li>
            <li className="mb-4">
              <div className="relative group">
                <div className="absolute"></div>
                <a
                  className="page-scroll font-bold rounded-lg hover:text-gray-300 bg-white"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeciQeXbMzKdezp0kkCx1Itxm1SCnUL5bv1C7rT1m1aBp1vsg/viewform?usp=sf_link"
                  target="_blank"
                >
                  <span
                    className="px-1 font-bold text-black hover:text-gray-300"
                  >
                    Order Contacts
                  </span>
                </a>
              </div>
            </li>
            <li className="mb-4">
              <div className="relative group">
                <div className="absolute"></div>
                <a
                  className={classNames(
                    "page-scroll font-bold rounded-lg hover:text-gray-300",
                    location?.route == "/bookings"
                      ? "bg-black"
                      : "bg-white"
                  )}
                  href="/bookings#appointment"
                >
                  <span
                    className={classNames(
                      "px-1 font-bold hover:text-gray-300",
                      location?.route == "/bookings"
                        ? "text-white"
                        : "text-black"
                    )}
                  >
                    Book Appointment
                  </span>
                </a>
              </div>
            </li>
            <li className="mb-4">
              <div className="relative group">
                <div className="absolute"></div>
                <a
                  className="page-scroll font-bold rounded-lg hover:text-gray-300 bg-white"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSex8fCDLOm41BPwOB235NRWKaZVdXk-tRiNbObpbV9vuUxV0Q/viewform?usp=sf_link"
                  target="_blank"
                >
                  <span
                    className="px-1 font-bold text-black hover:text-gray-300"
                  > Check Benefits
                  </span>
                </a>
              </div>
            </li>
          </ul>
          {/* <div className="mb-3">
            <a
              className="main-btn"
              data-scroll-nav="0"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeciQeXbMzKdezp0kkCx1Itxm1SCnUL5bv1C7rT1m1aBp1vsg/viewform?usp=sf_link"
              target="_blank"
            >
              {" "}
              <span className="px-2 font-bold">Order Contacts</span>
            </a>
          </div>
          <div className="mb-3">
            <a
              className="main-btn"
              data-scroll-nav="0"
              // href="https://docs.google.com/forms/d/e/1FAIpQLSfOr3fsy1F9RpZw9Gh8VyyUDAgm3Wg6HeskeIZRyiZvelRNNg/viewform?usp=sf_link"
              // target="_blank"
              href="/bookings#appointment"
            >
              {" "}
              <span className="px-2 font-bold">Book Appointment</span>
            </a>
          </div>
          <div className="mb-3">
            <a
              className="main-btn"
              data-scroll-nav="0"
              href="https://docs.google.com/forms/d/e/1FAIpQLSex8fCDLOm41BPwOB235NRWKaZVdXk-tRiNbObpbV9vuUxV0Q/viewform?usp=sf_link"
              target="_blank"
            >
              {" "}
              <span className="px-2 font-bold">Check Benefits</span>
            </a>
          </div> */}
          {/* <ul className="social text-black flex flex-row space-x-4">
            <li >
              <a href="https://www.facebook.com/PerformanceVisionEyeCare/" target="_blank">
                <i className="lni-facebook-filled"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/performancevisioneyecare/?hl=en">
                <i className="lni-instagram-filled"></i>
              </a>
            </li>
          </ul>
        </div>

      </header> */}
      <div className="md:block hidden">
        <header className="h-10 bg-gray-800 text-black">
          <nav className="h-full flex items-center justify-center">
            <ul className="flex space-x-6 font-bold text-xl">
              <li><a href="/" className="hover:text-gray-500">Home</a></li>
              <li>|</li>
              <li><div className="services-option relative group hover:text-gray-500">
                <div className="absolute "></div>
                <a className="page-scroll font-bold rounded-lg" href="/services">
                  <span className="font-bold"> Services </span>
                </a>
                <div className="dropdown-content-services">
                  {cards.map((service) => (
                    <a href={"/services#" + service.id}>
                      <div className="flex">
                        <h2 className="md:font-bold">
                          {service.head2}
                        </h2>
                      </div>
                    </a>
                  ))}
                </div>
              </div></li>
              <li>|</li>
              <li><div className="products-option relative group hover:text-gray-500">
                <a className="page-scroll font-bold rounded-lg" ><span className="px-1 font-bold">Products</span>
                  <div className="dropdown-content-products">
                    {/* <a href="/faq#q1">
                      <div className="glasses-option relative group">
                        <a
                          className="page-scroll font-bold rounded-lg"
                          href="/glasses-contacts?query=glasses"
                        >
                          <span className="font-bold text-black"> Sun/Glasses</span>
                        </a>
                        <div className="dropdown-content-glasses top-6 left-32">
                          {brandsArr.map((brand) => (
                            <a href={brand.addr} target="_blank">
                              <div className="flex">
                                <img
                                  className="img-fluid img-responsive rounded product-image-v2"
                                  src={"/images/brands/" + brand.link}
                                />
                                <h2 className="font-bold">{brand.name}</h2>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </a> */}
                    <a href="/glasses-contacts?query=glasses">
                      <div className="flex">
                        <h2 className="font-bold">Sun/Glasses</h2>
                      </div>
                    </a>
                    <a href="/glasses-contacts?query=contacts">
                      <div className="flex">
                        <h2 className="font-bold">Contacts</h2>
                      </div>
                    </a>
                    <a href="/products?query=eye-medic">
                      <div className="flex">
                        <h2 className="font-bold">Eye Care Products</h2>
                      </div>
                    </a>
                  </div>
                </a>
              </div></li>
              <li>|</li>
              <li><a href="/bookings#appointment" className="hover:text-gray-500">Book Appointment</a></li>
              <li>|</li>
              <li><a href="/about-us" className="hover:text-gray-500">About Us</a></li>
              <li>|</li>
              <li>
                <div className="faq-option relative group hover:text-gray-500">
                  <div className="absolute"></div>
                  <a
                    className={classNames(
                      "page-scroll font-bold rounded-lg",
                      // location?.route == "/faq"
                      //   ? "bg-white"
                      //   : "bg-black"
                    )}
                    href="/faq"
                  >
                    <span
                      className={classNames(
                        "px-1 font-bold",
                        // location?.route == "/faq"
                        //   ? "text-black"
                        //   : "text-white"
                      )}
                    >
                      FAQs
                    </span>
                  </a>
                  <div className="dropdown-content-faq">
                    <a href="/faq#q1">
                      <div className="flex">
                        <h2 className="font-bold">
                          How often should you get your eyes checked?
                        </h2>
                      </div>
                    </a>
                    <a href="/faq#q2">
                      <div className="flex">
                        <h2 className="font-bold">
                          What age should I get my child’s eye exams
                          done?
                        </h2>
                      </div>
                    </a>
                    <a href="/faq#q3">
                      <div className="flex">
                        <h2 className="font-bold">
                          How do I choose the right pair of glasses?
                        </h2>
                      </div>
                    </a>
                    <a href="/faq#q4">
                      <div className="flex">
                        <h2 className="font-bold">
                          Are sunglasses just for fashion or are they
                          necessary?
                        </h2>
                      </div>
                    </a>
                    <a href="/faq#q5">
                      <div className="flex">
                        <h2 className="font-bold">
                          Why Buy Contact Lenses In-Store vs Online?
                        </h2>
                      </div>
                    </a>
                    <a href="/faq#q6">
                      <div className="flex">
                        <h2 className="font-bold">
                          How can I reduce eye strain and redness?
                        </h2>
                      </div>
                    </a>
                    <a href="/faq#q7">
                      <div className="flex">
                        <h2 className="font-bold">
                          Do we do direct billing?
                        </h2>
                      </div>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </header>
        <style jsx>{`
                header {
                  background-color: #CADAFE;
                    padding: 1rem;
                    text-align: center;
                }

                nav ul {
                    list-style: none;
                    padding: 0;
                }

                nav ul li {
                    display: inline;
                    margin-right: 20px;
                }

                main {
                    padding: 2rem;
                    text-align: center;
                }

                img {
                    width: 100%;
                    max-width: 600px;
                    margin: 2rem 0;
                }
            `}</style>
      </div>

      {isVisible && (
        <div className="md:hidden block ">
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                height: "100vh",
                width: "100vw",
                background: "black",
                zIndex: 21,
              }}
            >
              {/* START */}
              <div style={{ display: "flex", justifyContent: "end" }}>
                <img
                  onClick={() => {
                    setIsVisible((prev) => !prev);
                  }}
                  src="/cross.png"
                  style={{ height: "35px", margin: "45px 25px 0 0" }}
                />
              </div>
              <ul className="text-lg" style={{ marginTop: "2rem" }}>
                {/* <li className="mb-4">
              <a href="/" className="text-black hover:text-gray-300">Home</a>
            </li> */}

                <li className="mb-3 active ">
                  <div className="relative group text-center">
                    <div className="absolute"></div>

                    <a
                      className={classNames("page-scroll rounded-lg")}
                      href="/"
                    >
                      <span className="flex items-center ">
                        {" "}
                        <span
                          style={{ fontSize: "1.8rem", fontWeight: "200" }}
                          className="text-white"
                        >
                          Home
                        </span>
                      </span>
                    </a>
                  </div>
                </li>

                <li className="mb-3">
                  <div className="glasses-option relative group text-center">
                    <div className="absolute "></div>
                    <a
                      className={classNames(
                        " page-scroll  rounded-lg hover:text-gray-300"
                      )}
                      href="/glasses-contacts?query=glasses"
                    >
                      <span
                        className={classNames(
                          "px-1   hover:text-gray-300 text-white"
                        )}
                        style={{ fontSize: "1.8rem", fontWeight: "200" }}
                      >
                        Sun/Glasses
                      </span>
                    </a>
                    <div className="dropdown-content-glasses top-6 left-20">
                      {brandsArr.map((brand) => (
                        <a href={brand.addr} target="_blank">
                          <div className="flex">
                            <img
                              onClick={() => setIsVisible(false)}
                              className="img-fluid mx-1 img-responsive rounded product-image-v2"
                              src={"/images/brands/" + brand.link}
                            />
                            <h2 className="font-bold">{brand.name}</h2>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="contacts-option relative group text-center">
                    <div className="absolute "></div>
                    <a
                      className={classNames(
                        "page-scroll  rounded-lg hover:text-gray-300"
                      )}
                      href="/glasses-contacts?query=contacts"
                    >
                      <span
                        style={{ fontSize: "1.8rem", fontWeight: "200" }}
                        className="text-white"
                      >
                        Contacts
                      </span>
                    </a>
                    <div className="dropdown-content-contacts  top-6 left-20">
                      {contactsBrandsArr.map((brand) => (
                        <a href={brand.addr} target="_blank">
                          <div className="flex">
                            <img
                              className="img-fluid mx-1 img-responsive rounded product-image-v2"
                              src={"/images/" + brand.link}
                            />
                            <h2 className="font-bold">{brand.name}</h2>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="services-option relative group text-center">
                    <div className="absolute"></div>

                    <a
                      className={classNames(
                        "page-scroll  rounded-lg text-white"
                      )}
                      href="/services"
                    >
                      <span
                        className={classNames("px-1 ")}
                        style={{ fontSize: "1.8rem", fontWeight: "200" }}
                      >
                        Services
                      </span>
                    </a>
                    <div className="dropdown-content-services top-6 left-20">
                      {cards.map((service) => (
                        <a href={"/services#" + service.id}>
                          <div className="flex my-1">
                            <h2 className="md:font-bold mx-2">
                              {service.head2}
                            </h2>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="relative group text-center">
                    <div className="absolute"></div>

                    <a
                      className={classNames(
                        "page-scroll rounded-lg hover:text-gray-300"
                      )}
                      href="/products?query=eye-medic"
                    >
                      <span
                        style={{ fontSize: "1.8rem", fontWeight: "200" }}
                        className={classNames("px-1  text-white")}
                      >
                        EyeCare
                      </span>
                    </a>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="relative group text-center">
                    <div className="absolute"></div>
                    <a
                      className={classNames(
                        "page-scroll font-bold rounded-lg hover:text-gray-300"
                      )}
                      href="/promotions"
                    >
                      <span
                        className={classNames("px-1  text-white")}
                        style={{ fontSize: "1.8rem", fontWeight: "200" }}
                      >
                        Promotions
                      </span>
                    </a>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="faq-option relative group text-center">
                    <div className="absolute"></div>
                    <a
                      className={classNames(
                        "page-scroll  rounded-lg hover:text-gray-300"
                      )}
                      href="/faq"
                    >
                      <span
                        className={classNames("px-1 text-white")}
                        style={{ fontSize: "1.8rem", fontWeight: "200" }}
                      >
                        FAQs
                      </span>
                    </a>
                    <div className="dropdown-content-faq top-2 left-14">
                      <a href="/faq#q1">
                        <div className="flex">
                          <h2 className="font-bold">
                            How often should you get your eyes checked?
                          </h2>
                        </div>
                      </a>
                      <a href="/faq#q2">
                        <div className="flex">
                          <h2 className="font-bold">
                            What age should I get my child’s eye exams done?
                          </h2>
                        </div>
                      </a>
                      <a href="/faq#q3">
                        <div className="flex">
                          <h2 className="font-bold">
                            How do I choose the right pair of glasses?
                          </h2>
                        </div>
                      </a>
                      <a href="/faq#q4">
                        <div className="flex">
                          <h2 className="font-bold">
                            Are sunglasses just for fashion or are they
                            necessary?
                          </h2>
                        </div>
                      </a>
                      <a href="/faq#q5">
                        <div className="flex">
                          <h2 className="font-bold">
                            Why Buy Contact Lenses In-Store vs Online?
                          </h2>
                        </div>
                      </a>
                      <a href="/faq#q6">
                        <div className="flex">
                          <h2 className="font-bold">
                            How can I reduce eye strain and redness?
                          </h2>
                        </div>
                      </a>
                      <a href="/faq#q7">
                        <div className="flex">
                          <h2 className="font-bold">
                            Do we do direct billing?
                          </h2>
                        </div>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="relative group text-center">
                    <div className="absolute"></div>
                    <a
                      className={classNames(
                        "page-scroll  rounded-lg hover:text-gray-300"
                      )}
                      href="/about-us"
                    >
                      <span
                        style={{ fontSize: "1.8rem", fontWeight: "200" }}
                        className={classNames("px-1 text-center text-white")}
                      >
                        About
                      </span>
                    </a>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="relative group text-center">
                    <div className="absolute"></div>
                    <a
                      className={classNames(
                        "page-scroll  rounded-lg hover:text-gray-300"
                      )}
                      href="https://docs.google.com/forms/d/e/1FAIpQLSeciQeXbMzKdezp0kkCx1Itxm1SCnUL5bv1C7rT1m1aBp1vsg/viewform?usp=sf_link"
                      target="_blank"
                    >
                      <span
                        style={{ fontSize: "1.8rem", fontWeight: "200" }}
                        className={classNames("px-1 text-center text-white")}
                      >
                        Order Contact
                      </span>
                    </a>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="relative group text-center">
                    <div className="absolute"></div>
                    <a
                      className={classNames(
                        "page-scroll  rounded-lg hover:text-gray-300"
                      )}
                      href="/bookings#appointment"
                    >
                      <span
                        style={{ fontSize: "1.8rem", fontWeight: "200" }}
                        className={classNames("px-1 text-center text-white")}
                      >Book Appointment
                      </span>
                    </a>
                  </div>
                </li>
                {/* <li className="mb-3">
                  <div className="relative group text-center">
                    <div className="absolute"></div>
                    <a
                      className={classNames(
                        "page-scroll  rounded-lg hover:text-gray-300"
                      )}
                      href="https://docs.google.com/forms/d/e/1FAIpQLSex8fCDLOm41BPwOB235NRWKaZVdXk-tRiNbObpbV9vuUxV0Q/viewform?usp=sf_link"
                      target="_blank"
                    >
                      <span
                        style={{ fontSize: "1.8rem", fontWeight: "200" }}
                        className={classNames("px-1 text-center text-white")}
                      >Check Benefits
                      </span>
                    </a>
                  </div>
                </li> */}
              </ul>
              {/* END */}
            </div>
          </div>
        </div>
      )}

      <div className=" flex md:hidden justify-between ">
        <a className="navbar-brand " href="#">
          <img
            src="https://pvec-bucket.s3.ca-central-1.amazonaws.com/eyecare-logo.png"
            style={{
              maxWidth: "11rem",
              height: "4.5rem",
              marginLeft: 24,
              marginTop: 12,
              zIndex: 2000,
              paddingLeft: 2,
              paddingRight: 2,
            }}
            alt="Logo"
          />
        </a>
        <div className="container mt-6">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg flex justify-end">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={() => {
                    setIsVisible((prev) => !prev);
                  }}
                >
                  <span
                    className="toggler-icon bg-black"
                    style={{ background: "black" }}
                  />
                  <span
                    className="toggler-icon bg-black"
                    style={{ background: "black" }}
                  />
                  <span
                    className="toggler-icon bg-black"
                    style={{ background: "black" }}
                  />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <Modal
        title="Order your products"
        open={isModalOpen}
        onOk={handleOk}
        okText="Place your order"
        onCancel={() => {
          currContext.dispatch({ count: cartProducts.length });
          handleCancel();
        }}
        centered
        width={900}
        footer={null}
      >
        <OrderList
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
          setIsModalOpen={setIsModalOpen}
          setIsOrderModalOpen={setIsOrderModalOpen}
        />
      </Modal>
      <Modal
        title="Order details"
        open={isOrderModalOpen}
        onOk={handleOk}
        okText="Place your order"
        onCancel={handleCancelOrderModal}
        centered
        width={680}
        footer={null}
      >
        <Form
          layout="vertical"
          hideRequiredMark
          colon={false}
          onFinish={onFinish}
          form={form}
        >
          <Order
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
            setIsOrderModalOpen={setIsOrderModalOpen}
            images={images}
            setImages={setImages}
            form={form}
            fileList={fileList}
            setFileList={setFileList}
          />
        </Form>
      </Modal>
    </>
  );
}

function classNames(...args) {
  return args.filter(Boolean).join(" ");
}
