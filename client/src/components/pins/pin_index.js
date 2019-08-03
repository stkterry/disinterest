import React, { Component } from "react";
import { Query } from "react-apollo";
import Queries from "../../graphql/queries";
const { FETCH_SOME_PINS } = Queries;

const TEMP_IMAGES = [
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/Paleo_food.jpg",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/Indian_bengali_food.jpg",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/Food_in_Miyajima.jpg",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/P1-Food_with_love.jpg",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/Beautiful_Chaldean_Food_for_Everyone.jpg",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/Birds_on_stick_Shanghai_Qibao.jpg",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/Restaurant_food_Kunming_Yunnan.jpg",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/Bunter_Teller.jpg",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/P3-Egyptian_food_Koshary.jpg",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/Mexican_food.jpg",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/P2-Arepitas_Food_Macro.jpg"
]
const tempRandImage = () => TEMP_IMAGES[Math.floor(Math.random() * TEMP_IMAGES.length)];

const splitArray = (arr, n) => {
  let split = {}
  for (let i = 0; i < n; i++) split[i] = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    split[i%n].push(arr[i])
  }
  return split;
}

class PinIndex extends Component {

  handleScroll ({ currentTarget }, onLoadMore) {
    if (
      currentTarget.scrollTop + currentTarget.clientHeight >=
      currentTarget.scrollHeight
    ) {
      onLoadMore();
    }
  }

  render() {
    const pins = this.props.pins.map(pin => <li key={pin._id}>{pin.title}</li>)
    return (
      <div className="pin-page-container" >
        <main className="masonry-container"
        >
          <ul className="tempScroller"
            onScroll={event => this.handleScroll(event, this.props.onLoadMore)}
          >{pins}</ul>
        </main>
      </div>

      // <Query query={FETCH_SOME_PINS}>
      //   {({ loading, error, data, fetchMore }) => {
      //     if (loading) return <p>Loading...</p>;
      //     if (error) return <p>Somethin' done borked</p>

      //     {/* const splits = splitArray(data.pins, 4);
      //     const pinDat = Object.values(splits).map(column =>
      //       <div className="column">
      //         {column.map(pin =>
      //           <div className="masonry-div" key={pin._id} >
      //             <img className="masonry-img" src={tempRandImage()} />
      //             <h3 className="temp-title">{pin.title}</h3>
      //           </div>
      //         )}
      //       </div>
      //     ) */}
      //     {/* pinDat[0].props.children.unshift(
      //       <div className="create-a-pin-container">
      //         <i className="pin-button fas fa-plus-circle"></i>
      //         <div className="create-a-pin"></div>
      //         <div className="create-header">Create Pin</div>
      //       </div>
      //     ) */}

      //     const pins = [];

      //     const pinDat = <div></div>


      //   }}
      // </Query>
    );
  }
}

export default PinIndex;