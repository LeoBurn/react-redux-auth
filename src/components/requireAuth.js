import React, { Component } from "react";
import { connect } from "react-redux";
import { RootUrl } from "../config/route-config.json";

export default ChildComponent => {
  class ComposedComponent extends Component {
    //Our component just got render
    componentDidMount() {
      this.shouldNavigateAway();
    }

    //Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push(RootUrl);
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth.authenticated };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
