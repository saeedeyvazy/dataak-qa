import React from 'react'

export const Header: React.FC<Props> = ({ title }) => {
	return (
		<div className='container flex items-center justify-between h-16'>
			<div className='flex items-center'></div>
			<h3 className='text-qa-black text-2xl font-extrabold'>لیست سوالات</h3>
		</div>
	)
}

interface Props {
	title: string
}
