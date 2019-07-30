import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Query } from "react-apollo";
import NavBar from "./nav/Nav";

import Login from "./Login";
import Register from "./Register";
import UserIndex from "./users/user_index";
import AuthRoute from "../util/route_util";
import UserProfile from "./users/UserProfile";
import PinIndex from "./pins/pin_index";

const App = () => (
  <div>
    <NavBar />
    <h1>Disinterest</h1>
    <Switch>
      <AuthRoute exact path="/login" component={Login} routeType="auth" />
      <AuthRoute exact path="/register" component={Register} routeType="auth" />
      <Route exact path="/" component={UserIndex} />
      <Route exact path="/userindex" component={UserIndex} />
      <Route exact path="/userprofile" component={UserProfile} />
      <Route exact path="/pinindex" component={PinIndex} />
    </Switch>
  </div>
)

export default App;