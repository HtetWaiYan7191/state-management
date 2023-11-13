import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    value: [],
    team: [], 
    isLoading: false
}
export const fetchPlayers = createAsyncThunk('hero/players', async () => {
    const cachedData = localStorage.getItem('playersData');

  if (cachedData) {
    return JSON.parse(cachedData);
  } else {
    // If data is not in localStorage, fetch it from the API
    const res = await axios.get('https://www.balldontlie.io/api/v1/players');
    const responseData = res.data.data;

    // Store the fetched data in localStorage for future use
    localStorage.setItem('playersData', JSON.stringify(responseData));
    return responseData;
  }
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
            localStorage.setItem('teams', JSON.stringify(state.team));
        },
        deleteTeam: (state, action) => {
            const teamIdToDelete = action.payload;
            state.team = state.team.filter(team => team.id !== teamIdToDelete);
            localStorage.setItem('teams', JSON.stringify(state.team));

        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPlayers.fulfilled, (state, action) => {
            state.isLoading = true;
            state.value = action.payload;
            state.team = JSON.parse(localStorage.getItem('teams'))
          });
    }
})

export const {addPlayers, addTeams, deleteTeam} = player.actions;
export default player.reducer