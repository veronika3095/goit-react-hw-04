/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';  
import axios from 'axios';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageModal from './ImageModal/ImageModal';
import { toast, Toaster } from 'react-hot-toast';  

const App = () => {
  const [images, setImages] = useState([]);  
  const [loading, setLoading] = useState(false);  
  const [error, setError] = useState(null);  
  const [page, setPage] = useState(1);  
  const [query, setQuery] = useState('');  
  const [isModalOpen, setIsModalOpen] = useState(false);  
  const [selectedImage, setSelectedImage] = useState(null);  

  const accessKey = 'WvpUHSEntiSwNm8VKC7IfcLGbhcfRswNIFoshA4_5dc';  

 
  const fetchImages = async (searchQuery, pageNumber) => {
    setLoading(true);
    setError(null); 
    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query: searchQuery,
          page: pageNumber,
          per_page: 12,
          client_id: accessKey,  
        },
      });
      setImages((prevImages) => [...prevImages, ...response.data.results]);  
    } catch (error) {
      setError(error.message);  
      toast.error('Failed to fetch images!');  
    } finally {
      setLoading(false);  
    }
  };

  
  useEffect(() => {
    if (query) {
      fetchImages(query, page);  
    }
  }, [query, page]);  

  
  const handleSearchSubmit = (searchQuery) => {
    setImages([]);  
    setQuery(searchQuery);  
    setPage(1);  
  };

  
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);  
  };

  
  const openModal = (image) => {
    setSelectedImage(image);  
    setIsModalOpen(true);  
  };

  
  const closeModal = () => {
    setIsModalOpen(false);  
    setSelectedImage(null);  
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      
      {loading && <Loader />}  {}
      {error && <ErrorMessage />}  {}
      
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal} />  
      )}

      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />  
      )}

      <ImageModal isOpen={isModalOpen} onClose={closeModal} image={selectedImage} />  {}
      
      <Toaster />  {}
    </div>
  );
};

export default App;