import { useState } from "react";
import CategoryColourEnum from "../../ts/enums/CategoryColourEnum";
import TriviaEntryInterface from "../../ts/interfaces/TriviaEntryInterface";
import styles from "./index.module.css";

const TriviaEntry: React.FC<TriviaEntryInterface> = (props) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const { question, answer, category } = props;
  const bentArrow = "\u21B3";
  return (
    <div
      className={styles.triviaEntry}
      style={{ backgroundColor: CategoryColourEnum[category] }}
    >
      <div
        className={styles.qaContainer}
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <div className={styles.question}>{question}</div>
        <div
          className={`${styles.answer} ${showAnswer ? styles.revealed : ""}`}
        >
          {bentArrow} {showAnswer ? answer : "Click to reveal answer"}
        </div>
      </div>
    </div>
  );
};

export default TriviaEntry;
