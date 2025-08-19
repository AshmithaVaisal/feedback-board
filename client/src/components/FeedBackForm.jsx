import { useState, useEffect } from "react";

const FeedbackForm = ({ onAdd, editing, onUpdate, cancelEdit }) => {
  const [user, setUser] = useState("");
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Pre-fill form if editing
  useEffect(() => {
    if (editing) {
      setUser(editing.user);
      setRating(editing.rating);
      setMessage(editing.message);
    } else {
      setUser("");
      setRating(5);
      setMessage("");
    }
  }, [editing]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.trim().length < 3 || message.trim().length < 10) {
      setError("Please enter a name (min 3 chars) and message (min 10 chars).");
      return;
    }

    const newFeedback = {
      id: editing ? editing.id : Date.now(),
      user,
      rating,
      message,
      likes: editing ? editing.likes : 0,
    };

    if (editing) {
      onUpdate(newFeedback);
    } else {
      onAdd(newFeedback);
    }

    cancelEdit(); // reset edit mode after submit
    setUser("");
    setRating(5);
    setMessage("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl mb-4 text-center font-semibold">
        {editing ? "Edit Feedback ✏️" : "Add Your Feedback ⭐"}
      </h2>

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

      <div className="flex space-x-3">
        {/* Submit / Save button */}
        <button
          type="submit"
          className={`${
            editing
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-emerald-500 hover:bg-emerald-600"
          } text-white px-4 py-2 rounded transition`}
        >
          {editing ? "Save Changes" : "Submit"}
        </button>

        {/* Cancel button only if editing */}
        {editing && (
          <button
            type="button"
            onClick={cancelEdit}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default FeedbackForm;
