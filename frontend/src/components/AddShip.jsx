import { useRef } from "react";
import { useAppState } from "../context";
import Nav from "./Nav";

const AddShip = () => {
  const { addShip } = useAppState();
  const formRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    await addShip(formData);
    formRef.current.reset();
  };
  return (
    <>
      <Nav />
      <form
        className="flex flex-col p-3 gap-2 justify-items-center items-center"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <label>
          <p>Name of Spaceship</p>
          <input
            type="text"
            required={true}
            name="name"
            placeholder="Name of Spaceship"
          />
        </label>
        <label>
          <p>Date of Production</p>
          <input
            type="number"
            required={true}
            name="baujahr"
            placeholder="Date of Production"
          />
        </label>
        <label>
          <p>Serial Number</p>
          <input
            type="text"
            required={true}
            name="serialNumber"
            placeholder="Serial Number of Ship"
          />
        </label>
        <label>
          <p>Image URL</p>
          <input
            type="text"
            required={true}
            name="imageUrl"
            placeholder="Image URL"
          />
        </label>
        <label>
          <p>Material</p>
          <input
            type="text"
            required={true}
            name="material"
            placeholder="Material of Ship"
          />
        </label>
        <label>
          <p>Type of Ship</p>
          <input
            type="text"
            required={true}
            name="shipType"
            placeholder="Type of Ship"
          />
        </label>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Add Ship
        </button>
      </form>
    </>
  );
};

export default AddShip;
