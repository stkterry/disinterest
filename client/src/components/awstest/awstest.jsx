import React, { Component } from "react";
import { Mutation } from "react-apollo";

import Mutations from "../../graphql/mutations";

class AWSTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addToAWS: "",
      photoUrl: null
    };
  }

  update(field) {
    return event => this.setState({ [field]: event.target.value });
  }

  handleImage(e) {
    const image = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ addToAWS: image, photoUrl: fileReader.result });
    };
    if (image) {
      fileReader.readAsDataURL(image);
    }
  }

  render() {
    return (
      <div className="AWS-test-outer-div">
        <form className="splash-outer-div">
          <input type="file"
            value={this.state.addToAWS}
            onChange={this.update("addToAWS")}
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