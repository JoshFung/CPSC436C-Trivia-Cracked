import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import SubmitQuestions from "./pages/SubmitQuestions";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play-trivia" element={<h1>Contact</h1>} />
          <Route path="/browse-questions" element={<h1>Services</h1>} />
          <Route path="/submit-questions" element={<SubmitQuestions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
