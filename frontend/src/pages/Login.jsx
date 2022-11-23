import { Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { reset, login } from "../features/auth/authSlice";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const { isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );
  const { airline } = useSelector((state) => state.airline);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess && !airline) {
      navigate("/");
    } else if (isSuccess && airline) {
      navigate("/airlines");
    }
    dispatch(reset());
  });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill all the details");
    } else {
      dispatch(login({ email, password }));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <header className="my-3">
        <h1 className="text-3xl font-bold text-center">Welcome back!</h1>
      </header>
      <form className="px-5" onSubmit={onSubmit}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="text-md font-bold text-[rgba(0,0,0,0.7)]">
              Email:
            </span>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            className="input input-bordered w-full max-w-xs"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="text-md font-bold text-[rgba(0,0,0,0.7)]">
              Password:
            </span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            className="input input-bordered w-full max-w-xs"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="form-control w-full max-w-xs mt-4">
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </div>
        <p className="text-center text-lg my-3">
          Dont have an account?
          <Link className="mx-2 link-primary" to="/register">
            Register
          </Link>
        </p>
      </form>
    </>
  );
}

export default Login;
