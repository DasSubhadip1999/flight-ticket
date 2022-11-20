import { FiLogIn } from "react-icons/fi";
import { FaUserAlt, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";

function Header() {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="navbar bg-base-100 md:px-20 p-0">
      <div className="flex-1">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-[1.1rem] md:text-xl md:font-bold"
        >
          <MdOutlineFlightTakeoff />
          <span>Flight Ticket</span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal pl-2">
          {user ? (
            <li>
              <button
                className="md:font-bold md:text-lg mr-2 btn btn-primary text-white rounded-md"
                onClick={onLogout}
              >
                <FaSignOutAlt />
                <span className="md:font-bold md:text-lg">Logout</span>
              </button>
            </li>
          ) : (
            <>
              <li className="rounded-md">
                <Link to="/login" className="md:font-bold md:text-lg">
                  <FiLogIn />
                  <span className="md:font-bold md:text-lg">Login</span>
                </Link>
              </li>
              <li className="rounded-md">
                <Link to="/register">
                  <FaUserAlt />
                  <span className="md:font-bold md:text-lg">Register</span>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Header;
