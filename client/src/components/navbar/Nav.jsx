import React from "react";
import { Link, withRouter } from "react-router-dom";


import AccountDropdown from "./AccountDropdown";
import GitHubDropdown from "./GitHubDropdown";
import SearchDropdown from "./SearchDropdown";
import RequestFeature from "../RequestFeature";
import { Query, ApolloConsumer } from "react-apollo";
import Queries from "../../graphql/queries";
import logo from "../../assets/public/images/disinterest-logo-128.png";


const { IS_LOGGED_IN } = Queries;

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

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
        {client => {
          {/* console.log(client); */}
          {/* console.log(client.cache.data.data.ROOT_QUERY); */ }

          return (
            <Query query={IS_LOGGED_IN}>
              {({ data }) => {
                const currentUser = JSON.parse(localStorage.getItem("current-user"));

                const profileLink = currentUser ? (
                  <Link to={`/users/${currentUser._id}`} className='navbar-link navbar-link-user' >
                    <i className="fas fa-user-circle" />
                    {currentUser.first_name}
                  </Link>
                ) : <></>

                if (data.isLoggedIn) {
                  return (
                    <div className="navbar">
                      <RequestFeature />
                      <span className='navbar-left'>
                        <Link to='/'>
                        <div id="navbar-logo-container">
                          <img src={logo} id="navbar-logo"/>
                        </div>
                        </Link>
                      </span>

                      <SearchDropdown />

                      <span className='navbar-near-right'>
                        <Link to="/" className='navbar-link'>Home</Link>
                        {profileLink}
                      </span>

                      <span className='navbar-right'>
                        <div className="divider"></div>
                        <i onClick={this.handleRequestFeatureShow} className="fas fa-comment-dots"></i>
                        <GitHubDropdown />
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
          )
        }}
      </ApolloConsumer>
    );


  }

}

export default withRouter(NavBar);
