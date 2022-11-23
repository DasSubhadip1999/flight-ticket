import React from "react";

function EachTicket({
  ticket: {
    _id,
    airport,
    date,
    from,
    to,
    arrivalTime,
    departureTime,
    singlePrice,
    totalAmount,
  },
}) {
  return (
    <div className="mb-4 shadow-md p-3 rounded-md">
      <h1 className="my-1 font-semibold">Ticket ID:</h1>
      <p>{_id}</p>
      <h1 className="my-1 font-semibold">Airport Name:</h1>
      <p className="capitalize">{airport}</p>
      <h2 className="flex items-center">
        <p className="my-1 font-semibold mr-1">Date:</p>{" "}
        {new Date(date).toLocaleDateString()}
      </h2>
      <ul className="flex justify-between my-1">
        <li className="uppercase">{from}</li>
        <li>to</li>
        <li className="uppercase">{to}</li>
      </ul>
      <ul className="flex justify-between my-1">
        <li>{new Date(departureTime).toLocaleTimeString()}</li>
        <li>to</li>
        <li>{new Date(arrivalTime).toLocaleTimeString()}</li>
      </ul>
      <div>Seats: {totalAmount / singlePrice}</div>
    </div>
  );
}

export default EachTicket;
