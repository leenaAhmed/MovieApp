import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import "./style.css";

  
export default class SocialMedia extends Component {
  render() {
     return (
      <>
      <div className="socialMedia">
        <ul className="list-unstyled d-flex">
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100005245264775"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="socialMedia_Facebook icon  header_icon"
                icon={faFacebookF}
              />
              <span className="sr-only">My facebook profile</span>
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com/__elhosary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="socialMedia_twitter  icon  header_icon"
                icon={faTwitter}
              />
              <span className="sr-only">My twitter profile</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/leenaAhmed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="socialMedia_github icon header_icon"
                icon={faGithub}
              />
              <span className="sr-only">My github profile</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/lina-ahmed98/"
              target="_blank"
              rel="noopener  noreferrer"
            >
              <FontAwesomeIcon
                className="socialMedia_linkedin icon header_icon"
                icon={faLinkedin}
              />
            </a>
          </li>
        </ul>
      </div>
      
       </>  
      )
    }}