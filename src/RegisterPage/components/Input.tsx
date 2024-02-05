import { useState } from "react";

interface Form {
  placeholder: string;
  type: string;
  content: string;
}

const Input = ({ placeholder, type, content }: Form) => {
  const [focusedInput, setFocusedInput] = useState<Boolean>(false);
  const [value, setValue] = useState<string>("");
  const focusInput = () => {
    setFocusedInput(true);
  };

  const unfocusInput = () => {
    if (value !== "") {
      return;
    }
    setFocusedInput(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <div>
      <label
        htmlFor={content}
        className={
          focusedInput
            ? "absolute translate-x-2 transition-all text-xs translate-y-[-8px] text-gray-600 capitalize cursor-text px-2 bg-white"
            : "absolute translate-x-1 translate-y-2 transition-all text-md text-gray-400 capitalize cursor-text bg-white  px-2"
        }
      >
        {placeholder}
      </label>
      <input
        value={value}
        id={content}
        type={type}
        className={
          focusedInput
            ? "outline-none rounded-sm px-3 py-2 shadow-gray-300 border-[1px] border-gray-700 w-72 shadow-md lg:w-96 "
            : "outline-none rounded-sm px-3 py-2 shadow-gray-200 border-[1px] border-gray-400 w-72 shadow-md lg:w-96"
        }
        onFocus={focusInput}
        onBlur={unfocusInput}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
