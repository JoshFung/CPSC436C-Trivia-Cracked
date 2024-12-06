import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import SubmitQuestions from "./pages/SubmitQuestions";
import BrowseQuestions from "./pages/BrowseQuestions";
import DataCharts from "./pages/DataCharts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/play-trivia" element={<h1>Contact</h1>} /> */}
          <Route path="/browse-questions" element={<BrowseQuestions />} />
          <Route path="/submit-questions" element={<SubmitQuestions />} />
          <Route path="/data-charts" element={<DataCharts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
