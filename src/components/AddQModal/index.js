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
			<ModalContent />
		</Modal>
	)
}
