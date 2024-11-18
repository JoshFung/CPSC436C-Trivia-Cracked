import TriviaEntryInterface from "../../ts/interfaces/TriviaEntryInterface";
import styles from "./index.module.css";

const TriviaEntry: React.FC<TriviaEntryInterface> = (props) => {
  const { question, answer, category } = props;
  return (
    <div className={styles.triviaEntry}>
      <div className={styles.question}>{question}</div>
      <div className={styles.answer}>{answer}</div>
    </div>
  );
};

export default TriviaEntry;
