import React, { Component } from "react";
import { Query } from "react-apollo";
import Queries from "../../graphql/queries";
const { FETCH_BINS } = Queries;


class BinIndex extends Component {

    render() {
        return ( 
            <div className="bin-index-container">
                <div className="actual-bin-container">
                    <div className="bin-contents">bin1</div>
                    <div className="bin-name">bin name</div>
                    <div className="number-of-pins"># of pins</div>
                </div>
                <div className="actual-bin-container">
                    <div className="bin-contents">bin2</div>
                    <div className="bin-name">bin name</div>
                    <div className="number-of-pins"># of pins</div>
                </div>
                <div className="actual-bin-container">
                    <div className="bin-contents">bin3</div>
                    <div className="bin-name">bin name</div>
                    <div className="number-of-pins"># of pins</div>
                </div>
                <div className="actual-bin-container">
                    <div className="bin-contents">bin4</div>
                    <div className="bin-name">bin name</div>
                    <div className="number-of-pins"># of pins</div>
                </div>
                <div className="actual-bin-container">
                    <div className="bin-contents">bin5</div>
                    <div className="bin-name">bin name</div>
                    <div className="number-of-pins"># of pins</div>
                </div>
            </div>
        );
    }
}

export default BinIndex;