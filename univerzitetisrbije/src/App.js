import './App.css';
import React, { useState, useEffect } from 'react';
import Universities from './components/Universities';

function App() {
  const [loading, setLoading] = useState(true);
  const [universities, setUniversities] = useState([]);

  const uniURL = "https://api.jsonbin.io/b/62b1bd16402a5b3802324935";

  const getUiversitiesList = async () => {
    const response = await fetch(uniURL);
    const list = await response.json();
    setUniversities(list);
    setLoading(false);
  }

  useEffect(() => {
    getUiversitiesList();
  }, []);
  
    return (
      <div className="App">
        <header className="App-header">
          <h1>Univerziteti Srbije</h1>
          {loading?<h1>LOADING...</h1>:<Universities universities={universities} />
        }
      </header>
      </div>
    );

}
export default App;
