import React from "react";
import { DeleteOutlined } from "@ant-design/icons";

const OrderList = ({ cartProducts, setCartProducts }) => {
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
    <div className="m-8" style={{ maxHeight: "40vh" }}>
      <h2 className="my-6 font-bold">Products</h2>
      {cartProducts.map((product, idx) => (
        <div className="my-6">
          <li key={product?._id} className="row">
            <span
              className="cartColor col-md-1 font-bold"
              style={{ background: "#fff" }}
            >
              {idx + 1}
            </span>
            <div className="col-md-3">
              <img
                className="img-fluid img-responsive rounded product-image"
                src={product?.image}
              />
            </div>
            <span className="cartColor col-md-5" style={{ background: "#fff" }}>
              {product.name}
            </span>

            <span className="col-md-2">
              <button
                className="font-bold"
                onClick={() =>
                  changeCount(
                    { ...product, count: Number(product.count) + 1 },
                    idx
                  )
                }
              ></button>
              <span className="cartColorQty mx-1">{product?.count}</span>
              <button
                className="font-bold"
                onClick={() =>
                  changeCount(
                    { ...product, count: Number(product.count) - 1 },
                    idx
                  )
                }
              ></button>
            </span>
            <DeleteOutlined
              className="col-md-1"
              style={{ color: "#FF0000" }}
              onClick={() => changeCount({ ...product, count: 0 }, idx)}
            />
          </li>
        </div>
      ))}

      <div className="flex justify-center">
        <button
          className="btn btn-outline-primary btn-sm mt-4 mb-4"
          type="button"
          style={{ minWidth: "100px" }}
        >
          Explore more products
        </button>
      </div>
    </div>
  );
};
export default OrderList;
