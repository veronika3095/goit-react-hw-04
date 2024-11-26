/* eslint-disable react/prop-types */
import ImageCard from '../ImageCard/ImageCard';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, isLoading, error }) => {
  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage />;
  
  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;