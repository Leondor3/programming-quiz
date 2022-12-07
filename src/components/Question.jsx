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
    <div className="flex flex-col">
      <p className="text-white mt-4 mb-4 text-2xl">
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      <h2 className="text-white mb-4 text-2xl">{currentQuestion.question}</h2>
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
      {!quizState.answerSelected && !quizState.help && (
        <>
          {currentQuestion.tip && (
            <button
              className="bg-zinc-700 p-4 text-white text-center rounded-lg hover:bg-zinc-600"
              onClick={() => dispatch({ type: "SHOW_TIP" })}
            >
              Dica
            </button>
          )}
          <button
            className="bg-zinc-700 p-4 text-white text-center rounded-lg hover:bg-zinc-600"
            onClick={() => dispatch({ type: "REMOVE_OPTION" })}
          >
            Excluir uma
          </button>     
        </>
      )}
      {!quizState.answerSelected && quizState.help === "tip" && (
        <p className="text-red-500">{currentQuestion.tip}</p>
      )}
      {quizState.answerSelected && (
        <button
          className="bg-purple-600 p-4 text-white text-center rounded-lg hover:bg-purple-500"
          onClick={() => dispatch({ type: "CHANGE_QUESTION" })}
        >
          Continuar
        </button>
      )}
    </div>
  );
};

export default Question;
