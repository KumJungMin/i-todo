import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';

function App() {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <div>count: {count}</div>
      <Button.Primary label="프라이머리" onClick={() => handleCount} disabled={true} />
      <Button.Secondary label="프라이머리" onClick={() => handleCount} />
      <Button.Danger label="프라이머리" onClick={() => handleCount} />
    </div>
  );
}

export default App;
