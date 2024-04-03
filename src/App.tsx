import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Button } from './components/Button.tsx';

function App() {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }

  return (
    <>
      <div>
        <div>count: {count}</div>
        <Button.Primary label="프라이머리" action={handleCount} disabled={true} />
        <Button.Secondary label="프라이머리" action={handleCount} />
        <Button.Danger label="프라이머리" action={handleCount} />
      </div>
    </>
  );
}

export default App;
