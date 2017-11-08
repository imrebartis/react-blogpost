import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";

class PostsIndex extends Component {


  render() {
    return (
      <div>
        Posts Index
      </div>
    );
  }
}


export default PostsIndex;