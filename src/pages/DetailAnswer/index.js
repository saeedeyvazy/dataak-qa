import React from 'react'
import { Header, QuestionCard } from '@components'
import { PROFILE_IMAGE, ASKER_PROFILE } from '@image-components'
import { selectedQuestion } from '@features/counter/counterSlice'
import { useSelector } from 'react-redux'
import { AnswerList } from '../../components'

function DetailAnswer() {
	const selectQuestion = useSelector(selectedQuestion)
	return (
		<>
			<div className='space-y-6'>
				<Header
					title='جزییات سوال'
					username='مرضیه ابراهیمی'
					userImage={PROFILE_IMAGE}
				/>
				<div className='container space-y-8'>
					<QuestionCard
						questionText={selectQuestion.text}
						time={selectQuestion.time}
						date={selectQuestion.date}
						userImage={ASKER_PROFILE}
						title={selectQuestion.topic}
						id={selectQuestion.id}
					/>
					<span className='text-2xl font-extrabold'>پاسخ ها</span>
					<AnswerList answerList={selectQuestion.answerList} />
				</div>
			</div>
		</>
	)
}

export default DetailAnswer
