import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Empty, Image, List, Tag } from "antd";
import Link from "next/link";

const OrderList = ({
  cartProducts,
  setCartProducts,
  setIsModalOpen,
  setIsOrderModalOpen,
}) => {
  const changeCount = (updatedProduct, productIdx) => {
    if (updatedProduct?.count === 0) {
      setCartProducts((prev) => [
        ...prev.filter((item, i) => i !== productIdx),
      ]);
      localStorage.setItem(
        "products",
        JSON.stringify(cartProducts.filter((item, i) => i !== productIdx))
      );
    } else {
      setCartProducts((prev) => [
        ...prev.map((item, i) => (i !== productIdx ? item : updatedProduct)),
      ]);
      localStorage.setItem(
        "products",
        JSON.stringify(
          cartProducts.map((item, i) =>
            i !== productIdx ? item : updatedProduct
          )
        )
      );
    }
  };
  return (
    <div className="bg-white  rounded">
      <div className="md:p-4  p-2">
        {cartProducts.length ? (
          cartProducts.map((product, index) => (
            <div
              style={{ alignItems: "center" }}
              className="w-full my-0 md:flex-1 flex  flex-col  rounded-xl border md:px-4 p-2 md:py-4 text-center  md:flex-row md:items-start md:text-left"
            >
              <div style={{ flex: 1 }} className="mb-4 md:mr-6 md:mb-0  ">
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
              <div className="" style={{ flex: 4 }}>
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
                style={{ flex: 2 }}
                className="ml-1 w-full h-full md:w-auto flex-1"
              >
                <div
                  style={{ display: "flex", flexDirection: "row" }}
                  className="w-full flex md:w-auto mb-1 flex-row "
                >
                  <a
                    style={{ flex: 1, background: "#e9e9e9" }}
                    className="text-lg"
                    key="list-loadmore-edit"
                    onClick={() =>
                      changeCount(
                        { ...product, count: Number(product.count) - 1 },
                        index
                      )
                    }
                  >
                    -
                  </a>
                  <span style={{ flex: 1 }}>{product.count}</span>
                  <a
                    style={{ flex: 1, background: "#e9e9e9" }}
                    className="text-lg"
                    key="list-loadmore-more"
                    onClick={() =>
                      changeCount(
                        { ...product, count: Number(product.count) + 1 },
                        index
                      )
                    }
                  >
                    +
                  </a>
                  <a
                    style={{ flex: 1 }}
                    key="list-loadmore-more text-center align-middle "
                    onClick={() => changeCount({ ...product, count: 0 }, index)}
                  >
                    <div className="cursor-pointer text-red-500 ">
                      <DeleteOutlined />
                    </div>
                  </a>
                </div>
              </ul>
            </div>
          ))
        ) : (
          <Empty description="No product" />
        )}

        <br />
        <div className="flex justify-center mt-8">
          <Link href="/glasses-contacts?query=glasses">
            <Button
              type="primary"
              className="bg-primary text-white "
              // htmlType="submit"
              // style={{ width: "100%" }}
              // disabled={cartProducts?.length === 0}
              onClick={() => {
                setIsModalOpen(false);
                setIsOrderModalOpen(false);
              }}
            >
              Explore more products
            </Button>
          </Link>
        </div>
        <div className="flex justify-end">
          {cartProducts?.length > 0 && (
            <Button
              type="primary"
              className="bg-primary text-white "
              // htmlType="submit"
              // style={{ width: "100%" }}
              // disabled={cartProducts?.length === 0}
              onClick={() => {
                setIsModalOpen(false);
                setIsOrderModalOpen(true);
              }}
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
export default OrderList;
