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
      imgButtons = <div><button onClick={this.forwardImage.bind(this)}>Forward</button></div>
    }else if(this.state.imageIndex > 0 && this.state.imageIndex < this.props.data.length - 1){
      imgButtons = <div><button onClick={this.backImage.bind(this)}>Back</button><button onClick={this.forwardImage.bind(this)}>Forward</button></div>
    }else if(this.state.imageIndex === this.props.data.length - 1){
      imgButtons = <div><button onClick={this.backImage.bind(this)}>Back</button></div>
    }

    return (
      <div className="slideshow-container">
        <div className="slideshow-image">
          <img src={imgSrc} />
          {imgButtons}
        </div>
        <div className="slideshow-title">
          <h1><center>{imgTitle}</center></h1>
          <hr></hr>
        </div>
      </div>
    );
  }
}

export default SlideShow;