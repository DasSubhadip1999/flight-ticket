function Register() {
  return (
    <>
      <header className="my-3">
        <h1 className="text-3xl font-bold text-center">Create an account</h1>
      </header>
      <form className="px-5">
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
          />
        </div>
        <div className="form-control w-full max-w-xs mt-4">
          <button className="btn btn-primary w-full">Register</button>
        </div>
      </form>
    </>
  );
}

export default Register;
