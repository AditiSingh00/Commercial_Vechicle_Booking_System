import React, { useEffect, useState } from "react";
import { Form, Input, message,Select } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {  Button } from 'flowbite-react'
import Header from '../components/Header'
import Footers from '../components/Footers'

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      await axios.post("users/register", values);
      message.success("Registered Successafully");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      message.error("Invalid username or password");
      setLoading(false);
    }
  };

  return (
    <>
    <Header/>
      <div className="registerPage">
      <Form layout="vertical" onFinish={submitHandler} className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md px-8  bg-sky-500/50 shadow-md py-8 border-solid border-1  rounded-md  ">
        <h1 className="text-3xl font-bold mb-6">Let's create your account!</h1>
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input type="email" />
        </Form.Item>
        <Form.Item label="Phone" name="phone">
          <Input type="text" />
        </Form.Item>
        <Form.Item label="Address" name="address">
          <Input type="text" />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" />
        </Form.Item>
        <Form.Item label="usertype" name="usertype">
        <Select defaultValue='user'
          style={{
            width:320,
          }}
          allowClear options={[
            {
              value:'user',label:'user',
            },
            {
              value:'admin',label:'admin',
            },
          ]}
         />
        </Form.Item>
        <div className="flex items-center justify-between mt-6">
          <Link to="/login" className="text-blue-600 hover:underline">Already Registered? Click here to Login</Link>
          <Button type="primary" 
          data-te-ripple-init data-te-ripple-color="light">Register</Button>
        </div>
      </div>
    </Form> 
      </div>
      <Footers/>
    </>
  );
};

export default Register;