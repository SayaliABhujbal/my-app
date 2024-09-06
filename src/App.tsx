import React, { useState } from 'react';

const App = () => {
  const [text, setText] = useState('');

  const handleTextChange = (event:any) => {
    setText(event.target.value);
  };
const getTextvalue =()=>{
  console.log(text)
}
  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>To</label>
          <textarea
            id="username"
            value={text}
            onChange={handleTextChange}
            rows={5}
            cols={30}
          />
        </div>
        <button  type="submit" onClick={getTextvalue}>Copy content</button> 
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
