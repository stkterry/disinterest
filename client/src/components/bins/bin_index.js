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
                    <div>bin name</div>
                    <div># of pins</div>
                </div>
                <div className="actual-bin-container">
                    <div className="bin-contents">bin2</div>
                    <div>bin name</div>
                    <div># of pins</div>
                </div>
                <div className="actual-bin-container">
                    <div className="bin-contents">bin3</div>
                    <div>bin name</div>
                    <div># of pins</div>
                </div>
                <div className="actual-bin-container">
                    <div className="bin-contents">bin4</div>
                    <div>bin name</div>
                    <div># of pins</div>
                </div>
                <div className="actual-bin-container">
                    <div className="bin-contents">bin5</div>
                    <div>bin name</div>
                    <div># of pins</div>
                </div>
            </div>
        );
    }
}

export default BinIndex;