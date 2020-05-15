import React from 'react';
import './style.scss';

const App = () => {
  const person = { name: "John Doe" };
  const { name } = person; 

  return (
    <div>{ ['Hello', name].join(' ') }</div>
  )
}

export default App;