import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <img className="profile-image" src="" />
        <div>
          <p>{this.props.message}</p>
          <span>{this.props.createdAt}</span>
          <span>{this.props.name}</span>
          <button onClick={() => this.props.reply(this.props.name)}>Reply</button>
          <button onClick={() => this.props.renotify()}>Renotify</button>
        </div>
      </div>
    );
  }
}

export default Message;