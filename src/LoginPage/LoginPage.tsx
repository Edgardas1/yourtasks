import SignInForm from "./components/SignInForm";
import Logo from "./components/Logo";

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-100 h-dvh">
      <Logo />
      <SignInForm />
    </div>
  );
};

export default LoginPage;
