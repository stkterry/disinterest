import React, { Component } from "react";
import { Query } from "react-apollo";
import { Link, withRouter } from "react-router-dom";
import Queries from "../../graphql/queries";
const { FETCH_USERS } = Queries;

class UserIndex extends Component {


  render () {
    return (
      <Query query={FETCH_USERS}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;

          const userDat = data.users.map(user => 
            <Link to={`/users/${user._id}`}><li key={user._id}>{user.first_name}</li></Link>
          )

          return (
            <ul>
              {userDat}
            </ul>
          );
        }}
      </Query>
    );  
  }
}

export default UserIndex;