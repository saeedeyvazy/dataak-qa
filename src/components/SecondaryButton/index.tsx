export const SecondaryButton: React.FC<Props> = ({ text, onClick }) => {
	return (
		<button
			onClick={onClick}
			className='px-4 py-2 text-xs font-bold border rounded-md outline-none border-primary h-9 text-primary'
		>
			{text}
		</button>
	)
}

interface Props {
	text: string
	onClick: () => void
}
