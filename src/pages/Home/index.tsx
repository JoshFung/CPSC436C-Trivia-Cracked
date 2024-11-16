import "./index.css";

function Home() {
  return (
    <div className="home-container">
      <img
        className="logo"
        src="src/assets/icon.svg"
        alt="Trivia Cracked Logo"
        onClick={() => console.log("TODO: Logo clicked!")}
      />
      <div className="content-container">
        <div className="title-container">
          <h1 className="title">
            TRIVIA <span className="cracked">CRACKED</span>
          </h1>
        </div>
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
