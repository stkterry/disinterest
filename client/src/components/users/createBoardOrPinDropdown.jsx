import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class CreateBoardOrPin extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.binModal = document.getElementById("bin-outer-div");
    this.handleBinModalOpen = this.handleBinModalOpen.bind(this);
  }

  handleOpen(event) {
    event.preventDefault();
    this.setState({
      open: true
    },
      () => document.addEventListener("click", this.handleClose)
    );
  }

  handleClose(event) {
    event.preventDefault();
    this.setState({
      open: false
    },
      () => document.removeEventListener("click", this.handleClose)
    );
  }

  componentDidMount() {
    this.binModal = document.getElementById("bin-outer-div");

  }
  
  handleBinModalOpen() {
    this.binModal.classList.remove("displaynone");
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClose)
  }

  render() {
    if (this.state.open) {
      return (
        <div>
          <i className="fas fa-plus" onClick={this.handleClose}></i>
          <div className="bin-or-pin-dropdown">
            <div onClick={this.handleBinModalOpen} style={{ borderRadius: '10px 10px 0px 0px' }}>Create bin</div>
            <div onClick={() => this.props.history.push("/pin-builder")} style={{ borderRadius: '0px 0px 10px 10px' }}>Create Pin</div>
          </div>
        </div>
      );
    } else {
      return (
        <i className="fas fa-plus" onClick={this.handleOpen}></i>
      );
    }
  }

}

export default withRouter(CreateBoardOrPin);