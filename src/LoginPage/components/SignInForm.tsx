import { useState } from "react";
import Button from "./Button";

const SignInForm = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [focusedUsername, setFocusedUsername] = useState<Boolean>(false);
  const [focusedPassword, setFocusedPassword] = useState<Boolean>(false);

  const focusUsername = () => {
    setFocusedUsername(true);
  };
  const unfocusUsername = () => {
    if (username !== "") {
      return;
    }
    setFocusedUsername(false);
  };

  const focusPassword = () => {
    setFocusedPassword(true);
  };

  const unfocusPassword = () => {
    if (password !== "") {
      return;
    }
    setFocusedPassword(false);
  };

  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
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
            onBlur={unfocusUsername}
            onChange={(e) => handleChangeUsername(e)}
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
            onBlur={unfocusPassword}
            onChange={(e) => handleChangePassword(e)}
          />
        </div>
        <Button />
      </form>
      <div>
        <p className=" text-center">
          Don't have an account?{" "}
          <a href="/register" className="underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
