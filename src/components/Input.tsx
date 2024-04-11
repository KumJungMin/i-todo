import {
  ChangeEvent, forwardRef, InputHTMLAttributes, useEffect, useState,
} from 'react';
import style from './Input.module.scss';
import RegExp from '../constants/regexp';

interface InputFocusOptions extends FocusOptions {
  cursor?: 'start' | 'end' | 'all';
}
interface InputRef {
  focus: (options?: InputFocusOptions) => void;
  blur: () => void;
  setSelectionRange: (start: number, end: number, direction?: 'forward' | 'backward' | 'none') => void;
  select: () => void;
  input: HTMLInputElement | null;
}

export type ValueType = InputHTMLAttributes<HTMLInputElement>['value'] | bigint;

interface InputProps {
  placeholder: string;
  defaultValue?: string;
  disabled?: boolean;
  regexp: keyof typeof RegExp;
  getInputValue: (value: { value: string; valid: boolean }) => void;
}

const Input = forwardRef<InputRef, InputProps>((props) => {
  const {
    placeholder = '', disabled = false, defaultValue = '', regexp = 'NONE', getInputValue,
  } = props;
  const REGEXP: RegExp = RegExp[regexp];

  const [value, setValue] = useState(defaultValue);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    getInputValue({
      value,
      valid,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, valid]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const _value = e.target.value.replace(REGEXP, '');
    setValue(_value);

    if (_value.length > 0) {
      setValid(true);
    } else {
      setValid(false);
    }
  }

  return (
    <input
      className={style.default}
      onChange={(e) => handleChange(e)}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
    />
  );
});

Input.displayName = 'Input';
export default Input;
