import { useContext } from "react";

import { QuizContext } from "../context/quiz";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="flex flex-col w-full h-screen px-12 justify-center text-left">
      <h2 className="text-white mt-4 mb-4 text-1xl">Fim de jogo!</h2>
      <p className="text-white mt-4 mb-4 text-1xl">
        Pontuação: {quizState.score}
      </p>
      <p className="text-white mt-4 mb-12 text-1xl">
        Você acertou {quizState.score} de {quizState.questions.length}{" "}
        perguntas.
      </p>
      <button
        className="bg-[#4b21f0] p-4 text-white text-center mb-2 rounded-sm hover:opacity-75"
        onClick={() => dispatch({ type: "NEW_GAME" })}
      >
        Reiniciar
      </button>
    </div>
  );
};

export default GameOver;
