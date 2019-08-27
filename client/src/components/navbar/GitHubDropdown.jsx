import React from 'react';
import { withRouter } from 'react-router-dom';




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
          <div className="github-dropdown" id="github">

            <div id="created-by-div">Application Created By</div>
            <a href="https://github.com/stkterry"><div>Steven Terry</div></a>
            <a href="https://github.com/WarnerMichaelJ"><div>Michael Warner</div></a>
            <a href="https://github.com/Charles-Mancuso"><div id="dropdown-ele">Charles Mancuso</div></a>
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

