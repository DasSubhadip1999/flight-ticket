import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;
  const { isError, isSuccess, isLoading, message, user } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
      if (message === "User already exists") {
        navigate("/login");
      }
    }
    if (isSuccess && user) {
      toast.success("Register successfully");
      navigate("/");
    }
    dispatch(reset());
  }, [isError, isSuccess, user, message, dispatch, navigate]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !password2) {
      toast.error("Please fill all the details");
    } else if (password !== password2) {
      toast.error("Passwords dont match!");
    } else {
      dispatch(register({ name, email, password }));
      setFormData({
        name: "",
        email: "",
        password: "",
        password2: "",
      });
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  //
  return (
    <>
      <header className="my-3">
        <h1 className="text-3xl font-bold text-center">Create an account</h1>
      </header>
      <form className="px-5" onSubmit={onSubmit}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="text-md font-bold text-[rgba(0,0,0,0.7)]">
              Name:
            </span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            className="input input-bordered w-full max-w-xs"
            value={name}
            onChange={onChange}
          />
        </div>
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
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="text-md font-bold text-[rgba(0,0,0,0.7)]">
              Confirm assword:
            </span>
          </label>
          <input
            type="password"
            placeholder="Confirm password"
            name="password2"
            className="input input-bordered w-full max-w-xs"
            value={password2}
            onChange={onChange}
          />
        </div>
        <div className="form-control w-full max-w-xs mt-4">
          <button className="btn btn-primary w-full">Register</button>
        </div>
        <p className="text-center text-lg my-3">
          Already have an account?
          <Link className="mx-2 link-primary" to="/login">
            Login
          </Link>
        </p>
      </form>
    </>
  );
}

export default Register;
