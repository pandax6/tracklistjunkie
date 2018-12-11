import React, { Component } from "react";
import firebase from "../configuration/Firebase";
import Link from "next/link";
import { Container, Button, Row, Table, Card, Col, Panel } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "",
      title: "",
      url: "",
      timestamp: ""
    };
  }

  componentDidMount() {
    const ref = firebase
      .firestore()
      .collection("tracklist")
      .doc(this.props.match.params.id);
    ref.get().then(doc => {
      if (doc.exists) {
        const track = doc.data();
        this.setState({
          key: doc.id,
          title: track.title,
          url: track.url,
          timestamp: track.timestamp
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({ track: state });
  };

  onSubmit = e => {
    e.preventDefault();

    const { title, url, timestamp } = this.state;

    const updateRef = firebase
      .firestore()
      .collection("tracklist")
      .doc(this.state.key);
    updateRef
      .set({
        title,
        url,
        timestamp
      })
      .then(docRef => {
        this.setState({
          key: "",
          title: "",
          url: "",
          timestamp: ""
        });
        this.props.history.push("/show/" + this.props.match.params.id);
      })
      .catch(error => {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">EDIT BOARD</h3>
          </div>
          <div className="panel-body">
            <h4>
              <Link
                href={`/show/${this.state.key}`}
                className="btn btn-primary"
              >
                Board List
              </Link>
            </h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label for="title">Title:</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
                  placeholder="Title"
                />
              </div>
              <div className="form-group">
                <label for="url">Description:</label>
                <input
                  type="text"
                  className="form-control"
                  name="url"
                  value={this.state.url}
                  onChange={this.onChange}
                  placeholder="Description"
                />
              </div>
              <div className="form-group">
                <label for="timestamp">Author:</label>
                <input
                  type="text"
                  className="form-control"
                  name="timestamp"
                  value={this.state.timestamp}
                  onChange={this.onChange}
                  placeholder="Author"
                />
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
