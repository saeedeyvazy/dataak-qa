import React from 'react'
import { DISLIKE2 } from '@image-components'

export function DisLikeButton() {
	return (
		<button className='flex gap-4 px-4 py-2 text-xs font-bold border border-gray-300 rounded-md outline-none items- center text-dislike h-9'>
			<img src={DISLIKE2} alt='' />
			<p>پاسخ خوب نبود</p>
		</button>
	)
}
