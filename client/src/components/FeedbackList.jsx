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
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Background Image */}
      <div
        className="h-[700px] bg-center bg-cover flex items-center justify-between px-16"
        style={{ backgroundImage: "url('/src/assets/c3.jpg')" }}
      >
        {/* Left Side - Company Name & Tagline */}
        <div className="text-black max-w-lg">
          <h1 className="text-6xl font-bold">ELOVEVIA</h1>
          <span className="block text-2xl font-light tracking-wide mt-2">
            Luxury Cosmetics for Every You
          </span>
        </div>

        {/* Right Side - Feedback Form */}
        <div className="bg-white/60 rounded-lg shadow-lg w-full max-w-md p-4">
          <FeedbackForm onAdd={handleAdd} />
        </div>
      </div>

      {/* Feedback Cards Section */}
      <div className="flex-1 p-6 bg-white">
        <h1 className="text-2xl text-center p-4 mb-6 font-semibold">
          Our Customer Testimonials ✨
        </h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
    </div>
  );
};

export default FeedbackList;
