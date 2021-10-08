import "./Input.scss";
import React from "react";

interface itemProps {
  className: string;
  checked: boolean;
  label?: string;
  value?: string;
  htmlFor: string;
  type: string;
  changeInput(e: React.ChangeEvent<HTMLInputElement>): void;
}

const Input = (props: itemProps) => {
  const { htmlFor, type, value, changeInput, label, checked, className } =
    props;
  const inputType = type || "text";

  return (
    <div className={className}>
      <label className={`${className}__label`} htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className={`${className}__input`}
        type={inputType}
        id={htmlFor}
        checked={checked}
        value={value}
        onChange={changeInput}
      />
    </div>
  );
};
export default Input;
