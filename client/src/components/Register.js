import React, { Component } from "react";
import { Mutation } from "react-apollo";

import Mutations from "../graphql/mutations";
const { REGISTER_USER } = Mutations;

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: ""
    };
  }

  updateCache(client, { data }) {
    client.writeData({
      data: { isLoggedIn: data.register.loggedIn }
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
          localStorage.setItem("auth-token", token);
          this.props.history.push("/");
        }}
        update={(client, data) => this.updateCache(client, data)}
      >
        {register => (
          <div className="modal-background-splash">
            <img src={"https://image.freepik.com/free-photo/vintage-brown-brick-structure-wallpaper-background-soft-tone-pinterest-instragram-like-process_10307-405.jpg"} alt="background" />
            <div id="splash-outer-div">
              <i className="fab fa-pinterest splash-logo" />
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