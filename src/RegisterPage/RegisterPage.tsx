import { Link } from "react-router-dom";
import MainText from "./components/MainText";
import Input from "./components/Input";
import Button from "./components/Button";

const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <MainText />
      <form className="flex flex-col gap-4 items-center mt-10 mb-4">
        <p className="font-bold text-gray-400 text-xl">Create An Account</p>
        <Input placeholder="Enter Username" type="text" content="username" />
        <Input placeholder="Enter Email" type="text" content="email" />
        <Input
          placeholder="Enter Password"
          type="password"
          content="password"
        />
        <Input
          placeholder="Repeat Password"
          type="password"
          content="passwordRepeat"
        />
        <Button />
      </form>
      <div className="flex">
        <p className="mr-1">Have an account? </p>
        <Link to="/" className="underline">
          Login
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
