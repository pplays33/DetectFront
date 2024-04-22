import React, { useState } from 'react';
import axios from "../axios";

import "./VideoUpload.css";


const VideoUpload = () => {
  const [file, setFile] = useState(null);
  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('video', file);
    try {
      const response = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Video uploaded:', response.data);
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };
  return (
    <form onSubmit={onSubmit} className="beautiful-form">
      <input type="file" accept="video/*" onChange={onFileChange} />
      <button type="submit" className="button button-shadow button-active">Загрузить</button>
    </form>
  );
};
export default VideoUpload;