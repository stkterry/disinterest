import React from "react";
import { Query } from "react-apollo";
import { withRouter } from 'react-router-dom';
import Queries from "../../graphql/queries";

import PinEditMutation from "./pin_edit_mutatation";

const { FETCH_PIN } = Queries;

class PinEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = JSON.parse(localStorage.getItem("current-user"));
  }

  update(field) {
    return event => this.setState({ [field]: event.target.value });
  }

  render() {
    // const currentUser = JSON.parse(localStorage.getItem("current-user"));
    // let image_url; 
    return (
      <Query
        query={FETCH_PIN}
        variables={{ pinId: this.props.match.params.pinId }}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error on pin edit page</p>

          return <PinEditMutation pin={data.pin} currentUser={this.currentUser}/>
        }}
        
      </Query>
    )
  }
}

export default withRouter(PinEditForm);
