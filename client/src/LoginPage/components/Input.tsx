import React, { useState } from "react";

interface Props {
  value: string;
  type: string;
  label: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ value, type, handleChange, label }: Props) => {
  const [focusedInput, setFocusedInput] = useState<Boolean>(false);

  const focusInput = () => {
    setFocusedInput(true);
  };

  const unfocusInput = () => {
    if (value !== "") {
      return;
    }
    setFocusedInput(false);
  };

  return (
    <div className="relative ">
      <label
        htmlFor={label}
        className={
          focusedInput
            ? "absolute translate-x-5 transition-all text-xs translate-y-1 text-gray-500 capitalize cursor-text"
            : "absolute translate-x-5 translate-y-2 transition-all text-lg text-gray-400 capitalize cursor-text"
        }
      >
        {label}
      </label>
      <input
        value={value}
        type={type}
        id={label}
        className=" outline-1 outline-none text-sm w-80 px-5 pt-5 pb-2 rounded-full shadow-sm"
        onFocus={focusInput}
        onBlur={unfocusInput}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
