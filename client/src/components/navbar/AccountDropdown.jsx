import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ApolloConsumer } from "react-apollo";



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

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClose)
  }


  render() {
    const currentUser = JSON.parse(localStorage.getItem("current-user"));
    if (this.state.open) {
      return (
        <div>
          <i className="fas fa-ellipsis-h" onClick={this.handleClose} style={{color: 'black'}}></i>
          <div className="account-dropdown">

            <div onClick={() => this.props.history.push(`/users/${currentUser._id}`)} style={{borderRadius: '10px 10px 0px 0px'}}>User profile</div>
            <div>Add a free busines profile</div>
            <div onClick={this.props.handleRequestFeatureShow}>Request a feature</div>
            <div>See terms and privacy</div>
            <div>Add account</div>
            <ApolloConsumer>
              {client => (
                <div onClick={event => {
                  event.preventDefault();
                  localStorage.removeItem("auth-token");
                  client.writeData({ data: { isLoggedIn: false } });

                  this.props.history.push("/login");
                }} style={{ borderRadius: '0px 0px 10px 10px' }}>Log out</div>
              )}
            </ApolloConsumer>
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

