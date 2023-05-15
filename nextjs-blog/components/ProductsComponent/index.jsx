import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Input, Modal, Pagination } from "antd";
import Order from "../Order";
import Products from "../../utils/endpoints/Products";
import { callApi } from "../../utils/apiUtils";

const { Search } = Input;
const queryObj = {
  "eye-medic": "MEDICARE",
  contacts: "CONTACTS",
  glasses: "GLASSES",
};

const onSearch = () => console.log(value);

export default function ProductsComponent() {
  const [cartProducts, setCartProducts] = useState([]);
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
    if (router.isReady) {
      const localCartProducts = localStorage.getItem("products") || "[]";
      setCartProducts(JSON.parse(localCartProducts));
      getProducts({
        query: {
          query: queryObj[router?.query?.query] || "contacts,glasses",
          startIndex: 0,
          viewSize: 10,
        },
      }).then((res) => {
        if (res?.productData) {
          console.log("res", res.productData);
          setProducts(res);
        }
      });
    }
  }, [router.query]);

  const getProducts = async ({ query }) => {
    console.log("getAppointmentSchedulesDayWise", query);
    return await callApi({
      uriEndPoint: {
        ...Products.getProductsV2,
      },
      query,
    }).catch((err) => {
      console.log("err", err);
    });
  };

  const handleAddOrder = async (newCartProduct) => {
    setCartProducts((prev) => [...prev, { count: 1, ...newCartProduct }]);
    localStorage.setItem(
      "products",
      JSON.stringify([...cartProducts, { count: 1, ...newCartProduct }])
    );
  };
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
  const productDict = {};
  cartProducts?.forEach((product, i) => {
    productDict[product?._id] = i;
  });
  const removeOrder = (removeProduct, idxRemoveProduct) => {
    localStorage.setItem(
      "products",
      JSON.stringify(cartProducts.filter((p, i) => i !== idxRemoveProduct))
    );
    setCartProducts((prev) => prev.filter((p, i) => i !== idxRemoveProduct));
  };
  console.log("productDict", productDict);
  return (
    <>
      <div className="section-title mx-10">
        <div className="line"></div>
        <h3 className="title">{getTitle()}</h3>
      </div>
      <div className="container mt-2 mb-2">
        <div className="col-md-2"></div>
        <div className="col-md-10 flex justify-end">
          <Badge count={cartProducts.length}>
            <ShoppingCartOutlined style={{ fontSize: "30px" }} />
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
            okText="Place your order"
            onCancel={handleCancel}
            centered
            width="70vh"
            footer={null}
          >
            <Order
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
              setIsModalOpen={setIsModalOpen}
            />
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
      <div className="container mt-2 mb-5">
        <div className="d-flex justify-content-center row">
          <div className="col-md-10">
            {products?.productData?.map((product) => {
              return (
                <div
                  key={product?._id}
                  className="row p-2 bg-white border rounded"
                >
                  <div className="col-md-3 mt-1">
                    <img
                      className="img-fluid img-responsive rounded product-image"
                      src={product.image}
                    />
                  </div>
                  <div className="col-md-7 mt-1">
                    <h5>{product.name}</h5>
                    <div className="mt-1 mb-1 spec-1">
                      {product?.tags?.map((element, arrIndex) => {
                        let tag = (
                          <>
                            <span className="dot"></span>
                            <span>{element}</span>
                          </>
                        );
                        return tag;
                      })}
                    </div>
                    <p className="text-justify text-truncate para mb-0">
                      {product.description}
                      <br />
                      <br />
                    </p>
                  </div>
                  <div className="align-items-center align-content-center col-md-2 border-left mt-1">
                    <div className="d-flex flex-column mt-4">
                      {!(product?._id in productDict) ? (
                        <button
                          className="btn btn-outline-primary btn-sm mt-2"
                          type="button"
                          onClick={() => handleAddOrder(product)}
                        >
                          Add to order
                        </button>
                      ) : (
                        <button
                          className="bg-primary text-white btn-sm mt-2"
                          type="button"
                          onClick={() =>
                            removeOrder(product, productDict[product?._id])
                          }
                        >
                          Remove order
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-end">
          <Pagination
            className="mr-28 py-6"
            onChange={(page, pageSize) => {
              getProducts({
                query: {
                  query: router?.query?.query || "contacts,glasses",
                  startIndex: (page - 1) * pageSize,
                  viewSize: pageSize,
                },
              }).then((res) => {
                setProducts(res);
              });
            }}
            pageSize={10}
            hideOnSinglePage
            total={products?.totalCount}
          />
        </div>
      </div>
    </>
  );
}
