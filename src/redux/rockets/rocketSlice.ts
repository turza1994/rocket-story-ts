import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchAsyncRockets: any = createAsyncThunk(
	'rockets/fetchAsyncRockets',
	async () => {
		const { data } = await axios.get('https://api.spacexdata.com/v3/launches')
		return data
	}
)

const initialState = {
	rockets: [],
	filteredRockets: [],
	loading: false,
}

const rocketSlice = createSlice({
	name: 'rockets',
	initialState,
	reducers: {
		searchByName: (state: any, { payload }: any) => {
			const searchString = payload
			state.filteredRockets = state.rockets.filter((rocket: any) =>
				rocket.rocket.rocket_name.toLowerCase().includes(searchString.toLowerCase())
			)
		},
	},
	extraReducers: {
		[fetchAsyncRockets.pending]: (state: any) => {
			console.log('Pending')
			return { ...state, loading: true }
		},
		[fetchAsyncRockets.fulfilled]: (state: any, { payload }: any) => {
			console.log('Fetched Successfully!')
			return {
				...state,
				loading: false,
				rockets: payload,
				filteredRockets: payload,
			}
		},
		[fetchAsyncRockets.rejected]: () => {
			console.log('Rejected!')
		},
	},
})

export const { searchByName } = rocketSlice.actions
export const getAllRockets = (state: any) => state.rockets.rockets
export default rocketSlice.reducer
