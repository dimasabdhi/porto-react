import React, { Component } from "react";

class Experience extends Component {
  render() {
    return (
      <section id="experience" className="h-screen p-8">
        <h1 className="text-3xl font-bold">Experience</h1>
        <div className="mt-4">
          <h2 className="text-xl font-semibold">GITHUB CAMPUS EXPERT</h2>
          <p>
            Responsible for building the on-campus community with the support of
            GitHub.
          </p>
          <p className="text-gray-500">August 2018 - Present</p>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold">OPENSOURCE DEVELOPER INTERN</h2>
          <p>
            Contributing to Fossasia's open event server and frontend as an
            intern. Resolved numerous bugs and added new features to the eventy
            platform.
          </p>
          <p className="text-gray-500">June 2019 - Present</p>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold">SOFTWARE DEVELOPER INTERN</h2>
          <p>Worked on Hasura's GraphQL engine and added new features in it.</p>
          <p className="text-gray-500">December 2018 - January 2019</p>
        </div>
      </section>
    );
  }
}

export default Experience;
