import React, { Component } from "react";
import About from "./About";
import Experience from "./Experience";

class MainContent extends Component {
  render() {
    return (
      <div className="overflow-y-auto h-screen">
        <About />
        <Experience />
        {/* Tambahkan komponen lain seperti Skills, Interests, dan Awards di sini */}
      </div>
    );
  }
}

export default MainContent;
