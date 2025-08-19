import { useEffect, useState } from "react";
import FeedbackCard from "./FeedbackCard";
import FeedbackForm from "./FeedBackForm";
import feedbackData from "../data/feedbackData";

const FeedbackList = () => {
  const [feedbackList, setFeedbackList] = useState(() => {
    const storedFeedback = localStorage.getItem("feedbackList");
    return storedFeedback ? JSON.parse(storedFeedback) : feedbackData;
  });
  const [sortOption, setSortOption] = useState("newest");
  const [loading, setLoading] = useState(true);

  // Save to localstorage
  useEffect(() => {
    localStorage.setItem("feedbackList", JSON.stringify(feedbackList));
  }, [feedbackList]);

  // Simulate API delay for better UX

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200); // 1.2 sec
    return () => clearTimeout(timer);
  }, []);

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

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Sorting logic based on selected option

  const sortedList = [...feedbackList].sort((a, b) => {
    if (sortOption === "highest-rating") {
      return b.rating - a.rating;
    }
    if (sortOption === "most-liked") {
      return b.likes - a.likes;
    }
    // default: newest first
    return b.id - a.id;
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Background Image */}
      <div
        className="h-[700px] bg-center bg-cover flex items-center justify-between px-16"
        style={{ backgroundImage: "url('/src/assets/c3.jpg')" }}
      >
        {/* Left Side - Company Name & Tagline */}
        <div className="text-white max-w-lg">
          <h1 className="text-6xl font-bold">ELOVEVIA</h1>
          <span className="block text-2xl font-light tracking-wide mt-2">
            Luxury Cosmetics for Every You
          </span>
        </div>

        {/* Right Side - Feedback Form */}
        <div className="bg-red-100/50 rounded-lg shadow-lg w-full max-w-md p-4">
          <FeedbackForm onAdd={handleAdd} />
        </div>
      </div>

      <div className="flex-1 p-6 bg-white">
        {/* Title Centered */}
        <h1 className="text-3xl text-center mb-4 mt-8 font-semibold">
          Our Customer Testimonials ✨
        </h1>

        {/* Sort Dropdown Centered */}
        <div className="flex justify-center mb-12 mt-8">
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="border p-2 rounded w-60 sm:w-72 md:w-80 lg:w-120"
          >
            <option value="newest">Newest First</option>
            <option value="highest-rating">Highest Rating</option>
            <option value="most-liked">Most Liked</option>
          </select>
        </div>
        {/* Loading State */}
        {loading && (
          <p className="text-center text-gray-500">Loading feedback...</p>
        )}

        {/* Empty State */}
        {!loading && feedbackList.length === 0 && (
          <p className="text-center text-gray-600">
            No feedback yet. Be the first to share your thoughts 💬
          </p>
        )}
        {/* Feedback Cards */}
        {!loading && feedbackList.length > 0 && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sortedList.map((item) => (
              <FeedbackCard
                key={item.id}
                {...item}
                onLike={() => handleLike(item.id)}
                onDelete={() => handleDelete(item.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackList;
