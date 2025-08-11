const FeedbackCard = ({ user, rating, message, likes, onLike, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
      <h2 className="font-bold text-lg">{user}</h2>
      <p className="text-yellow-600">Rating: {rating}/5</p>
      <p className="text-gray-700 mt-2">{message}</p>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={onLike}
          className="bg-emerald-500 text-white px-3 py-1 rounded-md hover:bg-emerald-600 transition"
        >
          Like
        </button>
        <span className="text-sm text-gray-500 ml-auto">{likes} Likes</span>
        <button
          onClick={onDelete}
          className="bg-pink-500 text-white px-2 py-1 rounded-md hover:bg-pink-600 transition ml-auto"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default FeedbackCard;
