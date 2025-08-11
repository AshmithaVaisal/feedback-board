import { useState } from "react";

const FeedbackForm = ({ onAdd }) => {
  const [user, setUser] = useState("");
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.trim().length < 3 || message.trim().length < 10) {
      setError("Please enter a name (min 3 chars) and message (min 10 chars).");
      return;
    }

    const newFeedback = {
      id: Date.now(),
      user,
      rating,
      message,
      likes: 0,
    };

    onAdd(newFeedback); // Send to parent
    setUser("");
    setRating(5);
    setMessage("");
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-lg shadow-md max-w-md mx-auto my-6"
    >
      <h2 className="text-lg font-semibold mb-3">Add your Feedback</h2>

      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="border rounded p-2 w-full"
          placeholder="Your name"
        />
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Rating (1–5)</label>
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="border rounded p-2 w-full"
        />
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border rounded p-2 w-full"
          placeholder="Write your feedback..."
        />
      </div>

      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default FeedbackForm;
