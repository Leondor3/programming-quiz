import { useContext } from "react";

import { QuizContext } from "../context/quiz";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="flex flex-col align-items">
      <h2 className="text-white mt-4 mb-4 text-2xl">Fim de jogo!</h2>
      <p className="text-white mt-4 mb-4 text-2xl">
        Pontuação: {quizState.score}
      </p>
      <p className="text-white mt-4 mb-4 text-2xl">
        Você acertou {quizState.score} de {quizState.questions.length}{" "}
        perguntas.
      </p>
      <button
        className="bg-purple-600 p-4 text-white text-center rounded-lg hover:bg-purple-500"
        onClick={() => dispatch({ type: "NEW_GAME" })}
      >
        Reiniciar
      </button>
    </div>
  );
};

export default GameOver;
