import BaseCard from "../../components/BaseCard";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <BaseCard
      content={
        <div className={styles.contentContainer}>
          <h1 className={styles.title}>
            TRIVIA <span className={styles.yellowText}>CRACKED</span>
          </h1>
          <div className={styles.navContainer}>
            {/* <Link to="/play-trivia">
              <button
                className={styles.navButton}
                onClick={() =>
                  console.log("Play Trivia Button clicked -> /play-trivia")
                }
              >
                Play Trivia
              </button>
            </Link> */}
            <Link
              to="/browse-questions"
              onClick={() =>
                console.log(
                  "Browse Questions Button clicked -> /browse-questions"
                )
              }
            >
              <button className={styles.navButton}>Browse Questions</button>
            </Link>
            <Link to="/submit-questions">
              <button
                className={styles.navButton}
                onClick={() =>
                  console.log(
                    "Submit Questions Button clicked -> /submit-questions"
                  )
                }
              >
                Submit Questions
              </button>
            </Link>
            <Link to="/data-charts">
              <button
                className={styles.navButton}
                onClick={() =>
                  console.log("Data Charts Button clicked -> /data-charts")
                }
              >
                Data Charts
              </button>
            </Link>
          </div>
        </div>
      }
    />
  );
};

export default Home;
