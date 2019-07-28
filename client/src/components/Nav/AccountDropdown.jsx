import React from 'react';
import { Link } from 'react-router-dom';

class AccountDropdown extends React.Component {

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
    this.setState({
      open: false
    },
      () => document.removeEventListener("click", this.handleClose)
    );
  }

  render() {
    if (this.state.open) {
      return (
        <div>
          <i className="fas fa-ellipsis-h" onClick={this.handleClose}></i>
          <div className="account-dropdown">
            <div>Edit Settings</div>
            <div>Request A Feature</div>
            <div>Log Out</div>
          </div>
        </div>
      );
    } else {
      return (
        <i className="fas fa-ellipsis-h" onClick={this.handleOpen}></i>
      );
    }
  }

}

export default AccountDropdown;