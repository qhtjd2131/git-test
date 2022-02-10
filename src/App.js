import "./App.css";
import Divide from "./components/Divide";
import Minus from "./components/Minus";
import Multiple from "./components/Multiple";
import Sum from "./components/Sum";

function App() {
  return (
    <div className="app">
      <Sum />
      <Minus />
      <Divide />
      <Multiple />
    </div>
  );
}

export default App;
