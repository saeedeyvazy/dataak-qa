import React from 'react'
import { PrimaryButton } from '../PrimaryButton'
import PROFILE_IMAGE from '@images/ellipse.png'
import BOTTOM_ARROW from '@images/polygon.png'

export const Header: React.FC<Props> = ({ title }) => {
	return (
		<div className='container flex items-center  justify-between h-16'>
			<div className='flex items-center gap-4'>
				<img src={BOTTOM_ARROW} alt='arrow' />
				<h3 className='text-qa-dark-black font-bold text-sm'>مرضیه ابراهیمی</h3>
				<img src={PROFILE_IMAGE} alt='profile' />
				<PrimaryButton text='سوال جدید' />
			</div>
			<h3 className='text-qa-black text-2xl font-extrabold'>لیست سوالات</h3>
		</div>
	)
}

interface Props {
	title: string
}
