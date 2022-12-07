import { useState, useEffect, useContext } from "react";

import "./App.css";

import { QuizContext } from "./context/quiz";

import Welcome from "./components/Welcome";
import Question from "./components/Question";
import PickCategory from "./components/PickCategory";
import GameOver from "./components/GameOver";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" });
  }, []);

  return (
    <div className="max-w-[1344px] bg-zinc-900 mx-auto flex flex-col items-center my-20">
      <h1 class="font-bold text-purple-700 text-3xl">Quiz Programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Category" && <PickCategory />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}

export default App;
