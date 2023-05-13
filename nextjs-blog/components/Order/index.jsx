import React from "react";
import { Row, Button, Form, Input, Select, Col, notification } from "antd";
import OrderList from "../OrderList";
import { callApi } from "../../utils/apiUtils";
import Products from "../../utils/endpoints/Products";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select
      style={{ width: 70 }}
      options={[{ value: "1", label: "+1" }]}
      value="1"
    />
  </Form.Item>
);
/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const Order = ({ setIsModalOpen, cartProducts, setCartProducts }) => {
  const onFinish = (values) => {
    console.log(values);
    values.country = "canada";

    callApi({
      uriEndPoint: {
        ...Products.createOrder,
      },
      body: { ...values, products: cartProducts },
    })
      .then(() => {
        localStorage.setItem("products", "[]");
        setCartProducts([]);
        notification.success({
          message: "Order submitted",
          description: "Our staff will contact you soon.",
        });
        setIsModalOpen(false);
      })
      .catch();
  };
  return (
    <div style={{ height: "70vh", overflowY: "auto", overflowX: "hidden" }}>
      <OrderList
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
      />
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        // style={{ maxWidth: 600 }}
        validateMessages={validateMessages}
        layout="vertical"
        wrapperCol={24}
      >
        <Form.Item name={"name"} label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={"email"}
          label="Email"
          rules={[{ type: "email", required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          name="bestTimeToContact"
          label="Best time to contact"
          help='Your most suited time like "8:00 AM - 9:00 PM'
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Row gutter={12}>
          <Col span={24}>
            <Form.Item
              name={["address", "address_line_1"]}
              label="Address line 1"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name={["address", "city"]}
              label="City"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name={["address", "state"]}
              label="State"
              rules={[{ required: true }]}
            >
              <Select>
                {[
                  "Ontario",
                  "Alberta",
                  "Saskatchewan",
                  "Manitoba",
                  "British Columbia",
                  "Newfoundland and Labrador",
                  "Nova Scotia",
                  "New Brunswick",
                  "Northwest Territories",
                  "Prince Edward Island",
                  "Nunavut",
                  "Yukon",
                  "Atlantic Canada",
                  "Northern Alberta",
                  "Quebec",
                ].map((option) => (
                  <Select.Option key={option}>{option}</Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name={["address", "postal_code"]}
              label="Postal code"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item>
              <Button
                type="primary"
                className="bg-primary"
                htmlType="submit"
                style={{ width: "100%" }}
                disabled={cartProducts?.length === 0}
              >
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Order;
