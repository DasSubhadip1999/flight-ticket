import { Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BackButton from "../components/BackButton";
import EachTicket from "../components/EachTicket";
import SpinnerElm from "../components/Spinner";
import { getTicket, reset } from "../features/ticket/ticketSlice";

function Account() {
  const {
    user: { name, email },
  } = useSelector((state) => state.auth);
  const { tickets, isError, isSuccess, isLoading } = useSelector(
    (state) => state.ticket
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTicket());
    if (isError) {
      dispatch(reset());
    }
  }, [isError]);

  if (isError) {
    return <Heading>Someting went wrong 404</Heading>;
  }

  if (isLoading) {
    return <SpinnerElm />;
  }

  return (
    <>
      <BackButton url="/" />
      <div className="mx-3 rounded-md py-2 px-3 mt-3 border-2">
        <p>Name</p>
        <h1 className="font-bold text-lg">{name}</h1>
        <p>Email</p>
        <h1 className="font-bold text-lg">{email}</h1>
      </div>
      <div className="mx-3 rounded-md py-2 px-3 mt-3 border-2">
        <h1 className="text-lg font-bold">Bookings:</h1>
        <div>
          {tickets.length !== 0 ? (
            tickets?.map((ticket) => (
              <EachTicket key={ticket._id} ticket={ticket} />
            ))
          ) : (
            <Heading>No Bookings yet</Heading>
          )}
        </div>
      </div>
    </>
  );
}

export default Account;
