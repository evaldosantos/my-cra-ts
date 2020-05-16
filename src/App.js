import React from 'react';
import './style.scss';

const App = () => {
  const person = { name: "John Doe" };
  const { name } = person; 

  return (
    <h1>Webpack + babel + react</h1>
  ) 
}

export default App;