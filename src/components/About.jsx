import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section id="about" className="h-screen flex items-center p-8">
        <div>
          <h1 className="text-5xl font-bold text-red-600">
            LOREM<span className="text-black">IPSUM</span>
          </h1>
          <p className="text-lg mt-2">+62-0123456789 | LOREMIPSUM@GMAIL.COM</p>
          <p className="mt-6 text-justify">
            I am an open-source contributor and have contributed to various
            projects including Zulip, Hasura, and Fossasia. My tech stack
            includes Python and Javascript for server-side development and React
            for frontend development.
          </p>
        </div>
      </section>
    );
  }
}

export default About;
