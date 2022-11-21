import SpinnerElm from "../components/Spinner";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineFlightTakeoff } from "react-icons/md";

function AirlinesList() {
  const { airline, isLoading } = useSelector((state) => state.airline);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && airline.length === 0) {
      navigate("/");
    }
  }, []);

  if (isLoading) {
    return <SpinnerElm />;
  }

  return (
    <div className="my-4">
      <ul className="menu bg-base-100 w-full px-3">
        {airline.map(
          ({
            _id,
            name,
            location: { from, to },
            departure,
            arrival,
            price,
          }) => (
            <li key={_id} className="my-2 rounded-md shadow-md">
              <Link to="/ticket" className="flex flex-col items-start">
                <div className="flex items-center">
                  <MdOutlineFlightTakeoff size={25} />
                  <h1 className="text-xl font-bold text-rgba(0,0,0,0.8) uppercase mx-2">
                    {name}
                  </h1>
                </div>
                <div className="flex justify-between w-[60%]">
                  <p className="capitalize font-semibold">{from}</p>
                  <p>to</p>
                  <p className="capitalize font-semibold">{to}</p>
                </div>
                <div className="flex justify-between w-[60%]">
                  <p className="capitalize font-semibold">
                    {new Date(departure).toTimeString().split("G")[0]}
                  </p>
                  <p>to</p>
                  <p className="capitalize font-semibold">
                    {new Date(arrival).toTimeString().split("G")[0]}
                  </p>
                </div>
                <div className="flex items-center justify-between w-[100%]">
                  <div className="text-2xl font-bold">₹{price}.00</div>
                  <button className="btn btn-primary">Book now</button>
                </div>
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default AirlinesList;
