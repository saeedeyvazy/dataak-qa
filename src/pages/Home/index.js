import React from 'react'
import { Header, QuestionList } from '@components'
import { PROFILE_IMAGE } from '@image-components'

function Home() {
	return (
		<>
			<div className='space-y-6'>
				<Header
					title='لیست سوالات'
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

export default Home
