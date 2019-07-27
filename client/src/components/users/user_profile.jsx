import React from "react";
// import { ApolloConsumer, Query } from "react-apollo";
import { Link } from "react-router-dom";
import "../../assets/styles/profile.css";

// import Queries from "../graphql/queries";
// const { IS_LOGGED_IN } = Queries;

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="options-and-user-profile">

          <div className="options-bar-above-profile">
            <i className="fas fa-plus"></i>
            <i className="fas fa-pencil-alt"></i>
            <i className="fas fa-upload"></i>
          </div>
          <div className="user-profile">
            <h2 >User Full Name</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default UserProfile;