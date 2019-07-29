import React from 'react';
import { Link, withRouter } from 'react-router-dom';


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
          <i className="fas fa-ellipsis-h" onClick={this.handleClose} style={{color: 'black'}}></i>
          <div className="account-dropdown">

            <div onClick={() => this.props.history.push("/userprofile")} style={{'border-radius': '10px 10px 0px 0px'}}>User profile</div>
            <div>Add a free busines profile</div>
            <div onClick={this.props.handleRequestFeatureShow}>Request a feature</div>
            <div>See terms and privacy</div>
            <div>Add account</div>
            <div style={{ 'border-radius': '0px 0px 10px 10px' }}>Log out</div>
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

export default withRouter(AccountDropdown);