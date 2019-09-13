import React, { useState, useEffect } from 'react';

// API
import API from './API'

// Styles
import './App.css';

// Component Imports
import { Cards } from './components/Cards/Cards'

const App = () => {
  // Initial people state
  const [people, setPeople] = useState(undefined);

  // Grab initial list of people
  useEffect(() => {
    API.getPeople()
    .then(res => setPeople(res.data.results))
  }, [])

  console.log(people)
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

      {!!people === true && <Cards people={people} />}
    </div>
  );
}

export default App;