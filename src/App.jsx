import { useState, useEffect, useContext } from "react";

import "./App.css";

import { QuizContext } from "./context/quiz";

import Welcome from "./components/Welcome";
import Question from "./components/Question";
import PickCategory from "./components/PickCategory";
import GameOver from "./components/GameOver";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  const { questions } = quizState;

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" });
  }, []);

  return (
    <div
      className="w-full h-screen bg-slate-900 mx-auto flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          "url(https://tailwindcss.com/_next/static/media/hero-dark@90.dba36cdf.jpg)",
        backgroundPosition: "center",
      }}
    >
      <div className="h-[35rem] w-[45rem] bg-[#282d4a] flex items-center flex-col p-2 justify-center shadow-md max-md:w-[90%]">
        {quizState.gameStage === "Start" && <Welcome />}
        {quizState.gameStage === "Category" && <PickCategory />}
        {quizState.gameStage === "Playing" && <Question />}
        {quizState.gameStage === "End" && <GameOver />}
      </div>
    </div>
  );
}

export default App;
