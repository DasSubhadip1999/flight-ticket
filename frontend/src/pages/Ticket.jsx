import { Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import SpinnerElm from "../components/Spinner";
import { createTicket, reset } from "../features/ticket/ticketSlice";

function Ticket() {
  const { airline, isLoading } = useSelector((state) => state.airline);
  const {
    tickets,
    isError,
    isSuccess,
    isLoading: ticketLoading,
  } = useSelector((state) => state.ticket);
  const [count, setCount] = useState(1);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = airline.filter(({ _id }) => {
    return _id === params.ticket;
  });

  const [{ location, price }] = data;

  let LC_location = JSON.parse(localStorage.getItem("location"));

  const [total, setTotal] = useState(price * count);

  const [formData, setFormData] = useState({
    date: LC_location.date,
    from: location.from,
    to: location.to,
    singlePrice: price,
    totalAmount: total,
    airport: LC_location.from.airport,
    terminal: Math.floor(Math.random() * 10 + 1),
  });

  const { date, from, to, singlePrice, airport } = formData;

  const calculate = (val) => {
    setCount((prev) => prev + val);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //console.log(formData);
    dispatch(createTicket(formData));
    navigate("/account");
  };

  useEffect(() => {
    if (isError) {
      dispatch(reset());
    }
  }, [isError]);

  useEffect(() => {
    setTotal(price * count);
  }, [count]);

  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
      totalAmount: total,
    }));
  }, [total]);

  //
  if (isLoading || ticketLoading) {
    return <SpinnerElm />;
  }

  if (isError) {
    return <Heading>Something went wrong</Heading>;
  }

  return (
    <>
      <BackButton url="/airlines" />

      <div className="px-3 mt-4">
        <form className="mt-2" onSubmit={onSubmit}>
          <label>Airport</label>
          <input
            type="text"
            value={airport}
            disabled
            className="input capitalize w-full"
          />
          <label>Date:</label>
          <input
            type="date"
            className="input w-full font-bold"
            value={date}
            disabled
          />
          <input
            type="text"
            name="from"
            placeholder="Type here"
            className="input w-full my-2 disabled uppercase text-xl font-bold"
            value={from}
            disabled
          />
          <p className="mx-8 text-lg font-bold">to</p>
          <input
            type="text"
            name="to"
            placeholder="Type here"
            className="input w-full my-2 disabled uppercase text-xl font-bold"
            value={to}
            disabled
          />
          <label className="label">Price</label>
          <input
            type="number"
            name="price"
            value={singlePrice}
            className="input text-lg w-full"
            disabled
          />
          <label className="label">Ticket Count</label>
          <div className="flex items-center my-2 ml-4">
            <div
              className="text-3xl"
              onClick={() => {
                count > 1 && calculate(-1);
              }}
            >
              -
            </div>
            <input
              type="number"
              value={count}
              className="my-2 border-2 w-10 h-10 text-center mx-3 py-1"
              readOnly
            />
            <div className="text-2xl" onClick={() => calculate(1)}>
              +
            </div>
          </div>
          <div>
            <label className="label">Total Amount</label>
            <input className="input text-xl w-full" value={total} disabled />
          </div>
          <button type="submit" className="btn btn-primary w-full my-3">
            Book Now
          </button>
        </form>
      </div>
    </>
  );
}

export default Ticket;
