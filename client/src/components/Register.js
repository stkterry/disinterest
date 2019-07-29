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
      name: ""
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
    const { name, email, password } = this.state;
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
          <div>
            <form
              onSubmit={event => {
                event.preventDefault();
                register({ variables: { name, email, password } });
              }}
            >
              <input
                value={name}
                onChange={this.update("name")}
                placeholder="Name"
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
              <button type="submit">Register</button>
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}

export default Register;