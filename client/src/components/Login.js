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
          <div>
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
              <button type="submit">Log In</button>
            </form>
          </div>
        )}
      </Mutation>
    )
  }
}

export default Login;