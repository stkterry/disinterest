import React, { Component } from "react";
import { Query } from "react-apollo";
import NavBar from "./Nav";
import { Switch, Route} from "react-router-dom";

import UserIndex from "./users/user_index";
import UserProfile from "./users/user_profile";

const App = () => (
  <div>
    <NavBar />
    <h1>Disinterest</h1>
    <Switch>
      <Route exact path="/userindex" component={UserIndex} />
      <Route exact path="/userprofile" component={UserProfile} />
    </Switch>
  </div>
)

export default App;