import React from 'react'
import { PrimaryButton } from '../PrimaryButton'
import { AddQModal } from '../AddQModal'
import BOTTOM_ARROW from '@images/polygon.png'
import { useState } from 'react'

export const Header: React.FC<Props> = ({ title, userImage, username }) => {
	const [showModal, setShowModal] = useState(false)
	return (
		<div className='bg-white'>
			<div className='container flex items-center justify-between h-16'>
				<h3 className='text-2xl font-extrabold text-qa-black'>{title}</h3>
				<div className='flex items-center gap-4'>
					<PrimaryButton text='سوال جدید' onClick={() => setShowModal(true)} />
					<img src={userImage} alt='profile' />
					<h3 className='text-sm font-bold text-qa-dark-black'>{username}</h3>
					<img src={BOTTOM_ARROW} alt='arrow' />
				</div>
			</div>
			<AddQModal showModal={showModal} closeModal={() => setShowModal(false)} />
		</div>
	)
}

interface Props {
	title: string
	username: string
	userImage: string
}
