// react router dom import
import { useParams } from "react-router-dom";

// components
import Test from "../components/Test";

// hooks
import useFetch  from "../hooks/useFetch";
import { useEffect } from "react";

function Quiz() {
  const { title } = useParams();
  const {
    data: quizzes,
    isPending,
    error,
  } = useFetch(
    `https://online-json-server-api.up.railway.app/project/66b7b530340dd55056fb7d19/quizzes?title=${title}`
  );

  useEffect(() => {
    document.title = "Quiz" + " " + title;
  }, [title]);

  return (
    <div className="quiz-container container">
      {isPending && <h3>Loading...</h3>}
      {error && <h3>Something went wrong</h3>}
      {quizzes && <Test questions={quizzes.data[0]} />}
    </div>
  );
}

export default Quiz;
