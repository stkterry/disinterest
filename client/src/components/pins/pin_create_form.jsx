import React from "react";
import { Mutation } from "react-apollo";

import { Link, withRouter } from 'react-router-dom';
import Mutations from "../../graphql/mutations";
import axios from "axios";
import addImageToAws from "../../util/aws_util";

const { CREATE_PIN } = Mutations;


class PinForm extends React.Component {
  constructor(props) {
    super(props);
    const currentUser = JSON.parse(localStorage.getItem("current-user"));
    
    this.state = {
      url: "",
      title: "",
      description: "",
      tags: ["traffic"],
      photo_url: null,
      created_by: currentUser._id
    };
  }

  update(field) {
    return event => this.setState({ [field]: event.target.value });
  }


  render() {
    const { url, title, description, photo_url, tags, created_by } = this.state;
    
    return (
      <Mutation
        mutation={CREATE_PIN}
        onCompleted={data => {
          console.log("Check AWS for the image and MongoDB for the new pin");
          this.props.history.push("/")
        }}
      >
        { newPin => (
          <div className="pin-form-outer-div">
            <div className="form-div">
              <form className="actual-form"
              onSubmit={event => {
                event.preventDefault();
                const image = document.getElementById("aws-photo").files[0];
                let data = new FormData();
                data.append('image', image);


                addImageToAws(data);

                newPin({ variables: { url, title, description, tags, created_by } })
              }}
              >
                <div className="image-input-outer-div">
                  <input id="aws-photo" 
                    type="file"
                    onChange={this.update("file")}
                    className="aws-test"
                    placeholder="Add photo"
                  />
                </div>
                <input 
                  className="title-input-pin"
                  value={this.state.title}
                  onChange={this.update("title")}
                  placeholder="Add your title"
                />
                <input
                  className="description-input-pin"
                  value={this.state.description}
                  onChange={this.update("description")}
                  placeholder="Tell everyone what your pin is about"
                />
                <input
                  className="url-input-pin"
                  value={this.state.url}
                  onChange={this.update("url")}
                  placeholder="Add a destination link"
                />
                <button>Testing Form</button>
              </form>
            </div>
        </div>
        )}
        
      </Mutation>
    )
  }
}

export default withRouter(PinForm);
