import { combineReducers, configureStore } from '@reduxjs/toolkit'
import rocketReducer from './rockets/rocketSlice'

const rootReducer = combineReducers({
	rocketReducer,
})

export const store = configureStore({
	reducer: {
		rockets: rocketReducer,
	},
})

export type RootState = ReturnType<typeof rootReducer>
export default store
