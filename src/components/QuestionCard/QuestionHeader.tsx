import COMMENT from '@images/comment.svg'

export const QuestionHeader: React.FC<Props> = ({
	time,
	date,
	answerNum,
	title,
	userImage,
}) => {
	return (
		<div className='flex items-center justify-between h-12 px-2 py-1 shadow-md'>
			<div className='flex items-center gap-3'>
				<img className='object-cover' src={userImage} alt='asker-profile' />
				<h3 className='text-base font-bold text-qa-black'>{title}</h3>
			</div>
			<div className='flex items-center gap-2'>
				<div className='px-2 text-xs border-l border-gray-900 border-opacity-10'>
					<span className='text-qa-gray'>ساعت : </span>
					<span className='font-bold '>{time}</span>
				</div>
				<div className='text-xs'>
					<span className='text-qa-gray'>تاریخ : </span>
					<span className='font-bold'>{date}</span>
				</div>
				<div className='flex items-center gap-1'>
					<img src={COMMENT} alt='' />
					<span className='text-xs text-qa-gray'>{answerNum}</span>
				</div>
			</div>
		</div>
	)
}

interface Props {
	time: string
	date: string
	answerNum: number
	title: string
	userImage: string
}
