import { useState } from "react";
import TicketInput from "./TicketInput";
function TicketBook({ locations: [{ location }] }) {
  // const [showOptions1, setShowOptions1] = useState(false);
  // const [showOptions2, setShowOptions2] = useState(false);

  const [formData, setFormData] = useState({
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

  const { from, to } = formData;

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
    console.log(formData);
  };

  return (
    <div className="">
      <hr />
      <form onSubmit={onSubmit}>
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
