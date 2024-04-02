import "./App.css";
import Daily from "./Daily";
import muscle from "./business_gym_logo-removebg-preview.png";

function App() {
  return (
    <div className="main">
      <img src={muscle} alt="man"></img>
      <Daily />
    </div>
  );
}

export default App;
