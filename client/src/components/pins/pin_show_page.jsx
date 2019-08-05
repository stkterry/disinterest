import React from "react";
import { Mutation, Query } from "react-apollo";

import { Link, withRouter } from 'react-router-dom';
import Mutations from "../../graphql/mutations";
import { urlCleaner } from "../../util/func_util";

import Queries from "../../graphql/queries";
// import Mutations from "../../graphql/mutations";
const { FETCH_PIN, FETCH_USER } = Queries;


class PinShowPage extends React.Component {
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

    console.log(this.currentUser.pins);
  }

  // renderPinCreator(created_by) {
  //   return (
  //     <Query
  //       query={FETCH_USER}
  //       variables={{ userId: created_by }}
  //     >
  //       {({ loading, error, data }) => {
  //         if (loading) return <p>Loading...</p>;
  //         if (error) return <p>Couldn't find user</p>
  //         console.log(data);
  //         debugger;
  //         const { first_name, last_name, _id } = data;


  //         return (
            // <div id="pin-show-user-container">
            //   <i className="fas fa-user-circle" style={{ fontSize: '20px' }}></i>
            //   <div>{first_name} {last_name} made this pin</div>
            // </div>

  //         )
  //       }}
  //     </Query>

  //   )

  // }

  render() {


    return (
      <Query
        query={FETCH_PIN}
        variables={{ pinId: this.props.match.params.pinId }}
        // variables={{ pinId: "5d470c7673987044bb525be2" }}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error on pin show page</p>
          {/* const {  } = data; */}
          console.log(data);

          return (
            <div id="pin-show-outer-div">
              <i className="fas fa-arrow-left pinshow"></i>
              <i className="fas fa-times exit-pinshow"></i>
              <div id="pin-show-container-div">
                
                <div id="pin-show-container-div-left">
                  <div>
                    <i className="fas fa-ellipsis-h pinshow-ellipsis"></i>
                  </div>
                  <div>
                    <img className="pin-show-image"src={data.pin.image_url} />
                  </div>
                </div> 
                <div id="pin-show-container-div-right">
                  <div id="send-save-container">
                    <button id="pinshow-send"><i className="fas fa-upload pinshow-upload"></i>Send</button>
                    <button id="pinshow-save"><i className="fas fa-thumbtack pinshow-thumbtack"></i>Save</button>
                  </div>
                  <div className="pinshow-title">{data.pin.title}</div>
                  {/* {this.renderPinCreator(data.pin.created_by)} */}
                  <div id="pin-show-user-container">
                    <i className="fas fa-user-circle pinshow"></i>
                    <div className="user-made-pin-container">
                      <div id="pinshow-full-name">first_name last_name</div>
                      <div>made this pin</div>
                    </div>
                  </div>
                  <button className="pinshow-url">{urlCleaner(data.pin.url.link)}</button>
                  <p className="pin-description-pinshow">{data.pin.description}</p>
                  <div id="comments-div-pinshow">
                    <div className="pinshow-comments">Comments</div>
                    <i className="fas fa-angle-down" id="pinshow-downarrow"></i>
                  </div>
              </div>
              </div>
              
            </div>
          )
        }}
      </Query>
    )
  }
}

export default withRouter(PinShowPage);


