import Form from "./components/Form";
import Logo from "./components/Logo";

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-100 h-screen">
      <Logo />
      <Form />
    </div>
  );
};

export default LoginPage;
