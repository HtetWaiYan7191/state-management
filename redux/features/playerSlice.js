import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    value: [],
    team: [],
    isLoading: false
}
export const fetchPlayers = createAsyncThunk('hero/players', async () => {
    const res = await axios.get('https://www.balldontlie.io/api/v1/players')
    return res.data.data;
})

export const player = createSlice({
    name: 'player',
    initialState,
    reducers: {
        addPlayers: (state, action) => {
            state.value = action.payload
        },
        addTeams: (state, action) => {
            state.team.push(action.payload)
        },
        deleteTeam: (state, action) => {
            const teamIdToDelete = action.payload;
            state.team = state.team.filter(team => team.id !== teamIdToDelete);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPlayers.fulfilled, (state, action) => {
            state.isLoading = true;
            state.value = action.payload;
        
            // const uniqueTeams = new Set();
        
            // state.value.forEach((player) => {
            //   const teamString = JSON.stringify(player.team);
            //   uniqueTeams.add(teamString);
            // });
        
            // state.team = Array.from(uniqueTeams, (teamString) => JSON.parse(teamString));
          });
    }
})

export const {addPlayers, addTeams, deleteTeam} = player.actions;
export default player.reducer