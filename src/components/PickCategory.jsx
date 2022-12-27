import { useContext } from "react";
import { QuizContext } from "../context/quiz";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  function chooseCategoryAndReorderQuestions(category) {
    dispatch({ type: "START_GAME", payload: category });
    dispatch({ type: "REORDER_QUESTIONS" });
  }

  return (
    <div className="flex flex-col w-full h-screen px-12 justify-center">
      <h2 className="mt-4 mb-4 text-white text-1xl text-left">
        Escolha uma categoria
      </h2>
      <p className="mt-4 mb-4 text-white text-1xl text-left">
        As perguntas serão referentes a uma das linguagens abaixo:
      </p>
      {quizState.questions.map((question) => (
        <button
          className="bg-[#4b21f0] p-4 text-white text-center mb-2 rounded-sm hover:opacity-75"
          onClick={() => chooseCategoryAndReorderQuestions(question.category)}
          key={question.category}
        >
          {question.category}
        </button>
      ))}
    </div>
  );
};

export default PickCategory;
