/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';
import styles from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => (
  <button className={styles.button} onClick={onClick}>
    Load more
  </button>
);

export default LoadMoreBtn;