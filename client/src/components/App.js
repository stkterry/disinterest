import React, { Component } from "react";
import { Query } from "react-apollo";

import UserIndex from "./users/user_index";

const App = () => (
  <div>
    <h1>Disinterest</h1>
    <UserIndex />
  </div>
)

export default App;