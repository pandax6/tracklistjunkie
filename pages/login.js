import React, { Component } from "react";
import Layout from "../components/Layout";
import { Formik, Field, Form } from "formik";
import { Container, Button } from "reactstrap";

const Login = () => (
  <Layout>
    <div className="container">
      <h1>Login</h1>
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        onSubmit={values => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
        render={() => (
          <Form>
            <div>
              <label htmlFor="email">Email</label>
              <Field name="email" placeholder="jane@acme.com" type="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field name="password" placeholder="password" type="password" />
            </div>
            <Button type="submit">Login</Button>
          </Form>
        )}
      />
    </div>
  </Layout>
);
export default Login;
