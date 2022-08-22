import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// utils
import axios from 'axios'
//
import { API_KEY } from '../../config'

// ----------------------------------------------------------------------

const initialState = {
	isLoading: false,
	error: null,
	games: [],
	game: null,
	nextPageUrl: null,
}

export const fetchAllGames = createAsyncThunk(
	'games/fetchAllGames',
	async () => {
		const options = {
			method: 'GET',
			url: `https://api.rawg.io/api/games?key=${API_KEY}`,
		}
		const response = await axios.request(options)

		console.log(response.data)

		return response.data
	}
)

export const fetchNextGamesPage = createAsyncThunk(
	'games/fetchNextGamesPage',
	async (url) => {
		const options = {
			method: 'GET',
			url,
		}
		const response = await axios.request(options)

		return response.data
	}
)

export const fetchGameBySlug = createAsyncThunk(
	'games/fetchGameBySlug',
	async (slug) => {
		const options = {
			method: 'GET',
			url: `https://api.rawg.io/api/games/${slug}?key=${API_KEY}`,
		}
		const response = await axios.request(options)

		return response.data
	}
)

const slice = createSlice({
	name: 'games',
	initialState,
	reducers: {
		// CLEAR STATE
		clearGamesState: (state) => {
			return initialState
		},
	},
	extraReducers: {
		// ALL GAMES
		[fetchAllGames.pending]: (state) => {
			state.isLoading = true
			state.games = []
		},
		[fetchAllGames.fulfilled]: (state, { payload }) => {
			state.games = payload.results
			state.nextPageUrl = payload.next
			state.isLoading = false
		},
		[fetchAllGames.rejected]: (state, action) => {
			state.isLoading = false
			state.games = []
			state.error = action.error
		},

		// FETCH NEXT GAME PAGES
		[fetchNextGamesPage.pending]: (state) => {
			state.isLoading = true
		},
		[fetchNextGamesPage.fulfilled]: (state, { payload }) => {
			state.games = state.games.concat(payload.results)
			state.nextPageUrl = payload.next
			state.isLoading = false
		},
		[fetchNextGamesPage.rejected]: (state, action) => {
			state.isLoading = false
			state.error = action.error
		},

		// SINGLE GAME
		[fetchGameBySlug.pending]: (state) => {
			state.isLoading = true
		},
		[fetchGameBySlug.fulfilled]: (state, { payload }) => {
			state.isLoading = false
			state.game = payload
		},
		[fetchGameBySlug.rejected]: (state, action) => {
			state.isLoading = false
			state.error = action.error
		},
	},
})

// Reducer
export default slice.reducer

// actions
export const { clearGamesState } = slice.actions
