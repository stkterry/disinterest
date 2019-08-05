import React from "react";
import { Mutation } from "react-apollo";
import { withRouter } from "react-router-dom";
import axios from "axios";
import addImageToAws from "../../util/aws_util";

import Mutations from "../../graphql/mutations";
const { UPDATE_PIN } = Mutations;


class PinEditMutation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: props.pin._id,
      url: { _id: props.pin.url._id, link: props.pin.url.link, snores: props.pin.url.snores, created_by: props.pin.url.created_by },
      title: props.pin.title,
      description: props.pin.description,
      tags: props.pin.tags,
      author: props.pin.author,
      image_url: props.pin.image_url,
      message: null,
      aws_image_url: null
    }
    this.currentUser = props.currentUser;
  }

  update(field) {
    return event => this.setState({ [field]: event.target.value });
  }

  updateURL() {
    return event => this.setState({ url: { link: event.target.value }})
  }

  render() {
    const { _id, url, title, description, tags, author, image_url } = this.state;
    const { first_name, last_name } = this.currentUser;
    // const currentUser = JSON.parse(localStorage.getItem("current-user"));
    // let image_url; 
    return (
      <Mutation
        mutation={UPDATE_PIN}
        onCompleted={data => {
          console.log("Check MongoDB for changes to pin. Also check AWS if you added a new image");
          this.props.history.push("/")
        }}
      >
        {updatePin => (
          <div className="pin-form-outer-div">
            <div className="form-div">
              <form className="actual-form"
                onSubmit={event => {
                  event.preventDefault();
                  const image = document.getElementById("aws-photo").files[0];

                  if (image && title && description && url) {
                    let data = new FormData();
                    data.append('image', image);
                    addImageToAws(data).then((response) => {
                      const image_url = response.data.imageUrl;
                      updatePin({ variables: { _id, url, title, description, tags, image_url } })
                    }).catch((error) => {
                    });
                  } else {
                    updatePin({ variables: { _id, url, title, description, tags } })
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
                  <select defaultValue="select" className="tag-options">
                    <option>Will likely change this later</option>
                    <option>Should be able to select</option>
                    <option>Bins within</option>
                    <option>A dropdown here somehow</option>
                  </select>
                  <button id="pin-save-button">Save</button>
                </div>
                <input
                  className="title-input-pin"
                  value={title}
                  onChange={this.update("title")}
                  placeholder="Add your title"
                />
                <div id="current-user-pin-create-flex-container">
                  <i className="fas fa-user-circle" style={{ fontSize: '40px' }}></i>
                  <div id="current-user-pin-create-div">
                    <div className="current-user-pin-create">{first_name} {last_name}</div>
                    <div># followers</div>
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
                  value={url.link}
                  onChange={event => this.updateUrl(event)}
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

export default withRouter(PinEditMutation);
