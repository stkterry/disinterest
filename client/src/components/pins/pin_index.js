import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";

import Queries from "../../graphql/queries";
import Mutations from "../../graphql/mutations";
const { FETCH_USER_BINS } = Queries;
const { UPDATE_BIN } = Mutations;

// const TEMP_IMAGES = [
//   "https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/Paleo_food.jpg",
//   "https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/Indian_bengali_food.jpg",
//   "https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/Food_in_Miyajima.jpg",
//   "https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/P1-Food_with_love.jpg",
//   "https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/Beautiful_Chaldean_Food_for_Everyone.jpg",
//   "https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/Birds_on_stick_Shanghai_Qibao.jpg",
//   "https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/Restaurant_food_Kunming_Yunnan.jpg",
//   "https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/Bunter_Teller.jpg",
//   "https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/P3-Egyptian_food_Koshary.jpg",
//   "https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/Mexican_food.jpg",
//   "https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/P2-Arepitas_Food_Macro.jpg"
// ]
// const tempRandImage = () => TEMP_IMAGES[Math.floor(Math.random() * TEMP_IMAGES.length)];

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
  }


  // showBinDrop(event) {
  //   event.preventDefault();
  //   let form = document.getElementById("bin-drop-form");
  //   form.style.display = "flex";
  //   console.log(form)
  // }

  handleScroll({ currentTarget }, onLoadMore) {
    if (
      currentTarget.scrollHeight <= currentTarget.scrollTop + currentTarget.clientHeight
    ) {
      onLoadMore();
    }
  }

  renderBins(pin) {
    return (
      <div className="save-to-bins">

        <button className="add-bin-drop-btn"><i className="fa fa-angle-down"></i></button>
        <button className="add-bin-drop-save">Save</button>
        <form className="bin-drop-form" id={`bin-drop-form-${pin._id}`}>
          <select name="thing">
            <option value="sdfgsdfg"></option>
          </select>
        </form>
      </div>
    )
  }

  renderBinDrop(pin) {
    return (
      <Mutation mutation={UPDATE_BIN}>
      { updateBin => {

        let bins = <Query
          query={FETCH_USER_BINS}
          variables={{ userId: this.currentUser._id }}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Somethin' done borked</p>
            return data.userBins;
          }}
        </Query>
          return (
            <ul>
              {bins.map(bin => <li key={bin._id}>{bin.title}</li>)}
            </ul>
          );
      }}
      </Mutation>
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
                  {this.renderBins(pin)}
                  {/* {this.renderBinDrop(pin)} */}

                  <div className="pin-hud-links">
                    <a href={pin.url.link} target="_blank" rel="noopener noreferrer">
                      <i className='fas fa-external-link-alt'></i>
                      {pin.url.link.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0]}
                    </a>
                    <h3><i className='fas fa-upload'></i></h3>
                    <h3><i className='fas fa-ellipsis-h'></i></h3>
                  </div>
              </div>

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

export default PinIndex;