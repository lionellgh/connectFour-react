import "./App.css";
import Boards from "./components/Boards";
import DropZone from "./components/DropZone";
function App() {
  return (
    <div className="App">
      <DropZone />
      <Boards />
    </div>
  );
}

export default App;
