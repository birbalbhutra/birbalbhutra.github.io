import React from "react";
import Typewriter from "typewriter-effect";
import image from "../images/BirbalBhutra1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <img src={image} className="profile-image" alt="Birbal Bhutra" />
      <div className="home-content">
        <div className="name">
          Hello! I'm Birbal Bhutra
          {/* <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Hello! I'm Birbal Bhutra").start();
            }}
          /> */}
        </div>
        <div className="designation">
          <div>
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "Cricket Lover",
                  "Gadget Enthusiast",
                  "Stat Nerd",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="contact-buttons">
          <a
            className="contact"
            href="https://www.linkedin.com/in/birbalbhutra"
          >
            <FontAwesomeIcon
              className="fa"
              icon={faLinkedinIn}
              title="LinkedIn"
            />
          </a>
          <a className="contact" href="https://github.com/birbalbhutra">
            <FontAwesomeIcon icon={faGithub} title="Github" />
          </a>
          <a
            className="contact"
            href="https://www.instagram.com/doofenshmirtz_19"
          >
            <FontAwesomeIcon icon={faInstagram} title="Instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
