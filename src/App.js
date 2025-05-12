import './App.css';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState("Hello World");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const changeToUpperCase = () => {
    setInputValue(inputValue.toUpperCase());
  };

  const changeToLowerCase = () => {
    setInputValue(inputValue.toLowerCase());
  };

  const changeToCapitalCase = () => {
    if (!inputValue) return;
    const capitalCaseVal = inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase();
    setInputValue(capitalCaseVal);
  };

  return (
    <div className="app-container">
      <h1>Text Transformer</h1>
      <input
        className="text-input"
        value={inputValue}
        onChange={handleInput}
        placeholder="Enter your text here"
      />
      <div className="button-group">
        <button onClick={changeToCapitalCase}>Capital Case</button>
        <button onClick={changeToLowerCase}>Lower Case</button>
        <button onClick={changeToUpperCase}>Upper Case</button>
      </div>
    </div>
  );
}

export default App;
