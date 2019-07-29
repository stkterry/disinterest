import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Query } from "react-apollo";

import Nav from "./nav/Nav";
import Login from "./Login";
import Register from "./Register";
import UserIndex from "./users/user_index";
import AuthRoute from "../util/route_util";

const App = () => (
  <div>
    <h1>Disinterest</h1>
    <Nav />
    <Switch>
      <AuthRoute exact path="/login" component={Login} routeType="auth" />
      <AuthRoute exact path="/register" component={Register} routeType="auth" />
      <Route exact path="/" component={UserIndex} />
    </Switch>
  </div>
)

export default App;