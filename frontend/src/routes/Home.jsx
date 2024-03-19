import Nav from "../components/Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <section className="p-6">
        <div className="p-3 ring-2 ring-blue-500">
          <h2>Current Bookings: 3</h2>
        </div>
        <div className="p-3 ring-2 ring-blue-500">
          <h2>Available Spaceships: 7</h2>
        </div>
        <div className="p-3 ring-2 ring-blue-500">
          <h2>Total Spaceships: 10</h2>
        </div>
      </section>
    </>
  );
};

export default Home;
