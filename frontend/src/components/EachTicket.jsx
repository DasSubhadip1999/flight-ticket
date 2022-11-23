import React from "react";

function EachTicket() {
  return (
    <>
      <h1>Ticket ID:</h1>
      <h1>Airport Name</h1>
      <h2>Date: </h2>
      <ul className="flex justify-between my-2">
        <li>Delhi</li>
        <li>to</li>
        <li>Mumbai</li>
      </ul>
      <ul className="flex justify-between my-2">
        <li>6.00</li>
        <li>to</li>
        <li>9.00</li>
      </ul>
      <div>Seats:</div>
    </>
  );
}

export default EachTicket;
