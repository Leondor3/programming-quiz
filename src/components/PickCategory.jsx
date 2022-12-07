import { useContext } from "react";
import { QuizContext } from "../context/quiz";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  function chooseCategoryAndReorderQuestions(category) {
    dispatch({ type: "START_GAME", payload: category });

    dispatch({ type: "REORDER_QUESTIONS" });
  }

  return (
    <div className="flex flex-col">
      <h2 className="mt-4 mb-4 text-white text-2xl text-center">
        Escolha uma categoria
      </h2>
      <p className="mt-4 mb-4 text-white text-2xl text-center">
        As perguntas serão referentes a uma das linguagens abaixo:
      </p>
      {quizState.questions.map((question) => (
        <button
          className="bg-purple-600 p-4 mt-4 text-white text-center rounded-lg hover:bg-purple-500"
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
