import { useContext } from "react";

import { QuizContext } from "../context/quiz";

const Option = ({ option, selectOption, answer, hide }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div
      onClick={() => selectOption()}
      className={`
      bg-purple-600 p-4 text-white text-center rounded-lg  mb-4
        ${quizState.answerSelected && option === answer ? "bg-green-600 hover:bg-green-500" : ""} ${
        quizState.answerSelected && option !== answer ? "bg-red-500" : ""
      }
        ${hide ? "invisible" : ""}
        `}
    >
      <p className="text-white">{option}</p>
    </div>
  );
};

export default Option;
