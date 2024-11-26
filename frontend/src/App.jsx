import { useState, useEffect } from "react";

const QuestionList = () => {
  const [questionList, setQuestionList] = useState([]);

  // Fetch question list
  const getQuestionList = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/question/list");
      const data = await response.json();
      setQuestionList(data);
    } catch (error) {
      console.error("Error fetching question list:", error);
    }
  };

  useEffect(() => {
    getQuestionList();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <ul>
      {questionList.map((question, index) => (
        <li key={index}>{question.subject}</li>
      ))}
    </ul>
  );
};

export default QuestionList;
