const FeedbackCard = ({ username,message}) => {
  return <>
     <div className="bg-white p-6 rounded-2xl shadow-md border max-w-md">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">{username}</h2>
      <p className="text-gray-600">{message}</p>
    </div>
  </>;
};
export default FeedbackCard;
