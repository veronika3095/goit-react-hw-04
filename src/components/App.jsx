// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageModal from './ImageModal/ImageModal';
import { ToastContainer } from 'react-hot-toast';

const API_KEY = '1DTJTJIrwa7gWzp8MBeO0faABo9OZt09nfAhFdwE3Z8'; 
const BASE_URL = 'https://api.unsplash.com/photos/';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  const fetchImages = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(BASE_URL, {
        params: { query, client_id: API_KEY },
      });
      setImages(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    setQuery(query);
    fetchImages(query);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery images={images} isLoading={loading} error={error} />
      {images.length > 0 && <LoadMoreBtn onClick={() => fetchImages(query)} />}
      {modalImage && (
        <ImageModal
          isOpen={!!modalImage}
          onClose={() => setModalImage(null)}
          image={modalImage}
        />
      )}
      <ToastContainer />
    </div>
  );
};

export default App;