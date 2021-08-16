import { QuestionHeader } from './QuestionHeader'
import { SecondaryButton } from '../SecondaryButton'

export const QuestionCard: React.FC<Props> = ({
	questionText,
	time,
	date,
	userImage,
	title,
}) => {
	return (
		<div className='px-4 bg-white rounded-md shadow-md '>
			<QuestionHeader
				time={time}
				date={date}
				answerNum={18}
				userImage={userImage}
				title={title}
			/>
			<div className='flex flex-col p-4 text-sm text-right bg-qa-card text-qa-black'>
				<p>{questionText}</p>
				<div className='flex'>
					<SecondaryButton text='مشاهده جزییات' />
				</div>
			</div>
		</div>
	)
}

interface Props {
	questionText: string
	time: string
	date: string
	userImage: string
	title: string
}
