import React from "react";
import { useSelector } from "react-redux";
import BackButton from "../components/BackButton";
import EachTicket from "../components/EachTicket";

function Account() {
  const {
    user: { name, email },
  } = useSelector((state) => state.auth);
  return (
    <>
      <BackButton url="/" />
      <div className="mx-6 rounded-md py-2 px-3 mt-3 border-2">
        <p>Name</p>
        <h1 className="font-bold text-lg">{name}</h1>
        <p>Email</p>
        <h1 className="font-bold text-lg">{email}</h1>
      </div>
      <div className="mx-6 rounded-md py-2 px-3 mt-3 border-2">
        <h1 className="text-lg font-bold">Bookings:</h1>
        <ul>
          <li className="my-2 shadow-lg rounded-lg">
            <EachTicket />
          </li>
          <li>Ticket 1</li>
          <li>Ticket 1</li>
        </ul>
      </div>
    </>
  );
}

export default Account;
