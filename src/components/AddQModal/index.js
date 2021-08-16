import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import './modal.css'
import ModalContent from './ModalContent'

export function AddQModal({ showModal, closeModal }) {
	return (
		<Modal
			// closeIcon={
			// 	<FontAwesomeIcon icon={faCheckCircle} color='white' size='2x' />
			// }
			open={showModal}
			onClose={closeModal}
			center
			classNames={{ modal: 'customModal', overlay: 'customOverlay' }}
		>
			<p className='absolute text-base font-extrabold text-qa-black top-3 right-4'>
				ایجاد سوال جدید
			</p>
			<ModalContent />
		</Modal>
	)
}
