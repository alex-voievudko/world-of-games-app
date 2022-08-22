import { configureStore } from '@reduxjs/toolkit'
// slices
import gamesSlice from './slices/games'
import developersSlice from './slices/developers'

export const store = configureStore({
	reducer: {
		games: gamesSlice,
		developers: developersSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
			immutableCheck: false,
		}),
})
