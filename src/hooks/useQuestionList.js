import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	incrementAsync,
	selectQuestionList,
} from '@features/counter/counterSlice'

export function useQuestionList() {
	const dispatch = useDispatch()
	const questionList = useSelector(selectQuestionList)
	useEffect(() => {
		dispatch(incrementAsync())
	}, [dispatch])
	return questionList
}
