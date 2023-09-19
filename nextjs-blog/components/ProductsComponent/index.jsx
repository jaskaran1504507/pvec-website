import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Badge,
  Button,
  Form,
  Input,
  List,
  Modal,
  Pagination,
  Select,
  Tag,
  message,
  notification,
  Image,
} from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Products from "../../utils/endpoints/Products";
import { callApi } from "../../utils/apiUtils";
import Slider from "../../components/Slider";
import LogoRow from "../../components/LogoRow";
import Order from "../../components/Order";
import context from "../context";
import {
  brandsArr,
  contactsBrandsArr,
  gridGlassesBrands,
  gridContactsBrands,
  eyecareProductsArr,
  gridEyecareBrands,
  eyecareProductsList,
} from "../../constant";
import BrandsGrid from "../BrandsGrid";
import Brands from "../../utils/endpoints/Brands";
import { debounce } from "lodash";
import OrderList from "../OrderList";

const { Search } = Input;
const queryObj = {
  "eye-medic": "MEDICARE",
  contacts: "CONTACTS",
  glasses: "GLASSES",
};

export default function ProductsComponent() {
  const [cartProducts, setCartProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [brand, setBrand] = useState([]);
  const [category, setCategory] = useState("");
  const [keyword, setKeyword] = useState("");
  const [startIndex, setStartIndex] = useState(0);
  const [productsCount, setProductsCount] = useState(0);
  const [images, setImages] = useState([]);
  const [fileList, setFileList] = useState([
    // {
    //   uid: '-1',
    //   name: 'image.png',
    //   status: 'done',
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    // },
  ]);
  const currContext = useContext(context);
  const [form] = Form.useForm();

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
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      if (router?.query?.search) {
        setSearch(router.query.search);
        getProducts({
          query: {
            query: router.query.search,
            startIndex: 0,
            viewSize: 10,
          },
        }).then((res) => {
          if (res?.productData) {
            setProducts(res?.productData);
          }
        });
      } else {
        const localCartProducts = localStorage.getItem("products") || "[]";
        currContext.dispatch({ count: JSON.parse(localCartProducts).length });
        setCartProducts(JSON.parse(localCartProducts));
        getProducts({
          query: {
            category: queryObj[router?.query?.query] || ["CONTACTS", "GLASSES"],
            startIndex: 0,
            viewSize: 10,
          },
        }).then((res) => {
          if (res?.productData) {
            setProducts(res?.productData);
          }
        });
      }
    }
  }, [router.query]);

  const getProducts = async ({ query }) => {
    return await callApi({
      uriEndPoint: {
        ...Products.getProductsV2,
      },
      query,
    }).catch((err) => {
      console.log("err", err);
    });
  };

  const getBrandsFromServer = async ({ query }) => {
    return await callApi({
      uriEndPoint: {
        ...Brands.getBrands,
      },
      query,
    }).catch((err) => {
      console.log("err", err);
    });
  };

  useEffect(() => {
    getBrandsFromServer({
      query: {
        startIndex: 0,
        fetchSize: 100,
        keyword: "",
        category: queryObj[router?.query?.query],
      },
    })
      .then((res) => {
        if (res?.brands) {
          let newBrandsList = res?.brands.map((obj) => {
            return {
              value: obj._id,
              label: obj.title,
            };
          });
          setBrands(newBrandsList);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [category]);

  useEffect(() => {
    setCategory(getCategory);
  }, []);

  const getCategory = () => {
    let query = router?.query?.query;
    if (query && query !== "") {
      switch (query) {
        case "eye-medic":
          return "MEDICARE";
        case "contacts":
          return "CONTACTS";
        case "glasses":
          return "GLASSES";
        default:
          return "";
      }
    }
    return "";
  };

  const onChange = (value) => {
    setBrand(value);
    handleProductSearch({
      brandNew: value,
    });
  };

  const action = (value) => {
    setKeyword(value);
    handleProductSearch({
      keywordNew: value,
    });
  };

  const debounceSearch = debounce(action, 400);

  const handleProductSearch = ({ keywordNew, brandNew, startIndexNew }) => {
    let searchObj = {
      startIndex: startIndex,
      viewSize: 10,
      keyword: keyword,
      category: getCategory(),
      brand: brand,
    };
    if (keywordNew) {
      searchObj.keyword = keyword;
    }
    if (brandNew) {
      searchObj.brand = brandNew;
    }
    if (startIndexNew || startIndexNew == 0) {
      searchObj.startIndex = startIndexNew;
    }

    getProducts({
      query: searchObj,
    })
      .then((res) => {
        if (res?.productData) {
          setProducts(res?.productData);
          if (res?.totalCount) {
            setProductsCount(+res?.totalCount);
          }
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const onSearch = (val) => {
    getProducts({
      query: {
        query: router?.query?.query || "contacts,glasses",
        startIndex: 0,
        viewSize: 10,
        search: val,
      },
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

  function getBrands() {
    if (router?.query?.query == "eye-medic") {
      return eyecareProductsArr;
    } else if (router?.query?.query == "contacts") {
      return contactsBrandsArr;
    } else if (router?.query?.query == "glasses") {
      return brandsArr;
    } else if (router.pathname == "/glasses-contacts") return brandsArr;
  }

  function getBrandsRow() {
    if (router?.query?.query == "eye-medic") {
      return eyecareProductsList;
    } else if (router?.query?.query == "contacts") {
      return contactsBrandsArr;
    } else if (router?.query?.query == "glasses") {
      return brandsArr;
    } else if (router.pathname == "/glasses-contacts") return brandsArr;
  }

  function getBrandHead() {
    if (router?.query?.query == "eye-medic") {
      return {
        imageUrl: "/images/eye-drops.jpg",
        linkUrl: "",
        linkText: "Buy Eye Drops",
      };
    } else if (router?.query?.query == "contacts") {
      return {
        imageUrl: "/images/acuvue-shop1.jpeg",
        linkUrl: "https://www.acuvue.ca/",
        linkText: "Buy Acuvue",
      };
    } else if (router?.query?.query == "glasses") {
      return {
        imageUrl: "/images/kliilk_shop.jpg",
        linkUrl: "https://www.kliik.com/",
        linkText: "Buy KLiik",
      };
    } else if (router.pathname == "/glasses-contacts")
      return {
        imageUrl: "/images/kliilk_shop.jpg",
        linkUrl: "https://www.kliik.com/",
        linkText: "Buy KLiik",
      };
  }

  function getGridBrands() {
    if (router?.query?.query == "eye-medic") {
      return gridEyecareBrands;
    } else if (router?.query?.query == "contacts") {
      return gridContactsBrands;
    } else if (router?.query?.query == "glasses") {
      return gridGlassesBrands;
    } else if (router.pathname == "/glasses-contacts") return gridGlassesBrands;
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

  return (
    <>
      <div className="container">
        <Slider slides={getBrands()} />

        {/* Brands list with logo */}
        <div className="mt-12">
          {" "}
          <LogoRow logos={getBrandsRow()} />
        </div>

        {/* Advanced corousel section to showcase a brand or more, brand image on left, 4 images on right */}
        <div className="my-8">
          {" "}
          <BrandsGrid head={getBrandHead()} gridBrands={getGridBrands()} />
        </div>
      </div>
      <div className="line mt-20"></div>

      {/* The products section starts */}
      <div id="search_products" className="container mt-2 mb-5">
        <h2 className="font-bold text-2xl">Search & Order Products</h2>
        <br />
        <div className="d-flex justify-content-center row">
          <br />
          {/* <h2 className="font-bold text-lg">Search Products</h2> */}
          <br />
          <div className="col-md-10 md:px-auto px-0 md:flex mx-4 mb-4 items-center">
            <div className="md:w-3/4 flex gap-2">
              <Search
                size="large"
                placeholder="Enter keyword here to search..."
                onInput={(value) => debounceSearch(value?.target?.value)}
                enterButton
              />
            </div>

            <div className="w/2 md:flex gap-2 md:my-0 my-4">
              <Select
                className="md:ml-3 w-32"
                showSearch
                size="large"
                placeholder="Brand"
                optionFilterProp="children"
                onChange={onChange}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={brands}
              />
            </div>
            <div className="w/2 flex gap-2 md:mt-0  justify-between md:justify-end">
              <button
                className="btn btn-outline-primary btn-sm md:ml-8"
                type="button"
                style={{ minWidth: "100px" }}
                onClick={showModal}
              >
                Order
              </button>
              <Badge count={cartProducts.length}>
                <ShoppingCartOutlined style={{ fontSize: "30px" }} />
              </Badge>
              <Modal
                title="Order your products"
                open={isModalOpen}
                onOk={handleOk}
                okText="Place your order"
                onCancel={handleCancel}
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
            </div>
          </div>
          {products.length > 0 && (
            <div className="col-md-10">
              {products.map((product) => (
                <div
                  style={{ alignItems: "center" }}
                  className="w-full md:my-10 my-2 md:flex-1 flex  flex-col  rounded-xl border p-4 text-center  md:flex-row md:items-start md:text-left"
                >
                  <div style={{ flex: 2 }} className="mb-4 md:mr-6 md:mb-0  ">
                    <div>
                      <div className="">
                        <div className=" ">
                          <Image
                            width={220}
                            // preview={null}
                            src={product.image}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="" style={{ flex: 5 }}>
                    <p className="text-left">
                      {product.name}{" "}
                      <Tag bordered={false} color="success">
                        {product?.brand?.title}
                      </Tag>
                    </p>
                    <div className="">
                      <div className="mt-1 mb-1 spec-1 text-left">
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
                      <p className="text-justify para mb-0">
                        {product.description}
                        <br />
                        <br />
                      </p>
                    </div>
                    <div className="mb-3" />
                  </div>
                  <ul
                    style={{ flex: 1 }}
                    className="ant-list-item-action w-full h-full md:w-auto flex-1"
                  >
                    <li className="w-full md:w-auto">
                      <div className="w-full md:w-auto d-flex flex-column md:mt-4 mt-2">
                        {!(product?._id in productDict) ? (
                          <button
                            className="btn btn-outline-primary btn-sm md:mt-2"
                            type="button"
                            onClick={() => {
                              currContext.dispatch({
                                count: cartProducts.length + 1,
                              });
                              handleAddOrder(product);
                            }}
                          >
                            Add to order
                          </button>
                        ) : (
                          <button
                            className="bg-primary text-white btn-sm mt-2"
                            type="button"
                            onClick={() => {
                              currContext.dispatch({
                                count: cartProducts.length - 1,
                              });
                              removeOrder(product, productDict[product?._id]);
                            }}
                          >
                            Remove order
                          </button>
                        )}
                      </div>
                    </li>
                  </ul>
                </div>
              ))}
              {/* <List
                pagination={{
                  position: "bottom",
                  align: "center",
                  pageSize: 10,
                  total: productsCount,
                  current: startIndex + 1,
                  onChange: (page) => {
                    setStartIndex(page - 1);
                    handleProductSearch({ startIndexNew: page - 1 });
                    console.log(page);
                  },
                }}
                dataSource={products}
                renderItem={(product, index) => {
                  return (
                    <List.Item
                      className="max-h-80"
                      actions={[
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
                        </div>,
                      ]}
                    >
                      <List.Item.Meta
                        avatar={
                          <div className="bg-indigo-100 ">
                            <img
                              alt="product"
                              class="object-cover h-60 w-60 "
                              src={product.image}
                            />
                          </div>
                        }
                        title={
                          <>
                            {product.name}{" "}
                            <Tag bordered={false} color="success">
                              {product?.brand?.title}
                            </Tag>
                          </>
                        }
                        description={
                          <div className="">
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
                            <p className="text-justify para mb-0">
                              {product.description}
                              <br />
                              <br />
                            </p>
                          </div>
                        }
                      />
                    </List.Item>
                  );
                }}
              /> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
