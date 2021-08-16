import React from 'react'
import { Header, QuestionList } from '@components'
import { PROFILE_IMAGE } from '@image-components'

function DetailAnswer() {
	return (
		<>
			<div className='space-y-6'>
				<Header
					title='جزییات سوال'
					username='مرضیه ابراهیمی'
					userImage={PROFILE_IMAGE}
				/>
				<div className='container'>
					<QuestionList />
				</div>
			</div>
		</>
	)
}

export default DetailAnswer
