import { useState } from "react";

const Form = () => {
  const [focused, setFocused] = useState<Boolean>(false);
  const focus = () => {
    setFocused(!focused);
  };
  return (
    <div>
      <p className="my-2">Sign In</p>
      <form className="flex flex-col">
        <div className="relative ">
          <label
            htmlFor="username"
            className={
              focused
                ? "absolute translate-x-5 transition-all text-xs translate-y-1 text-gray-500 "
                : "absolute translate-x-5 translate-y-2 transition-all text-lg text-gray-400"
            }
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className=" outline-1 outline-cyan-500 text-sm w-80 px-5 pt-5 pb-2 rounded-full shadow-md"
            onFocus={focus}
            onBlur={focus}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
