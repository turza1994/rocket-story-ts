import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchAsyncRockets: any = createAsyncThunk(
	'rockets/fetchAsyncRockets',
	async () => {
		const { data } = await axios.get('https://api.spacexdata.com/v3/launches')
		return data
	}
)

interface IState {
	rockets: Object[]
	filteredRockets: Object[]
	loading: boolean
}

const initialState: IState = {
	rockets: [],
	filteredRockets: [],
	loading: false,
}

const rocketSlice = createSlice({
	name: 'rockets',
	initialState,
	reducers: {
		searchByName: (state: IState, { payload }: PayloadAction<string>) => {
			const searchString = payload
			state.filteredRockets = state.rockets.filter((rocket: any) =>
				rocket.rocket.rocket_name.toLowerCase().includes(searchString.toLowerCase())
			)
		},

		filterByLaunchDate: (state: IState, { payload }: PayloadAction<string>) => {
			const filterValue: Number = parseInt(payload)
			// today date
			const dateObj = new Date()
			const month = dateObj.getUTCMonth() + 1
			const day = dateObj.getUTCDate()
			const year = dateObj.getUTCFullYear()

			const todayDate: any = `${year}/${month}/${day}`

			state.filteredRockets = state.filteredRockets.filter((rocket: any) => {
				const launchDateObj = new Date(rocket.launch_date_local)
				const launchMonth = launchDateObj.getUTCMonth() + 1
				const launchDay = launchDateObj.getUTCDate()
				const launchYear = launchDateObj.getUTCFullYear()

				const launchDate: any = `${launchYear}/${launchMonth}/${launchDay}`

				const diffTime = Math.abs(
					new Date(todayDate).valueOf() - new Date(launchDate).valueOf()
				)
				const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

				return diffDays <= filterValue
			})
		},

		filterByLaunchStatus: (state: IState, { payload }: PayloadAction<string>) => {
			if (payload === '0') {
				state.filteredRockets = state.filteredRockets.filter(
					(rocket: any) => !rocket.launch_success
				)
			}
			if (payload === '1') {
				state.filteredRockets = state.filteredRockets.filter(
					(rocket: any) => rocket.launch_success
				)
			}
		},

		filterByUpcomingStatus: (
			state: IState,
			{ payload }: PayloadAction<boolean>
		) => {
			if (!payload) {
				state.filteredRockets = state.rockets
			}
			if (payload) {
				state.filteredRockets = state.filteredRockets.filter(
					(rocket: any) => rocket.upcoming
				)
			}
		},

		resetFilter: (state: IState) => {
			state.filteredRockets = state.rockets
		},
	},
	extraReducers: {
		[fetchAsyncRockets.pending]: (state: IState) => {
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
	resetFilter,
} = rocketSlice.actions

export const getAllRockets = (state: any) => state.rockets.rockets
export default rocketSlice.reducer
