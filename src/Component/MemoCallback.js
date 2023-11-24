import React, { useState, useMemo, useCallback } from 'react';

function FactorialCalculator() {
  // State to hold the entered number and the calculated factorial
  const [number, setNumber] = useState('');
  const [factorial, setFactorial] = useState(null);

  // Memoized factorial calculation using useMemo
  const calculateFactorial = useMemo(() => {
    console.log('Calculating factorial...');
    const num = parseInt(number, 10);
    if (isNaN(num) || num < 0) {
      return null; // Handle invalid input
    }

    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }

    return result;
  }, [number]);

  // Memoized event handler using useCallback
  const handleInputChange = useCallback((e) => {
    setNumber(e.target.value);
    setFactorial(null); // Reset the factorial when the input changes
  }, []);

  const handleCalculateFactorial = useCallback(() => {
    setFactorial(calculateFactorial);
  }, [calculateFactorial]);

  return (
    <div>
      <h2>Factorial Calculator</h2>
      <label>
        Enter a number:
        <input type="text" value={number} onChange={handleInputChange} />
      </label>
      <button onClick={handleCalculateFactorial}>Calculate Factorial</button>
      {factorial !== null && (
        <p>
          Factorial of {number} is: {factorial}
        </p>
      )}
    </div>
  );
}

export default FactorialCalculator;
