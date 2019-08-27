import React from 'react';
import { withRouter } from 'react-router-dom';


const searchbar_samples = ["Search for traffic", "Search for math", "Search for cleaning the bathroom",
                           "Search for doing the dishes", "Search for taking out the trash", "Search for dmv",
                           "Search for monopoly", "Search for knitting", "Search for gardening",
                           "Search for pottery", "Search for books", "Search for minecraft", "Search for slow wifi"];

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
    // <span className='navbar-center'>
    //   <i className="fas fa-search"></i>
    //   <input type='text' placeholder= className='search-bar' />
    // </span>
    if (this.state.open) {
      return (
        <span className='navbar-center'>
          <i className="fas fa-search"></i>
          <input onClick={this.handleClose} type='text' placeholder={searchbar_samples[Math.floor(Math.random() * searchbar_samples.length)]} className='search-bar' />
          <section id="searchdropdown">
            Feature Coming Soon
          </section>
        </span>
      );
    } else {
      return (
        <span className='navbar-center'>
          <i className="fas fa-search"></i>
          <input onClick={this.handleOpen} type='text' placeholder={searchbar_samples[Math.floor(Math.random() * searchbar_samples.length)]} className='search-bar' />
        </span>
      );
    }
  }

}

export default withRouter(SearchDropdown);

