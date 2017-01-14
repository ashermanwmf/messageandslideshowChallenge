import React, { Component } from "react";
import Moment from "react-moment";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonCSS: {"display" : "none"}
    };
  }
  showButtons() {
    this.setState({buttonCSS: {"marginRight": "5%"}});
  }
  hidButtons() {
    this.setState({buttonCSS: {"display" : "none", "marginRight": "5%"}});
  }
  render() {
    return (
      <div className="message-container" onMouseEnter={this.showButtons.bind(this)} onMouseLeave={this.hidButtons.bind(this)}>
        <img className="profile-image" src="http://jennstrends.com/wp-content/uploads/2013/10/bad-profile-pic-2.jpeg" />
        
        <div className="message">
          <p>{this.props.message}</p>
          <div className="message-info">
            <span>Posted <Moment from={this.props.createdAt} ago></Moment> ago</span>
            <span className="username" >{this.props.name}</span>
            <button style={this.state.buttonCSS} onClick={() => this.props.reply(this.props.name)}>Reply</button>
            <button style={this.state.buttonCSS} onClick={() => this.props.renotify()}>Renotify</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Message;