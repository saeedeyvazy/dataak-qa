import React from 'react'
import { SecondaryButton, PrimaryButton } from '@components'

function ModalContent() {
	return (
		<div className='container flex flex-col items-start w-full gap-2 mt-10 bg-gray-100'>
			<p className='text-xs font-bold text-qa-dark-black'>موضوع</p>
			<input
				type='text'
				className='w-full px-4 py-2 text-sm border border-gray-300 rounded-md outline-none text-qa-black h-11'
			/>
			<p className='text-xs font-bold text-qa-dark-black'> متن سوال</p>
			<textarea className='w-full h-40 px-4 py-2 text-sm border border-gray-300 outline-none text-qa-black' />
			<div className='flex items-center justify-end w-full gap-6 mt-4'>
				<SecondaryButton text='انصراف' />
				<PrimaryButton text='اایجاد سوال' />
			</div>
		</div>
	)
}

export default ModalContent
