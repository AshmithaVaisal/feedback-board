import { ThumbsUp, Trash2, Edit } from "lucide-react";

const FeedbackCard = ({
  id,
  user,
  rating,
  message,
  likes,
  onLike,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg">{user}</h2>
        <button
          onClick={onEdit}
          className="text-blue-400 px-3 py-1 rounded-md hover:text-blue-600 transition flex items-center space-x-1"
        >
          <Edit size={16} />
        </button>
      </div>
      <p className="text-yellow-600">Rating: {rating}/5</p>
      <p className="text-gray-700 mt-2">{message}</p>

      <div className="flex justify-between items-center mt-4 space-x-2">
        {/* Like Button */}
        <button
          onClick={onLike}
          className="text-emerald-400 px-3 py-1 rounded-md hover:text-emerald-600 transition flex items-center space-x-1"
        >
          <ThumbsUp size={16} />
          <span>Like</span>
        </button>
        <span className="text-sm text-gray-500">{likes} Likes</span>

        {/* Edit Button */}

        {/* Remove Button */}
        <button
          onClick={onDelete}
          className="text-pink-400 px-3 py-1 rounded-md hover:text-pink-600 transition flex items-center space-x-1"
        >
          <Trash2 size={16} />
          <span>Remove</span>
        </button>
      </div>
    </div>
  );
};

export default FeedbackCard;
