import React, { Component } from "react";
import { Mutation } from "react-apollo";

import Mutations from "../graphql/mutations";
import logo from "../assets/public/images/disinterest-logo-128.png"
import splash from "../assets/public/images/sleepys.png";

const { LOGIN_USER } = Mutations;

class DemoLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "Luka@gmail.com",
      password: "123456"
    };


  }

  update(field) {
    return event => this.setState({ [field]: event.target.value });
  }

  updateCache(client, { data }) {

    client.writeData({
      data: {
        isLoggedIn: data.login.loggedIn,
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
    // const { email, password } = this.state;
    const email = "Luka@gmail.com";
    const password = "123456";

    return (
      <Mutation
        mutation={LOGIN_USER}
        onCompleted={({ login: token }) => {

          localStorage.setItem("current-user", JSON.stringify({ first_name: token.first_name, last_name: token.last_name, _id: token._id }));
          localStorage.setItem("auth-token", token.token);
          this.props.history.push("/");
        }}
        onError={err => this.setState({ message: "Incorrect username or password" })}
        update={(client, data) => this.updateCache(client, data)}
      >
        {loginUser => (  
            <button onClick={() => loginUser({ variables: { email, password }})} className="demo-button">Demo Login</button>
        )}
      </Mutation>
    )
  }
}


export default DemoLogin;

