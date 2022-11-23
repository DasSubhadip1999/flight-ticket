import { useEffect, useState } from "react";
import TicketInput from "./TicketInput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { findAirlines, reset } from "../features/airlines/airlineSlice";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";

///
function TicketBook({ locations: [{ location }] }) {
  const { isSuccess, isError, isLoading, message } = useSelector(
    (state) => state.airline
  );
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    date: today,
    from: {
      city: location[0].city,
      cityCode: location[0].cityCode,
      airport: location[0].airport,
      country: location[0].country,
    },
    to: {
      city: location[1].city,
      cityCode: location[1].cityCode,
      airport: location[1].airport,
      country: location[1].country,
    },
  });

  const { date, from, to } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    localStorage.removeItem("airlines");
    dispatch(reset());
  }, []);

  const onChangeFrom = (city, cityCode, airport, country) => {
    setFormData((prev) => ({
      ...prev,
      from: {
        city,
        cityCode,
        airport,
        country,
      },
    }));
  };
  const onChangeTo = (city, cityCode, airport, country) => {
    setFormData((prev) => ({
      ...prev,
      to: {
        city,
        cityCode,
        airport,
        country,
      },
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //console.log(formData);
    if (from.city !== to.city) {
      dispatch(findAirlines(formData));
      localStorage.setItem("location", JSON.stringify(formData));
      navigate("/airlines");
    } else {
      toast.error("Please check locations");
    }
  };

  if (isError) {
    return <h1>Someting went wrong 404</h1>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="">
      <hr />
      <form onSubmit={onSubmit}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="text-md font-bold text-[rgba(0,0,0,0.7)]">
              Choose date:
            </span>
          </label>
          <input
            type="date"
            name="date"
            className="input input-bordered w-full max-w-xs font-semibold"
            value={date}
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                date: e.target.value,
              }))
            }
          />
        </div>
        <TicketInput
          label="From"
          location={from}
          onChangeFn={onChangeFrom}
          allLocation={location}
        />
        <TicketInput
          label="To"
          location={to}
          onChangeFn={onChangeTo}
          allLocation={location}
        />
        <button type="submit" className="w-full btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
}

export default TicketBook;
