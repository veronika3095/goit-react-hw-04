/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './ImageCard.module.css';

const ImageCard = ({ image }) => {
  return (
    <div className={styles.card}>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageCard;