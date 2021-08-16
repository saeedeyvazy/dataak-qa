import React from 'react'
import { PrimaryButton } from '../PrimaryButton'
import BOTTOM_ARROW from '@images/polygon.png'

export const Header: React.FC<Props> = ({ title, userImage, username }) => {
	return (
		<div className='bg-white'>
			<div className='container flex items-center justify-between h-16'>
				<h3 className='text-2xl font-extrabold text-qa-black'>{title}</h3>
				<div className='flex items-center gap-4'>
					<PrimaryButton text='سوال جدید' />
					<img src={userImage} alt='profile' />
					<h3 className='text-sm font-bold text-qa-dark-black'>{username}</h3>
					<img src={BOTTOM_ARROW} alt='arrow' />
				</div>
			</div>
		</div>
	)
}

interface Props {
	title: string
	username: string
	userImage: string
}
