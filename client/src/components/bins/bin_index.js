import React, { Component } from "react";
import { Query } from "react-apollo";
import Queries from "../../graphql/queries";
const { FETCH_BINS } = Queries;


class BinIndex extends Component {

    randPinLayout() {
        let layouts = ["layout-1", "layout-2", "layout-3", "layout-4", "layout-5", "layout-6"]
        let layout = layouts[Math.floor(Math.random()*layouts.length)];
        return layout;
    }

    render() {
        return ( 
            <div className="bin-index-container">
                <div className="actual-bin-container">
                    <div className="layout-1 bin-contents">
                        <div className="layout1-pic-1">pic1</div>
                        <div className="layout-pic-2">pic2</div>
                        <div className="bin-pic-3">pic3</div>
                        <div className="bin-pic-4">pic4</div>
                        <div className="bin-pic-5">pic5</div>
                        <div className="bin-pic-6">pic6</div>
                    </div>
                    <div className="bin-name">bin name</div>
                    <div className="number-of-pins"># of pins</div>
                </div>
                <div className="actual-bin-container">
                    <div className="layout-2 bin-contents">
                        <div className="bin-pic-1">pic1</div>
                        <div className="bin-pic-2">pic2</div>
                        <div className="bin-pic-3">pic3</div>
                        <div className="bin-pic-4">pic4</div>
                        <div className="bin-pic-5">pic5</div>
                        <div className="bin-pic-6">pic6</div>
                    </div>
                    <div className="bin-name">bin name</div>
                    <div className="number-of-pins"># of pins</div>
                </div>
                <div className="actual-bin-container">
                    <div className="layout-3 bin-contents">
                        <div className="bin-pic-1">pic1</div>
                        <div className="bin-pic-2">pic2</div>
                        <div className="bin-pic-3">pic3</div>
                        <div className="bin-pic-4">pic4</div>
                        <div className="bin-pic-5">pic5</div>
                        <div className="bin-pic-6">pic6</div>
                    </div>
                    <div className="bin-name">bin name</div>
                    <div className="number-of-pins"># of pins</div>
                </div>
                <div className="actual-bin-container">
                    <div className="layout-4 bin-contents">
                        <div className="bin-pic-1">pic1</div>
                        <div className="bin-pic-2">pic2</div>
                        <div className="bin-pic-3">pic3</div>
                        <div className="bin-pic-4">pic4</div>
                        <div className="bin-pic-5">pic5</div>
                        <div className="bin-pic-6">pic6</div>
                    </div>
                    <div className="bin-name">bin name</div>
                    <div className="number-of-pins"># of pins</div>
                </div>
                <div className="actual-bin-container">
                    <div className="layout-5 bin-contents">
                        <div className="bin-pic-1">pic1</div>
                        <div className="bin-pic-2">pic2</div>
                        <div className="bin-pic-3">pic3</div>
                        <div className="bin-pic-4">pic4</div>
                        <div className="bin-pic-5">pic5</div>
                        <div className="bin-pic-6">pic6</div>
                    </div>
                    <div className="bin-name">bin name</div>
                    <div className="number-of-pins"># of pins</div>
                </div>
                <div className="actual-bin-container">
                    <div className="layout-6 bin-contents">
                        <div className="bin-pic-1">pic1</div>
                        <div className="bin-pic-2">pic2</div>
                        <div className="bin-pic-3">pic3</div>
                        <div className="bin-pic-4">pic4</div>
                        <div className="bin-pic-5">pic5</div>
                        <div className="bin-pic-6">pic6</div>
                    </div>
                    <div className="bin-name">bin name</div>
                    <div className="number-of-pins"># of pins</div>
                </div>
            </div>
        );
    }
}

export default BinIndex;