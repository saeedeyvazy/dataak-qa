import React from 'react'
import { LIKE } from '@image-components'

export function LikeButton({ onClick }) {
	return (
		<button
			onClick={onClick}
			className='flex gap-4 px-4 py-2 text-xs font-bold border border-gray-300 rounded-md outline-none items- center text-like h-9'
		>
			<img src={LIKE} alt='' />
			<p>پاسخ خوب بود</p>
		</button>
	)
}
