import React from 'react'
import {useState} from 'react';
import { FaCloudArrowUp, FaCloudArrowDown } from 'react-icons/fa6';


const Content = () => {
  /*const [name, setName] = useState('Jason');
  const [count, setCount] = useState(0);*/
  const [items, setItems] = useState([
    {
      id: 1,
      checkedOut: false,
      vin: '718IIRPGXGA74R7R4'
    },
    {
      id: 2,
      checkedOut: false,
      vin: 'CJHP51MAKIBNVKHDS'
    },
    {
      id: 3,
      checkedOut: false,
      vin: '2S05GBM3L6374FW1S'
    },
    {
      id: 4,
      checkedOut: false,
      vin: '9ECH8XC35BWTDKD1C'
    },
    {
      id: 5,
      checkedOut: false,
      vin: 'BFAE4AWPSGK4ERLJC'
    }
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? {...item, checkedOut: !item.checkedOut} : item);
    setItems(listItems);
    localStorage.setItem('vins', JSON.stringify(listItems));
  }
  
  /*const handleNameChange = () => {
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
  }*/

  return (
    <main>
        {/*<p>
          Hello {name}!
        </p>
        <button onClick={handleNameChange}>Change Name</button>
        <button onClick={handleClick}>Counter</button>
        <button onClick={handleClick2}>Click Me!</button>*/}
        <ul>
          {items.map((item) => (
            <li className='item' key={item.id}>
              <input
                type='checkbox'
                checked={item.checkedIn}
              />
              <label
                style={(item.checkedOut) ? {textDecoration: 'line-through'} : null}
              >{item.vin}</label>

              {item.checkedOut ?
                <FaCloudArrowDown
                  role="button" 
                  onClick={() => handleCheck(item.id)}
                />
                :
                <FaCloudArrowUp
                  role="button"
                  onClick={() => handleCheck(item.id)}
                />
              }
                
            </li>
          ))}
        </ul>
    </main>
  )
}

export default Content