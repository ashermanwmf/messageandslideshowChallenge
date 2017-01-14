import React, { Component } from "react";
import { connect } from "react-redux";
import Messages from "../containers/Messages.jsx";
import SlideShow from "./SlideShow.jsx";
import slideShowData from "../slideShow.json";
import changeCategoryAction from "../actions/changecategory";
import messageSubmitAction from "../actions/messagesubmit";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <nav className="main-navigation">
          <h1> Notify </h1>
        </nav>

        <section className="messages">
          <Messages />
        </section>

        <section className="slide-show">
          <SlideShow data={slideShowData} />
        </section>
      </div>
    );
  }
}

export default App;
