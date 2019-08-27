import React, { Component } from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
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
            <li key={user._id}><Link to={`/users/${user._id}`}>{user.first_name}</Link></li>
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