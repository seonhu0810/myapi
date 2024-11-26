import { useState, useEffect } from "react";

const Home = () => {
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/question/list");
        const data = await response.json();
        setQuestionList(data);
      } catch (error) {
        console.error("Error fetching question list:", error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <ul>
      {questionList.map((question) => (
        <li key={question.id}>{question.subject}</li>
      ))}
    </ul>
  );
};

export default Home;
