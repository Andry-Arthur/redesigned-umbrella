import { useState } from 'react'
import Background from './components/Background';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
        <div className="background-container">
          <Background className="background" />
        </div>
      </div>
  );
}

export default App;
