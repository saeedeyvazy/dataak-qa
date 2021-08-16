import { AnswerHeader } from './AnswerHeader'
import { LikeButton } from '../LikeButton'
import { DisLikeButton } from '../DisLikeButton'
import { useState } from 'react'
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
	const [newLike, setnewLike] = useState(likes)
	function likeAnswer() {
		setnewLike((newLike) => newLike + 1)
	}
	return (
		<div className='px-4 bg-white rounded-md shadow-md '>
			<AnswerHeader
				time={time}
				date={date}
				likes={newLike}
				dislikes={dislike}
				userImage={userImage}
				title={title}
			/>
			<div className='flex flex-col p-4 text-sm text-right bg-qa-card text-qa-black'>
				<p>{questionText}</p>
				<div className='flex justify-end gap-2'>
					<LikeButton onClick={likeAnswer} />
					<DisLikeButton />
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
