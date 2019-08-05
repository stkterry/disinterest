import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";

import { urlCleaner } from "../../util/func_util";
import Queries from "../../graphql/queries";
import Mutations from "../../graphql/mutations";
import { withRouter } from "react-router-dom";
const { FETCH_USER_BINS } = Queries;
const { UPDATE_BIN } = Mutations;


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

    this.currentUser = JSON.parse(localStorage.getItem("current-user"));
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

  // renderBinDrop(pin) {
  //   return (
  //     <Mutation mutation={UPDATE_BIN}>
  //     { updateBin => {

  //       let bins = <Query
  //         query={FETCH_USER_BINS}
  //         variables={{ userId: this.currentUser._id }}
  //       >
  //         {({ loading, error, data }) => {
  //           if (loading) return <p>Loading...</p>;
  //           if (error) return <p>Somethin' done borked</p>
  //           return data.userBins;
  //         }}
  //       </Query>
  //         return (
  //           <ul>
  //             {bins.map(bin => <li key={bin._id}>{bin.title}</li>)}
  //           </ul>
  //         );
  //     }}
  //     </Mutation>
  //   )

  // }

  renderBinDrop(pin) {
    return (
      <Query
        query={FETCH_USER_BINS}
        variables={{ userId: this.currentUser._id }}
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

  render() {
    const splits = splitArray(this.props.pins, 5);

    const pinDat = Object.values(splits).map((column, idx) => 
      <div className="column" key={`splits-column-${idx}`}>
        {column.map(pin => {
          const { _id, title, url, author, image_url } = pin;
          return (
            <div className="masonry-div" key={_id} >
              <div className="shadow-boxer">
                <img className="masonry-img" src={image_url} alt={pin.title}/>

                <div className="pin-hud">
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
                    <button className="add-bin-drop-save">Save</button>
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
      <div className="create-a-pin-container" key={"pinFormThing"}>
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