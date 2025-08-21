import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(1);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">Counter App</h1>
        <p className="counter">{counter}</p>
        <div className="button-group">
          <button className="btn remove" onClick={removeValue}>- Remove</button>
          <button className="btn add" onClick={addValue}>+ Add</button>
        </div>
        <p className="range-text">Range: 0 - 20</p>
      </div>
    </div>
  );
}

export default App;
