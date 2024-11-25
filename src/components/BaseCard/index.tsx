import styles from "./index.module.css";
import { Link } from "react-router-dom";

import React from "react";

interface Props {
  sharedSpace?: boolean;
  content: React.ReactNode;
}

const BaseCard: React.FC<Props> = (props) => {
  const { sharedSpace, content } = props;
  return (
    <div
      className={`${styles.baseContainer} ${
        sharedSpace ? styles.sharedSpace : null
      }`}
    >
      <Link to="/">
        {
          <img
            className={`${styles.logo} ${
              sharedSpace ? styles.sharedSpace : null
            }`}
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
