import { v4 as uuidv4 } from "uuid";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { useState } from "react";
function TicketBook({ locations: [{ location }] }) {
  const [showOptions1, setShowOptions1] = useState(false);
  const [showOptions2, setShowOptions2] = useState(false);

  const [formData, setFormData] = useState({
    fromCity: location[0].city,
    fromCityCode: location[0].cityCode,
    fromAirport: location[0].airport,
    toCity: location[1].city,
    toCityCode: location[1].cityCode,
    toAirport: location[1].airport,
  });

  const onChangeFrom = (city, cityCode, airport, country) => {
    setFormData((prev) => ({
      ...prev,
      fromCity: city,
      fromCityCode: cityCode,
      fromAirport: airport,
    }));
  };
  const onChangeTo = (city, cityCode, airport, country) => {
    setFormData((prev) => ({
      ...prev,
      toCity: city,
      toCityCode: cityCode,
      toAirport: airport,
    }));
  };

  const { fromCity, fromAirport, fromCityCode, toCity, toAirport, toCityCode } =
    formData;
  return (
    <div className="">
      <hr />
      <form>
        <div
          className="flex flex-col my-6 border-[1px] border-[rgba(0,0,0,0.1)] p-2 rounded-md relative"
          onClick={() => setShowOptions1((prev) => !prev)}
        >
          <label>From</label>
          <input
            className="capitalize text-xl font-bold bg-white"
            value={fromCity}
            disabled
          />
          <input
            className="capitalize bg-white"
            value={`${fromCityCode}, ${fromAirport}`.slice(0, 41) + "..."}
            disabled
          />
          {showOptions1 && (
            <div className="absolute top-24 z-10 border-2 bg-white max-h-56 overflow-y-auto">
              {location.map(({ city, cityCode, airport, country }) => {
                return (
                  <div
                    key={uuidv4()}
                    className="flex items-center my-2"
                    onClick={() =>
                      onChangeFrom(city, cityCode, airport, country)
                    }
                  >
                    <MdOutlineFlightTakeoff />
                    <div className="flex flex-col">
                      <h3 className="">
                        <span>{city}</span>
                        <span>{country}</span>
                      </h3>
                      <p>{airport}</p>
                    </div>
                    <h2 className="uppercase text-lg font-bold text-[rgba(0,0,0,0.6)]">
                      {cityCode}
                    </h2>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div
          className="flex flex-col my-6 border-[1px] border-[rgba(0,0,0,0.1)] p-2 rounded-md relative"
          onClick={() => setShowOptions2((prev) => !prev)}
        >
          <label>To</label>
          <input
            className="capitalize text-xl font-bold bg-white"
            value={toCity}
            disabled
          />
          <input
            className="capitalize bg-white"
            value={`${toCityCode}, ${toAirport}`.slice(0, 41) + "..."}
            disabled
          />
          {showOptions2 && (
            <div className="absolute top-24 z-10 border-2 bg-white max-h-56 overflow-y-auto">
              {location.map(({ city, cityCode, airport, country }) => {
                return (
                  <div
                    key={uuidv4()}
                    className="flex items-center my-2"
                    onClick={() => onChangeTo(city, cityCode, airport, country)}
                  >
                    <MdOutlineFlightTakeoff />
                    <div className="flex flex-col">
                      <h3 className="">
                        <span>{city}</span>
                        <span>{country}</span>
                      </h3>
                      <p>{airport}</p>
                    </div>
                    <h2 className="uppercase text-lg font-bold text-[rgba(0,0,0,0.6)]">
                      {cityCode}
                    </h2>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <button className="w-full btn btn-primary">Search</button>
      </form>
    </div>
  );
}

export default TicketBook;
