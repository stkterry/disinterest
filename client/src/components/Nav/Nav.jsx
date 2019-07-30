import React from "react";
import { Link, withRouter } from "react-router-dom";

import AccountDropdown from "./AccountDropdown";
import RequestFeature from "../RequestFeature";


import { Query, ApolloConsumer } from "react-apollo";
import Queries from "../../graphql/queries";
const { IS_LOGGED_IN } = Queries;

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { };

    this.handleRequestFeatureShow = this.handleRequestFeatureShow.bind(this);
  }


  handleRequestFeatureShow() {
    let nav = document.getElementById("request-feature-wrapper");
 
    if (nav.style.width === "") {
      nav.style.width = "390px";
    }
    else {
      nav.style.width = "";
      nav.style.bottom = "";
    }
  }


  render() {

    return (
      <ApolloConsumer>
        {client => (
          <Query query={IS_LOGGED_IN}>
            {({ data }) => {
              if (data.isLoggedIn) {
                return (
                  <div className="navbar">
                    <RequestFeature />
                    <span className='navbar-left'>
                      <Link to='/'><i className="fab fa-pinterest" /></Link>
                    </span>

                    <span className='navbar-center'>
                      <i className="fas fa-search"></i>
                      <input type='text' placeholder='Search' className='search-bar' />
                    </span>

                    <span className='navbar-near-right'>
                      <Link to="/" className='navbar-home'>
                        <div className='navbar-home-link'>Home</div>
                      </Link>
                      <Link to="/" className='navbar-following'>
                        <div className="navbar-following-link">Following</div>
                      </Link>
                      <Link to="/userprofile" className='navbar-user' >
                        <i className="fas fa-user-circle"></i>
                        <div className='navbar-username'>first_name</div>
                      </Link>
                    </span>

                    <span className='navbar-right'>
                      <i onClick={this.handleRequestFeatureShow} className="fas fa-comment-dots"></i>
                      <Link to="/">
                        <i className="fas fa-bell"></i>
                      </Link>
                      <AccountDropdown handleRequestFeatureShow={this.handleRequestFeatureShow} />

                    </span>

                  </div>
                );
              } else {
                return (
                  null
                );
              }
            }}
          </Query>
        )}
      </ApolloConsumer>
    );

    
  }

}

export default withRouter(NavBar);
