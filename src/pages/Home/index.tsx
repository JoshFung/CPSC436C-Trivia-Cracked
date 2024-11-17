import BaseCard from "../../components/BaseCard";
import "./index.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <BaseCard
      content={
        <div className="content-container">
          <h1 className="title">
            TRIVIA <span className="cracked">CRACKED</span>
          </h1>
          <div className="nav-container">
            <Link to="/play-trivia">
              <button
                className="nav-button"
                onClick={() =>
                  console.log("Play Trivia Button clicked -> /play-trivia")
                }
              >
                Play Trivia
              </button>
            </Link>
            <Link to="/submit-questions">
              <button
                className="nav-button"
                onClick={() =>
                  console.log(
                    "Submit Questions Button clicked -> /submit-questions"
                  )
                }
              >
                Submit Questions
              </button>
            </Link>
            <Link
              to="/browse-questions"
              onClick={() =>
                console.log(
                  "Browse Questions Button clicked -> /browse-questions"
                )
              }
            >
              <button className="nav-button">Browse Questions</button>
            </Link>
          </div>
        </div>
      }
    />
  );
};

export default Home;
