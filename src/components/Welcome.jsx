import { useContext } from "react";
import { QuizContext } from "../context/quiz";


const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="flex flex-col w-full h-screen px-12 justify-center">
      <h2 className="text-white text-1xl mt-4 mb-4 text-left">Seja bem-vindo</h2>
      <p className="text-white text-left mb-4">Clique no botão abaixo para começar:</p>
      <button className="bg-[#4b21f0] p-4 text-white text-center mb-2 rounded-sm hover:opacity-75" onClick={() => dispatch({ type: "CHANGE_STAGE" })}>
        Iniciar
      </button>
    </div>
  );
};

export default Welcome;