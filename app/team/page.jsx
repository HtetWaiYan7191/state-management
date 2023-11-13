"use client";
import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import AddTeam from "../components/AddTeam";
import { useSelector } from "react-redux";
import TeamCard from "../components/TeamCard";
import { useDispatch } from "react-redux";
import { fetchPlayers } from "@/redux/features/playerSlice";
const Team = () => {
  const players = useSelector((state) => state.playerReducer.value);
  const teams = useSelector((state) => state.playerReducer.team);
  const reverseTeams = [...teams].reverse();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchPlayers());
  }, [dispatch]);

  return (
    <section className="team-page p-5">
      <h2 className="text-white capitalize font-bold text-2xl text-center">
        Teams
      </h2>
      <Navigation />
      <AddTeam players={players} />
      <main className="team-container mt-10 w-[80%] mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
        {reverseTeams && reverseTeams.length > 0 ? (
          reverseTeams.map((team) => <TeamCard team={team} key={team.id} />)
        ) : (
          <span className="px-4 block">No Teams At This Moment !!!</span>
        )}
      </main>
    </section>
  );
};

export default Team;
