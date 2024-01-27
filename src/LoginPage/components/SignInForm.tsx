import { useState } from "react";
import Button from "./Button";

const SignInForm = () => {
  const [focusedUsername, setFocusedUsername] = useState<Boolean>(false);
  const [focusedPassword, setFocusedPassword] = useState<Boolean>(false);
  const focusUsername = () => {
    setFocusedUsername(!focusedUsername);
  };

  const focusPassword = () => {
    setFocusedPassword(!focusedPassword);
  };
  return (
    <div className="mt-8">
      <p className="my-2 font-bold text-[20px] text-center text-gray-400">
        Sign In
      </p>
      <form className="flex flex-col gap-4">
        <div className="relative ">
          <label
            htmlFor="username"
            className={
              focusedUsername
                ? "absolute translate-x-5 transition-all text-xs translate-y-1 text-gray-500 "
                : "absolute translate-x-5 translate-y-2 transition-all text-lg text-gray-400"
            }
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className=" outline-1 outline-none text-sm w-80 px-5 pt-5 pb-2 rounded-full shadow-sm"
            onFocus={focusUsername}
            onBlur={focusUsername}
          />
        </div>
        <div className="relative ">
          <label
            htmlFor="password"
            className={
              focusedPassword
                ? "absolute translate-x-5 transition-all text-xs translate-y-1 text-gray-500 "
                : "absolute translate-x-5 translate-y-2 transition-all text-lg text-gray-400"
            }
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className=" outline-1 outline-none text-sm w-80 px-5 pt-5 pb-2 rounded-full shadow-sm"
            onFocus={focusPassword}
            onBlur={focusPassword}
          />
        </div>
        <Button />
      </form>
    </div>
  );
};

export default SignInForm;
