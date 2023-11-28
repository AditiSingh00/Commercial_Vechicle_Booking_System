import React, { useState } from "react";
import { Row, Col, Form, Button, Input, Upload, message } from "antd";
import Layout from "../components/Layout";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";

const AddForm = () => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [priceperkm, setPrice] = useState("");
  const [capacity, setCapacity] = useState("");


  const handleCreate = async () => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("photo", photo);
      formData.append("priceperkm", priceperkm);
      formData.append("capacity", capacity);

      const { data } = await axios.post("vehicles/create-vehicle", formData);
      if (data.success) {
        message.success("Vehicle Created");
      }
    } catch (error) {
      message.error("Something Went Wrong");
    }
  };

  const handleFileChange = ({ fileList }) => {
    setPhoto(fileList.length > 0 ? fileList[0].originFileObj : null);
  };

  return (
    <Layout>
      <Row justify="center mt-5">
        <Col lg={12} sm={24}>
          <Form className="bs1 p-2" layout="vertical" onFinish={handleCreate}>
            <h2>Add New Vehicle</h2>
            <hr />
            <Form.Item
              name="name"
              label="Vehicle Name"
              rules={[{ required: true, message: "Please enter the vehicle name" }]}
            >
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Item>
            <Form.Item
              name="image"
              label="Upload Photo"
              rules={[{ required: true, message: "Please upload a photo" }]}
            >
              <Upload
                listType="picture"
                fileList={photo ? [photo] : []}
                beforeUpload={() => false}
                onChange={handleFileChange}
              >
                <Button icon={<UploadOutlined />}>Select Photo</Button>
              </Upload>
            </Form.Item>
            <Form.Item
              name="priceperkm"
              label="Rent per km"
              rules={[{ required: true, message: "Please enter the rent per km" }]}
            >
              <Input value={priceperkm} onChange={(e) => setPrice(e.target.value)} />
            </Form.Item>
            <Form.Item
              name="capacity"
              label="Capacity"
              rules={[{ required: true, message: "Please enter the capacity" }]}
            >
              <Input value={capacity} onChange={(e) => setCapacity(e.target.value)} />
            </Form.Item>
            <div className="text-right">
              <Button className="btn1" type="primary" htmlType="submit">
                Add Vehicle
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </Layout>
  );
};

export default AddForm;
