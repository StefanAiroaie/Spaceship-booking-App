import "./App.css";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddShip from "./components/AddShip";
import AddReservation from "./components/AddReservation";
import Home from "./routes/Home";
import ShipDetail from "./routes/ShipDetail";
import Reservations from "./routes/Reservations";
import ShipGallery from "./routes/ShipGallery";
import ReservationDetail from "./routes/ReservationDetail";
import { useAppState } from "./context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ships",
    element: <ShipGallery />,
  },
  {
    path: "/ships/:id",
    element: <ShipDetail />,
  },
  {
    path: "/addship",
    element: <AddShip />,
  },
  { path: "/addreservation", element: <AddReservation /> },

  {
    path: "/reservations",
    element: <Reservations />,
  },
  {
    path: "/reservations/:id",
    element: <ReservationDetail />,
  },
]);

function App() {
  const { updateShips, updateBookings } = useAppState();
  useEffect(() => {
    updateShips();
    updateBookings();
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
