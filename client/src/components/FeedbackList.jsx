import { useState } from "react";
import FeedbackCard from "./FeedbackCard";
import feedbackData from "../data/feedbackData";

const FeedbackList = () => {
  const [feedbackList, setFeedbackList] = useState(feedbackData);

  const handleLike = (id) => {
    const updatedList = feedbackList.map((item) =>
      item.id === id ? { ...item, likes: item.likes + 1 } : item
    );
    setFeedbackList(updatedList);
  };

  const handleDelete = (id) => {
    setFeedbackList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 p-4">
      {feedbackList.map((item) => (
        <FeedbackCard
          key={item.id}
          {...item}
          onLike={() => handleLike(item.id)}
          onDelete={()=> handleDelete(item.id)}
        />
      ))}
    </div>
  );
};

export default FeedbackList;
