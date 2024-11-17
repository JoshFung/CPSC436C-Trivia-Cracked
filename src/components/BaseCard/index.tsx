import "./index.css";
import { Link } from "react-router-dom";

import React from "react";

interface Props {
  content: React.ReactNode;
}

const BaseCard: React.FC<Props> = ({ content }) => {
  return (
    <div className="home-container">
      <Link to="/">
        {
          <img
            className="logo"
            src="src/assets/icon-white.png"
            alt="Trivia Cracked Logo"
            onClick={() => console.log("Logo clicked -> /")}
          />
        }
      </Link>
      {content}
    </div>
  );
};

export default BaseCard;
