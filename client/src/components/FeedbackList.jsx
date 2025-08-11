import { useState } from "react";
import FeedbackCard from "./FeedbackCard";
import FeedbackForm from "./FeedBackForm";
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

  const handleAdd = (newItem) => {
    setFeedbackList((prev) => [newItem, ...prev]);
  };

  return (
    <div className="p-4">
      <FeedbackForm onAdd={handleAdd} />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {feedbackList.map((item) => (
          <FeedbackCard
            key={item.id}
            {...item}
            onLike={() => handleLike(item.id)}
            onDelete={() => handleDelete(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FeedbackList;
