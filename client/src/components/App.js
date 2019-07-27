import React, { Component } from "react";
import { Query } from "react-apollo";
import NavBar from "./Nav";
import { Switch, Route} from "react-router-dom";

import UserIndex from "./users/user_index";

const App = () => (
  <div>
    <NavBar />
    <h1>Disinterest</h1>
    <Switch>
      <Route path="/" component={UserIndex} />
    </Switch>
  </div>
)

export default App;