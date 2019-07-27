import React from "react";
// import { ApolloConsumer, Query } from "react-apollo";
import { Link } from "react-router-dom";
import "../assets/styles/navbar.css";

// import Queries from "../graphql/queries";
// const { IS_LOGGED_IN } = Queries;

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  render() {

    return (
      <div className="navbar">
        <span className='navbar-left'>
          <Link to='/'><i className="fab fa-pinterest"/></Link>
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
          <Link to="/">
            <i className="fas fa-comment-dots"></i>
          </Link>
          <Link>
            <i className="fas fa-bell"></i>
          </Link>
          <Link>
            <i className="fas fa-ellipsis-h"></i>
          </Link>

        </span>
      </div>
    );
  }

}

export default NavBar;