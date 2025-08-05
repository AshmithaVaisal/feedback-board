import { useState } from "react";

const FeedbackCard = ({ username, message }) => {
  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    setLiked(!liked);
  };
  return (
    <>
      <div className="bg-white p-6 rounded-2xl shadow-md border max-w-md">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">{username}</h2>
        <p className="text-gray-600">{message}</p>
        <button
          onClick={handleLike}
          className={`py-2 px-4 rounded transition ${
            liked
              ? "bg-green-500 hover:bg-green-600"
              : "bg-blue-500 hover:bg-blue-600"
          }text-white`}
        >
          {liked ? "💚 Liked" : "👍 Like"}
        </button>
      </div>
    </>
  );
};
export default FeedbackCard;
