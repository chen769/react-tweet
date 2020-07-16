import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { Timeline } from "react-twitter-widgets";
import Button from "@material-ui/core/Button";

import { setCurrentUser } from '../../store/actions/User';

const ButtunLabel = {
  hillaryclinton: "Change to Donald Trump",
  potus: "Change to Hillary Clinton",
};

const Home = ({ setCurrentUser }) => {
  const [screenName, setScreenName] = useState("hillaryclinton");

  const handleClick = e => {
    e.preventDefault();
    setScreenName(screenName === "hillaryclinton" ? "potus" : "hillaryclinton");
    setCurrentUser(screenName);
  };
  return (
    <Fragment>
      <div className="header">
        <Button
          className="btn-change"
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          {ButtunLabel[screenName]}
        </Button>
      </div>
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: screenName,
        }}
        options={{}}
      />
    </Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  setCurrentUser: payload => dispatch(setCurrentUser(payload)),
});

export default connect(null, mapDispatchToProps)(Home);
