import React, { Component } from "react";
import { connect } from "react-redux";
import Message from "../components/Message.jsx";
import SlideShow from "../components/SlideShow.jsx";
import slideShowData from "../slideShow.json";
import changeCategoryAction from "../actions/changecategory";
import messageSubmitAction from "../actions/messagesubmit";

class App extends Component {
  constructor() {
    super();
  }
  postMessage() {
    if(this.refs.message.value !== "Say something..."){
      if(this.refs.message.value.length < 140){
        this.props.messageSubmitAction(this.refs.message.value, this.props.category);
        this.refs.message.value = "Say something...";
      }else {
        alert("Message needs to be less than 140 characters");
      }
    }
  }
  changeMessageType(e) {
    this.props.changeCategoryAction(e.target.innerText);
  }
  sortMessages(array) {
    if(array.length === 1) return array;

    let mid = Math.floor(array.length / 2);

    let left = array.slice(0, mid);
    let right = array.slice(mid);

    left = this.sortMessages(left);
    right = this.sortMessages(right);

    let result = [];
    let i = 0;
    let j = 0;

    while(result.length !== left.length + right.length){
      if(left[i] === undefined || left[i].createdAt > right[j].createdAt){
        result.push(right[j++]);
      }else if(right[j] === undefined || left[i].createdAt <= right[j].createdAt){
        result.push(left[i++]);
      }
    }

    return result;
  }
  reply(username) {
    this.refs.message.value = `reply:@${username} `;
  }
  renotify() {
    this.refs.message.value = "renotify: ";
  }
  render() {
    let category = this.props.category;
    let messages = [];

    const categoryStyleObj = {
      "ALL": {"marginRight": "2%"},
      "PUBLIC": {"marginRight": "2%"},
      "PRIVATE": {}
    };

    const messageObj = {
      "ALL": messages.concat(this.props.messages.PUBLIC, this.props.messages.PRIVATE),
      "PUBLIC": messages.concat(this.props.messages.PUBLIC),
      "PRIVATE": messages.concat(this.props.messages.PRIVATE)
    };

    categoryStyleObj[category]["backgroundColor"] = "#CCCCCC";

    messages = messageObj[category];

    messages = messages.sort((a, b) =>{
      return a.createdAt < b.createdAt;
    });

    return (
      <div>
        <nav className="main-navigation">
          <h1> Notify </h1>
        </nav>

        <section className="messages">
          <div className="form">
            <input ref="message" className="input-message" defaultValue="Say something..."/>
            <button className="button-post" onClick={this.postMessage.bind(this)}>POST</button>
          </div>

          <hr></hr>

          <button style={categoryStyleObj.ALL} className="button-category" onClick={this.changeMessageType.bind(this)}>ALL</button>
          <button style={categoryStyleObj.PUBLIC} className="button-category" onClick={this.changeMessageType.bind(this)}>PUBLIC</button>
          <button style={categoryStyleObj.PRIVATE} className="button-category" onClick={this.changeMessageType.bind(this)}>PRIVATE</button>

          <hr></hr>

          <div className="message-feed">
            {messages.map((message, i) =>
              <Message 
                key={i} 
                message={message.message} 
                name={message.name} 
                createdAt={message.createdAt}
                reply={this.reply.bind(this)}
                renotify={this.renotify.bind(this)}
              />
            )}
          </div>
        </section>

        <section className="slide-show">
          <SlideShow data={slideShowData} />
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    category: state.category
  };
}

export default connect(mapStateToProps, {
  messageSubmitAction: messageSubmitAction,
  changeCategoryAction: changeCategoryAction
})(App);