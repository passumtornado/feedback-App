
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackStat from "./components/FeedbackStat";
import FeedbackForm from "./components/FeedbackForm";
import { FeedbackProvider } from "./context/FeedbackContext";

const App = () => {
  
 
  return (
    <>
      <FeedbackProvider>
        <Header text="Feedback UI" />
        <div className="container">
          <FeedbackForm />
          <FeedbackStat />
          <FeedbackList />
        </div>
      </FeedbackProvider>
    </>
  );
};

export default App;
