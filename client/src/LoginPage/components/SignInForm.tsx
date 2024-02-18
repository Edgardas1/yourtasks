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
    setForm({ ...form, [e.currentTarget.id]: e.currentTarget.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = form;
    const response = await fetch(
      "https://yourtasks-delta.vercel.app/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    if (data.user) {
      localStorage.setItem("token", data.user);
      window.location.href = "/your-tasks";
    } else {
      alert("please check your email or password");
    }

    console.log(data);
  };

  return (
    <div className="mt-8">
      <p className="my-2 font-bold text-[20px] text-center text-gray-400">
        Sign In
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
