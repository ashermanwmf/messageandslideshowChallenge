import React, { Component } from "react";

class SlideShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0
    };
  }
  backImage() {
    this.setState({imageIndex: this.state.imageIndex - 1});
  }
  forwardImage() {
    this.setState({imageIndex: this.state.imageIndex + 1});
  }
  render() {
    let img = this.props.data[this.state.imageIndex];
    let imgSrc = img.url;
    let imgTitle = img.title;
    let imgButtons;

    if(this.state.imageIndex === 0) {
      imgButtons = <div><i className="slideshow-button forwardButton fa fa-arrow-circle-right" onClick={this.forwardImage.bind(this)} aria-hidden="true"></i></div>
    }else if(this.state.imageIndex > 0 && this.state.imageIndex < this.props.data.length - 1){
      imgButtons = <div><i className="slideshow-button backButton fa fa-arrow-circle-left" onClick={this.backImage.bind(this)} aria-hidden="true"></i><i className="slideshow-button forwardButton fa fa-arrow-circle-right" onClick={this.forwardImage.bind(this)} aria-hidden="true"></i></div>
    }else if(this.state.imageIndex === this.props.data.length - 1){
      imgButtons = <div><i className="slideshow-button backButton fa fa-arrow-circle-left" onClick={this.backImage.bind(this)} aria-hidden="true"></i></div>
    }

    return (
      <div className="slideshow-container">
        <div className="slideshow-image">
          {imgButtons}
          <img src={imgSrc} />
        </div>
        <div className="slideshow-title">
          <h2><center>{imgTitle}</center></h2>
          <hr></hr>
        </div>
      </div>
    );
  }
}

export default SlideShow;
