import "./index.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <Link to="/">
        {
          <img
            className="logo"
            src="src/assets/icon-white.png"
            alt="Trivia Cracked Logo"
            onClick={() => console.log("Logo clicked -> Moving to Home")}
          />
        }
      </Link>
      <div className="content-container">
        <h1 className="title">
          TRIVIA <span className="cracked">CRACKED</span>
        </h1>
        <div className="nav-container">
          <button className="nav-button">Play Trivia</button>
          <button className="nav-button">Submit Questions</button>
          <button className="nav-button">Browse Questions</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
