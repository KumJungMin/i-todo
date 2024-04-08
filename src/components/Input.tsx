import style from './Input.module.scss';
import React, { forwardRef } from 'react';

interface InputProps {
  placeholder: string;
  default: string;
  disabled?: boolean;
  onClick?: () => void;
}

interface LabelInputProps extends InputProps {
  label: string,
  name: string,
  children: React.ReactNode
}

function LabelInput(props: LabelInputProps) {
  const { label, children, name} = props;
  return (
    <div className="label-input">
      <label htmlFor={name}>{label}</label>
      {children}
    </div>
  );
}

const Input = forwardRef(function Input(props, ref) {
  const { label, ...otherProps } = props;
  return (
    <label>
      {label}
      <input {...otherProps} />
    </label>
  );
});


export { LabelInput, Input };
