import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { useAppState } from "../context";
import { useParams, useNavigate } from "react-router-dom";

const ReservationDetail = () => {
  const { bookings, deleteBooking, updateBookings } = useAppState();
  const navigate = useNavigate();

  const id = useParams();

  const detailBooking = bookings.filter((booking) => {
    return booking._id === id.id;
  });

  const handleDelete = async () => {
    await deleteBooking(detailBooking[0]?._id);
    await updateBookings();
    navigate("/reservations");
  };

  return (
    <>
      <Nav />
      <main>
        <div>
          <p>Start Date:{detailBooking[0]?.startDate}</p>
          <p>End Date:{detailBooking[0]?.endDate}</p>
        </div>
        <img
          src={detailBooking[0]?.ship.imageUrl}
          alt={detailBooking[0]?.ship.name}
          className="aspect-video h-40 w-full object-cover object-center"
        />
        <div className="text-white mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {detailBooking[0]?.ship.name}
            </h2>
            <p>{detailBooking[0]?.ship.serialNumber}</p>

            <p className="mt-4 text-white">{detailBooking[0]?.ship.shipType}</p>
          </div>
          <Link to={"/"}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Edit Booking
            </button>
          </Link>
          <button
            onClick={handleDelete}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete Booking
          </button>
        </div>
      </main>
    </>
  );
};

export default ReservationDetail;
