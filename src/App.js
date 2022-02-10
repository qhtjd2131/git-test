import "./App.css";
import Divide from "./components/Divide";
import Minus from "./components/Minus";
import Sum from "./components/Sum";

function App() {
  return (
    <div className="app">
      <Sum />
      <Minus />
      <Divide />
    </div>
  );
}

export default App;
