import { createContext, useContext, useState } from "react";
import {
  getShips,
  postShip,
  postReservation,
  deleteShipDB,
  deleteBookingDB,
  getBookings,
} from "./api";

const StateContext = createContext({
  ships: [],
  bookings: [],
});

export const useAppState = () => useContext(StateContext);

export const AppStateProvider = ({ children }) => {
  const [ships, setShips] = useState([]);
  const [bookings, setBookings] = useState([]);

  const updateShips = async () => {
    try {
      const ships = await getShips();
      setShips(ships);
    } catch (err) {
      console.error(err);
    }
  };

  const updateBookings = async () => {
    try {
      const bookings = await getBookings();
      setBookings(bookings);
    } catch (err) {
      console.error(err);
    }
  };

  const addReservation = async (reservationData) => {
    try {
      await postReservation(reservationData);
      updateBookings();
    } catch (err) {
      console.error(err);
    }
  };

  const addShip = async (shipData) => {
    try {
      await postShip(shipData);
      updateShips();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteBooking = async (id) => {
    try {
      await deleteBookingDB(id);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteShip = async (id) => {
    try {
      await deleteShipDB(id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StateContext.Provider
      value={{
        ships,
        updateShips,
        updateBookings,
        addShip,
        addReservation,
        deleteShip,
        deleteBooking,
        bookings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
