/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';

const ImageModal = ({ isOpen, onClose, image }) => {
  if (!image) {
    return null; 
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className={styles.modal}>
      <div className={styles.modalContent}>
        <img src={image.urls.regular} alt={image.alt_description} />
        <p>{image.description || 'No description available.'}</p>
        <p>Author: {image.user.name}</p>
        <p>Likes: {image.likes}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default ImageModal;                                         