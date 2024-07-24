import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Examples from "./Components/Examples";
import Quiz from "./Components/Quiz/Quiz";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Examples />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;