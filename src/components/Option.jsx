import { useContext } from "react";

import { QuizContext } from "../context/quiz";

const Option = ({ option, selectOption, answer, hide }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div
      onClick={() => selectOption()}
      className={`
      bg-transparent border border-slate-600 p-2 text-white text-center  mb-4
        ${
          quizState.answerSelected && option === answer
            ? "border-green-600 hover:border-green-500"
            : ""
        } ${
        quizState.answerSelected && option !== answer ? "border-red-500" : ""
      }
        ${hide ? "invisible" : ""}
        `}
    >
      <p className="text-white flex items-center gap-4">
        <svg
          width="22"
          height="22"
          fill={quizState.answerSelected && option == answer ? "green" : "transparent"}
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 12c0-4.969-4.031-9-9-9s-9 4.031-9 9 4.031 9 9 9 9-4.031 9-9Z"></path>
          <path d="m16.5 8.25-6.3 7.5-2.7-3"></path>
        </svg>
        {option[0].toUpperCase() + option.substring(1)}
      </p>
    </div>
  );
};

export default Option;
