import { ASKER_PROFILE } from '@image-components'
import { useAxios } from '@hooks/useAxios'
import { QuestionCard } from '@components'

export const QuestionList = () => {
	const questionList = useAxios({ url: '' })

	return (
		<div className='space-y-4'>
			{questionList.map((question) => {
				const { topic, date, time, text } = question
				return (
					<QuestionCard
						title={topic}
						time={time}
						date={date}
						questionText={text}
						userImage={ASKER_PROFILE}
					/>
				)
			})}
		</div>
	)
}
