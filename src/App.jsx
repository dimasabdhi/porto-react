import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

class App extends Component {
  render() {
    return (
      <div className="flex">
        <Sidebar />
        <MainContent />
      </div>
    );
  }
}

export default App;
