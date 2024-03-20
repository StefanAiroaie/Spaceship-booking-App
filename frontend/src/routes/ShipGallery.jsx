import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { useAppState } from "../context";

const ShipGallery = () => {
  const shipsState = useAppState();
  return (
    <>
      <Nav />
      {
        shipsState ?
        (
        <main className="bg-black p-6">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Our Space Ships Colection
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {shipsState.ships.map((ship) => (
            <Link key={ship._id} to={`${ship._id}`}>
              <div className="group relative">
                <div className="aspect-video w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-video group-hover:opacity-75 ">
                  <img
                    src={ship.imageUrl}
                    alt={ship.name}
                    className="aspect-video h-full w-full object-cover object-center"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-white">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {ship.name}
                    </h3>
                    <p className="mt-1 text-sm text-white">
                      Construction year:{ship.baujahr}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-white">
                    {ship.shipType}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link to={"/addship"}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add New Ship
          </button>
        </Link>
      </main>
      )
        :
        (
        <div> <p>... wait we are loading the ships</p>
        
        <iframe src="https://giphy.com/embed/IVfgh1u2eCkqiyHxwd" width="480" height="230" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/RobertsSpaceIndustries-star-citizen-starcitizen-reclaimer-IVfgh1u2eCkqiyHxwd">via GIPHY</a></p>
        </div>
        )
      }
      
    </>
  );
};

export default ShipGallery;
