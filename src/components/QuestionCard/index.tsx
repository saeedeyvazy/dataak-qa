import { QuestionHeader } from './QuestionHeader'

export const QuestionCard: React.FC<Props> = ({ questionText, time, date }) => {
	return (
		<div className='px-4 bg-white rounded-md shadow-md'>
			<QuestionHeader time={time} date={date} answerNum={18} title='' />
			<div className='flex flex-col px-4 text-sm text-right h-14 bg-qa-card text-qa-black'>
				<p>{questionText}</p>
			</div>
		</div>
	)
}

interface Props {
	questionText: string
	time: string
	date: string
}
