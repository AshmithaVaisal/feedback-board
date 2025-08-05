import FeedbackCard from "./components/FeedbackCard";
import FeedbackList from "./components/FeedbackList";

function App() {
  return (
    <div className="min-h-screen bg-yellow-100 flex items-center justify-center p-6">
      <FeedbackCard
        username="Ashmitha"
        message="This is my first professional component!"
      />
      <FeedbackList/>
    </div>
  );
}

export default App;
