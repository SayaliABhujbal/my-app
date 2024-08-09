import React, { useState } from 'react';

const App = () => {
  const [message, setMessage] = useState('');
  const [fruits, setFruits] = useState([
    { name: 'Apple', selected: false },
    { name: 'Banana', selected: false },
    { name: 'Cherry', selected: false },
  ]);

  const handleSelectAll = () => {
    const updatedFruits = fruits.map(fruit => ({ ...fruit, selected: true }));
    setFruits(updatedFruits);
    setMessage('All fruits selected');
  };

  const handleDeleteSelected = () => {
    const remainingFruits = fruits.filter(fruit => !fruit.selected);
    setFruits(remainingFruits);
    setMessage('Selected fruits have been deleted');
  };

  const handleCheckboxChange = (index: number) => {
    const updatedFruits = fruits.map((fruit, i) =>
      i === index ? { ...fruit, selected: !fruit.selected } : fruit
    );
    setFruits(updatedFruits);
  };

  return (
    <div>
      <button id="selectAllButton" onClick={handleSelectAll}>Select All</button>
      <button id="deleteButton" onClick={handleDeleteSelected}>Delete Selected</button>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={fruit.selected}
              onChange={() => handleCheckboxChange(index)}
            />
            {fruit.name}
          </li>
        ))}
      </ul>
      <p id="message">{message}</p>
    </div>
  );
};

export default App;
