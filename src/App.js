import './App.css';
import Logo from "./logo.svg";
import React, { Fragment, useState, useEffect } from 'react';




function App() {
  const [data, setData] = useState(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        'https://vfmig4xbzd.execute-api.eu-west-2.amazonaws.com/default', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ websiteName: "https://" + value })}
      );
      const response = await result.json();
      setData(response);
    };
    
    
    fetchData();
    
  }, []);
 
  return (
    <Fragment>
      <header className="App-header">

        
        <img className="App-logo" src={Logo} alt="react logo"/>
        
      <div>
        
        <label>Website: </label>
        <input type="text" id="value" name="value" value={value} onChange={ e => setValue(e.target.value) }/>
        
        
        </div>
      <h6 style={{color:"yellow"}}>{JSON.stringify(data,null,2)}</h6>
      </header>
      
    
      
    </Fragment>
  );
        }
export default App;