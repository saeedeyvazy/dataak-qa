import { useEffect, useState } from 'react'
import axios from 'axios'

export function useAxios({ url }) {
	const [questionList, setQuestionList] = useState([])
	useEffect(() => {
		async function test() {
			const response = await axios.get(
				'https://my-json-server.typicode.com/saeedeyvazy/dataak-qa/questionList'
			)
			setQuestionList(response.data)
		}
		test()
	}, [url])
	return questionList
}
