import React from "react";
import { Router } from "react-router-dom";
import history from "../routes/History";
import Routes from "../routes/Routes";
import "./App.scss";
import { connect } from "react-redux";

class App extends React.Component {
  // App contains routes and also wrapped with snackbar and intl for localization
  render() {
    return <Router history={history}>{Routes}</Router>;
  }
}

const mapStateToProps = ({ lang, loading }) => ({
  lang,
  loading,
});

export default connect(mapStateToProps, null)(App);
