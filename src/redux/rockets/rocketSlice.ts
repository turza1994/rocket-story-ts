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

		filterByLaunchDate: (state: any, { payload }: any) => {
			const filterString = parseInt(payload)
			const date = new Date().getUTCDate()
			// console.log(date.getTime())
			state.filteredRockets = state.rockets.filter((rocket: any) => {
				return (date - rocket.launch_date_unix) / (1000 * 60 * 60 * 24) <= 900
			})
		},

		filterByLaunchStatus: (state: any, { payload }: any) => {
			if (payload === '0') {
				state.filteredRockets = state.rockets.filter(
					(rocket: any) => !rocket.launch_success
				)
			}
			if (payload === '1') {
				state.filteredRockets = state.rockets.filter(
					(rocket: any) => rocket.launch_success
				)
			}
		},

		filterByUpcomingStatus: (state: any, { payload }: any) => {
			if (!payload) {
				state.filteredRockets = state.rockets.filter(
					(rocket: any) => !rocket.launch_success
				)
			}
			if (payload) {
				state.filteredRockets = state.rockets.filter(
					(rocket: any) => rocket.launch_success
				)
			}
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

export const {
	searchByName,
	filterByLaunchDate,
	filterByLaunchStatus,
	filterByUpcomingStatus,
} = rocketSlice.actions
export const getAllRockets = (state: any) => state.rockets.rockets
export default rocketSlice.reducer
