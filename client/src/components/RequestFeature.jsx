import React from "react";

import "../assets/styles/requestfeature.css";

class RequestFeature extends React.Component {
  constructor(props) {
    super(props);

    this.state = { renderInput: false, submitted: false };

    this.handleClickNewFeature = this.handleClickNewFeature.bind(this);
    this.handleRequestFeatureShow = this.handleRequestFeatureShow.bind(this);
    this.handleNewFeatureSubmit = this.handleNewFeatureSubmit.bind(this);
  }

  handleClickNewFeature(e) {
    e.preventDefault();
    this.setState({
      renderInput: true
    })
  }

  handleRequestFeatureShow() {
    let nav = document.getElementById("request-feature-wrapper");

    if (nav.style.width === "") {
      nav.style.width = "390px";
    }
    else {
      nav.style.width = "";
      nav.style.bottom = "";
      this.setState({
        renderInput: false,
        submitted: false
      })
    }
  }

  handleNewFeatureSubmit(e) {
    e.preventDefault();

    this.setState({
      submitted: true
    })
  }

  render() {
    let dialogue;
    let sampleDialogue = ["Damn that sounds too interesting for this site my friend", 
    "Oh wow that's a fascinating thought--oh fuck",
    "Damn, interesting thoughts like that just have no place here at Disinterest",
    "So happy you submitted that, nice stuff. We'll get right to not doing that."]
    if (!this.state.submitted) {
      dialogue = "Tell me what feature you'd like to see"
    } else {
      dialogue = sampleDialogue[Math.floor(Math.random() * sampleDialogue.length)];
    }

    if (!this.state.renderInput) {
      return (
        <div id="request-feature-wrapper">
          <nav className="request-feature-header">
            <div className="feature-header-text">Request Feature</div>
            <div onClick={this.handleClickNewFeature}><i id="new-feature-pencil" className="fas fa-pencil-alt"></i></div>
          </nav>
          <img id="xzibit" src="https://memegenerator.net/img/images/108785.jpg" alt="=D"/>
          <div className="request-dialogue">Want to suggest new features for this site?</div>
          <button onClick={this.handleClickNewFeature} className="new-feature-button">New Feature</button>
        </div>
      )
    } else if (this.state.renderInput) {
      return (
        <div id="request-feature-wrapper">
          <nav className="request-feature-header">
            <div className="feature-header-text">Request Feature</div>
            <div className="feature-header-cancel" onClick={this.handleRequestFeatureShow}>X</div>
          </nav>
          <img id="xzibit" src="https://memegenerator.net/img/images/108785.jpg" alt="=D" />
          <div className="request-dialogue">{dialogue}</div>
          <textarea className="feature-input"/>
          <button onClick={this.handleNewFeatureSubmit} className="new-feature-button">Submit</button>
        </div>
      )
    } 
    
  }
}

export default RequestFeature;