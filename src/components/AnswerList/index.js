import { ASKER_PROFILE } from '@image-components'
import { AnswerCard } from '@components'

export const AnswerList = ({ answerList }) => {
	return (
		<div className='space-y-4'>
			{answerList?.map((question) => {
				const { topic, date, time, text, id, like, dislike } = question
				return (
					<AnswerCard
						title={topic}
						time={time}
						id={id}
						date={date}
						likes={like}
						dislike={dislike}
						questionText={text}
						userImage={ASKER_PROFILE}
					/>
				)
			})}
		</div>
	)
}
