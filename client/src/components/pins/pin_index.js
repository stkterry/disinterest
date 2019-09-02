import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";

import { urlCleaner } from "../../util/func_util";
import Queries from "../../graphql/queries";
import Mutations from "../../graphql/mutations";
import { withRouter } from "react-router-dom";
const { FETCH_USER_BINS, FETCH_USER_PINS } = Queries;
const { ADD_PIN_TO_BIN, COPY_PIN_AND_ADD_TO_BIN } = Mutations;


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
    this.currentUser = JSON.parse(localStorage.getItem("current-user"));

    this.state = {
      selectedPin: "",
      selectedBin: {target: "", bin: ""}
    }

    this.closeAny = this.closeAny.bind(this);
    this.closeAllEvent = this.closeAllEvent.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keyup", this.closeAllEvent);
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
                this.setState({selectedBin: {target: pin, bin: bin}});
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

  renderSaveToBin() {
    const {target, bin} = this.state.selectedBin;
    if (bin) {
      return (
        <Query
          query={FETCH_USER_PINS}
          variables={{ userId: this.currentUser._id }}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Somethin' done borked</p>
            const userPins = data.userPins;
            const userPinIds = userPins.map(pin => pin._id);

            if (userPinIds.includes(target._id)) {
              return (
                <Mutation mutation={ADD_PIN_TO_BIN} >
                  {addPinToBin => (
                    <button
                      onClick={event => {
                        event.preventDefault();
                        addPinToBin({
                          variables: {
                            binId: bin._id,
                            pinId: target._id
                          }});
                        this.setState({ selectedBin: { target: "", bin: "" } });
                      }}
                      className="add-bin-drop-save"
                    >
                      Save
                    </button>
                  )}
                </Mutation>
              )
            } else return (
              <Mutation mutation={COPY_PIN_AND_ADD_TO_BIN} >
                {copyPinAndAddToBin => (
                  <button
                    onClick={event => {
                      event.preventDefault();
                      copyPinAndAddToBin({
                        variables: Object.assign(
                          {},
                          target,
                          { 
                            userId: this.currentUser._id, 
                            url: target.url._id,
                            binId: bin._id
                          }
                        )
                      });
                      this.setState({ selectedBin: { target: "", bin: "" } });
                    }}
                    className="add-bin-drop-save"
                  >
                    Save
                  </button>
                )}
              </Mutation>
            )
          }}
        </Query>
      )
    } else return (
      <button className="add-bin-drop-save">Save</button>
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

                <div className="pin-hud">
                  <div className="save-to-bins">
                    <button
                      className="add-bin-drop-btn"
                      onClick={event => this.showBinDrop(event, _id)}
                    > 
                      <div className="add-bin-drop-select">
                          {(this.state.selectedBin.target._id === pin._id) ? (
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