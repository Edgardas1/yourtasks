import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import RegisterLink from "./RegisterLink";

interface Form {
  email: string;
  password: string;
}

const SignInForm = () => {
  const [form, setForm] = useState<Form>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.currentTarget.id === "email"
      ? setForm({ ...form, email: e.currentTarget.value })
      : setForm({ ...form, password: e.currentTarget.value });
  };

  return (
    <div className="mt-8">
      <p className="my-2 font-bold text-[20px] text-center text-gray-400">
        Sign In
      </p>
      <form className="flex flex-col gap-4">
        <Input
          label="email"
          value={form.email}
          type="text"
          handleChange={handleChange}
        />
        <Input
          label="password"
          value={form.password}
          type="password"
          handleChange={handleChange}
        />
        <Button />
      </form>
      <RegisterLink />
    </div>
  );
};

export default SignInForm;
