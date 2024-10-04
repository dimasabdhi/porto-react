import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";

class Sidebar extends Component {
  render() {
    return (
      <div className="bg-red-800 text-white h-screen p-8 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <ul className="space-y-4 text-lg">
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="interests" smooth={true} duration={500}>
              Interests
            </Link>
          </li>
          <li>
            <Link to="awards" smooth={true} duration={500}>
              Awards
            </Link>
          </li>
        </ul>
        <div className="mt-auto flex space-x-4">
          <a href="https://linkedin.com">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
    );
  }
}

export default Sidebar;
