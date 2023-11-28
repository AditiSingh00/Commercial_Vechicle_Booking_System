import React, { useState, useEffect } from "react";
import { Form, message,Input } from "antd";
import { Button } from 'flowbite-react';
import Layout from "../components/Layout";
import {useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
 
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post("users/login", values);
      setLoading(false);
      message.success("Login Success");
      localStorage.setItem("user", JSON.stringify({ ...data.user, password: "" }));
      if (data.usertype==='admin') navigate('/');
      else navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("Something Went Wrong");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);
  
  return (
    <Layout>
         <div className="registerPage flex items-center justify-center min-h-screen">
      <div className="space-y-6 w-full max-w-md px-8 py-8 shadow-md border-solid rounded-md border-1  bg-sky-500/50">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
          Sign in to our platform
        </h3>
        <Form layout="vertical" onFinish={submitHandler} >
        <div>
        <Form.Item label="Email" name="email">
          <Input type="email" />
        </Form.Item>
        </div>
        <div>
        <Form.Item label="Password" name="password">
          <Input type="password" />
        </Form.Item>
        </div>
        <div className="w-full">
          <Button type="primary"  
          data-te-ripple-init data-te-ripple-color="light">Log in to your account</Button>
        </div>
        <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?&nbsp;
          <a href="/register" className="text-cyan-700 hover:underline dark:text-cyan-500">
            Create account
          </a>
        </div>
        </Form>
      </div>
    </div>
    </Layout>
  );
};

export default Login;