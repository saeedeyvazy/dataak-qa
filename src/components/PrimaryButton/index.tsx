export const PrimaryButton: React.FC<Props> = ({ text }) => {
	return (
		<button className='rounded-md bg-primary text-white text-xs px-4 py-2'>
			{text}
		</button>
	)
}

interface Props {
	text: string
}
