import React, { Component } from "react";
import firebase from "../configuration/Firebase";
import { Button, Container, Row, Col, Table } from "reactstrap";
import Link from "next/link";
import Home from "./home";
import Index from "./index";
import Layout from "../components/Layout";

export default class Show extends Component {
  static async getInitialProps({ req, query, params }) {
    if (req) {
      try {
        return { query: req.query, params: req.params };
      } catch (err) {
        return { query: req.query, params: req.params };
      }
    }

    return { query, params };
  }
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      tracklist: {},
      key: ""
    };
  }

  componentDidMount() {
    const ref = firebase
      .firestore()
      .collection("tracklist")
      .doc(this.props.params.id);
    ref.get().then(doc => {
      if (doc.exists) {
        this.setState({
          tracklist: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("no data");
      }
    });
  }
  delete(id) {
    firebase
      .firestore()
      .collection("tracklist")
      .doc(id)
      .delete()
      .then(() => {
        console.log("successfuly deleted");
        this.props.history.push("/home");
      })
      .catch(error => {
        console.log("error deleting", error);
      });
  }
  render() {
    return (
      <Layout>
        <div>
          <div className="container">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4>
                  <Link href="/">Board List</Link>
                </h4>
                <h3 className="panel-title">{this.state.tracklist.title}</h3>
              </div>
              <div className="panel-body">
                <dl>
                  <dt>url:</dt>
                  <dd>{this.state.tracklist.url}</dd>
                  <dt>Author:</dt>
                  <dd>{this.state.tracklist.timestamp}</dd>
                </dl>
                <Link
                  href={`/edit/${this.state.key}`}
                  className="btn btn-success"
                >
                  Edit
                </Link>
                &nbsp;
                <Button
                  onClick={this.delete.bind(this, this.state.key)}
                  className="btn btn-danger"
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
