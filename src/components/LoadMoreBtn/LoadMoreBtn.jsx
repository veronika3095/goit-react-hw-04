/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { forwardRef } from 'react';
import styles from './LoadMoreBtn.module.css';

const LoadMoreBtn = forwardRef(({ onClick, loading }, ref) => (
  <button className={styles.button} onClick={onClick} ref={ref} disabled={loading}>
    {loading ? 'Loading...' : 'Load more'}
  </button>
));

export default LoadMoreBtn;