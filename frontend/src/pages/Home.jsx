import { getLocations } from "../features/locations/locationSlice";
import { useSelector, useDispatch } from "react-redux";
import TicketBook from "../components/TicketBook";
import { useEffect } from "react";
import SpinnerElm from "../components/Spinner";
import { Heading } from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  const { locations, isError, isSuccess, isLoading } = useSelector(
    (state) => state.location
  );
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocations());
    //eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <SpinnerElm />;
  }

  if (isError) {
    return <Heading>Someting went wrong 404</Heading>;
  }

  if (isSuccess) {
    return (
      <>
        {user && (
          <section className="px-4 my-2">
            <h1 className="text-xl font-bold text-[rgba(0,0,0,0.7)] flex justify-between">
              <p>Profile:</p>
              <Link to="/account" className="flex items-center">
                <FaUserAlt className="mr-1" />
                Account
              </Link>
            </h1>
            <hr />
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="text-md font-bold text-[rgba(0,0,0,0.7)]">
                  Name:
                </span>
              </label>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full max-w-xs capitalize font-bold"
                value={user.name}
                disabled
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
                name="email"
                className="input input-bordered w-full max-w-xs"
                value={user.email}
                disabled
              />
            </div>
          </section>
        )}
        <section className="px-4">
          <h1 className="text-xl font-bold text-[rgba(0,0,0,0.7)]">
            Book Ticket:
          </h1>
          <TicketBook locations={locations} />
        </section>
      </>
    );
  }
}

export default Home;
