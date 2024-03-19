import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { useAppState } from "../context";
import { useParams, useNavigate } from "react-router-dom";

const ShipDetail = () => {
  const { ships, deleteShip, updateShips } = useAppState();
  const navigate = useNavigate();

  const id = useParams();

  const detailShip = ships.filter((ship) => {
    return ship._id === id.id;
  });

  const handleDelete = async () => {
    await deleteShip(detailShip[0]?._id);
    await updateShips();
    navigate("/ships");
  };

  return (
    <>
      <Nav />
      <main>
        <img
          src={detailShip[0]?.imageUrl}
          alt={detailShip[0]?.name}
          className="aspect-video h-40 w-full object-cover object-center"
        />
        <div className="text-white mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {detailShip[0]?.name}
            </h2>
            <p>{detailShip[0]?.serialNumber}</p>

            <p className="mt-4 text-white">{detailShip[0]?.shipType}</p>
          </div>

          <img
            src={detailShip[0]?.imageUrl}
            alt={detailShip[0]?.name}
            className="aspect-video h-full w-full object-cover object-center"
          />
          <Link to={"/"}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Edit Ship
            </button>
          </Link>
          <button
            onClick={handleDelete}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete Ship
          </button>
        </div>
      </main>
    </>
  );
};

export default ShipDetail;
