import React, { Component } from "react";
import ReactDOM from "react-dom";
import firebase from "../configuration/Firebase";
import Link from "next/link";
import {
  Container,
  Button,
  Row,
  Table,
  Card,
  Col,
  Panel,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css";
import Layout from "../components/Layout";

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("tracklist");
    this.state = {
      title: "",
      url: "",
      timestamp: ""
    };
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({ state });
  };

  onSubmit = e => {
    e.preventDefault();
    const { title, url, timestamp } = this.state;
    this.ref
      .add({
        title,
        url,
        timestamp
      })
      .then(docRef => {
        this.setState({
          title: "",
          url: "",
          tiemstamp: ""
        });
        //this.props.history.push('/')
      })
      .catch(error => {
        console.log("error", error);
      });
  };

  render() {
    const { title, timestamp, url } = this.state;
    return (
      <Layout>
        <div>
          <div className="container">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">ADD track</h3>
              </div>
              <div className="panel-body">
                <h4>
                  <Link to="/" className="btn btn-primary">
                    Track List
                  </Link>
                </h4>
                <div>something</div>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label for="title">Title:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      value={title}
                      onChange={this.onChange}
                      placeholder="Title"
                    />
                  </div>
                  <div className="form-group">
                    <label for="url">Url:</label>
                    <textArea
                      className="form-control"
                      name="url"
                      onChange={this.onChange}
                      placeholder="Description"
                      cols="80"
                      rows="3"
                    >
                      {url}
                    </textArea>
                  </div>
                  <div className="form-group">
                    <label for="timestamp">Timestamp:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="timestamp"
                      value={timestamp}
                      onChange={this.onChange}
                      placeholder="time stamp"
                    />
                  </div>
                  <div>
                    <FormGroup>
                      <Label for="exampleSelect">Select</Label>
                      <Input type="select" name="select" id="exampleSelect">
                        <option>EDM</option>
                        <option>Prog House</option>
                        <option>Electro</option>
                        <option>Chill</option>
                        <option>5</option>
                      </Input>
                    </FormGroup>
                  </div>
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
