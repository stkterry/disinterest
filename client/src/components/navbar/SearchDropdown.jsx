import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ApolloConsumer } from "react-apollo";



class SearchDropdown extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen(event) {
    event.preventDefault();
    this.setState({
      open: true
    },
      () => document.addEventListener("click", this.handleClose)
    );
  }

  handleClose(event) {
    event.preventDefault();
    // if (event.target.tagName === "A") {

    // }
    this.setState({
      open: false
    },
      () => document.removeEventListener("click", this.handleClose)
    );
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClose)
  }


  render() {

    if (this.state.open) {
      return (
        <span className='navbar-center'>
          <i className="fas fa-search"></i>
          <input onClick={this.handleClose} type='text' placeholder='Search' className='search-bar' />
          <section className="search-dropdown">
            Feature Coming Soon
          </section>
        </span>
      );
    } else {
      return (
        <span className='navbar-center'>
          <i className="fas fa-search"></i>
          <input onClick={this.handleOpen} type='text' placeholder='Search' className='search-bar' />
        </span>
      );
    }
  }

}

export default withRouter(SearchDropdown);

