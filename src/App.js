import React, { useState } from 'react';
import './App.css';

function AgeCalculator() {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState(null);

  const handleDateChange = (event) => {
    setDateOfBirth(event.target.value);
  };

  const calculateAge = () => {
    const birthDate = new Date(dateOfBirth);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear() - (currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate()) ? 1 : 0);
    setAge(age);
  };

  return (
    <div className="AgeCalculator">
      <h1>Age Calculator</h1>
      <label>Enter your date of birth</label>
      <input type="date" value={dateOfBirth} onChange={handleDateChange} />
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p>You are {age} years old</p>}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <AgeCalculator />
    </div>
  );
}

export default App;
