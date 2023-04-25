import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SearchBar from "../SearchBar";
import Icon, { ShoppingCartOutlined } from "@ant-design/icons";
import { Avatar, Badge, Input, Modal, Space } from "antd";
import Order from "../Order";
import Products from "../../utils/endpoints/Products";
import { callApi } from "../../utils/apiUtils";

const { Search } = Input;

const onSearch = () => console.log(value);

export default function ProductsComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const router = useRouter();


  useEffect(() => {
    let productResp = getProducts({
      query: { category :"" },
    });
    if(productResp?.productData)
      setProducts(productResp?.productData)
  }, []);

  const getProducts = async ({ query }) => {
    console.log("getAppointmentSchedulesDayWise", query);
    const products = await callApi({
      uriEndPoint: {
        ...Products.getProductsV2,
      },
      query :{ category :""},
    });
  
      console.log("products", products);
    return products;
  };

  console.log("searchParams", router.query);
  // if(router?.query?.query){
  //   if(router?.query?.query=="eye-medic"){
  //     setTitle("Eye Medicare Products");
  //   } else if(router?.query?.query==""){
  //     setTitle("Eye Medicare Products");
  //   } else if(router?.query?.query==""){
  //     setTitle("Eye Medicare Products");
  //   }
  // }

  function getTitle() {
    if (router?.query?.query == "eye-medic") {
      return "Eye Medicare Products";
    } else if (router?.query?.query == "contacts") {
      return "Contact Lenses";
    } else if (router?.query?.query == "glasses") {
      return "Glasses";
    } else if (router.pathname == "/glasses-contacts")
      return "Glasses & Contacts";
  }

  return (
    <>
      <div className="section-title mx-10">
        <div className="line"></div>
        <h3 className="title">{getTitle()}</h3>
      </div>
      {/* <SearchBar/> */}
      {/* <Search placeholder="input search text" onSearch={onSearch} enterButton /> */}
      <div className="container mt-2 mb-2">
        <div className="col-md-2"></div>
        <div className="col-md-10 flex justify-end">
          <Badge count={5}>
            <ShoppingCartOutlined style={{ fontSize: "30px" }} />
            {/* <Avatar shape="square" size="large" /> */}
          </Badge>
          <button
            className="btn btn-outline-primary btn-sm ml-8"
            type="button"
            style={{ minWidth: "100px" }}
            onClick={showModal}
          >
            Order
          </button>
          <Modal
            title="Order your products"
            open={isModalOpen}
            onOk={handleOk}
            okText ="Place your order"
            onCancel={handleCancel}
            // style={{
            //   backgroundColor: "#1677ff !important",
            // }}
          >
            <Order />
          </Modal>
        </div>
      </div>
      <div className="flex justify-center">
        <Search
          className="m-6"
          placeholder="Search products"
          onSearch={onSearch}
          enterButton
          style={{
            width: "70%",
            backgroundColor: "#1677ff !important",
          }}
        />
      </div>
      {/* Add to cart and order functionality */}
      <div className="container mt-2 mb-5">
        <div className="d-flex justify-content-center row">
          <div className="col-md-10">
          {products.map(product =>{
            <div className="row p-2 bg-white border rounded">
              <div className="col-md-3 mt-1">
                <img
                  className="img-fluid img-responsive rounded product-image"
                  src={product.image}
                />
              </div>
              <div className="col-md-7 mt-1">
                <h5>{product.name}</h5>
                {/* <div className="d-flex flex-row">
                  <div className="ratings mr-2">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <span>310</span>
                </div> */}
                <div className="mt-1 mb-1 spec-1">
                  {
                    product?.tags.array.forEach((element, arrIndex) => {
                      tag =`<span className="dot"></span>
                          <span>${element}</span>`
                      tag +=((arrIndex+1) %3 ==0)?"<br />":""
                      return tag;
                    })
                  }
                </div>
                <p className="text-justify text-truncate para mb-0">
                  {product.description}
                  <br />
                  <br />
                </p>
              </div>
              <div className="align-items-center align-content-center col-md-2 border-left mt-1">
                <div className="d-flex flex-column mt-4">
                  {/* <button className="btn btn-primary btn-sm" type="button">
                    Details
                  </button> */}
                  <button
                    className="btn btn-outline-primary btn-sm mt-2"
                    type="button"
                  >
                    Add to Order
                  </button>
                </div>
              </div>
            </div>
          })}
            <div className="row p-2 bg-white border rounded">
              <div className="col-md-3 mt-1">
                <img
                  className="img-fluid img-responsive rounded product-image"
                  src="/images/PVEC_idrop.jpeg"
                />
              </div>
              <div className="col-md-7 mt-1">
                <h5>Eye Drops</h5>
                {/* <div className="d-flex flex-row">
                  <div className="ratings mr-2">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <span>310</span>
                </div> */}
                <div className="mt-1 mb-1 spec-1">
                  <span>100% cotton</span>
                  <span className="dot"></span>
                  <span>Light weight</span>
                  <span className="dot"></span>
                  <span>
                    Best finish
                    <br />
                  </span>
                </div>
                <div className="mt-1 mb-1 spec-1">
                  <span>Unique design</span>
                  <span className="dot"></span>
                  <span>For men</span>
                  <span className="dot"></span>
                  <span>
                    Casual
                    <br />
                  </span>
                </div>
                <p className="text-justify text-truncate para mb-0">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                  <br />
                  <br />
                </p>
              </div>
              <div className="align-items-center align-content-center col-md-2 border-left mt-1">
                <div className="d-flex flex-column mt-4">
                  {/* <button className="btn btn-primary btn-sm" type="button">
                    Details
                  </button> */}
                  <button
                    className="btn btn-outline-primary btn-sm mt-2"
                    type="button"
                  >
                    Add to Order
                  </button>
                </div>
              </div>
            </div>
            <div className="row p-2 bg-white border rounded mt-2">
              <div className="col-md-3 mt-1">
                <img
                  className="img-fluid img-responsive rounded product-image"
                  // src="https://i.imgur.com/JvPeqEF.jpg"
                  src="/images/PVEC_omega3.jpeg"
                />
              </div>
              <div className="col-md-7 mt-1">
                <h5>Omega-3</h5>
                {/* <div className="d-flex flex-row">
                  <div className="ratings mr-2">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <span>310</span>
                </div> */}
                <div className="mt-1 mb-1 spec-1">
                  <span>100% cotton</span>
                  <span className="dot"></span>
                  <span>Light weight</span>
                  <span className="dot"></span>
                  <span>
                    Best finish
                    <br />
                  </span>
                </div>
                <div className="mt-1 mb-1 spec-1">
                  <span>Unique design</span>
                  <span className="dot"></span>
                  <span>For men</span>
                  <span className="dot"></span>
                  <span>
                    Casual
                    <br />
                  </span>
                </div>
                <p className="text-justify text-truncate para mb-0">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                  <br />
                  <br />
                </p>
              </div>
              <div className="align-items-center align-content-center col-md-2 border-left mt-1">
                <div className="d-flex flex-column mt-4">
                  {/* <button className="btn btn-primary btn-sm" type="button">
                    Details
                  </button> */}
                  <button
                    className="btn btn-outline-primary btn-sm mt-2"
                    type="button"
                  >
                    Add to Order
                  </button>
                </div>
              </div>
            </div>
            <div className="row p-2 bg-white border rounded mt-2">
              <div className="col-md-3 mt-1">
                <img
                  className="img-fluid img-responsive rounded product-image"
                  src="/images/PVEC_teatree.jpeg"
                />
              </div>
              <div className="col-md-7 mt-1">
                <h5>Tea Tree Eyelid</h5>
                {/* <div className="d-flex flex-row">
                  <div className="ratings mr-2">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <span>123</span>
                </div> */}
                <div className="mt-1 mb-1 spec-1">
                  <span>100% cotton</span>
                  <span className="dot"></span>
                  <span>Light weight</span>
                  <span className="dot"></span>
                  <span>
                    Best finish
                    <br />
                  </span>
                </div>
                <div className="mt-1 mb-1 spec-1">
                  <span>Unique design</span>
                  <span className="dot"></span>
                  <span>For men</span>
                  <span className="dot"></span>
                  <span>
                    Casual
                    <br />
                  </span>
                </div>
                <p className="text-justify text-truncate para mb-0">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                  <br />
                  <br />
                </p>
              </div>
              <div className="align-items-center align-content-center col-md-2 border-left mt-1">
                <div className="d-flex flex-column mt-4">
                  {/* <button className="btn btn-primary btn-sm" type="button">
                    Details
                  </button> */}
                  <button
                    className="btn btn-outline-primary btn-sm mt-2"
                    type="button"
                  >
                    Add to Order
                  </button>
                </div>
              </div>
            </div>
            <div className="row p-2 bg-white border rounded mt-2">
              <div className="col-md-3 mt-1">
                <img
                  className="img-fluid img-responsive rounded product-image"
                  src="/images/PVEC_eyemask.jpeg"
                />
              </div>
              <div className="col-md-7 mt-1">
                <h5>Eye Mask</h5>
                {/* <div className="d-flex flex-row">
                  <div className="ratings mr-2">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <span>110</span>
                </div> */}
                <div className="mt-1 mb-1 spec-1">
                  <span>100% cotton</span>
                  <span className="dot"></span>
                  <span>Light weight</span>
                  <span className="dot"></span>
                  <span>
                    Best finish
                    <br />
                  </span>
                </div>
                <div className="mt-1 mb-1 spec-1">
                  <span>Unique design</span>
                  <span className="dot"></span>
                  <span>For men</span>
                  <span className="dot"></span>
                  <span>
                    Casual
                    <br />
                  </span>
                </div>
                <p className="text-justify text-truncate para mb-0">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomized words which don't look
                  even slightly believable.
                  <br />
                  <br />
                </p>
              </div>
              <div className="align-items-center align-content-center col-md-2 border-left mt-1">
                <div className="d-flex flex-column mt-4">
                  {/* <button className="btn btn-primary btn-sm" type="button">
                    Details
                  </button> */}
                  <button
                    className="btn btn-outline-primary btn-sm mt-2"
                    type="button"
                  >
                    Add to Order
                  </button>
                </div>
              </div>
            </div>
            <div className="row p-2 bg-white border rounded mt-2">
              <div className="col-md-3 mt-1">
                <img
                  className="img-fluid img-responsive rounded product-image"
                  src="/images/PVEC_lidlash.jpeg"
                />
              </div>
              <div className="col-md-7 mt-1">
                <h5>Lid 'n Lash</h5>
                {/* <div className="d-flex flex-row">
                  <div className="ratings mr-2">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <span>110</span>
                </div> */}
                <div className="mt-1 mb-1 spec-1">
                  <span>100% cotton</span>
                  <span className="dot"></span>
                  <span>Light weight</span>
                  <span className="dot"></span>
                  <span>
                    Best finish
                    <br />
                  </span>
                </div>
                <div className="mt-1 mb-1 spec-1">
                  <span>Unique design</span>
                  <span className="dot"></span>
                  <span>For men</span>
                  <span className="dot"></span>
                  <span>
                    Casual
                    <br />
                  </span>
                </div>
                <p className="text-justify text-truncate para mb-0">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                  <br />
                  <br />
                </p>
              </div>
              <div className="align-items-center align-content-center col-md-2 border-left mt-1">
                <div className="d-flex flex-column mt-4">
                  {/* <button className="btn btn-primary btn-sm" type="button">
                    Details
                  </button> */}
                  <button
                    className="btn btn-outline-primary btn-sm mt-2"
                    type="button"
                  >
                    Add to Order
                  </button>
                  <i className="bi bi-cart-plus"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
