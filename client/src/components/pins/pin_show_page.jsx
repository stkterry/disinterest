import React from "react";
import { Mutation, Query } from "react-apollo";

import { withRouter } from 'react-router-dom';
import Mutations from "../../graphql/mutations";
import { urlCleaner } from "../../util/func_util";

import Queries from "../../graphql/queries";

const { FETCH_PIN } = Queries;
const {ADD_PIN_TO_USER } = Mutations;


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

  saveToUser() {
    return (
      <Mutation
        mutation={ADD_PIN_TO_USER}
        onComplete={data => {
          this.props.history.push("/")
        }}
      >
      {addPinToUser => (
        <button
          id="pinshow-save"
          onClick={event => {
            event.preventDefault();
            addPinToUser({ 
              variables: { 
                userId: this.currentUser._id, 
                pinId: this.props.match.params.pinId 
              }
            })
          }}
        >
          <i className="fas fa-thumbtack pinshow-thumbtack" />
          Save
        </button>
      )}
      </Mutation>
    )
  }

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


          return (
            <div id="pin-show-outer-div">
              <i onClick={() => this.props.history.push("/")} className="fas fa-arrow-left pinshow"></i>
              <i onClick={() => this.props.history.push("/")} className="fas fa-times exit-pinshow"></i>
              <div id="pin-show-container-div">
                
                <div id="pin-show-container-div-left">
                  <div>
                    <i className="fas fa-ellipsis-h pinshow-ellipsis"></i>
                  </div>
                  <div>
                    <img className="pin-show-image"src={data.pin.image_url} alt="pin-show"/>
                  </div>
                </div> 
                <div id="pin-show-container-div-right">
                  <div id="send-save-container">
                    <button id="pinshow-send"><i className="fas fa-upload pinshow-upload"></i>Send</button>
                    { this.saveToUser() }
                    {/* <button id="pinshow-save"><i className="fas fa-thumbtack pinshow-thumbtack"></i>Save</button> */}
                  </div>
                  <div className="pinshow-title">{data.pin.title}</div>
                  {/* {this.renderPinCreator(data.pin.created_by)} */}
                  <div id="pin-show-user-container">
                    <i className="fas fa-user-circle pinshow"></i>
                    <div className="user-made-pin-container">
                      <div id="pinshow-full-name">{data.pin.author.first_name} {data.pin.author.last_name}</div>
                      <div>made this pin</div>
                    </div>
                    <div className="pinshow-snores-count"><i className="fas fa-bed"></i>{data.pin.url.snores}</div>
                  </div>
                  <button className="pinshow-url"><a href={data.pin.url.link}>{urlCleaner(data.pin.url.link)}</a></button>
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


