import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// utils
import axios from 'axios'
//
import { API_KEY } from '../../config'

// ----------------------------------------------------------------------

const initialState = {
	isLoading: false,
	error: null,
	developers: [],
	count: 0,
}

export const fetchAllDevelopers = createAsyncThunk(
	'developers/fetchAllDevelopers',
	async () => {
		const options = {
			method: 'GET',
			url: `https://api.rawg.io/api/developers?key=${API_KEY}`,
		}
		const response = await axios.request(options)

		return response.data
	}
)

export const paginateOverPages = createAsyncThunk(
	'developers/paginateOverPages',
	async (page) => {
		const options = {
			method: 'GET',
			url: `https://api.rawg.io/api/developers?key=${API_KEY}&page=${page}`,
		}
		const response = await axios.request(options)

		return response.data
	}
)

const slice = createSlice({
	name: 'developers',
	initialState,
	reducers: {
		// CLEAR STATE
		clearDevelopersState: (state) => {
			return initialState
		},
	},
	extraReducers: {
		// ALL DEVELOPERS
		[fetchAllDevelopers.pending]: (state) => {
			state.isLoading = true
		},
		[fetchAllDevelopers.fulfilled]: (state, { payload }) => {
			state.developers = payload.results
			state.count = 120
			state.isLoading = false
		},
		[fetchAllDevelopers.rejected]: (state, action) => {
			state.isLoading = false
			state.error = action.error
		},

		// PAGINATION
		[paginateOverPages.pending]: (state) => {
			state.isLoading = true
		},
		[paginateOverPages.fulfilled]: (state, { payload }) => {
			state.isLoading = false
			state.developers = payload.results
		},
		[paginateOverPages.rejected]: (state, action) => {
			state.isLoading = false
		},
	},
})

// Reducer
export default slice.reducer

// actions
export const { clearDevelopersState } = slice.actions
