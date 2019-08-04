import React, { Component } from "react";
import { Query } from "react-apollo";
import Queries from "../../graphql/queries";
const { FETCH_BINS } = Queries;


class BinIndex extends Component {

    render() {
        return ( 
            <div className="bin-index-container">
                <div className="actual-bin-container">
                    <div className="bin-contents">
                        <div className="bin-box">
                            <div className="half-box">pic1</div>
                            <div className="half-box">pic2</div>
                        </div>
                        <div className="bin-box">
                            <div className="half-box">pic3</div>
                            <div className="half-box">pic4</div>
                        </div>
                        <div className="bin-box">
                            <div className="tiny-box">pic5</div>
                            <div className="big-box">pic6</div>
                        </div>
                    </div>
                    <div className="bin-name">bin name</div>
                    <div className="number-of-pins"># of pins</div>
                </div>
                <div className="actual-bin-container">
                    <div className="bin-contents">
                        <div className="bin-box">
                            <div className="half-box">pic1</div>
                            <div className="half-box">pic2</div>
                        </div>
                        <div className="bin-box">
                            <div className="half-box">pic3</div>
                            <div className="half-box">pic4</div>
                        </div>
                        <div className="bin-box">
                            <div className="big-box">pic5</div>
                            <div className="tiny-box">pic6</div>
                        </div>
                    </div>
                    <div className="bin-name">bin name</div>
                    <div className="number-of-pins"># of pins</div>
                </div>
                <div className="actual-bin-container">
                    <div className="bin-contents">
                        <div className="bin-box">
                            <div className="half-box">pic1</div>
                            <div className="half-box">pic2</div>
                        </div>
                        <div className="bin-box">
                            <div className="tiny-box">pic3</div>
                            <div className="big-box">pic4</div>
                        </div>
                        <div className="bin-box">
                            <div className="half-box">pic5</div>
                            <div className="half-box">pic6</div>
                        </div>
                    </div>
                    <div className="bin-name">bin name</div>
                    <div className="number-of-pins"># of pins</div>
                </div>
                <div className="actual-bin-container">
                    <div className="bin-contents">
                        <div className="bin-box">
                            <div className="half-box">pic1</div>
                            <div className="half-box">pic2</div>
                        </div>
                        <div className="bin-box">
                            <div className="big-box">pic3</div>
                            <div className="tiny-box">pic4</div>
                        </div>
                        <div className="bin-box">
                            <div className="half-box">pic5</div>
                            <div className="half-box">pic6</div>
                        </div>
                    </div>
                    <div className="bin-name">bin name</div>
                    <div className="number-of-pins"># of pins</div>
                </div>
                <div className="actual-bin-container">
                    <div className="bin-contents">
                        <div className="bin-box">
                            <div className="tiny-box">pic1</div>
                            <div className="big-box">pic2</div>
                        </div>
                        <div className="bin-box">
                            <div className="half-box">pic3</div>
                            <div className="half-box">pic4</div>
                        </div>
                        <div className="bin-box">
                            <div className="half-box">pic5</div>
                            <div className="half-box">pic6</div>
                        </div>
                    </div>
                    <div className="bin-name">bin name</div>
                    <div className="number-of-pins"># of pins</div>
                </div>
                <div className="actual-bin-container">
                    <div className="bin-contents">
                        <div className="bin-box">
                            <div className="big-box">pic1</div>
                            <div className="tiny-box">pic2</div>
                        </div>
                        <div className="bin-box">
                            <div className="half-box">pic3</div>
                            <div className="half-box">pic4</div>
                        </div>
                        <div className="bin-box">
                            <div className="half-box">pic5</div>
                            <div className="half-box">pic6</div>
                        </div>
                    </div>
                    <div className="bin-name">bin name</div>
                    <div className="number-of-pins"># of pins</div>
                </div>
            </div>
        );
    }
}

export default BinIndex;