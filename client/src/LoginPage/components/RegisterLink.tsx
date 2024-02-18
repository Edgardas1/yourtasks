import { Link } from "react-router-dom";

const RegisterLink = () => {
  return (
    <div>
      <p className=" text-center">
        Don't have an account?{" "}
        <Link to="/register" className="underline">
          Register
        </Link>
      </p>
    </div>
  );
};

export default RegisterLink;
