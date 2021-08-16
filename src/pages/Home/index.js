import React from 'react'
import { Header, QuestionCard } from '@components'
import { PROFILE_IMAGE, ASKER_PROFILE } from '@image-components'

function Home() {
	return (
		<div className='space-y-6'>
			<Header
				title='لیست سوالات'
				username='مرضیه ابراهیمی'
				userImage={PROFILE_IMAGE}
			/>
			<div className='container'>
				<QuestionCard
					title='مشکل احراز هویت در ری اکت'
					time='۱۶:۴۸'
					date='۱۴۰۰/۰۲/۱۹'
					questionText='سلام'
					userImage={ASKER_PROFILE}
				/>
			</div>
		</div>
	)
}

export default Home
