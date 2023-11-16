"use client";
import { addTeams } from "@/redux/features/playerSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';


const AddTeam = ({players}) => {
    const dispatch = useDispatch();
  const [team, setTeam] = useState({
    id: '',
    name: "",
    division: "",
    city: "",
    players: [], // Change to an empty array
  });

  const handleChange = (e, name) => {
    setTeam((prev) => ({
      ...prev,
      id: uuidv4(),
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
    dispatch(addTeams(team))
    closeModal();
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
              name="division"
              placeholder=" Region"
              required
              className="input input-sm lg:input-md input-bordered w-full max-w-xs my-2"
              onChange={(e) => handleChange(e, "division")}
            />

            <input
              type="text"
              name="city"
              placeholder=" City"
              required
              className="input input-sm lg:input-md input-bordered w-full max-w-xs my-2"
              onChange={(e) => handleChange(e, "city")}
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
