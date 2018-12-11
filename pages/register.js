import React, { Component } from "react";
import Layout from "../components/Layout";
import { Formik, Field, Form } from "formik";
import { Container, Button } from "reactstrap";

const Register = () => (
  <Layout>
    <div className="container">
      <h1>Register</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
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
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" placeholder="Jane" />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" placeholder="Doe" />

            <label htmlFor="email">Email</label>
            <Field name="email" placeholder="jane@acme.com" type="email" />
            <Button type="submit">Register</Button>
          </Form>
        )}
      />
    </div>
  </Layout>
);
export default Register;
