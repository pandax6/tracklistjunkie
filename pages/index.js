import React from "react";
import ReactDOM from "react-dom";
import Link from "next/link";

import firebase from "../configuration/Firebase";
import Layout from "../components/Layout";
import { Container, Col, Button, Row, Table, Card, Panel } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css";

class Index extends React.Component {
  static async getInitialProps(ctx) {
    const { query } = ctx;
    return query;
  }
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("tracklist");
    this.unsubscribe = null;
    this.state = {
      tracklist: []
    };
  }

  onCollectionUpdate = querySnapshot => {
    const tracklist = [];
    querySnapshot.forEach(doc => {
      const { title, timestamp, url } = doc.data();
      tracklist.push({
        key: doc.id,
        doc,
        title,
        timestamp,
        url
      });
    });
    this.setState({ tracklist });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  render() {
    return (
      <Layout>
        <div className="container">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">TRACK LIST</h3>
            </div>
            <div className="panel-body">
              <h4>
                <Link href="/create">Add Board</Link>
              </h4>
              <table className="table table-stripe">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>here will appear link</th>
                    <th>Timestamp</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tracklist.map(tracklist => (
                    <tr>
                      <td>
                        <Link prefetch href={`/show/${tracklist.key}`}>
                          {tracklist.title}
                        </Link>
                      </td>
                      <td>
                        <a href={tracklist.url}>{tracklist.url}</a>
                      </td>
                      <td>{tracklist.timestamp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <a href="/create" className="btn btn-primary">
                add
              </a>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Index;
