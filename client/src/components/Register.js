import React, { Component } from "react";
import { Mutation } from "react-apollo";

import Mutations from "../graphql/mutations";
import logo from "../assets/public/images/disinterest-logo-128.png"
import splash from "../assets/public/images/sleepys.png";

const { REGISTER_USER } = Mutations;

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      message: null
    };
  }

  updateCache(client, { data }) {
    client.writeData({
      data: {
        isLoggedIn: data.register.loggedIn, 
        currentUser: {
          first_name: data.register.first_name,
          last_name: data.register.last_name,
          _id: data.register._id,
          __typename: "UserType"
        }  
      }
    });
  }

  update(field) {
    return event => this.setState({ [field]: event.target.value });
  }

  render() {
    const { first_name, last_name, email, password } = this.state;
    return (
      <Mutation
        mutation={REGISTER_USER}
        onCompleted={data => {
          const { token } = data.register;

          localStorage.setItem("current-user", JSON.stringify({ first_name: data.register.first_name, last_name: data.register.last_name, _id: data.register._id }));
          localStorage.setItem("auth-token", token);
          this.props.history.push("/");
        }}
        onError={err => this.setState({ message: "Please enter all fields correctly" })}
        update={(client, data) => this.updateCache(client, data)}
      >
        {register => (
          <div className="modal-background-splash">
            <img src={splash} alt="background" />
            <div id="splash-outer-div">
              <img src={logo} className="auth-logo" />
              <div id="splash-greeting">Welcome to Disinterest</div>
              <div id="splash-form">
                <form
                  onSubmit={event => {
                    event.preventDefault();
                    register({ variables: { first_name, last_name, email, password } });
                  }}
                >
                  <input
                    value={first_name}
                    onChange={this.update("first_name")}
                    placeholder="First name"
                  />
                  <input
                    value={last_name}
                    onChange={this.update("last_name")}
                    placeholder="Last name"
                  />
                  <input
                    value={email}
                    onChange={this.update("email")}
                    placeholder="Email"
                  />
                  <input
                    value={password}
                    onChange={this.update("password")}
                    type="password"
                    placeholder="Password"
                  />
                  <p className="splash-errors">{this.state.message}</p>
                  <button className="splash-button" type="submit">Register</button>
                </form>
              </div>
            </div>
            <button id="splash-signup-login-button" onClick={() => this.props.history.push("/login")}>Log in</button>
          </div>
        )}
      </Mutation>
    );
  }
}

export default Register;