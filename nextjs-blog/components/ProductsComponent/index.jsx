import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Input, Modal, Pagination } from "antd";
import Order from "../Order";
import Products from "../../utils/endpoints/Products";
import { callApi } from "../../utils/apiUtils";
import Slider from "../../components/Slider";
import LogoRow from "../../components/LogoRow";
import { brandsArr, contactsBrandsArr, gridGlassesBrands, gridContactsBrands,eyecareProductsArr, gridEyecareBrands} from "../../constant";
import BrandsGrid from "../BrandsGrid";

const { Search } = Input;
const queryObj = {
  "eye-medic": "MEDICARE",
  contacts: "CONTACTS",
  glasses: "GLASSES",
};

export default function ProductsComponent() {
  const [cartProducts, setCartProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");
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
      if (router.query?.search) {
        setSearch(router.query.search);
        getProducts({
          query: {
            query: router.query.search,
            startIndex: 0,
            viewSize: 10,
          },
        }).then((res) => {
          if (res?.productData) {
            setProducts(res);
          }
        });
      } else {
        const localCartProducts = localStorage.getItem("products") || "[]";
        setCartProducts(JSON.parse(localCartProducts));
        getProducts({
          query: {
            category: queryObj[router?.query?.query] || ["CONTACTS", "GLASSES"],
            startIndex: 0,
            viewSize: 10,
          },
        }).then((res) => {
          if (res?.productData) {
            setProducts(res);
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
    } else if (router.pathname == "/glasses-contacts")
      return brandsArr;
  }

  function getBrandHead() {
    if (router?.query?.query == "eye-medic") {
      return {
        imageUrl: "/images/eye-drops.jpg",
        linkUrl: "",
        linkText: "Buy Eye Drops"
      };;
    } else if (router?.query?.query == "contacts") {
      return {
        imageUrl: "/images/acuvue-shop1.jpeg",
        linkUrl: "https://www.acuvue.ca/",
        linkText: "Buy Acuvue"
      };
    } else if (router?.query?.query == "glasses") {
      return {
        imageUrl: "/images/kliilk_shop.jpg",
        linkUrl: "https://www.kliik.com/",
        linkText: "Buy KLiik"
      };
    } else if (router.pathname == "/glasses-contacts")
      return {
        imageUrl: "/images/kliilk_shop.jpg",
        linkUrl: "https://www.kliik.com/",
        linkText: "Buy KLiik"
      };
  }

  function getGridBrands() {
    if (router?.query?.query == "eye-medic") {
      return gridEyecareBrands;
    } else if (router?.query?.query == "contacts") {
      return gridContactsBrands;
    } else if (router?.query?.query == "glasses") {
      return gridGlassesBrands;
    } else if (router.pathname == "/glasses-contacts")
      return gridGlassesBrands;
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
  return (
    <>
      <div className="container">

        {/* Corousel section */}
        {/* <Carousel dynamicHeight autoPlay swipeable infiniteLoop interval="5000">
          {banner.map((b) => (
            <div className="pb-2 md:py-0 md:h-auto h-96" key={b.img}>
              <Banner
                banner={b.img}
                textColor={b.textColor}
                text={b.text}
                description={b.description}
                subText={b.subText}
                subText2={b.subText2}
                subText3={b.subText3}
              ></Banner>
            </div>`
          ))}
        </Carousel> */}
        <Slider slides={getBrands()} />

        {/* Brands list with logo */}
        <div className="mt-12"> <LogoRow logos={getBrands()} /></div>

        {/* Advanced corousel section to showcase a brand or more, brand image on left, 4 images on right */}
        <div className="my-8"> <BrandsGrid head={getBrandHead()} gridBrands={getGridBrands()} /></div>

      </div>
      {/* <div className="section-title mx-10">
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
          value={search}
          className="m-6"
          placeholder="Search products"
          onSearch={(val) => {
            console.log("val", val);
            onSearch(val);
          }}
          onChange={(ev) => {
            setSearch(ev.target.value);
          }}
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
                  search,
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
      </div> */}
    </>
  );
}
