import React, { Component } from "react";
import { Mutation } from "react-apollo";

import Mutations from "../graphql/mutations";
const { LOGIN_USER } = Mutations;

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  update(field) {
    return event => this.setState({ [field]: event.target.value });
  }

  updateCache(client, {data}) {
    client.writeData({
      data: { isLoggedIn: data.login.loggedIn }
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <Mutation
        mutation={LOGIN_USER}
        onCompleted={({ login: token }) => {
          localStorage.setItem("auth-token", token);
          this.props.history.push("/");
        }}
        update={(client, data) => this.updateCache(client, data) }
      >
        {loginUser => (
          <div className="modal-background-splash">
            <img src={"https://image.freepik.com/free-photo/vintage-brown-brick-structure-wallpaper-background-soft-tone-pinterest-instragram-like-process_10307-405.jpg"} alt="background"/>
            <div id="splash-outer-div">
              <i className="fab fa-pinterest splash-logo" />
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

// <div className="modal-background">
//   <div className="modal-child" onClick={e => e.stopPropagation()}>
//     {component}
//   </div>
// </div>