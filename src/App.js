import Question from "./components/Question";
import QuestionPage from "./components/QuestionPage";
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import FinalPage from "./components/FinalPage";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Question />} />
        <Route path="/questions/:id" element={<QuestionPage />} />
        <Route path="/finalpage" element={<FinalPage />} />
      </Routes>
    );
  }
}

export default App;
