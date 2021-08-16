export const PrimaryButton: React.FC<Props> = ({ text }) => {
	return (
		<button className='px-4 py-2 text-xs text-white rounded-md h-9 bg-primary'>
			{text}
		</button>
	)
}

interface Props {
	text: string
}
