export const getShips = () => {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/ships`).then((response) =>
    response.json()
  );
};

export const postShip = (newShip) => {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/ships`, {
    method: "POST",
    body: newShip,
  }).then((response) => response.json());
};

export const postReservation = (newReservation) => {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/reservations`, {
    method: "POST",
    body: newReservation,
  }).then((response) => response.json());
};

export const getBookings = () => {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/reservations`).then(
    (response) => response.json()
  );
};

export const deleteShipDB = (id) => {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/ships/${id}`, {
    method: "DELETE",
  });
};

export const deleteBookingDB = (id) => {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/reservations/${id}`, {
    method: "DELETE",
  });
};
