"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const AddTeam = () => {
  const players = useSelector((state) => state.playerReducer.value);
  const [team, setTeam] = useState({
    name: "",
    region: "",
    country: "",
    players: [], // Change to an empty array
  });

  const handleChange = (e, name) => {
    setTeam((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };

  const handlePlayerChange = (e) => {
    const selectedPlayer = e.target.value;
    setTeam((prev) => ({
      ...prev,
      players: [...prev.players, selectedPlayer],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit is working");
    console.log(team);
  };

  const closeModal = () => {
    document.getElementById("my_modal_5").close();
  };

  return (
    <div className="w-[80%] mx-auto">
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Add Team
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">Create A New Team</h3>
          <form action="" className="p-2">
            <input
              type="text"
              name="name"
              placeholder=" Team Name"
              required
              className="input input-sm lg:input-md input-bordered w-full max-w-xs my-2"
              onChange={(e) => handleChange(e, "name")}
            />

            <input
              type="text"
              name="region"
              placeholder=" Region"
              required
              className="input input-sm lg:input-md input-bordered w-full max-w-xs my-2"
              onChange={(e) => handleChange(e, "region")}
            />

            <input
              type="text"
              name="country"
              placeholder=" Country"
              required
              className="input input-sm lg:input-md input-bordered w-full max-w-xs my-2"
              onChange={(e) => handleChange(e, "country")}
            />

            <select
              className="select w-full max-w-xs"
              name="players"
              onChange={handlePlayerChange} // Use handlePlayerChange for player selection
            >
              <option>
                Pick Player
              </option>
              {players.map((player) => (
                <option key={player.id} value={player.first_name}>
                  {`${player.first_name} ${player.last_name}`}
                </option>
              ))}
            </select>
          </form>
          <div className="modal-action">
            <button className="btn" type="submit" onClick={handleSubmit}>
              Add
            </button>
            <button className="btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddTeam;
