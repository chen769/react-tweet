import React, { useState } from "react";
import Twit from "twit";

import { connect } from "react-redux";

const Home = () => {

  return (
    <div>test</div>
  );
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang,
  };
};

export default connect(mapStateToProps, null)(Home);
