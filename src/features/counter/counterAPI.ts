import axios from 'axios'

export async function fetchCount(amount = 1) {
	const response = await axios.get(
		'https://my-json-server.typicode.com/saeedeyvazy/dataak-qa/questionList'
	)

	return response
}
