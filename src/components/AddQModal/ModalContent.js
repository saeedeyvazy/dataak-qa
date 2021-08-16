import React from 'react'
import { SecondaryButton, PrimaryButton } from '@components'

function ModalContent({ closeModal }) {
	const [question, setQuestion] = React.useState({ title: '', text: '' })
	function handleChange({ target: { name, value } }) {
		setQuestion((question) => ({ ...question, [name]: value }))
	}
	return (
		<div className='p-5 bg-gray-100 mt-14'>
			<div className='container flex flex-col items-start w-full gap-2 '>
				<p className='text-xs font-bold text-qa-dark-black'>موضوع</p>
				<input
					value={question.title}
					onChange={handleChange}
					name='title'
					type='text'
					className='w-full px-4 py-2 text-sm border border-gray-300 rounded-md outline-none text-qa-black h-11'
				/>
				<p className='text-xs font-bold text-qa-dark-black'> متن سوال</p>
				<textarea
					name='text'
					value={question.text}
					onChange={handleChange}
					className='w-full h-40 px-4 py-2 text-sm border border-gray-300 outline-none text-qa-black'
				/>
				<div className='flex items-center justify-end w-full gap-6 mt-4'>
					<SecondaryButton text='انصراف' onClick={closeModal} />
					<PrimaryButton text='ایجاد سوال' />
				</div>
			</div>
		</div>
	)
}

export default ModalContent
