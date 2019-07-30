import React, { Component } from "react";
import { Query } from "react-apollo";
import Queries from "../../graphql/queries";
const { FETCH_PINS } = Queries;


class PinIndex extends Component {

    render() {
        return (
        <div>
            <div className="pin-count">10 pins</div>
            <main className="masonry-container">
                <div className="column">
                    <div className="create-a-pin-container">
                        <i className="pin-button fas fa-plus-circle"></i>
                        <div className="create-a-pin"></div>
                        <div className="create-header">Create Pin</div>
                    </div>
                    
                    <div className="masonry-div">
                        <img className="masonry-img"src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/Paleo_food.jpg"></img>
                    </div>   
                    <div className="masonry-div">      
                        <img className="masonry-img"src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/Indian_bengali_food.jpg"></img>
                    </div>
                    <div className="masonry-div">
                        <img className="masonry-img"src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/Food_in_Miyajima.jpg"></img>
                    </div>
                </div>
                <div className="column">
                    <div className="masonry-div">
                        <img className="masonry-img"src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/P1-Food_with_love.jpg"></img>
                    </div>
                    <div className="masonry-div">
                        <img className="masonry-img"src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/Beautiful_Chaldean_Food_for_Everyone.jpg"></img>
                    </div>
                </div>
                <div className="column">
                    <div className="masonry-div">
                        <img className="masonry-img"src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/Birds_on_stick_Shanghai_Qibao.jpg"></img>
                    </div>        
                    <div className="masonry-div">
                        <img className="masonry-img"src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/Restaurant_food_Kunming_Yunnan.jpg"></img>
                    </div>
                    <div className="masonry-div">
                        <img className="masonry-img"src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/Bunter_Teller.jpg"></img>
                    </div>             
                </div>
                <div className="column">
                    <div className="masonry-div">
                        <img className="masonry-img"src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/P3-Egyptian_food_Koshary.jpg"></img>
                    </div>
                    <div className="masonry-div">
                        <img className="masonry-img"src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/Mexican_food.jpg"></img>
                    </div>                       
                    <div className="masonry-div">
                        <img className="masonry-img"src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/P2-Arepitas_Food_Macro.jpg"></img>
                    </div>
                </div>
            </main>
        </div>
        );
    }
}

export default PinIndex;