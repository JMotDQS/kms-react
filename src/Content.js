import React from 'react'
import {useState} from 'react';


const Content = () => {
  const [name, setName] = useState('Jason');
  const [count, setCount] = useState(0);
  
  const handleNameChange = () => {
    const names = ['Jason', 'Crystal', 'T-Rex'];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
}

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  }
  const handleClick2 = () => {
    console.log(count);
  }
  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  }

  return (
    <main>
        <p>
          Hello {name}!
        </p>
        <button onClick={handleNameChange}>Change Name</button>
        <button onClick={handleClick}>Counter</button>
        <button onClick={handleClick2}>Click Me!</button>
    </main>
  )
}

export default Content