import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [universities, setUniversities] = useState([]);

  const uniURL = "https://api.jsonbin.io/b/62b1bd16402a5b3802324935";

  const getUiversitiesList = async () => {
    setLoading(true);
    const response = await fetch(uniURL);
    const list = await response.json();
    setUniversities(list);
    setLoading(false);
  }

  useEffect(() => {

    getUiversitiesList();
  }, [])
  
  if(!loading){
    return (
      <div className="App">
        <header className="App-header">
      <h1>{universities[0].name}</h1> 
      <img src={universities[0].img} alt="" />
      <p>{universities[0].desc}</p>
        </header>
      </div>
    );
}
else{
  return(
    <div className="App">
        <header className="App-header">
      <h1>LOADING...</h1> 
        </header>
      </div>
    );
  
}
}
export default App;
