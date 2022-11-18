import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { MdOutlineFlightTakeoff } from "react-icons/md";

function TicketInput({ location, onChangeFn, allLocation, label }) {
  const [showOptions, setShowOptions] = useState(false);
  const { city, cityCode, airport } = location;
  const inputBg = "#F2D7D9";
  return (
    <div
      className="flex flex-col my-6 border-[1px] border-[rgba(0,0,0,0.1)] p-2 rounded-md relative"
      onClick={() => setShowOptions((prev) => !prev)}
      style={
        showOptions ? { backgroundColor: inputBg } : { backgroundColor: "#fff" }
      }
    >
      <label>{label}</label>
      <input
        className="capitalize text-xl font-bold bg-white"
        value={city}
        disabled
        style={
          showOptions
            ? { backgroundColor: inputBg }
            : { backgroundColor: "#fff" }
        }
      />
      <div className="flex">
        <input
          className="uppercase w-[13%] bg-white"
          value={cityCode}
          disabled
          style={
            showOptions
              ? { backgroundColor: inputBg }
              : { backgroundColor: "#fff" }
          }
        />
        <input
          className="capitalize w-[87%] bg-white"
          value={`, ${airport}`.substring(0, 39) + "..."}
          disabled
          style={
            showOptions
              ? { backgroundColor: inputBg }
              : { backgroundColor: "#fff" }
          }
        />
      </div>
      {showOptions && (
        <div className="absolute px-3 w-[100%] top-24 right-0 z-10 border-[1px] rounded-sm bg-white max-h-56 overflow-y-auto">
          {allLocation.map(({ city, cityCode, airport, country }) => {
            return (
              <div
                key={uuidv4()}
                className="flex justify-between items-center my-2 hover:bg-gray-100 px-1"
                onClick={() => onChangeFn(city, cityCode, airport, country)}
              >
                <div className="flex items-center">
                  <MdOutlineFlightTakeoff />
                  <div className="flex flex-col ml-3">
                    <h3 className="capitalize">
                      <span className="font-bold text-[rgba(0,0,0,0.7)]">
                        {city}
                      </span>
                      <span className="mx-1 uppercase">{country}</span>
                    </h3>
                    <p className="text-sm capitalize">{airport}</p>
                  </div>
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
  );
}

export default TicketInput;
