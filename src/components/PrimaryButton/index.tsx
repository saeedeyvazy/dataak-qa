export const PrimaryButton: React.FC<Props> = ({ text, onClick }) => {
	return (
		<button
			onClick={onClick}
			className='px-4 py-2 text-xs font-bold text-white rounded-md h-9 bg-primary'
		>
			{text}
		</button>
	)
}

interface Props {
	text: string
	onClick: () => void
}
