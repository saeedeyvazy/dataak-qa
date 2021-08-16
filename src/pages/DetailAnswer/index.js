import React from 'react'
import { Header, QuestionCard, AnswerList, PrimaryButton } from '@components'
import { PROFILE_IMAGE, ASKER_PROFILE } from '@image-components'
import { selectedQuestion } from '@features/counter/counterSlice'
import { useSelector } from 'react-redux'

function DetailAnswer() {
	const selectQuestion = useSelector(selectedQuestion)
	return (
		<>
			<div className='mb-5 space-y-6'>
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
				<div className='container flex flex-col space-y-6'>
					<span className='text-2xl font-extrabold'>پاسخ خود را ثبت کنید</span>
					<span className='text-xs font-bold text-qa-dark-black'>
						پاسخ خود را بنویسید
					</span>
					<textarea
						placeholder='متن پاسخ...'
						className='h-40 p-3 border rounded-md outline-none'
					/>
					<p className='text-xs text-dislike'>محل قرارگیری متن راهنمای خطا</p>
				</div>
				<div className='container'>
					<PrimaryButton text='ارسال پاسخ' />
				</div>
			</div>
		</>
	)
}

export default DetailAnswer
