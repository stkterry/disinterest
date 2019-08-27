import React from "react";
import { Mutation } from "react-apollo";

import { withRouter } from 'react-router-dom';
import Mutations from "../../graphql/mutations";


const { CREATE_BIN } = Mutations;


class BinForm extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = JSON.parse(localStorage.getItem("current-user"));
    this.modalBackground = null; 
    this.closeButton = null; 

    this.state = {
      title: "",
      description: "",
      tags: ["stuff", "more stuff"],
      pins: [],
      userId: this.currentUser._id,
      message: null
    };

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(event) {
    debugger;
    if (event.target === this.modalBackground || event.target === this.closeButton) {
      this.modalBackground.classList.add("displaynone");
    } 
  }




  componentDidMount() {
    this.modalBackground = document.getElementById("bin-outer-div");
    this.closeButton = document.getElementById("close-bin-create");
    // this.modalBackground.classList.remove("displaynone");
    this.modalBackground.addEventListener('click', this.handleClose);
    this.closeButton.addEventListener('click', this.handleClose);
  }

  componentWillUnmount() {
    this.modalBackground.removeEventListener("click", this.handleClose);
  }
  
  

  update(field) {
    return event => this.setState({ [field]: event.target.value });
  }

  render() {
    const { title, description, tags, pins, userId } = this.state;
    // const { first_name, last_name } = this.currentUser;
    // const currentUser = JSON.parse(localStorage.getItem("current-user"));
    // let image_url; 
    return (
      <Mutation
        mutation={CREATE_BIN}
        onCompleted={data => {
          
          console.log("Check if a new bin has been created")
          this.props.history.push("/")
        }}
        onError={err => this.setState({ message: "Bin entry cannot be blank" })}
      >
        {newBin => (
            <div id="bin-outer-div" className="modal-background displaynone">
              <div id="bin-inner-div">
                
                <form className="bin-actual-form modal-child"
                  onSubmit={event => {
                    event.preventDefault();
                    
                    newBin({ variables: { title, description, tags, pins, userId } })
                  }}
                >
                  <div className="flex-direction-row" id="first-div"><div id="create-bin-greeting">Create Bin</div><i id="close-bin-create" className="fas fa-times"></i></div>
                  <div className="flex-direction-row">
                    <div className="bin-create-input-names">Name</div>
                    <input
                      className="bin-create-input"
                      value={title}
                      onChange={this.update("title")}
                      placeholder="Add your bin name"
                    />
                    </div>
                  <div className="flex-direction-row">
                    <div className="bin-create-input-names">Description</div>
                    <input
                      className="bin-create-input"
                      value={description}
                      onChange={this.update("description")}
                      placeholder="Add a bin description"
                    />
                 </div>
                {/* <p className="pin-errors"> {this.state.message}</p> */}
                <div className="flex-direction-row" id="last-div">
 
                  <button className="bin-button">Create</button>
                </div>
                </form>
              </div>
            </div>

        )}

      </Mutation>
    )
  }
}

export default withRouter(BinForm);
