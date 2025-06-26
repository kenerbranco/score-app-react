import React, {useState} from "react";
import "./App.css";

const App = () => {
  const [countScoreTeamOne, upScoreTeamOne] = useState(0);
  const [countScoreTeamTwo, upScoreTeamTwo] = useState(0);

  // Up score to respective team clicked
  const handleScoreTeamOne = () => {
    upScoreTeamOne(countScoreTeamOne + 1);
  }
  const handleScoreTeamTwo = () => {
    upScoreTeamTwo(countScoreTeamTwo + 1);
  }

  // Condicional in React: change background-color to white to expose the team with more points
  if(countScoreTeamOne > countScoreTeamTwo) {
     return (
        <div class="titlePage">
         <h1>Score App</h1>
         <div class="container" style={{ backgroundColor: 'white' , border: '1px solid #4CAF50', color: '#4CAF50'}}>
          <p style={{ fontWeight: 'bold' }}>Team One Score: {countScoreTeamOne}</p>
           <button onClick={handleScoreTeamOne}> Up Score </button>
         </div>
          <div class="container" style={{ backgroundColor: 'lightblue' }}>
           <p>Team Two Score: {countScoreTeamTwo}</p>
            <button onClick={handleScoreTeamTwo}> Up Score </button>
          </div>
        </div>
      );
  }

  // Condicional in React: change background-color to white to expose the team with more points  
  if(countScoreTeamOne < countScoreTeamTwo) {
     return (
        <div class="titlePage">
         <h1>Score App</h1>
         <div class="container" style={{ backgroundColor: 'lightblue'}}>
          <p>Team One Score: {countScoreTeamOne}</p>
           <button onClick={handleScoreTeamOne}> Up Score </button>
         </div>
          <div class="container" style={{ backgroundColor: 'white' , border: '1px solid #4CAF50', color: '#4CAF50'}}>
           <p style={{ fontWeight: 'bold' }}>Team Two Score: {countScoreTeamTwo}</p>
            <button onClick={handleScoreTeamTwo}> Up Score </button>
          </div>
        </div>
      );
  }
  
  // Start page or when scores of teams are equal (default background-color 'lightblue')
  return (
    <div class="titlePage">
      <h1>Score App</h1>
      <div id="teamOne" class="container">
        <p>Team One Score: {countScoreTeamOne}</p>
        <button onClick={handleScoreTeamOne}> Up Score </button>
      </div>
      <div id="teamTwo" class="container">
        <p>Team Two Score: {countScoreTeamTwo}</p>
        <button onClick={handleScoreTeamTwo}> Up Score </button>
      </div>
    </div>
  );
};

export default App;
