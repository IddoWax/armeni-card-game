import './App.css';
import React from 'react';
import useTestData from './network/queryHooks/useTestData';

const App = () => {
  const data = useTestData();
  return(
    <div>
      <h1>Hello World</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
};
export default App;


