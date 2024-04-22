import React from 'react';
import VideoUpload from './components/VideoUpload';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Form-For-Video_upload">
        <h1>Загрузка Видео:</h1>
        <VideoUpload className="Form-For-Video_upload"/>
      </div>
    </div>
  );
}
export default App;
