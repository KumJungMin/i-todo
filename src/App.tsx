import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  const [count, setCount] = useState(0);
  const [inputEmits, setInputEmits] = useState({ value: '', valid: false });

  function handleCount() {
    setCount(count + 1);
  }

  function getInput(inputObject: { value: string; valid: boolean }) {
    setInputEmits((prev) => ({
      ...prev,
      value: inputObject.value,
      valid: inputObject.valid,
    }));
  }

  return (
    <div>
      <div>value: {inputEmits.value}</div>
      <div>valid: {String(inputEmits.valid)}</div>
      <Input placeholder="플레이스홀더" regexp="ONLY_TEXT" getInputValue={(v) => getInput(v)} />
      <div>count: {count}</div>
      <Button.Primary label="프라이머리" onClick={() => handleCount()} />
      <Button.Secondary label="프라이머리" onClick={() => handleCount()} />
      <Button.Danger label="프라이머리" onClick={() => handleCount()} />
    </div>
  );
}

export default App;
