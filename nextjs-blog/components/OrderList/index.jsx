import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, List, Tag } from "antd";
import Link from "next/link";

const OrderList = ({ cartProducts, setCartProducts, setIsModalOpen, setIsOrderModalOpen }) => {
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

    <div className="bg-white shadow rounded">
      <div className="p-4 border-b">
        <List
          header={<h2 className="font-bold text-lg">Selected product(s) to order</h2>}
          itemLayout="horizontal"
          dataSource={cartProducts}
          renderItem={(product, index) => {
            return (
              <List.Item
                key={product._id}
                actions={[<a className="text-lg" key="list-loadmore-edit" onClick={() =>
                  changeCount({ ...product, count: Number(product.count) - 1 }, index)}>-</a>, <>{product.count}</>,
                <a className="text-lg" key="list-loadmore-more" onClick={() =>
                  changeCount({ ...product, count: Number(product.count) + 1 }, index)}>+</a>,
                <a key="list-loadmore-more text-center align-middle " onClick={() => changeCount({ ...product, count: 0 }, index)}> <div className="cursor-pointer text-red-500 ">
                  <DeleteOutlined />
                </div></a>]}
              >
                <List.Item.Meta
                  avatar={
                    // <img
                    //   width={140}
                    //   alt="product"
                    //   src={product.image}
                    // />

                    <div className="bg-indigo-100 ">
                      <img alt="product" class="object-cover h-40 w-40 " src={product.image} />
                    </div>
                  }
                  title={<>{product.name} <Tag bordered={false} color="success">
                    {product?.brand?.title}
                  </Tag></>}
                  description={product.description}
                />
              </List.Item>
            )
          }}
        />
        <br />
        <div className="flex justify-center mt-8">
          <Link
            href="/glasses-contacts?query=glasses"
          >
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
          {cartProducts?.length > 0 && <Button
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
          </Button>}
        </div>
      </div>
    </div>
  );
};
export default OrderList;
