import React, { useState } from 'react';
import { Row, Button, Form, Input, Select, Col, notification, Upload, Radio, Modal } from "antd";
import OrderList from "../OrderList";
import { callApi } from "../../utils/apiUtils";
import Products from "../../utils/endpoints/Products";
import UploadDocument from "../UploadDocument";
import { UploadOutlined, PlusOutlined } from "@ant-design/icons";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

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

const Order = ({ setIsModalOpen, cartProducts, setCartProducts, image, setImages, form, fileList, setFileList }) => {
  const { Option } = Select;
  const { TextArea } = Input;

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || (file.preview));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const handleChange = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

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
    <div className="bg-white shadow rounded">
      <div className="p-4 border-b">
        <Row gutter={24}>
          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              label="Existing patient?"
              name="existing"
              rules={[{ required: true }]}
            >
              <Radio.Group value={"no"}>
                <Radio.Button value="yes">Yes</Radio.Button>
                <Radio.Button checked value="no">
                  No
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              name="firstName"
              label="First name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              name="lastName"
              label="Last name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              name='email'
              label="Email"
              rules={[{ type: "email", required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              label="Prefered Contact Method"
              name="preferredContactMethod"
              rules={[{ required: true }]}
            >
              {/* <Radio.Group value={"email"} defaultValue="any"> */}
              <Radio.Group value={"email"}>
                <Radio.Button value="email">Email</Radio.Button>
                <Radio.Button value="phone">Phone</Radio.Button>
                <Radio.Button value="any">
                  Any
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              name="typeOfContactLenses"
              label="What type of contact lenses would you like to order?"
              rules={[
                { required: true, message: "Please input your type of contact lenses!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              name="totalSupplyOrder"
              label="How many months worth of supply would you like to order?"
              extra="Rebates may be applicable with a 6-months or 12-months supply ordered at once."
              rules={[
                { required: true, message: "Please input your type of contact lenses!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
            <Form.Item label="Do you have an up-to-date prescription on file?" name="upToDatePrescriptionOnFile">
              <Radio.Group value={"no"}>
                <Radio.Button value="yes">Yes</Radio.Button>
                <Radio.Button value="no">No</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
          {/* {form.fields.upToDatePrescriptionOnFile == "no" && console.log("form.fields.upToDatePrescriptionOnFile", form.fields.upToDatePrescriptionOnFile)} */}
          <Col xxl={24} lg={24} xl={24} md={24} sm={24} xs={24}>
            <Form.Item
              name="upload"
              label={<span className="formLabel">If not, please upload the copy of your prescription or pictures of your contact lens box tops.  </span>}
            // rules={[
            //   {
            //     required: true,
            //     message: "Image is required",
            //     // whitespace: true,
            //   },
            // ]}
            >
              <>
                <Upload
                  // action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={handleChange}
                  maxCount={1}
                >
                  {fileList.length >= 8 ? null : uploadButton}
                </Upload>
                <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                  <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
              </>
            </Form.Item>
          </Col>

          {/* <Col xxl={24} lg={24} xl={24} md={24} sm={24} xs={24}>
            {image?.length > 0 && (
              <UploadDocument
                name="Uploaded Image"
                fileList={image}
                setFileList={setImages}
                removeDocument
              />
            )}
          </Col> */}
          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              label="Where would you like the order delivered?"
              name="orderDelivery"
            >
              <Radio.Group >
                <Radio.Button value="store-pickup">
                  Pick-up in store
                </Radio.Button>
                <Radio.Button value="shipped">
                  Shipped to you
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              name="notes"
              label={<span className="formLabel">Additional Notes
              </span>}
            >
              <TextArea placeholder="Please add description" rows={3} />
            </Form.Item>
          </Col>
          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
            <div className="flex justify-end">
              <Button
                type="primary"
                htmlType="submit"
                style={{ backgroundColor: "#0361CC" }}
              >
                Submit
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>

  );
};

export default Order;
