/* eslint-disable react/prop-types */
import Modal from 'react-modal';

const ImageModal = ({ isOpen, onClose, image }) => (
  <Modal isOpen={isOpen} onRequestClose={onClose}>
    <div>
      <img src={image.urls.regular} alt={image.alt_description} />
      <p>Photographer: {image.user.name}</p>
      <p>Likes: {image.likes}</p>
      <button onClick={onClose}>Close</button>
    </div>
  </Modal>
);

export default ImageModal;