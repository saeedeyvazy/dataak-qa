import { PrimaryButton, SecondaryButton } from '@components'
import { questionMaxId } from '@features/counter/counterSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ModalContent({ closeModal }) {
	const [question, setQuestion] = React.useState({ topic: '', text: '' })
	const dispatch = useDispatch()
	const maxId = useSelector(questionMaxId)
	function handleChange({ target: { name, value } }) {
		setQuestion((question) => ({
			...question,
			time: '۲۲:۲۱',
			date: '۱۴۰۰/۰۵/۲۵',
			id: maxId + 1,
			[name]: value,
		}))
	}
	function addQuestion() {
		dispatch(addQuestion(question))
		closeModal()
	}
	return (
		<div className='p-5 bg-gray-100 mt-14'>
			<div className='container flex flex-col items-start w-full gap-2 '>
				<p className='text-xs font-bold text-qa-dark-black'>موضوع</p>
				<input
					value={question.topic}
					onChange={handleChange}
					name='topic'
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
					<PrimaryButton text='ایجاد سوال' onClick={addQuestion} />
				</div>
			</div>
		</div>
	)
}

export default ModalContent
