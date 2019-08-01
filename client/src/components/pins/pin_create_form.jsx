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
      tags: ["curling"],
      aws_image_url: null,
      created_by: currentUser._id
    };
  }

  update(field) {
    return event => this.setState({ [field]: event.target.value });
  }


  render() {
    const { url, title, description, aws_image_url, tags, created_by } = this.state;
    const currentUser = JSON.parse(localStorage.getItem("current-user"));
    let image_url; 
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
                addImageToAws(data).then((response) => {
                  console.log("seems to have worked");
                  // console.log(response);
                  // console.log(response.data.imageUrl);
                  // this.setState({ image_url: response.data.imageUrl})
                  image_url = response.data.imageUrl;
                  console.log(image_url);
                  // newPin({ variables: { url, title, description, tags, image_url, created_by } })
                }).catch((error) => {
                  console.log(error);
                });

                console.log(image_url);
                newPin({ variables: { url, title, description, tags, image_url, created_by } })
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
                <input className="save-from-site" value="Save from site" />
                <div className="made-flex-row">
                  <select value="select" className="tag-options">
                    <option>Will likely change this later</option>
                    <option>Should be able to select</option>
                    <option>Bins within</option>
                    <option>A dropdown here somehow</option>
                  </select>
                  <button id="pin-save-button">Save</button>
                </div>
                <input 
                  className="title-input-pin"
                  value={this.state.title}
                  onChange={this.update("title")}
                  placeholder="Add your title"
                />
                <div id="current-user-pin-create-flex-container">
                  <i className="fas fa-user-circle" style={{fontSize: '40px'}}></i>
                  <div id="current-user-pin-create-div">
                    <div className="current-user-pin-create">{currentUser.first_name} {currentUser.last_name}</div>
                    <div># followers</div>
                  </div>
                </div>
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
                
              </form>
            </div>
        </div>
        )}
        
      </Mutation>
    )
  }
}

export default withRouter(PinForm);
