import { useRef, useState } from "react";
import { useAppState } from "../context";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

const AddReservation = () => {
  const { addReservation, ships, updateBookings } = useAppState();
  const navigate = useNavigate();
  const formRef = useRef();

  let [selectedShip, setSelectedShip] = useState("⬇️ Select a ship ⬇️");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    await addReservation(formData);
    formRef.current.reset();
    await updateBookings();
    navigate("/reservations");
  };

  let handleShipChange = (e) => {
    setSelectedShip(e.target.value);
  };

  console.log(selectedShip);

  return (
    <>
      <Nav />
      <form
        className="text-black flex flex-col p-3 gap-2 justify-items-center items-center"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <label>
          <p>Start Date</p>
          <input
            type="date"
            required={true}
            name="startDate"
            placeholder="Start Date of Booking"
          />
        </label>
        <label>
          <p>End Date</p>
          <input
            type="date"
            required={true}
            name="endDate"
            placeholder="End Date of Booking"
          />
        </label>
        <select name="ship" className="text-black" onChange={handleShipChange}>
          <option value="⬇️ Select a ship ⬇️"> -- Select a ship -- </option>
          {ships.map((selectedShip) => (
            <option type="text" key={selectedShip._id} value={selectedShip._id}>
              {selectedShip.name}
            </option>
          ))}
        </select>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Add Reservation
        </button>
      </form>
    </>
  );
};

export default AddReservation;
