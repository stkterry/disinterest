import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ApolloConsumer } from "react-apollo";



class GitHubDropdown extends React.Component {

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
    // event.preventDefault();
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
        <div>
          <i className="fab fa-github" onClick={this.handleClose} style={{ color: 'black' }} />
          <div className="account-dropdown" id="github">

            <div>Application Created By</div>
            <div><a href="https://github.com/stkterry">Steven Terry</a></div>
            <div><a href="https://github.com/WarnerMichaelJ">Michael Warner</a></div>
            <div><a href="https://github.com/Charles-Mancuso">Charles Mancuso</a></div>
          </div>
        </div>
      );
    } else {
      return (
        <i className="fab fa-github" onClick={this.handleOpen}></i>
      );
    }
  }

}

export default withRouter(GitHubDropdown);

