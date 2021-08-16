export const SecondaryButton: React.FC<Props> = ({ text }) => {
	return (
		<button className='px-4 py-2 text-xs font-bold border rounded-md border-primary h-9 text-primary'>
			{text}
		</button>
	)
}

interface Props {
	text: string
}
