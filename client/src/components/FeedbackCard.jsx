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
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition transform">
      {/* Header: Name + Edit */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-bold text-lg text-gray-900">{user}</h2>
        <button
          onClick={onEdit}
          className="text-blue-500 hover:text-blue-700 transition"
          title="Edit feedback"
        >
          <Edit size={18} />
        </button>
      </div>

      <p className="text-yellow-600 font-medium">Rating: {rating}/5</p>
      <p className="text-gray-700 mt-3 leading-relaxed">{message}</p>

      {/* Footer: Like + Remove */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={onLike}
          className="flex items-center gap-1 text-emerald-400 px-3 py-1 rounded-md hover:text-emerald-600 transition"
        >
          <ThumbsUp size={16} />
        </button>

        <span className="text-sm text-gray-500">{likes} Likes</span>

        <button
          onClick={onDelete}
          className="flex items-center gap-1 px-3 py-1 rounded-md text-pink-400 hover:text-pink-600 transition"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default FeedbackCard;
