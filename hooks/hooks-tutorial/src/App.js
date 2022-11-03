import './App.css';
import Example from "./2-hooks-overview/state-hook";
import EffectExample from "./2-hooks-overview/effect-hook";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Example/>
          <EffectExample/>
      </header>
    </div>
  );
}

export default App;
