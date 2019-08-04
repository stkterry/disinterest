import React, { Component } from "react";
import { Query } from "react-apollo";
import Queries from "../../graphql/queries";
const { FETCH_USER_BINS } = Queries;


class BinIndex extends Component {

  constructor(props) {
    super(props);
    this.currentUser = JSON.parse(localStorage.getItem("current-user"));
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
              <ul>
                {userBins.map(bin => <li key={bin._id}><img src={bin.pins[0].image_url} /></li>)}
              </ul>
            </div>
          )
        }}
      </Query>
    )

    // return (
        //     <div className="bin-index-container">
        //         <div className="actual-bin-container">
        //             <div className="bin-contents">
        //                 <div className="bin-box">
        //                     <div className="half-box">pic1</div>
        //                     <div className="half-box">pic2</div>
        //                 </div>
        //                 <div className="bin-box">
        //                     <div className="half-box">pic3</div>
        //                     <div className="half-box">pic4</div>
        //                 </div>
        //                 <div className="bin-box">
        //                     <div className="tiny-box">pic5</div>
        //                     <div className="big-box">pic6</div>
        //                 </div>
        //             </div>
        //             <div className="bin-name">bin name</div>
        //             <div className="number-of-pins"># of pins</div>
        //         </div>
        //         <div className="actual-bin-container">
        //             <div className="bin-contents">
        //                 <div className="bin-box">
        //                     <div className="half-box">pic1</div>
        //                     <div className="half-box">pic2</div>
        //                 </div>
        //                 <div className="bin-box">
        //                     <div className="half-box">pic3</div>
        //                     <div className="half-box">pic4</div>
        //                 </div>
        //                 <div className="bin-box">
        //                     <div className="big-box">pic5</div>
        //                     <div className="tiny-box">pic6</div>
        //                 </div>
        //             </div>
        //             <div className="bin-name">bin name</div>
        //             <div className="number-of-pins"># of pins</div>
        //         </div>
        //         <div className="actual-bin-container">
        //             <div className="bin-contents">
        //                 <div className="bin-box">
        //                     <div className="half-box">pic1</div>
        //                     <div className="half-box">pic2</div>
        //                 </div>
        //                 <div className="bin-box">
        //                     <div className="tiny-box">pic3</div>
        //                     <div className="big-box">pic4</div>
        //                 </div>
        //                 <div className="bin-box">
        //                     <div className="half-box">pic5</div>
        //                     <div className="half-box">pic6</div>
        //                 </div>
        //             </div>
        //             <div className="bin-name">bin name</div>
        //             <div className="number-of-pins"># of pins</div>
        //         </div>
        //         <div className="actual-bin-container">
        //             <div className="bin-contents">
        //                 <div className="bin-box">
        //                     <div className="half-box">pic1</div>
        //                     <div className="half-box">pic2</div>
        //                 </div>
        //                 <div className="bin-box">
        //                     <div className="big-box">pic3</div>
        //                     <div className="tiny-box">pic4</div>
        //                 </div>
        //                 <div className="bin-box">
        //                     <div className="half-box">pic5</div>
        //                     <div className="half-box">pic6</div>
        //                 </div>
        //             </div>
        //             <div className="bin-name">bin name</div>
        //             <div className="number-of-pins"># of pins</div>
        //         </div>
        //         <div className="actual-bin-container">
        //             <div className="bin-contents">
        //                 <div className="bin-box">
        //                     <div className="tiny-box">pic1</div>
        //                     <div className="big-box">pic2</div>
        //                 </div>
        //                 <div className="bin-box">
        //                     <div className="half-box">pic3</div>
        //                     <div className="half-box">pic4</div>
        //                 </div>
        //                 <div className="bin-box">
        //                     <div className="half-box">pic5</div>
        //                     <div className="half-box">pic6</div>
        //                 </div>
        //             </div>
        //             <div className="bin-name">bin name</div>
        //             <div className="number-of-pins"># of pins</div>
        //         </div>
        //         <div className="actual-bin-container">
        //             <div className="bin-contents">
        //                 <div className="bin-box">
        //                     <div className="big-box">pic1</div>
        //                     <div className="tiny-box">pic2</div>
        //                 </div>
        //                 <div className="bin-box">
        //                     <div className="half-box">pic3</div>
        //                     <div className="half-box">pic4</div>
        //                 </div>
        //                 <div className="bin-box">
        //                     <div className="half-box">pic5</div>
        //                     <div className="half-box">pic6</div>
        //                 </div>
        //             </div>
        //             <div className="bin-name">bin name</div>
        //             <div className="number-of-pins"># of pins</div>
        //         </div>
        //     </div>
        // );
  }
}

export default BinIndex;