import React from "react";
import { Mutation } from "react-apollo";

import { withRouter } from 'react-router-dom';
import Mutations from "../../graphql/mutations";

import addImageToAws from "../../util/aws_util";

const { CREATE_PIN } = Mutations;


class PinForm extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = JSON.parse(localStorage.getItem("current-user"));
    
    this.state = {
      url: "",
      title: "",
      description: "",
      tags: ["curling"],
      aws_image_url: null,
      created_by: this.currentUser._id,
      message: null
    };
  }

  update(field) {
    return event => this.setState({ [field]: event.target.value });
  }

  render() {
    const { url, title, description, tags, created_by } = this.state;
    const { first_name, last_name } = this.currentUser;
    // const currentUser = JSON.parse(localStorage.getItem("current-user"));
    // let image_url; 
    return (
      <Mutation
        mutation={CREATE_PIN}
        onCompleted={data => {
          console.log("Check AWS for the image and MongoDB for the new pin");
          this.props.history.push("/")
        }}
        onError={err => this.setState({ message: "Pin must have a title, description, and a proper url" })}
      >
        { newPin => (
          <div className="pin-form-outer-div">
            <div className="form-div">
              <form className="actual-form"
              onSubmit={event => {
                event.preventDefault();
                const image = document.getElementById("aws-photo").files[0];
                if (image && title && description && url) {
                  let data = new FormData();
                  data.append('image', image);

                  // const image_url = addImageToAws(data).then(response => response.data.imageUrl);
                  // newPin({ variables: { url, title, description, tags, image_url, created_by } });
                  addImageToAws(data).then((response) => {
                    const image_url = response.data.imageUrl;
                    console.log(title, description, url, created_by, image_url)
                    newPin({ variables: { url, title, description, tags, image_url, created_by } })
                  }).catch((error) => console.log(error));
                }
                
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
                <input className="save-from-site" defaultValue="Save from site" />
                <div className="made-flex-row">
                  {/* <select defaultValue="select" className="tag-options">
                    <option>Will likely change this later</option>
                    <option>Should be able to select</option>
                    <option>Bins within</option>
                    <option>A dropdown here somehow</option>
                  </select> */}
                  <button id="pin-save-button">Save</button>
                </div>
                <input 
                  className="title-input-pin"
                  value={title}
                  onChange={this.update("title")}
                  placeholder="Add your title"
                />
                <div id="current-user-pin-create-flex-container">
                  <i className="fas fa-user-circle" style={{fontSize: '40px'}}></i>
                  <div id="current-user-pin-create-div">
                    <div className="current-user-pin-create">{first_name} {last_name}</div>
                    {/* <div># followers</div> */}
                  </div>
                  <p className="pin-errors"> {this.state.message}</p>
                </div>
                <input
                  className="description-input-pin"
                  value={description}
                  onChange={this.update("description")}
                  placeholder="Tell everyone what your pin is about"
                />
                <input
                  className="url-input-pin"
                  value={url}
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
