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
}

const rocketSlice = createSlice({
	name: 'rockets',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchAsyncRockets.pending]: () => {
			console.log('Pending')
		},
		[fetchAsyncRockets.fulfilled]: (state: any, { payload }: any) => {
			console.log('Fetched Successfully!')
			return { ...state, rockets: payload }
		},
		[fetchAsyncRockets.rejected]: () => {
			console.log('Rejected!')
		},
	},
})

export const getAllRockets = (state: any) => state.rockets.rockets
export default rocketSlice.reducer
