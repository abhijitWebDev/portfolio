import { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <h1 className="text-red-500"></h1>
      <div className="card">
        <h1 className="text-blue-600">Welcome to Abhijit's World of Web Development</h1>
        <h2>Projects coming soon, Stay tuned</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
