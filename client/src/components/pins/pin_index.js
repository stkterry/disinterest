import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";

import { urlCleaner } from "../../util/func_util";
import Queries from "../../graphql/queries";
import Mutations from "../../graphql/mutations";
import { withRouter } from "react-router-dom";
const { FETCH_USER_BINS } = Queries;
// const { UPDATE_BIN, ADD_PIN_TO_BIN, COPY_PIN } = Mutations;
const { COPY_PIN } = Mutations;


const splitArray = (arr, n) => {
  let split = {}
  for (let i = 0; i < n; i++) split[i] = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    split[i%n].push(arr[i])
  }
  return split;
}

class PinIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPin: "",
      selectedBin: {target: "", bin: ""}
    }
    // this.pinHud = document.getElementById("pin-hud-id");
    this.currentUser = JSON.parse(localStorage.getItem("current-user"));
    this.closeAny = this.closeAny.bind(this);
    this.closeAllEvent = this.closeAllEvent.bind(this);
    this.handlePinClick = this.handlePinClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keyup", this.closeAllEvent);
    this.pinHud = document.getElementById("pin-hud-id");
  }

  handlePinClick(event, _id) {
    debugger;
    let classList = Array.from(event.target.classList);
    classList.includes("pin-hud");

    if (classList.includes("pin-hud")) {
      this.props.history.push(`/pins/${_id}`);
    }
  }

  componentWillUnmount() {
    document.removeEventListener("keyup", this.closeAllEvent);
  }

  closeAny() {
    if (this.state.selectedPin) 
      document.getElementById(this.state.selectedPin).style.display = "none";
      this.setState({ selectedPin: "" });
  }
  closeAllEvent(event) {
    if (event.keyCode === 27) this.closeAny();
  }

  handleScroll({ currentTarget }, onLoadMore) {
    if (
      currentTarget.scrollHeight <= currentTarget.scrollTop + currentTarget.clientHeight
    ) {
      onLoadMore();
    }
  }

  showBinDrop(event, pinId) {
    event.preventDefault();
    this.closeAny();
    this.setState({selectedPin: pinId})
    document.getElementById(pinId).style.display = "flex";
  }

  renderBinDrop(pin) {
    let userIdVar; 
    if (this.currentUser) userIdVar = this.currentUser._id;
    return (
      <Query
        query={FETCH_USER_BINS}
        variables={{ userId: userIdVar }}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Somethin' done borked</p>
          const { userBins } = data;
          const binBtns = userBins.map(bin => 
            <button
              onClick={() => {
                this.setState({selectedBin: {target: pin._id, bin: bin}});
                this.closeAny();
              }}
              key={bin._id} 
              className="bin-drop-btn"
            >
              {bin.title}
            </button>
          )

          return (
            <form className="bin-drop" id={pin._id}>
                {binBtns}
                <button className="bin-drop-btn-create bin-drop-btn">
                <i className="fa fa-plus-circle" /> Create Bin
                </button>
            </form>
          )
        }}
      </Query>
    )

  }

  renderSaveToBin(pinId) {
    const {target, bin} = this.state.selectedBin;
    if (target && bin) {
     console.log(target, bin) 
    //   if (selectedBin.pins.include(selectedPin._id)) console.log('here')
    }


    return (
      <Mutation mutation={COPY_PIN} >
          {copyPin => (
            <button 
              onClick={event => {
                event.preventDefault();
                if (this.state.selectedBin) {
                  const binId = this.state.selectedBin._id;
                  const pinId = this.state.selectedPin._id;
                  // copyPin({variables: { binId, pinId }});
                }
              }}
              className="add-bin-drop-save"
            >
              Save
            </button>
          )}
      </Mutation>
    )
  }

  render() {
    const splits = splitArray(this.props.pins, 5);

    const pinDat = Object.values(splits).map((column, idx) => 
      <div className="column" key={`splits-column-${idx}`}>
        {column.map(pin => {
          const { _id, title, author, image_url } = pin;
          return (
            <div className="masonry-div" key={_id} >
              <div className="shadow-boxer">
                <img onClick={() => this.props.history.push(`/pins/${_id}`)} className="masonry-img" src={image_url} alt={pin.title}/>

                <div onClick={(event) => this.handlePinClick(event, _id)} className="pin-hud">
                  <div className="save-to-bins">
                    <button
                      className="add-bin-drop-btn"
                      onClick={event => this.showBinDrop(event, _id)}
                    > 
                      <div className="add-bin-drop-select">
                          {(this.state.selectedBin.target === pin._id) ? (
                            <h3>{this.state.selectedBin.bin.title}</h3>
                          ) : <h3 className="add-bin-drop-none">Select Bin</h3>}
                        <i className="fa fa-angle-down" />
                      </div>
                    </button>
                    {this.renderSaveToBin(_id)}
                    {/* <button className="add-bin-drop-save">Save</button> */}
                  </div>

                  <div className="pin-hud-links">
                    <a href={pin.url.link} target="_blank" rel="noopener noreferrer">
                      <i className='fas fa-external-link-alt'></i>
                      {urlCleaner(pin.url.link)}
                    </a>
                    <h3><i className='fas fa-upload'></i></h3>
                    <h3><i className='fas fa-ellipsis-h'></i></h3>
                  </div>
                </div>

                {this.renderBinDrop(pin)}
              </div>
              <div className="pin-overview">
                <h3 className="index-pin-title">{title}</h3>
                <h3 className="index-pin-author">{`${author.first_name} ${author.last_name}`}</h3>
              </div>
            </div>
          )
        }

        )}
      </div>
    )

    pinDat[0].props.children.unshift(
      <div onClick={() => this.props.history.push("/pin-builder")} className="create-a-pin-container" key={"pinFormThing"}>
        <i className="pin-button fas fa-plus-circle"></i>
        <div className="create-a-pin"></div>
        <div className="create-header">Create Pin</div>
      </div>
    )
    return (
      <div className="pin-page-container" >
        <main
          className="masonry-container"
          onScroll={event => this.handleScroll(event, this.props.onLoadMore)}
        >
        {pinDat}
        </main>
      </div>
    );
  }
}

export default withRouter(PinIndex);