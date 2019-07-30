import React from "react";
import { ApolloConsumer, Query } from "react-apollo";
import { Link } from "react-router-dom";

import CreateBoardOrPin from "./createBoardOrPinDropdown";
import Queries from "../../graphql/queries";
const { FETCH_USER, FETCH_USERS } = Queries;

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  

  render() {
    return (
      <div id="user-profile-content">
        <div className="options-and-user-profile">

          <div className="options-bar-above-profile">
            <CreateBoardOrPin />
            <i className="fas fa-pencil-alt"></i>
            <i className="fas fa-upload"></i>
          </div>
          <div className="user-profile">
            <Query
              query={FETCH_USER}
              variables={{ _id: this.props.match.params.userId }}
            >
              {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error</p>;

                console.log(data.user);
                if (data.user) {
                  return (
                    <div className="user-profile">
                      <h2 className="user-full-name">{data.user.first_name} {data.user.last_name}</h2>
                      <h3 className="number-followers-number-following"># Followers &middot; # Following</h3>
                    </div>)
                } else {
                  return (
                    <div className="user-profile">
                      <h2 className="user-full-name">First Name Last Name</h2>
                      <h3 className="number-followers-number-following"># Followers &middot; # Following</h3>
                    </div>
                  );
                }
                
              }}
            </Query>
          </div>
          <div className="bins-pins-options-bar">
            <div>Bins</div>
            <div>Pins</div>
            <div>Topics</div>
          </div>
        </div>
        
        {/* <i id="default-profile-image" className="fas fa-user-circle"></i> */}
        <img id="harold" src="https://i.imgur.com/Uv8w7eE.jpg?1" />
        <div className="bin-index-standin-box">

        </div>
      </div>
    )
  }
}

export default UserProfile;


