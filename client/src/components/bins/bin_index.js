import React, { Component } from "react";
import { Query } from "react-apollo";
import Queries from "../../graphql/queries";
const { FETCH_USER_BINS } = Queries;


class BinIndex extends Component {

  constructor(props) {
    super(props);
    this.currentUser = JSON.parse(localStorage.getItem("current-user"));
  }


  binLayout(userBins) {
    return (
      userBins.map(bin => {
        let pinCount = (bin.pins.length > 6) ? 6 : bin.pins.length;
        
        return (
          <div key={bin._id} className="actual-bin-container">
            <div className="pin-collection">
              { 
                bin.pins.slice(0, pinCount).map(pin => {
                  const { _id, image_url } = pin;
                  return (
                    <img key={_id} className="bin-pin-img" src={image_url} />
                  )
                })
              }
            </div>
            <div className="bin-about">
              <div className="bin-name">{bin.title}</div>
              <div className="number-of-pins">number of pins: {bin.pins.length}</div>
            </div>
          </div>
        )
      }
      )
    )
  }
  
  render() {

    return (
      <Query 
        query={FETCH_USER_BINS}
        variables={{ userId: this.currentUser._id }}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Somethin' done borked</p>
          const { userBins } = data;
          console.log(userBins);

          return (
            <div className="bin-index-container">
              {this.binLayout(userBins)}
            </div>
          )
        }}
      </Query>
    )
      
  }
}

export default BinIndex;