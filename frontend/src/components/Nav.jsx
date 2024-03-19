import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="p-6">
        <Link to={"/"}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Home
          </button>
        </Link>
        <Link to={"/ships"}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Spaceships
          </button>
        </Link>
        <Link to={"/reservations"}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Bookings
          </button>
        </Link>
      </nav>
    </>
  );
};

export default Nav;
