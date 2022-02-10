import "./App.css";
import Minus from "./components/Minus";
import Multiple from "./components/Multiple";
import Sum from "./components/Sum";

function App() {
  return (
    <div className="app">
      <Sum />

      <Minus />
      <Multiple />
    </div>
  );
}

export default App;
