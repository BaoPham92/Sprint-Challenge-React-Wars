import React, { useState, useEffect } from 'react';
import API from './API'
import './App.css';

const App = () => {
  // Initial people state
  const [people, setPeople] = useState(undefined);

  // Grab initial list of people
  useEffect(() => {
    API.getPeople().then(res => setPeople(res.data.results))
  }, [])

  console.log(people)
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
