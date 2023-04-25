import React, { useState } from "react";
import { Button, Form, Input, InputNumber, Select } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const OrderList = () => {
  const [productCount, setProductCount] = useState(1);
  const [productCount2, setProductCount2] = useState(1);

  // let total = 0;
  // const purchases = props.items.map((item, index) => {
  //   const { name, hex, price, quantity } = item;
  //   const currentImport = quantity * price;
  //   total += currentImport;

  //  return (<>
  //   <Form.Item name={['user', 'name']} label="" rules={[{ required: true }]}>

  //   </Form.Item>
  //   </>)

  // });

  return (
    // <Form.Item>
    <div className="m-8">
      <h2 className="my-6 font-bold">Products</h2>
      <div className="my-6">
        <li key="1" className="row">
          <span className="cartColor col-md-1 font-bold" style={{ background: "#fff" }}>
            1
          </span>
          <div className="col-md-3">
            <img
              className="img-fluid img-responsive rounded product-image"
              src="/images/PVEC_omega3.jpeg"
            />
          </div>
          <span className="cartColor col-md-5" style={{ background: "#fff" }}>
            Omega 3
          </span>

          <span className="col-md-2">
            <button className = "font-bold" onClick={() => productCount<=4 ? setProductCount (productCount+1) : null
              // poke("App", { name, type: "increment" })
              }>
              {/* ➕ */}
              +
            </button>
            <span className="cartColorQty mx-1">{productCount}</span>
            <button className = "font-bold" onClick={() => 
            productCount >1 ? setProductCount (productCount-1): null
              // poke("App", { name, type: "decrement" })
              }>
              {/* ➖ */}
              -
            </button>
            {/* <span className="cartColorImport"> </span> */}
            {/* <button onClick={() => poke("App", { name, type: "remove" })}>
              🗑
            </button> */}
          </span>
          <DeleteOutlined className="col-md-1" style={{color:'#FF0000'}} onClick={()=>console.log("Delete")}/>
        </li>
      </div>
      <div>
        <li key="1" className="row">
          <span className="cartColor col-md-1 font-bold" style={{ background: "#fff" }}>
            2
          </span>
          <div className="col-md-3">
            <img
              className="img-fluid img-responsive rounded product-image"
              src="/images/PVEC_idrop.jpeg"
            />
          </div>
          <span className="cartColor col-md-5" style={{ background: "#fff" }}>
            Eye Drops
          </span>

          <span className="col-md-2">
            <button className = "font-bold" onClick={() => productCount2<=4 ? setProductCount2 (productCount2+1) : null
              // poke("App", { name, type: "increment" })
              }>
              {/* ➕ */}
              +
            </button>
            <span className="cartColorQty mx-1">{productCount2}</span>
            <button className = "font-bold" onClick={() => 
            productCount2 >1 ? setProductCount2 (productCount2-1): null
              // poke("App", { name, type: "decrement" })
              }>
              {/* ➖ */}
              -
            </button>
            {/* <span className="cartColorImport"> </span> */}
            {/* <button onClick={() => poke("App", { name, type: "remove" })}>
              🗑
            </button> */}
          </span>
          <DeleteOutlined className="col-md-1" style={{color:'#FF0000'}} onClick={()=>console.log("Delete")}/>
        </li>
      </div>

      <div className="flex justify-center">
        <button
          className="btn btn-outline-primary btn-sm mt-4 mb-4"
          type="button"
          style={{ minWidth: "100px" }}
          // onClick={showModal}
        >
          Explore more products
        </button>
      </div>
    </div>
    // </Form.Item>
  );
};
//   );
// }

// const Cart = props => {

//     return (
//       <li key={index}>
//         <span className="cartColor" style={{ background: hex }}>{name}</span>
//         <span className="cartColorQty"> x{item.quantity}</span>
//         <button onClick={() => poke("App", { name, type: "increment" })}>
//           ➕
//         </button>
//         <button onClick={() => poke("App", { name, type: "decrement" })}>
//           ➖
//         </button>
//         <span className="cartColorImport"> ${currentImport}</span>
//         <button onClick={() => poke("App", { name, type: "remove" })}>🗑</button>
//       </li>
//     );
//   });

//   return (
//     <div className="Cart">
//       <ul>{purchases.length === 0 ? "empty (:" : purchases}</ul>
//       <div className="cartTotal">$ {total}</div>
//     </div>
//   );
// };

export default OrderList;
