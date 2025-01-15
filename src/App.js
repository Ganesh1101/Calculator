import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState(''); // State for managing the display value

  // Function to handle button clicks
  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        // Calculate the result using eval (use with caution)
        setDisplay(eval(display).toString());
      } catch (error) {
        setDisplay('Error'); // Display error for invalid inputs
      }
    } else if (value === 'C') {
      // Clear the display
      setDisplay('');
    }  else if (value === 'sin' || value === 'cos' || value === 'tan') {
      // Handle trigonometric functions
      try {
        const radians = parseFloat(display) * (Math.PI / 180); // Convert degrees to radians
        let result;
        if (value === 'sin') result = Math.sin(radians);
        else if (value === 'cos') result = Math.cos(radians);
        else if (value === 'tan') result = Math.tan(radians);

        setDisplay(result.toString());
      } catch (error) {
        setDisplay('Error');
      }
    } else {
      // Append value to display
      setDisplay((prev) => prev + value);
    }
  };

  return (
    <div className="App">
      <div className="container">
        {/* Display Section */}
        <div className="display"><span className='answer'>{display || '0'}</span></div>

        {/* Calculator Buttons */}
        <div className="row">
          <div className="operator" onClick={() => handleButtonClick('sin')}><span>sin</span></div>
          <div className="operator" onClick={() => handleButtonClick('cos')}><span>cos</span></div>
          <div className="operator" onClick={() => handleButtonClick('tan')}><span>tan</span></div>
          <div className="operator" onClick={() => handleButtonClick('C')} id='clear'><span>C</span></div>
        </div>
        <div className="row">
          <div className="element" onClick={() => handleButtonClick('7')}><span>7</span></div>
          <div className="element" onClick={() => handleButtonClick('8')}><span>8</span></div>
          <div className="element" onClick={() => handleButtonClick('9')}><span>9</span></div>
          <div className="operator" onClick={() => handleButtonClick('+')}><span>+</span></div>
        </div>
        <div className="row">
          <div className="element" onClick={() => handleButtonClick('4')}><span>4</span></div>
          <div className="element" onClick={() => handleButtonClick('5')}><span>5</span></div>
          <div className="element" onClick={() => handleButtonClick('6')}><span>6</span></div>
          <div className="operator" onClick={() => handleButtonClick('-')}><span>-</span></div>
        </div>
        <div className="row">
          <div className="element" onClick={() => handleButtonClick('1')}><span>1</span></div>
          <div className="element" onClick={() => handleButtonClick('2')}><span>2</span></div>
          <div className="element" onClick={() => handleButtonClick('3')}><span>3</span></div>
          <div className="operator" onClick={() => handleButtonClick('*')}><span>X</span></div>
        </div>
        <div className="row">
          <div className="element" onClick={() => handleButtonClick('.')}> <span>.</span></div>
          <div className="element" onClick={() => handleButtonClick('0')}> <span>0</span></div>
          <div className="element" onClick={() => handleButtonClick('=')}> <span>=</span></div>
          <div className="operator" onClick={() => handleButtonClick('/')}> <span>/</span></div>
        </div>
      </div>
    </div>
  );
}

export default App;
