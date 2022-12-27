import React from "react";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Option from "./Option";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const onSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option },
    });
  };

  return (
    <div className="flex flex-col w-full h-screen px-12 justify-center">
      <p className="text-white mb-4 text-1xl">
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      <h2 className="text-white mb-4 text-1xl">{currentQuestion.question}</h2>
      <div>
        {currentQuestion.options.map((option) => (
          <Option
            option={option}
            key={option}
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption(option)}
            hide={quizState.optionToHide === option ? "hide" : null}
          />
        ))}
      </div>
      <div className="flex gap-4 justify-end items-end">
        {!quizState.answerSelected && !quizState.help && (
          <>
            {currentQuestion.tip && (
              <button
                className="bg-[#4b21f0] p-4 text-white text-center w-40 rounded-sm hover:opacity-75"
                onClick={() => dispatch({ type: "SHOW_TIP" })}
              >
                Dica
              </button>
            )}
            <button
              className="bg-[#4b21f0] p-4 text-white text-center w-40 rounded-sm hover:opacity-75"
              onClick={() => dispatch({ type: "REMOVE_OPTION" })}
            >
              Excluir uma
            </button>
          </>
        )}
      </div>

      {!quizState.answerSelected && quizState.help === "tip" && (
        <p className="text-red-500">{currentQuestion.tip}</p>
      )}
      {quizState.answerSelected && (
        <button
          className="bg-[#4b21f0] p-4 text-white text-center"
          onClick={() => dispatch({ type: "CHANGE_QUESTION" })}
        >
          Continuar
        </button>
      )}
    </div>
  );
};

export default Question;
