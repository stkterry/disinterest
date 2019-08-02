import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Query } from "react-apollo";
import NavBar from "./navbar/Nav";

import Login from "./Login";
import Register from "./Register";
import UserIndex from "./users/user_index";
import AuthRoute from "../util/route_util";
import UserProfile from "./users/UserProfile";
import PinIndex from "./pins/pin_index";

import AWSTest from "./awstest/awstest";
import PinCreateForm from "./pins/pin_create_form";

const App = () => (
  <div>
    <NavBar />

    <Switch>
      <AuthRoute exact path="/login" component={Login} routeType="auth" />
      <AuthRoute exact path="/register" component={Register} routeType="auth" />
      <Route exact path="/pinindex" component={PinIndex} />
      <Route exact path="/users" component={UserIndex} />
      <Route exact path="/users/:userId" component={UserProfile} />
      <Route exact path="/AWSTest" component={AWSTest} />
      <Route exact path="/pin-builder" component={PinCreateForm} />
      <Route exact path="/" component={PinIndex} />
    </Switch>
  </div>
)

export default App;