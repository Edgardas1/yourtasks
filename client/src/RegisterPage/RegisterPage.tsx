import { Link } from "react-router-dom";
import MainText from "./components/MainText";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

interface Form {
  username: string;
  email: string;
  password: string;
  passwordRepeat: string;
}

const RegisterPage = () => {
  const [form, setForm] = useState<Form>({
    username: "",
    email: "",
    password: "",
    passwordRepeat: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.currentTarget.id]: e.currentTarget.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { username, email, password } = form;
    const response = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data) {
      window.location.href = "/";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-dvh">
      <MainText />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center mt-10 mb-4"
      >
        <p className="font-bold text-gray-400 text-xl">Create An Account</p>
        <Input
          placeholder="Enter Username"
          type="text"
          content="username"
          value={form.username}
          handleChange={handleChange}
        />
        <Input
          placeholder="Enter Email"
          type="text"
          content="email"
          value={form.email}
          handleChange={handleChange}
        />
        <Input
          placeholder="Enter Password"
          type="password"
          content="password"
          value={form.password}
          handleChange={handleChange}
        />
        <Input
          placeholder="Repeat Password"
          type="password"
          content="passwordRepeat"
          value={form.passwordRepeat}
          handleChange={handleChange}
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
