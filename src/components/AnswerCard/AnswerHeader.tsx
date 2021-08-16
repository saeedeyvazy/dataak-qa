import LIKE from '@images/happy.svg'
import DISLIKE from '@images/sad.svg'

export const AnswerHeader: React.FC<Props> = ({
	time,
	date,
	likes,
	dislikes,
	title,
	userImage,
}) => {
	return (
		<div className='flex items-center justify-between h-12 px-2 py-1 shadow-md'>
			<div className='flex items-center gap-3'>
				<img className='object-cover' src={userImage} alt='asker-profile' />
				<h3 className='text-base font-bold text-qa-black'>{title}</h3>
			</div>
			<div className='flex items-center gap-8'>
				<div className='px-2 text-xs border-l border-gray-900 border-opacity-10'>
					<span className='text-qa-gray'>ساعت : </span>
					<span className='font-bold '>{time}</span>
				</div>
				<div className='text-xs'>
					<span className='text-qa-gray'>تاریخ : </span>
					<span className='font-bold'>{date}</span>
				</div>
				<div className='flex items-center gap-8'>
					<div className='flex items-center gap-2'>
						<img src={LIKE} alt='' />
						<span>{likes}</span>
					</div>
					<div className='flex items-center gap-2'>
						<img src={DISLIKE} alt='' />
						<span>{dislikes}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

interface Props {
	time: string
	date: string
	likes: number
	dislikes: number
	title: string
	userImage: string
}
