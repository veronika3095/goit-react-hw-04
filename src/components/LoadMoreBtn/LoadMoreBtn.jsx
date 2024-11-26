/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { forwardRef } from 'react';
import styles from './LoadMoreBtn.module.css';

const LoadMoreBtn = forwardRef(({ onClick }, ref) => (
  <button className={styles.button} onClick={onClick} ref={ref}>
    Load more
  </button>
));

export default LoadMoreBtn;