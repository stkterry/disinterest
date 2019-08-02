import React, { Component } from "react";
import { Mutation } from "react-apollo";

import Mutations from "../graphql/mutations";
import logo from "../assets/public/images/disinterest-logo-128.png"

const { LOGIN_USER } = Mutations;

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      message: null
    };
  }

  update(field) {
    return event => this.setState({ [field]: event.target.value });
  }

  updateCache(client, {data}) {

    client.writeData({
      data: { isLoggedIn: data.login.loggedIn, 
        currentUser: { 
          first_name: data.login.first_name, 
          last_name: data.login.last_name, 
          _id: data.login._id,
          __typename: "UserType"
          } 
        }
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <Mutation
        mutation={LOGIN_USER}
        onCompleted={({ login: token }) => {

          localStorage.setItem("current-user", JSON.stringify({ first_name: token.first_name, last_name: token.last_name, _id: token._id }));
          localStorage.setItem("auth-token", token.token);
          this.props.history.push("/");
        }}
        onError={err => this.setState({ message: "Incorrect username or password" })}
        update={(client, data) => this.updateCache(client, data) }
      >
        {loginUser => (
          <div className="modal-background-splash">
            <img src={"https://image.freepik.com/free-photo/vintage-brown-brick-structure-wallpaper-background-soft-tone-pinterest-instragram-like-process_10307-405.jpg"} alt="background"/>
            <div id="splash-outer-div">
              <img src={logo} className="auth-logo" />
              <div id="splash-greeting">Welcome to Disinterest</div>
              <div id="splash-form">
                <form
                  onSubmit={event => {
                    event.preventDefault();
                    loginUser({ variables: { email, password } });
                  }}
                >
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
                  <button className="splash-button" type="submit">Log In</button>
                  
                </form>
              </div>
            </div>
            <button id="splash-signup-login-button" onClick={() => this.props.history.push("/register")}>Sign up</button>
          </div>
        )}
      </Mutation>
    )
  }
}

export default Login;

