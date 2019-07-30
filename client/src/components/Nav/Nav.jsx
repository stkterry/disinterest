import React from "react";
import { Link } from "react-router-dom";

import AccountDropdown from "./AccountDropdown";
import RequestFeature from "../RequestFeature";


class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { };

    this.handleRequestFeatureShow = this.handleRequestFeatureShow.bind(this);
  }


  handleRequestFeatureShow() {
    let nav = document.getElementById("request-feature-wrapper");
    console.log(nav.style.width);
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
      <div className="navbar">
        <RequestFeature />
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
          <i onClick={this.handleRequestFeatureShow} className="fas fa-comment-dots"></i>
          {/* <Link> */}
            {/* <i className="fas fa-bell"></i> */}
          {/* </Link> */}
          <AccountDropdown handleRequestFeatureShow={this.handleRequestFeatureShow}/>

        </span>
      </div>
    );
  }

}

export default NavBar;