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
        addTeams: (_, action) => {
            const teams =  state.player.map(player => player.team );
            state.team = teams;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPlayers.fulfilled, (state, action) => {
            state.isLoading = true;
            state.value = action.payload;
        })
    }
})

export const {addPlayers, addTeams} = player.actions;
export default player.reducer