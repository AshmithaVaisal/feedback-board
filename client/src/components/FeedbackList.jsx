import FeedbackCard from "./FeedbackCard";

const feedbackData = [
  {
    id: 1,
    username: "ashmitha",
    message: "I love the UI design",
  },
  {
    id: 2,
    username: "Vikram",
    message: "The experience was smooth and intuitive.",
  },
  {
    id: 3,
    username: "Priya",
    message: "Some bugs on mobile view, but otherwise perfect!",
  },
];

const FeedbackList = () => {
  return (
    <>
      <div className="space-y-5 m-12">
        {feedbackData.map((data) => (
          <FeedbackCard
            key={data.id}
            username={data.username}
            message={data.message}
          />
        ))}
      </div>
    </>
  );
};

export default FeedbackList;
