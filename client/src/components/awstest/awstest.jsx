import React, { Component } from "react";
import { Mutation } from "react-apollo";
import axios from "axios";
import Mutations from "../../graphql/mutations";

class AWSTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoUrl: null,
      file: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return event => this.setState({ [field]: event.target.value });
  }

  handleSubmit(e) {
    // debugger;
    const image = document.getElementById("aws-photo").files[0];
    e.preventDefault();
    let data = new FormData();
    data.append('image', image);


    axios.post("/image-upload", data, {
      headers: {
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data`,
      }
    })
      .then((response) => {
        console.log("seems to have worked")
      }).catch((error) => {
        console.log(error)
      });
  }
  
 

  render() {
    return (
      <div className="AWS-test-outer-div">
        <form onSubmit={this.handleSubmit}>
          <input id="aws-photo" type="file"
            onChange={this.update("file")}
            className="aws-test"
            placeholder="Add photo"
          />
          
          <button className="aws-test-button" type="submit">Submit AWS Image</button>
        </form>
      </div>
    )
  }
}

export default AWSTest;