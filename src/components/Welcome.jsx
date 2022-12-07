import { useContext } from "react";
import { QuizContext } from "../context/quiz";


const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="flex flex-col">
      <h2 className="text-white text-1xl mt-4 mb-4 text-center">Seja bem-vindo</h2>
      <p className="text-white text-center mb-4">Clique no botão abaixo para começar:</p>
      <button className="bg-purple-600 p-4 text-white text-center rounded-lg hover:bg-purple-500" onClick={() => dispatch({ type: "CHANGE_STAGE" })}>
        Iniciar
      </button>
    </div>
  );
};

export default Welcome;