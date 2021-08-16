import { AnswerHeader } from './AnswerHeader'
import { SecondaryButton } from '../SecondaryButton'
import { selectQuestion } from '../../features/counter/counterSlice'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

export const AnswerCard: React.FC<Props> = ({
	questionText,
	time,
	date,
	userImage,
	title,
	id,
	likes,
	dislike,
}) => {
	const dispatch = useDispatch()
	const history = useHistory()
	function navigateToDetail() {
		dispatch(selectQuestion(id))
		history.push('/detail-answer')
	}
	return (
		<div className='px-4 bg-white rounded-md shadow-md '>
			<AnswerHeader
				time={time}
				date={date}
				likes={likes}
				dislikes={dislike}
				userImage={userImage}
				title={title}
			/>
			<div className='flex flex-col p-4 text-sm text-right bg-qa-card text-qa-black'>
				<p>{questionText}</p>
				<div className='flex justify-end'>
					<SecondaryButton onClick={navigateToDetail} text='مشاهده جزییات' />
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
	id: number
	likes: number
	dislike: number
}
