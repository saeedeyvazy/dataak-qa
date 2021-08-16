import React from 'react'
import { Header } from '@components'
import { PROFILE_IMAGE } from '@image-components'
function Home() {
	return (
		<>
			<Header
				title='لیست سوالات'
				username='مرضیه ابراهیمی'
				userImage={PROFILE_IMAGE}
			/>
		</>
	)
}

export default Home
