import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../../app/store'
import { fetchCount } from './counterAPI'

interface Question {
	id: number
	topic: string
	text: string
	time: string
	date: string
	answerList: Array<Answer>
}
interface Answer {
	id: number
	like: number | 0
	dislike: number
	topic: string
	text: string
	time: string
	date: string
}
export interface CounterState {
	value: number
	maxId: number
	selectedQ: Object
	status: 'idle' | 'loading' | 'failed'
	questionList: Array<Question>
}
export interface LikeObject {
	answerId: number
	questionId: number
}
const initialState: CounterState = {
	value: 0,
	status: 'idle',
	questionList: [],
	maxId: 1,
	selectedQ: {},
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
	'counter/fetchCount',
	async (amount: number) => {
		const response = await fetchCount(amount)
		// The value we return becomes the `fulfilled` action payload
		return response.data
	}
)

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		selectQuestion: (state, action: PayloadAction<number>) => {
			state.value -= 1
			state.selectedQ = state.questionList[action.payload - 1]
		},
		addQuestion: (state, action: PayloadAction<Question>) => {
			state.questionList.push({ ...action.payload })
			state.maxId += 1
		},
		likeAnswer: (state, action: PayloadAction<LikeObject>) => {},
	},

	extraReducers: (builder) => {
		builder
			.addCase(incrementAsync.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(incrementAsync.fulfilled, (state, action) => {
				state.status = 'idle'
				state.questionList = action.payload
				state.maxId = action.payload.length
			})
	},
})

export const { selectQuestion, addQuestion } = counterSlice.actions

export const selectQuestionList = (state: RootState) =>
	state.counter.questionList

export const selectedQuestion = (state: RootState) => state.counter.selectedQ

export const questionMaxId = (state: RootState) => state.counter.maxId
export default counterSlice.reducer
