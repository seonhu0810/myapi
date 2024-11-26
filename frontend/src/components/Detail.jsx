import { useParams } from "react-router-dom";

const Detail = () => {
  const { questionId } = useParams();

  return (
    <div>
      <h1>Question Detail</h1>
      <p>Question ID: {questionId}</p>
    </div>
  );
};

export default Detail;
