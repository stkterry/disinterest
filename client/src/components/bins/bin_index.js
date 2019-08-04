import React, { Component } from "react";
import { Query } from "react-apollo";
import Queries from "../../graphql/queries";
const { FETCH_BINS } = Queries;


class BinIndex extends Component {

    render() {
        return ( 
            <div className="bin-index-container">
                <div className="actual-bin">
                    bin1
                </div>
                <div className="actual-bin">
                    bin2
                </div>
                <div className="actual-bin">
                    bin3
                </div>
                <div className="actual-bin">
                    bin4
                </div>
                <div className="actual-bin">
                    bin5
                </div>
            </div>
        );
    }
}

export default BinIndex;