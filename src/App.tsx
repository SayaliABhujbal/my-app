import React, { useState } from 'react';

const App = () => {
  //fruits from
  // const [message, setMessage] = useState('');
  // const [fruits, setFruits] = useState([
  //   { name: 'Apple', selected: false },
  //   { name: 'Banana', selected: false },
  //   { name: 'Cherry', selected: false },
  // ]);

  // const handleSelectAll = () => {
  //   const updatedFruits = fruits.map(fruit => ({ ...fruit, selected: true }));
  //   setFruits(updatedFruits);
  //   setMessage('All fruits selected');
  // };

  // const handleDeleteSelected = () => {
  //   const remainingFruits = fruits.filter(fruit => !fruit.selected);
  //   setFruits(remainingFruits);
  //   setMessage('Selected fruits have been deleted');
  // };

  // const handleCheckboxChange = (index: number) => {
  //   const updatedFruits = fruits.map((fruit, i) =>
  //     i === index ? { ...fruit, selected: !fruit.selected } : fruit
  //   );
  //   setFruits(updatedFruits);
  // };

  // return (
  //   <div>
  //     <button id="selectAllButton" onClick={handleSelectAll}>Select All</button>
  //     <button id="deleteButton" onClick={handleDeleteSelected}>Delete Selected</button>
  //     <ul>
  //       {fruits.map((fruit, index) => (
  //         <li key={index}>
  //           <input
  //             type="checkbox"
  //             checked={fruit.selected}
  //             onChange={() => handleCheckboxChange(index)}
  //           />
  //           {fruit.name}
  //         </li>
  //       ))}
  //     </ul>
  //     <p id="message">{message}</p>
  //   </div>
  // );
  //login form
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'Sayali' && password === 'Sayali@123') {
      setIsLoggedIn(true);
      setMessage('Login successful!');
    } else {
      setMessage('Invalid credentials.');
    }
  };

  if (!isLoggedIn) {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button id="loginButton" type="submit">Login</button>
        </form>
        <p id="message">{message}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Welcome to the Dashboard!</h2>
      <p>You are logged in.</p>
    </div>
  );
};

export default App;
